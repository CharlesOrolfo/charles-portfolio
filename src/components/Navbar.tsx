import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/site';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-[#1F2937] hover:text-primary'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFF]/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        {/* Brand */}
        <Link 
          to="/" 
          onClick={closeMenu}
          className="text-lg sm:text-xl font-bold tracking-tight text-[#111827] hover:opacity-90 transition-opacity"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          <NavLink to="/projects" className={navLinkClass}>
            Work
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/resume" className={navLinkClass}>
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-sm transition-all duration-200"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMenu}
            className="p-2 text-[#111827] focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-b border-blue-100 bg-[#F8FAFF] px-6 pt-2 pb-6 space-y-4 shadow-lg animate-in fade-in duration-150">
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-base font-medium ${isActive ? 'text-primary font-bold' : 'text-[#111827]'}`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-base font-medium ${isActive ? 'text-primary font-bold' : 'text-[#111827]'}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            onClick={closeMenu}
            className={({ isActive }) =>
              `block py-2 text-base font-medium ${isActive ? 'text-primary font-bold' : 'text-[#111827]'}`
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block text-center py-2.5 px-4 rounded-full text-sm font-semibold text-white bg-primary hover:bg-primary-hover"
          >
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
};