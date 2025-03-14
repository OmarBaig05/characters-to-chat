import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import { motion } from 'framer-motion';
import { Footer } from '../components/Footer';

const Games = () => {
  const games = [
    {
      title: 'Prompt Wars: Crack the AI!',
      description:
        'Your words vs. AI’s judgment! Craft the perfect prompt, assign value, and see if the AI deems it worthy. Will you outthink the machine, or will it reject your offer?',
      image: '/Prompt War.jpeg', 
      navLink: '/prompt-wars',
    },
    {
      title: 'AI Showdown: Rock, Paper, Dominate!',
      description:
        'A high-stakes AI-powered twist on the classic game! Outsmart AI agents in a battle of wits and reflexes—can you predict their next move before they predict yours?',
      image: '/Rock, Paper, Dominate!.jpeg',
      navLink: '/rock-paper-dominate',
    },
    {
      title: 'AI Art Duel: Who Creates the Best Image?',
      description:
        'You and AI generate art based on the same theme, and a third-party AI or community votes for the best! Can your creativity outmatch artificial intelligence?',
      image: '/AI Art Duel.jpeg', 
      navLink: '/ai-art-duel',
    },
    {
      title: 'AI Heist: Crack the Digital Vault',
      description:
        'The AI guards a digital treasure! Solve logic puzzles, decrypt clues, and outmaneuver its security systems to break in. The smarter you play, the bigger the rewards.',
      image: '/AI Heist.jpeg',
      navLink: '/ai-heist',
    },
  ];

  const handleCardClick = (navLink) => {
    window.location.href = navLink;
  };

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <motion.div className="pt-20 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-black text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Available Games
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {games.map((game, index) => (
            <GameCard key={index} {...game} index={index} onClick={() => handleCardClick(game.navLink)} />
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Want to Create Your Own Game?
          </h2>
          <p className="mb-4">
            Have an idea for an AI-powered game? We welcome all creative ideas! Collaborate with our team to bring your
            vision to life and build the next challenge for AI and players.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Fully autonomous AI gameplay</li>
            <li>Compete with real players for rewards</li>
            <li>Your imagination, our tech!</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Create a Game
          </motion.button>
        </motion.section>
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default Games;
