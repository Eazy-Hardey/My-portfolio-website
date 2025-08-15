import React, { useState } from 'react';
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
import type { PortfolioData } from './types';

const App: React.FC = () => {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(PORTFOLIO_DATA);

  const handleProfileImageChange = (newImageUrl: string) => {
    setPortfolioData(prevData => ({
      ...prevData,
      profileImageUrl: newImageUrl,
    }));
  };

  return (
    <div className="bg-[#0a0a0f] text-slate-300">
      <Header />
      <main>
        <Hero data={portfolioData} onProfileImageChange={handleProfileImageChange} />
        <About data={portfolioData} />
        <Experience data={portfolioData} />
        <Education data={portfolioData} />
        <Projects data={portfolioData} />
        <AICoverLetter data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData}/>
      <ScrollToTopButton />
    </div>
  );
};

export default App;