import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Droplets, MapPin, GanttChart, Cloud } from 'lucide-react';
import Card from '../components/ui/Card';
import StatItem from '../components/ui/Stats';
import TaskItem from '../components/tasks/TaskItem';
import WeatherCard from '../components/weather/WeatherCard';
import AIAssistant from '../components/ai/AIAssistant';
import InsightCard from '../components/ai/InsightCard';
import SustainabilityScore from '../components/sustainability/SustainabilityScore';
import ResourceMonitor from '../components/sustainability/ResourceMonitor';
import { dashboardStats, taskData, weatherData } from '../utils/mockData';

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="min-h-screen bg-dark text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold">Tableau de bord durable</h1>
          <p className="text-gray-400 mt-2">
            Surveillez et optimisez vos pratiques agricoles durablement 🌱
          </p>
        </motion.div>

        {/* Stats principales */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <StatItem 
              label="Total Fermes" 
              value={dashboardStats.farms} 
              icon={<MapPin size={20} />} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatItem 
              label="Surface cultivée" 
              value={dashboardStats.totalArea} 
              icon={<GanttChart size={20} />} 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatItem 
              label="Cultures actives" 
              value={dashboardStats.activeCrops} 
              icon={<Droplets size={20} />} 
              trend="up" 
              trendValue="+1 cette semaine" 
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatItem 
              label="Tâches en attente" 
              value={dashboardStats.pendingTasks} 
              icon={<AlertCircle size={20} />} 
            />
          </motion.div>
        </motion.div>

        {/* Score + IA Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          <div className="lg:col-span-2">
            <SustainabilityScore />
          </div>
          <div>
            <AIAssistant />
          </div>
        </div>

        {/* Monitoring Ressources */}
        <div className="mb-16">
          <ResourceMonitor />
        </div>

        {/* Insights + Météo + Tâches */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">

            {/* Sustainability Insights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Insights IA Durables</h2>
              <div className="space-y-4">
                <InsightCard
                  type="recommendation"
                  title="Contrôle biologique des parasites"
                  description="La population de prédateurs naturels augmente. Réduisez les pesticides de 30%."
                  priority="high"
                  action="Voir le plan de lutte"
                />
                <InsightCard
                  type="alert"
                  title="Économie d'eau"
                  description="Les capteurs de sol détectent un potentiel de réduction d'irrigation au nord."
                  priority="medium"
                  action="Ajuster l'irrigation"
                />
                <InsightCard
                  type="analysis"
                  title="Biodiversité accrue"
                  description="L’activité des pollinisateurs natifs a augmenté de 45%."
                  priority="low"
                  action="Voir le rapport biodiversité"
                />
              </div>
            </div>

            {/* Prévisions météo */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Prévisions météo</h2>
                <div className="flex items-center text-primary text-sm">
                  <Cloud size={16} className="mr-2" />
                  {dashboardStats.weatherAlert}
                </div>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                {weatherData.map((data, index) => (
                  <WeatherCard 
                    key={index}
                    day={data.day}
                    temperature={data.temperature}
                    rainfall={data.rainfall}
                  />
                ))}
              </div>
            </Card>

          </div>

          {/* Tâches durables */}
          <div>
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Tâches durables</h2>
                <button className="text-primary text-sm hover:underline">Tout voir</button>
              </div>
              <div className="space-y-4">
                {taskData.filter(task => task.status === 'pending').slice(0, 3).map((task) => (
                  <TaskItem 
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    priority={task.priority}
                    status={task.status}
                  />
                ))}
              </div>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dashboard;
