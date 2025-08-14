import React from 'react';
import type { PortfolioData } from '../types';
import Section from './Section';

interface ExperienceProps {
  data: PortfolioData;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  const { experience } = data;

  return (
    <Section id="experience" title="Professional Experience" className="bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-slate-800">
          {experience.map((job, index) => (
            <div key={index} className="mb-10 ml-6 md:ml-10 group">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-800 rounded-full -left-3.5 ring-8 ring-slate-900 border-2 border-violet-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_#8b5cf6]">
                <svg className="w-3 h-3 text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
              </span>
              <div className="p-6 bg-slate-900/70 rounded-lg shadow-lg border border-slate-800 transition-all duration-300 group-hover:border-violet-500/30 group-hover:shadow-violet-900/20 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                  <span className="text-sm font-medium text-violet-400 mt-1 md:mt-0">{job.period}</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-300 mb-2">{job.company}</h4>
                <p className="text-slate-400 mb-4 leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="bg-slate-800 text-violet-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;