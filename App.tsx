import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import AICoverLetter from './components/AICoverLetter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-[#0a0a0f] text-slate-300">
      <Header />
      <main>
        <Hero data={PORTFOLIO_DATA} />
        <About data={PORTFOLIO_DATA} />
        <Experience data={PORTFOLIO_DATA} />
        <Education data={PORTFOLIO_DATA} />
        <Projects data={PORTFOLIO_DATA} />
        <AICoverLetter data={PORTFOLIO_DATA} />
        <Contact data={PORTFOLIO_DATA} />
      </main>
      <Footer data={PORTFOLIO_DATA}/>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
