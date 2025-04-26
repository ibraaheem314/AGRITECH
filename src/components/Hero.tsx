import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0F0E]">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div> {/* Ici couleur */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Transformez votre agriculture avec
          <span className="text-primary"> l’IA</span> {/* Vert primaire ici */}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Boostez vos rendements, optimisez vos ressources et respectez la nature grâce à l'intelligence artificielle.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            variant="outline"
            size="lg"
            icon={<Sparkles className="w-5 h-5" />}
          >
            Essayez gratuitement
          </Button>
          <Button
            variant="outline"
            size="lg"
          >
            Voir la démo
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
