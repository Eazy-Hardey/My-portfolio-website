import React from 'react';
import type { PortfolioData } from '../types';
import Section from './Section';
import { GraduationCapIcon } from './Icons';

interface EducationProps {
  data: PortfolioData;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  const { education } = data;

  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-slate-800">
          {education.map((item, index) => (
            <div key={index} className="mb-10 ml-6 md:ml-10 group">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-slate-800 rounded-full -left-3.5 ring-8 ring-slate-900 border-2 border-violet-500 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_#8b5cf6]">
                <GraduationCapIcon className="w-4 h-4 text-violet-400" />
              </span>
              <div className="p-6 bg-slate-900/70 rounded-lg shadow-lg border border-slate-800 transition-all duration-300 group-hover:border-violet-500/30 group-hover:shadow-violet-900/20 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{item.degree}</h3>
                  <span className="text-sm font-medium text-violet-400 mt-1 md:mt-0">{item.period}</span>
                </div>
                <h4 className="text-lg font-semibold text-slate-300 mb-2">{item.institution}</h4>
                <p className="text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;