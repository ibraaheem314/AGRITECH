import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Droplets, Wind, Thermometer, Clock, CloudRain, Sun } from 'lucide-react';
import Card from '../components/ui/Card';
import { weatherData } from '../utils/mockData';
import Badge from '../components/ui/Badge';

const Weather = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Weather Forecast</h1>
        <p className="text-gray-600">Monitor weather conditions for your farms</p>
      </div>

      <Card className="mb-6 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <div className="mr-4">
                <Cloud size={64} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">28°C</h2>
                <p className="text-lg">Partly Cloudy</p>
                <p className="text-sm opacity-75">Green Valley Farm, Main Field</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge variant="warning" className="bg-white/20 text-white">Weather Alert</Badge>
              <p className="mt-1 text-sm">Heavy rain expected in 3 days</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="flex items-center">
              <Droplets size={20} className="mr-2" />
              <div>
                <p className="text-sm opacity-75">Humidity</p>
                <p className="font-semibold">65%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind size={20} className="mr-2" />
              <div>
                <p className="text-sm opacity-75">Wind</p>
                <p className="font-semibold">12 km/h</p>
              </div>
            </div>
            <div className="flex items-center">
              <Thermometer size={20} className="mr-2" />
              <div>
                <p className="text-sm opacity-75">Feels Like</p>
                <p className="font-semibold">30°C</p>
              </div>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              <div>
                <p className="text-sm opacity-75">Updated</p>
                <p className="font-semibold">10 min ago</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">7-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {weatherData.map((data, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-4 text-center">
                <p className="font-medium text-gray-700">{data.day}</p>
                <div className="my-3 flex justify-center">
                  {data.rainfall > 20 ? (
                    <CloudRain size={36} className="text-blue-500" />
                  ) : data.rainfall > 0 ? (
                    <Cloud size={36} className="text-gray-500" />
                  ) : (
                    <Sun size={36} className="text-amber-500" />
                  )}
                </div>
                <p className="text-2xl font-bold text-gray-800">{data.temperature}°</p>
                <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
                  <Droplets size={14} className="mr-1" />
                  {data.rainfall} mm
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Precipitation</h3>
          <div className="h-64 flex items-end">
            {weatherData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="flex-1 w-full px-1 flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.rainfall / 30) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="w-full bg-blue-400 rounded-t"
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{data.day}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Temperature</h3>
          <div className="h-64 flex items-end">
            {weatherData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="flex-1 w-full px-1 flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(data.temperature / 35) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="w-full bg-amber-400 rounded-t"
                  ></motion.div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{data.day}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Weather;