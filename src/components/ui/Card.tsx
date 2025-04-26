import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <motion.div 
      className={`bg-[#151818] border border-neutral-800 rounded-xl text-white transition-shadow ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4, boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.2)' }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
