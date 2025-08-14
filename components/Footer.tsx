import React from 'react';
import type { PortfolioData } from '../types';

interface FooterProps {
    data: PortfolioData;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent border-t border-white/5">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p>&copy; {currentYear} {data.name}. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React, TypeScript, Tailwind CSS, and the Gemini API.</p>
      </div>
    </footer>
  );
};

export default Footer;