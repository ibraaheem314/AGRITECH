import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '10 000+', label: 'Utilisateurs actifs' },
  { value: '500 000+', label: 'Hectares monitorés' },
  { value: '120 000+', label: 'Interactions IA' },
  { value: '95%', label: 'Précision météo' },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Notre impact en chiffres
        </motion.h2>

        {/* Cartes statistiques animées */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center bg-[#151818] border border-neutral-800 hover:border-primary rounded-xl p-6"
            >
              <div className="text-primary text-4xl font-extrabold mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
