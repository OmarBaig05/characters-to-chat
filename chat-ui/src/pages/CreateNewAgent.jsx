import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { saveAs } from 'file-saver';
import Header from '../components/chat/Header';

const CreateNewAgent = () => {
  const { toast } = useToast();
  const [agentData, setAgentData] = useState({
    name: '',
    clients: ['discord'],
    modelProvider: '',
    apiKey: '',
    bio: '',
    lore: '',
    knowledge: '',
    messageExamples: '',
    postExamples: '',
    topics: '',
    style: '',
    all: '',
    chat: '',
    post: '',
    adjectives: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgentData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const blob = new Blob([JSON.stringify(agentData, null, 2)], { type: 'application/json' });
    saveAs(blob, `${agentData.name}_agent.json`);
    toast({
      title: "Agent Saved",
      description: "Your new agent has been saved successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-x-hidden">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <section className="text-center mb-16">
          <div className="inline-block bg-santa-600/20 text-santa-100 px-3 py-1 rounded-full text-sm font-medium mb-4 animate-pulse">
            Create a New Agent
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">New Agent Configuration</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Fill in the details below to create a new agent.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400">Name of Agent</label>
              <input
                type="text"
                name="name"
                value={agentData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Clients</label>
              <input
                type="text"
                name="clients"
                value={agentData.clients}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
                disabled
              />
            </div>
            <div>
              <label className="block text-gray-400">Model Provider</label>
              <select
                name="modelProvider"
                value={agentData.modelProvider}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              >
                <option value="">Select Provider</option>
                <option value="openAI">OpenAI</option>
                <option value="Claude">Claude</option>
                <option value="Groq">Groq</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400">API Key</label>
              <input
                type="text"
                name="apiKey"
                value={agentData.apiKey}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Bio</label>
              <textarea
                name="bio"
                value={agentData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Lore</label>
              <textarea
                name="lore"
                value={agentData.lore}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Knowledge</label>
              <textarea
                name="knowledge"
                value={agentData.knowledge}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400">Message Examples</label>
              <textarea
                name="messageExamples"
                value={agentData.messageExamples}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Post Examples</label>
              <textarea
                name="postExamples"
                value={agentData.postExamples}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Topics</label>
              <textarea
                name="topics"
                value={agentData.topics}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Style</label>
              <textarea
                name="style"
                value={agentData.style}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">All</label>
              <textarea
                name="all"
                value={agentData.all}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Chat</label>
              <textarea
                name="chat"
                value={agentData.chat}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Post</label>
              <textarea
                name="post"
                value={agentData.post}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-400">Adjectives</label>
              <textarea
                name="adjectives"
                value={agentData.adjectives}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            className="px-8 py-4 bg-santa-600 hover:bg-santa-700 rounded-lg text-xl font-medium transition-all hover:shadow-lg hover:shadow-santa-600/20 transform hover:-translate-y-1"
          >
            Save Agent
          </button>
        </div>
      </main>

      <footer className="bg-black/50 border-t border-gray-800 mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dark Santa's Judgment. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CreateNewAgent;