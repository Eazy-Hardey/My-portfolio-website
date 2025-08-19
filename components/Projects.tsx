import React, { useState, useMemo } from 'react';
import type { PortfolioData } from '../types';
import Section from './Section';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  data: PortfolioData;
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const { projects } = data;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(p => p.tags.forEach(tag => tags.add(tag)));
    return ['All', ...Array.from(tags).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }
    return projects.filter(p => p.tags.includes(activeFilter));
  }, [projects, activeFilter]);

  return (
    <Section id="projects" title="My Work" className="bg-black/20">
      <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-violet-500 ${activeFilter === tag
              ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;