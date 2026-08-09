import React, { useState } from 'react';
import type { PortfolioData, Certification } from '../types';
import Section from './Section';

interface AboutProps {
  data: PortfolioData;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const { bio, skills, certifications, otherSkills, badges, name } = data;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

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
          <h3 className="text-2xl font-bold text-white text-center mb-8">Certifications & Fellowships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-300 max-w-4xl mx-auto">
            {certifications.map((cert) => {
              const hasExtra = Boolean(cert.certId || cert.details || cert.venue);
              return (
                <div 
                  key={cert.name} 
                  onClick={() => hasExtra && setSelectedCert(cert)}
                  className={`relative p-5 rounded-lg border transition-all duration-300 overflow-hidden group ${
                    cert.isFeatured 
                      ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-800/80 border-violet-500/50 shadow-lg shadow-violet-900/20 hover:border-violet-400 hover:shadow-violet-700/30' 
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:-translate-y-0.5'
                  } ${hasExtra ? 'cursor-pointer' : ''}`}
                >
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {cert.isFeatured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-violet-500/20 text-violet-300 border border-violet-500/40 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3 text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      Featured Fellowship
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg flex-shrink-0 mt-0.5 ${cert.isFeatured ? 'bg-violet-950/80 text-violet-400 border border-violet-500/30' : 'bg-slate-800 text-slate-400'}`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                    </div>

                    <div className="flex-1 pr-16 md:pr-0">
                      <h4 className="font-semibold text-slate-100 text-base leading-snug group-hover:text-violet-300 transition-colors">{cert.name}</h4>
                      <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                      
                      {cert.certId && (
                        <p className="text-xs text-violet-400 font-mono mt-2 flex items-center gap-1.5">
                          <span>ID: {cert.certId}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400">{cert.date}</span>
                        </p>
                      )}

                      {hasExtra && (
                        <span className="inline-flex items-center gap-1 text-xs text-violet-400 font-medium mt-3 group-hover:translate-x-1 transition-transform">
                          View Certificate Details &rarr;
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {badges && badges.length > 0 && (
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Digital Badges</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {badges.map((badge) => {
                const BadgeCard = (
                    <div className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-20 h-20 bg-slate-900/70 border border-slate-800 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_#8b5cf666] group-hover:border-violet-500/50">
                            {React.cloneElement(badge.icon, { className: 'h-10 w-10 text-slate-400 group-hover:text-white transition-colors duration-300' })}
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-semibold text-slate-100 text-sm">{badge.name}</h4>
                            <p className="text-slate-400 text-xs">{badge.issuer}</p>
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

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setSelectedCert(null)}>
          <div 
            className="bg-slate-900 border border-violet-500/40 rounded-2xl max-w-2xl w-full p-6 md:p-8 relative shadow-2xl shadow-violet-950/50 text-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-violet-500 to-fuchsia-500"></div>

            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800/60 hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold rounded-full flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                Verified Official Credential
              </span>
              {selectedCert.certId && (
                <span className="text-xs font-mono text-violet-400 bg-violet-950/60 px-2.5 py-1 rounded-md border border-violet-800/40">
                  ID: {selectedCert.certId}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 leading-snug">{selectedCert.name}</h3>
            <p className="text-violet-300 font-medium text-base mb-6">{selectedCert.issuer}</p>

            <div className="space-y-4 text-sm bg-slate-950/60 p-5 rounded-xl border border-slate-800/80 mb-6">
              <div>
                <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">Awarded To</span>
                <span className="text-white font-semibold text-lg">{name}</span>
              </div>

              {selectedCert.date && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-800">
                  <div>
                    <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">Date / Period</span>
                    <span className="text-slate-200">{selectedCert.date}</span>
                  </div>
                  {selectedCert.venue && (
                    <div>
                      <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">Venue</span>
                      <span className="text-slate-200">{selectedCert.venue}</span>
                    </div>
                  )}
                </div>
              )}

              {selectedCert.details && (
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-1">Scope & Objective</span>
                  <p className="text-slate-300 leading-relaxed">{selectedCert.details}</p>
                </div>
              )}

              {selectedCert.signatories && selectedCert.signatories.length > 0 && (
                <div className="pt-3 border-t border-slate-800">
                  <span className="text-slate-400 block text-xs font-semibold uppercase tracking-wider mb-2">Authorized Signatories</span>
                  <ul className="space-y-1.5">
                    {selectedCert.signatories.map((sig, idx) => (
                      <li key={idx} className="text-slate-300 text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-violet-400 rounded-full flex-shrink-0"></span>
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default About;