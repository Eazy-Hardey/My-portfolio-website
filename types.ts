import type { ReactElement, SVGProps } from 'react';

export interface Skill {
  name: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Badge {
  name: string;
  issuer: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  url?: string;
}

export interface PortfolioData {
  name:string;
  title: string;
  bio: string;
  profileImageUrl: string;
  skills: Skill[];
  otherSkills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  badges?: Badge[];
  contact: {
    email: string;
    secondaryEmail: string;
    linkedin: string;
    github: string;
    instagram?: string;
    x?: string;
    phone?: string;
    whatsapp?: string;
  };
}
