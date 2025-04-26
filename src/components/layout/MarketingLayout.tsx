import { Outlet } from 'react-router-dom';
import NavbarMarketing from './NavbarMarketing';

const MarketingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F0E] text-white">
      <NavbarMarketing />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MarketingLayout;
