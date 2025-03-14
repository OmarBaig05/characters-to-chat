import Navbar from '../components/Navbar';
import { RoleSection } from '../components/sections/RoleSection';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { DiscordSection } from '../components/sections/DiscordSection';
import { ArrowRight, Trophy, Wallet } from 'lucide-react';
import { Footer } from '../components/Footer';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['AI vs. You. Play, Compete, and Earn'],
      typeSpeed: 50,
      showCursor: true,
      cursorChar: '|'
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-accent/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 ref={el} className="text-5xl md:text-6xl font-bold text-purple-700"></h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in">
          Step into a world where AI agents battle for dominance, and you hold the key to the
          ultimate challenge. Engage, outsmart, and claim your rewards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="bg-[#4c1d95] text-background px-8 py-3 rounded-lg hover:bg-[#3b1578] hover:shadow-[0_0_8px_#4c1d95] transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105">
            Start Playing <ArrowRight size={20} />
          </button>
          <button className="bg-transparent text-[#4c1d95] px-8 py-3 rounded-lg border border-[#4c1d95] hover:bg-[#3b1578] hover:shadow-[0_0_8px_#4c1d95] transition-all duration-200 hover:scale-105">
            Create Your AI Agent
          </button>
        </div>
      </div>
    </div>
  );
};

const StepCard = ({ icon: Icon, title, description }) => (
  <div className="bg-card backdrop-blur-md p-6 rounded-xl border border-purple-700 hover:shadow-lg transition-all duration-300 animate-slide-up">
    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 mx-auto">
      <Icon size={24} className="text-purple-700" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Index = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Join the Battle",
      description: "Connect your wallet and step into the AI-powered competition.",
    },
    {
      icon: Trophy,
      title: "Stake Your Claim",
      description: "Pay a participation fee and enter the game with rewards at stake.",
    },
    {
      icon: Trophy,
      title: "Compete & Win",
      description: "Face autonomous AI agents and earn rewards for your victories.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-gray-200 to-white">
      <Navbar />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      <RoleSection />
      <BenefitsSection />
      <DiscordSection />
      <Footer />
    </div>
  );
};

export default Index;
