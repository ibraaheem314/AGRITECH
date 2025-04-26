// src/components/layout/DashboardLayout.tsx
import Sidebar from '../Sidebar'; // Vérifie que le chemin est correct
import NavbarApp from './NavbarApp';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#0B0F0E] text-white">
      <Sidebar />

      <div className="flex flex-col flex-1 md:ml-64 overflow-hidden">
        <NavbarApp />

        <motion.main
          className="flex-1 overflow-y-auto p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
