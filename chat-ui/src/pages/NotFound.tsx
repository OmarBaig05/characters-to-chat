import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';

const UnderDevelopment = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "User accessed a page that is still under development:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-6xl font-bold mb-4 text-purple-700">🚧</h1>
        <h1 className="text-4xl font-bold mb-4 text-purple-700">Under Development</h1>
        <p className="text-xl text-gray-600 mb-4">This page is currently under development. Please check back later.</p>
        <a href="/" className="inline-block bg-[#4c1d95] text-background px-8 py-3 rounded-lg hover:bg-[#3b1578] hover:shadow-[0_0_8px_#4c1d95] transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105">
          Return to Home
        </a>
      </motion.div>
    </div>
  );
};

export default UnderDevelopment;