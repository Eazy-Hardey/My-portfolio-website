import React from 'react';
import type { PortfolioData } from '../types';
import Section from './Section';

interface AboutProps {
  data: PortfolioData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const { bio, skills, certifications, otherSkills, badges } = data;

  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto text-center text-slate-300 text-lg leading-relaxed mb-16">
        <p>{bio}</p>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Core Skills</h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 text-center group w-24">
              <div className="w-20 h-20 bg-slate-900/70 border border-slate-800 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_#8b5cf666] group-hover:border-violet-500/50">
                 {React.cloneElement(skill.icon, { className: 'h-10 w-10 text-slate-400 group-hover:text-white transition-colors duration-300' })}
              </div>
              <span className="text-slate-400 font-medium group-hover:text-white transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {otherSkills && otherSkills.length > 0 && (
         <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Professional & Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map((skill) => (
              <span key={skill} className="bg-slate-800/60 border border-slate-700 text-violet-300 text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:bg-slate-700/80 hover:border-violet-500/50 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {certifications && certifications.length > 0 && (
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Certifications & Training</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative p-4 bg-slate-900/70 rounded-lg border border-slate-800 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-violet-800/10 hover:-translate-y-1 group">
                 <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="flex items-start">
                    <svg className="w-6 h-6 mr-4 text-violet-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <div>
                      <h4 className="font-semibold text-slate-100">{cert.name}</h4>
                      <p className="text-slate-400">{cert.issuer}</p>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {badges && badges.length > 0 && (
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Digital Badges</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {badges.map((badge) => {
                const BadgeCard = (
                    <div className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-24 h-24 bg-slate-900/70 border border-slate-800 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_#8b5cf666] group-hover:border-violet-500/50">
                            {React.cloneElement(badge.icon, { className: 'h-12 w-12 text-slate-400 group-hover:text-white transition-colors duration-300' })}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-slate-100">{badge.name}</h4>
                            <p className="text-slate-400 text-sm">{badge.issuer}</p>
                        </div>
                    </div>
                );

                if (badge.url) {
                    return (
                        <a key={badge.name} href={badge.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${badge.name} badge`}>
                            {BadgeCard}
                        </a>
                    );
                }
                return <div key={badge.name}>{BadgeCard}</div>;
            })}
          </div>
        </div>
      )}
    </Section>
  );
};

export default About;