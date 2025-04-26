import React from 'react';
import { motion } from 'framer-motion';
import { Brain, AlertTriangle, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';

interface InsightCardProps {
  type: 'recommendation' | 'alert' | 'analysis';
  title: string;
  description: string;
  action?: string;
  priority?: 'high' | 'medium' | 'low';
}

const InsightCard: React.FC<InsightCardProps> = ({
  type,
  title,
  description,
  action,
  priority = 'medium'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'recommendation':
        return <Brain className="w-6 h-6 text-blue-400" />;
      case 'alert':
        return <AlertTriangle className="w-6 h-6 text-red-400" />;
      case 'analysis':
        return <CheckCircle className="w-6 h-6 text-green-400" />;
    }
  };

  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 text-red-400';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-400';
      case 'low':
        return 'bg-green-500/10 text-green-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-4 bg-[#101311] border border-neutral-800">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-neutral-800 rounded-lg">{getIcon()}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              {priority && (
                <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor()}`}>
                  {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
            {action && (
              <button className="mt-3 text-primary hover:text-green-400 text-sm font-medium">
                {action}
              </button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default InsightCard;
