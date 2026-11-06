import React from 'react';
import { siteConfig } from '../data/site';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 text-center text-xs text-[#9CA3AF]">
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Designed & Built with care.</p>
      </div>
    </footer>
  );
};