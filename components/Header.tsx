import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a href={href} onClick={onClick} className="relative group block md:inline-block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white transition-colors duration-300">
    <span>{children}</span>
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:w-full transition-all duration-300"></span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-black/30 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 text-white font-bold text-xl tracking-tight">
              Ezekiel A. Odewande
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#education">Education</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#ai-assistant">AI Assistant</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-slate-800/50 inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-violet-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#experience" onClick={closeMenu}>Experience</NavLink>
            <NavLink href="#education" onClick={closeMenu}>Education</NavLink>
            <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink href="#ai-assistant" onClick={closeMenu}>AI Assistant</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;