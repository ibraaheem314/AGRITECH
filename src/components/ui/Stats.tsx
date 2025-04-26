import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';

interface StatItemProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const StatItem: React.FC<StatItemProps> = ({ 
  label, 
  value, 
  icon,
  trend,
  trendValue
}) => {
  const trendColors = {
    up: 'text-green-500',
    down: 'text-red-500',
    neutral: 'text-gray-400'
  };

  return (
    <Card className="p-4 bg-[#151818] border border-neutral-800 rounded-xl text-white">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">{label}</span>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <div className="mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="text-2xl font-bold">{value}</div>
        </motion.div>
        {trend && trendValue && (
          <div className={`mt-1 text-sm ${trendColors[trend]}`}>
            {trend === 'up' && '↑ '}
            {trend === 'down' && '↓ '}
            {trendValue}
          </div>
        )}
      </div>
    </Card>
  );
};

export default StatItem;
