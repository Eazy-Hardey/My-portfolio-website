import React from 'react';
import type { Project } from '../types';
import { ExternalLinkIcon, GitHubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { title, description, tags, imageUrl, liveUrl, repoUrl } = project;

  return (
    <div 
      className="bg-slate-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-slate-800 group flex flex-col h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-600/20 hover:border-violet-500/30 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden bg-slate-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-100 mb-2 transition-colors duration-300 group-hover:text-violet-400">{title}</h3>
        <p className="text-slate-400 mb-4 flex-grow leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-slate-800 text-violet-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-slate-700">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4 border-t border-slate-800 flex justify-end items-center gap-4">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="GitHub Repository">
              <GitHubIcon className="h-6 w-6" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="Live Demo">
              <ExternalLinkIcon className="h-6 w-6" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;