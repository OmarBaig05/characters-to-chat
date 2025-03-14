import React, { useState, useEffect } from 'react';
import {
  Gift, Star, Award, RefreshCw, MessageSquare,
  BellRing, User, DollarSign
} from 'lucide-react';

import { getAllAgents, sendMessage } from '../lib/api';

// const BACKEND_ROUTE = 'api/routes/chat/'
const BACKEND_ROUTE = "http://localhost:8000/api/characters/chat";

// Components
import Header from '../components/chat/Header';
import PromptSubmission from '../components/chat/PromptSubmission';
import LiveFeed from '../components/chat/LiveFeed';
import Leaderboard from '../components/chat/Leaderboard';
import SantaProfile from '../components/chat/SantaProfile';
import { useToast } from "@/hooks/use-toast";
import {requestTransaction} from "@/lib/transactions";


const Index = () => {


  const { toast } = useToast();
  const [userBalance, setUserBalance] = useState(100);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [promptValue, setPromptValue] = useState(10);
  const [entryFee] = useState(5);
  const [promptText, setPromptText] = useState('');
  const [isChatMode, setIsChatMode] = useState(true);
  const [chatHistory, setChatHistory] = useState([]);
  const [pendingPrompts, setPendingPrompts] = useState([
    "Describe Santa's worst Christmas ever."
  ]);
  const [purchasedPrompts, setPurchasedPrompts] = useState([ // starter prompts so we can see how it looks
    { text: "Rewrite 'Jingle Bells' as a villain's theme song.", value: 100 },
    { text: "Santa, explain quantum physics in Christmas terms.", value: 50 }
  ]);
  const [santaReactions, setSantaReactions] = useState([ // starter reactions so we can see how it looks
    "Ho ho ho… that was clever, but not enough to pay for!",
    "Now that's a dark twist. Take my Flare!"
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { username: "@PromptMaster", earnings: 5000 },
    { username: "@MindTwister", earnings: 3500 },
    { username: "@AIChallenger", earnings: 2100 }
  ]);

  // Animation states
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Trigger welcome animation after a short delay
    setTimeout(() => setShowWelcome(true), 300);
  }, []);



  const addToChatHistory = (sender, text) => {
    setChatHistory(prev => [
      ...prev,
      {
        sender,
        text,
        timestamp: new Date().toISOString()
      }
    ]);
  };

  const handleChatSubmit = async() => {
    if (!promptText.trim()) return;

    setIsSubmitting(true);

    // Add user message to chat
    addToChatHistory('user', promptText);

    // Clear input
    const userPrompt = promptText;
    setPromptText('');

      try {
        // const response = await sendMessage(agentId, promptText);
        // const agentResponse = response.data[0]['text'];

        const response = await fetch(BACKEND_ROUTE, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            character: "Dark_Santa",
            message: promptText }),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const agentResponse = await response.json();
      // Show only the "response" text from the returned JSON
      simulateSantaResponse(agentResponse.response);
      console.log(agentResponse.response);

        setIsSubmitting(false);
      } catch (error) {
          console.log(error); 
      }
  };

  const simulateSantaResponse = (text) => {
    addToChatHistory('Dark_Santa', text);

    // Random chance to either buy the prompt or not
    if (Math.random() > 0.7) {
      const paymentAmount = Math.floor(Math.random() * 90) + 10; // Random 10-100

      setUserBalance(prev => prev + paymentAmount);

      toast({
        title: "Santa purchased your idea!",
        description: `You earned ${paymentAmount} Flare tokens.`,
      });

      // Add to purchased prompts
      const lastUserMessage = chatHistory.filter(msg => msg.sender === 'user').pop();
      if (lastUserMessage) {
        setPurchasedPrompts(prev => [{ text: lastUserMessage.text, value: paymentAmount }, ...prev]);
      }

      // Update leaderboard
      updateLeaderboard("@User", paymentAmount);
    }
  };

  const updateLeaderboard = (username, amount) => {
    // Check if user already exists in leaderboard
    const existingUser = leaderboard.find(user => user.username === username);

    if (existingUser) {
      // Update existing user
      setLeaderboard(prev =>
        prev.map(user =>
          user.username === username
            ? { ...user, earnings: user.earnings + amount }
            : user
        ).sort((a, b) => b.earnings - a.earnings)
      );
    } else {
      // Add new user
      setLeaderboard(prev =>
        [...prev, { username, earnings: amount }]
          .sort((a, b) => b.earnings - a.earnings)
      );
    }
  };

  const refreshFeed = () => {
    toast({
      title: "Feed refreshed",
      description: "The latest judgments have been loaded.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-x-hidden">
      <Header userBalance={userBalance} />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <section className={`text-center mb-16 transform transition-all duration-700 ease-out ${showWelcome ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-santa-600/20 text-santa-100 px-3 py-1 rounded-full text-sm font-medium mb-4 animate-pulse">
            Face the judgment
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Dark Santa's Judgment</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Submit your best prompt to the legendary Dark Santa—an AI agent with its own will!
            Will he find your creation worthy?
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Santa Profile */}
          <section className="lg:col-span-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <SantaProfile />
          </section>

          {/* Prompt Submission Form */}
          <section className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <PromptSubmission
              promptText={promptText}
              setPromptText={setPromptText}
              promptValue={promptValue}
              setPromptValue={setPromptValue}
              entryFee={entryFee}
              // onSubmit={handlePromptSubmit}
              isSubmitting={isSubmitting}
              userBalance={userBalance}
              chatHistory={chatHistory}
              onChatSubmit={handleChatSubmit}
              isChatMode={isChatMode}
              setChatMode={setIsChatMode}
            />
          </section>
        </div>

        {/* Live Feed Section */}
        <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold font-serif flex items-center">
              <MessageSquare className="mr-2 h-8 w-8 text-santa-500" />
              Live Feed: Prompts & Santa's Reactions
            </h2>
            <button
              onClick={refreshFeed}
              className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Feed
            </button>
          </div>
          <LiveFeed
            purchasedPrompts={purchasedPrompts}
            santaReactions={santaReactions}
            pendingPrompts={pendingPrompts}
          />
        </section>

        {/* Leaderboard Section */}
        <section className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold mb-6 font-serif flex items-center">
            <Award className="mr-2 h-8 w-8 text-yellow-500" />
            Leaderboard – Who's Earning the Most?
          </h2>
          <Leaderboard leaderboard={leaderboard} />
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center py-12 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl font-bold mb-4 font-serif">Want to Join the Action?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Dark Santa is always looking for more challengers. Submit now and see if your ideas make the cut!
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-santa-600 hover:bg-santa-700 rounded-lg text-xl font-medium transition-all hover:shadow-lg hover:shadow-santa-600/20 transform hover:-translate-y-1"
          >
            Submit a Prompt Now
          </button>
        </section>
      </main>

      <footer className="bg-black/50 border-t border-gray-800 mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dark Santa's Judgment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;