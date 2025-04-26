import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Sun, BarChart2 } from 'lucide-react';

const points = [
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Agriculture durable',
    description: 'Réduisez votre empreinte carbone grâce à des conseils écologiques et précis.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Sécurité et transparence',
    description: 'Vos données sont protégées et utilisées uniquement pour améliorer vos rendements.'
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Prévisions avancées',
    description: 'Anticipez les risques climatiques avec notre intelligence météo prédictive.'
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: 'Optimisation des ressources',
    description: 'Irrigation, fertilisation, traitements : chaque décision optimisée par l’IA.'
  }
];

const WhyAgriTech = () => {
  return (
    <section id="why" className="py-24 bg-[#0B0F0E] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Titre animé */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12"
        >
          Pourquoi choisir AgriTech ?
        </motion.h2>

        {/* Points animés */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#151818] border border-neutral-800 hover:border-primary rounded-xl p-6 text-left"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{point.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAgriTech;
