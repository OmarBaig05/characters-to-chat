import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const topGames = [
    { name: "Prompt Wars: Crack the AI!", participants: 150, totalPool: "10 ETH" },
    { name: "AI Showdown: Rock, Paper, Dominate!", participants: 120, totalPool: "8 ETH" },
    { name: "AI Art Duel: Who Creates the Best Image?", participants: 100, totalPool: "5 ETH" },
    { name: "AI Heist: Crack the Digital Vault", participants: 90, totalPool: "4 ETH" },
    { name: "AI Trivia Challenge", participants: 80, totalPool: "3 ETH" },
  ];

  const topPlayers = [
    { name: "Alice", earnings: "3 ETH" },
    { name: "Bob", earnings: "2.5 ETH" },
    { name: "Charlie", earnings: "2 ETH" },
    { name: "Dave", earnings: "1.5 ETH" },
    { name: "Eve", earnings: "1 ETH" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-purple-400 to-red-500 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Leaderboard
        </motion.h1>
        
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-white mb-8"
          >
            Top Games
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            {topGames.map((game, index) => (
              <motion.div 
                key={index} 
                className="relative backdrop-blur-md bg-white/30 rounded-xl overflow-hidden p-6 shadow-lg text-center"
                style={{
                  perspective: 1000,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <Trophy size={48} className="text-purple-700 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{game.name}</h3>
                <p className="text-gray-700">Participants: {game.participants}</p>
                <p className="text-gray-700">Total Pool: {game.totalPool}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-center text-white mb-8"
          >
            Top Players
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            {topPlayers.map((player, index) => (
              <motion.div 
                key={index} 
                className="relative backdrop-blur-md bg-white/30 rounded-xl overflow-hidden p-6 shadow-lg text-center"
                style={{
                  perspective: 1000,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <Users size={48} className="text-purple-700 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{player.name}</h3>
                <p className="text-gray-700">Earnings: {player.earnings}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;