import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const AgentCard = ({ title, description, image, navLink, index }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const navigate = useNavigate();
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      setMousePosition({ x, y });
    };
  
    const handleClick = () => {
      navigate(navLink);
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className="relative backdrop-blur-md bg-white/30 rounded-xl overflow-hidden cursor-pointer"
        style={{
          perspective: 1000,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
        }}
        whileHover={{
          backgroundColor: '#f0f0f0',
          transition: { duration: 0.3 },
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <motion.img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="p-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </motion.div>
      </motion.div>
    );
  };

export default AgentCard;