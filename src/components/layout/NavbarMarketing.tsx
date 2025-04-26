import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavbarMarketing = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F0E] shadow-md border-b border-[#0f1714] text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          <span className="text-primary">Agri</span>Tech
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#features" className="hover:text-primary transition">Solutions</a>
          <a href="#how-it-works" className="hover:text-primary transition">Comment ça marche</a>
          <a href ="#why" className="hover:text-primary transition">Pourquoi AgriTech</a>
          <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          <Link
            to="/dashboard"
            className="hover:text-primary transition border border-primary px-4 py-1.5 rounded-lg font-medium"
          >
            Mon compte
          </Link>
          <Link
            to="/contact"
            className="bg-primary text-black px-4 py-1.5 rounded-lg font-semibold hover:bg-green-400 transition ml-2"
          >
            Essayez gratuitement
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 bg-[#0B0F0E] border-t border-neutral-800 space-y-4 text-sm">
          <a href="#features" className="block hover:text-primary">Solutions</a>
          <a href="#how-it-works" className="block hover:text-primary">Comment ça marche</a>
          <a href ="#why" className="block hover:text-primary">Pourquoi AgriTech</a>
          <Link to="/contact" className="block hover:text-primary">Contact</Link>
          <Link
            to="/dashboard"
            className="block border border-primary text-center rounded-lg py-2 hover:bg-primary hover:text-black transition"
          >
            Mon compte
          </Link>
          <Link
            to="/contact"
            className="block text-center bg-primary text-black py-2 rounded-lg font-semibold hover:bg-green-400 transition"
          >
            Essayez gratuitement
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavbarMarketing;
