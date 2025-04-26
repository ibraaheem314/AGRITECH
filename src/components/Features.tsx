import { motion } from 'framer-motion';
import { Leaf, CloudSun, Bot, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: 'Assistant IA Agricole',
    description: 'Posez des questions et obtenez des réponses précises sur vos cultures, maladies ou actions à prendre.'
  },
  {
    icon: <CloudSun className="w-6 h-6" />,
    title: 'Météo Prédictive',
    description: 'Des prévisions locales intégrées à votre planification agricole pour éviter les mauvaises surprises.'
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Suivi de Durabilité',
    description: 'Analyse en continu de l’impact environnemental de vos pratiques, avec recommandations d’amélioration.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Données Sécurisées',
    description: 'Vos données sont chiffrées, anonymisées et stockées de façon responsable, en conformité totale RGPD.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Des outils puissants pour une agriculture intelligente
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Tout ce qu’il vous faut pour prendre les meilleures décisions, au bon moment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#151818] rounded-xl p-6 border border-neutral-800 hover:border-primary hover:shadow-lg transition"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
