import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void; isActive: boolean }> = ({ href, children, onClick, isActive }) => (
  <a href={href} onClick={onClick} className="relative group block md:inline-block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
    <span className={`${isActive ? 'text-white font-semibold' : 'text-slate-300'} group-hover:text-white`}>{children}</span>
    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#ai-assistant', label: 'AI Assistant' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 }
    );

    navLinks.forEach(link => {
      const element = document.querySelector(link.href);
      if (element) {
        observer.observe(element);
      }
    });
    
    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
            setActiveSection('');
        }
      },
      { threshold: 0.2 }
    );
    const heroElement = document.getElementById('hero');
    if (heroElement) heroObserver.observe(heroElement);


    return () => {
        navLinks.forEach(link => {
            const element = document.querySelector(link.href);
            if (element) {
                observer.unobserve(element);
            }
        });
        if (heroElement) heroObserver.unobserve(heroElement);
    };
  }, []);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-black/30 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex-shrink-0 text-white font-bold text-xl tracking-tight">
            Ezekiel A. Odewande
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} isActive={activeSection === link.href.substring(1)}>
                  {link.label}
                </NavLink>
              ))}
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
             {navLinks.map(link => (
                <NavLink key={link.href} href={link.href} isActive={activeSection === link.href.substring(1)} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;