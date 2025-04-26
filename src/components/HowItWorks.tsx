import React from 'react';
import { motion } from 'framer-motion';
import { SatelliteDish, Bot, ClipboardCheck } from 'lucide-react';

const steps = [
  {
    icon: <SatelliteDish className="w-6 h-6" />,
    title: 'Analyse de votre parcelle',
    description: 'Notre système collecte les données satellites et météo spécifiques à votre exploitation.'
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Traitement par IA',
    description: 'L’intelligence artificielle évalue vos cultures et identifie des opportunités d’optimisation.'
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Recommandations personnalisées',
    description: 'Vous recevez des actions concrètes à appliquer au bon moment : irrigation, semis, traitements.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-dark text-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Comment ça fonctionne ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            De la donnée à la décision, chaque étape vous rapproche de meilleurs rendements.
          </motion.p>
        </div>

        {/* Étapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-[#151818] rounded-xl p-6 border border-neutral-800 hover:border-primary transition">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>

              {/* Ligne de liaison */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
