import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';

const plans = [
  {
    name: 'Découverte',
    price: '29',
    frequency: '/mois',
    description: 'Pour les petites exploitations ou tests de la plateforme',
    features: [
      'Analyse météo locale',
      'Assistant IA pour 10 hectares',
      'Alertes maladies basiques',
      'Support email standard'
    ]
  },
  {
    name: 'Professionnel',
    price: '79',
    frequency: '/mois',
    description: 'Pour les exploitations en croissance',
    features: [
      'Analyse météo & sol avancée',
      'Assistant IA jusqu’à 100 hectares',
      'Alertes maladies + irrigation',
      'Priorité support technique',
      'Accès aux conseils agronomiques personnalisés'
    ],
    popular: true
  },
  {
    name: 'Sur-mesure',
    price: null,
    description: 'Pour les grandes exploitations, coopératives ou groupes',
    features: [
      'Nombre d’hectares illimité',
      'Intégrations satellites temps réel',
      'Rapports IA personnalisés',
      'Support dédié 24/7',
      'Optimisation multisites',
      'Accompagnement stratégique'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Tarification simple et adaptée
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            Choisissez la formule qui correspond à la taille et aux besoins de votre exploitation.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative rounded-xl p-8 border-2 ${
                plan.popular ? 'border-primary shadow-lg' : 'border-neutral-800'
              } bg-[#151818] hover:border-primary/80 transition`}
            >
              {/* Populaire badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              {/* Header */}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>

              <div className="mb-4">
                {plan.price ? (
                  <>
                    <span className="text-4xl font-bold">€{plan.price}</span>
                    <span className="text-gray-400 text-sm">{plan.frequency}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">Sur devis</span>
                )}
              </div>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.price ? 'Commencer' : 'Demander une démo'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
