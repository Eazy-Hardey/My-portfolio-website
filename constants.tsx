import React from 'react';
import type { PortfolioData, Education, Badge } from './types';
import { GitHubIcon, GoogleDeveloperIcon, FullStackIcon } from './components/Icons';
import { PROFILE_IMAGE_BASE64 } from './profileImage';

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path><path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path></svg>;
const JavaScriptIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 128 128" {...props}><rect x="0" y="0" width="128" height="128" fill="#f0db4f"></rect><path fill="#323330" d="M61.34 94.3h-9.83L41.34 76.53l-10.15 17.77H21.36l19.98-34.96L21.36 24.6h9.83l10.17 17.77L51.51 24.6h9.83L41.36 59.34l19.98 34.96zM95.68 93.37c-4.48 0-8.3-1.6-11.45-4.8s-4.72-7.23-4.72-12.08c0-4.85 1.58-8.83 4.72-11.93s7-4.65 11.45-4.65c4.85 0 8.63 1.63 11.35 4.9s4.08 7.35 4.08 12.18c0 4.9-1.4 8.95-4.2 12.15s-6.4 4.8-11.2 4.8zm0-4.35c2.5 0 4.58-1.03 6.23-3.1s2.48-4.7 2.48-7.9c0-3.25-.85-5.9-2.55-7.95s-3.78-3.08-6.15-3.08c-2.4 0-4.43 1-6.1 3s-2.5 4.58-2.5 7.7c0 3.2.83 5.8 2.5 7.8s3.7 3.03 6.1 3.03z"></path></svg>;
const NodeJSIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="#68A063" {...props}><path d="M12 .33a9.72 9.72 0 0 0-4.63 1.25L5.75 3.51a.63.63 0 0 0-.34.56v15.86a.63.63 0 0 0 .34.56l1.62 1.93a9.72 9.72 0 0 0 9.26 0l1.62-1.93a.63.63 0 0 0 .34-.56V4.07a.63.63 0 0 0-.34-.56L16.63 1.58A9.72 9.72 0 0 0 12 .33zm4.44 14.88l-1.88 1.09-3.75-6.49v5.4H9.19V8.32h1.62v5.4l3.75-6.49 1.88 1.09-2.81 4.87 2.81 4.87z"/></svg>;
const AWSIcon = (props: React.SVGProps<SVGSVGElement>) => <svg className="h-8 w-8" fill="#FF9900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12.316 11.065c-.196.387-.344.789-.438 1.191h.875c.094-.402.242-.804.438-1.191zm-2.227 4.543c.18.285.4.56.656.812l.313-.484c-.223-.23-.426-.48-.602-.75zm4.453 0c-.176.27-.38.52-.602.75l.313.484c.258-.252.477-.527.656-.812zm-3.153 1.899c.285.195.59.355.907.472l.187-.578a4.343 4.343 0 0 0-.773-.403zm1.812 0 .188.578c.316-.117.621-.277.906-.472l-.332-.505c-.23.152-.48.297-.73.403l-.031.002zM3.492 6.46C2.02 8.16 1.125 10.29 1.125 12.648c0 2.36.895 4.488 2.367 6.188L6.42 16.51c-1.11-1.355-1.782-3.086-1.782-4.86c0-1.773-.672-3.503 1.782-4.86zm17.016 0l2.929 2.326C21.98 8.16 22.875 10.29 22.875 12.648c0 2.36-.895 4.488-2.367 6.188L17.58 16.51c1.11-1.355 1.782-3.086 1.782-4.86c0-1.773-.672-3.503-1.782-4.86zM9.99 3.03l-1.93 1.348c.453.64.832 1.324 1.137 2.04h.003l.008.02c.305-.715.684-1.4 1.137-2.04L10.41 3.03a.5.5 0 0 0-.42 0zM12 21.969a.5.5 0 0 0 .422 0l1.93-1.347c-.453-.64-.832-1.324-1.137-2.04h-.01c-.305.716-.684-1.4-1.137 2.04z" /></svg>;
const SecurityIcon = (props: React.SVGProps<SVGSVGElement>) => <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 2.083 9-2.083c0-1.467-.223-2.894-.65-4.243z"></path></svg>;
const HumanCapitalIcon = (props: React.SVGProps<SVGSVGElement>) => <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.134-1.276-.38-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.134-1.276.38-1.857m0 0A2.25 2.25 0 0112 13.75a2.25 2.25 0 014.262 1.393M12 13.75a2.25 2.25 0 00-4.262 1.393m0 0A2.25 2.25 0 0112 13.75m-4.262 1.393a2.25 2.25 0 00-4.262 0M7 16.25v-1.5a2.25 2.25 0 014.5 0v1.5m0 0v-1.5a2.25 2.25 0 014.5 0v1.5m0 0a2.25 2.25 0 014.5 0v-1.5m0 0a2.25 2.25 0 014.5 0v1.5m-13.5-9A2.25 2.25 0 0112 5.5a2.25 2.25 0 014.262-1.393M12 5.5a2.25 2.25 0 00-4.262-1.393m0 0A2.25 2.25 0 0112 5.5m-4.262-1.393a2.25 2.25 0 00-4.262 0"></path></svg>;
const WordPressIcon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#21759B" {...props}><title>WordPress</title><path d="M11.64 6.275c-.27-.033-.507-.06-.717-.06-.413 0-.74.123-.976.368-.23.245-.348.56-.348.948 0 .42.14.77.42 1.04.28.27.63.408.977.408.313 0 .633-.092.96-.275l.136.78c-.412.183-.82.275-1.22.275-.717 0-1.28-.21-1.748-.627-.468-.418-.7-1.012-.7-1.782 0-.825.26-1.5.78-2.02.518-.52 1.2-.78 2.05-.78.297 0 .6.04.918.12zm-3.834 5.37c-.236-.245-.354-.56-.354-.948 0-.42.14-.77.42-.104.28-.27.63-.408.976-.408.314 0 .633-.092.96-.275l.136.78c-.412.183-.82.275-1.22.275-.717 0-1.28-.21-1.748-.627-.468-.418-.7-1.012-.7-1.782 0-.825.26-1.5.78-2.02.518-.52 1.2-.78 2.05-.78.297 0 .6.04.918.12l.218 1.255c-.27-.034-.507-.06-.717-.06zm3.93 2.14c.545-.52.817-1.2.817-2.03 0-1.02-.38-1.84-1.14-2.47-.76-.628-1.81-.945-3.15-.945h-2.5v10.15h2.5c1.37 0 2.44-.33 3.2-1 .76-.67 1.14-1.58 1.14-2.73 0-.6-.11-1.15-.34-1.64l-.76.9c.12.33.18.68.18 1.05 0 .8-.25 1.45-.74 1.93-.5.48-1.2.72-2.1.72h-.66v-2.82h.6c1.16 0 1.92.35 2.27 1.06zm5.28-3.04c0 1.3-.43 2.37-1.3 3.22-.86.85-1.94 1.28-3.24 1.28h-2.7V5.53h2.7c1.3 0 2.38.43 3.24 1.28.86.85 1.3 1.92 1.3 3.22zm-1.8 0c0-.9-.26-1.64-.78-2.2-.52-.56-1.2-.84-2.04-.84h-.88v6.08h.88c.84 0 1.52-.28 2.04-.84.52-.56.78-1.3.78-2.2zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3.83-2.61c0-1.73-1.04-3.1-3.11-3.1h-4.22V17.7h4.22c2.07 0 3.11-1.37 3.11-3.1v-2.4z"/></svg>;
const RubyOnRailsIcon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#CC0000" {...props}><title>Ruby on Rails</title><path d="M2.4 10.32l.84-.72 8.64-8.64 8.64 8.64.84.72-9.48 9.48zm1.08 1.2l-2.4 2.4.72.84 2.52-2.52-1.08-.96.24-.24zm-.36 3.96l-.72.72 2.4 2.4.72-.72zm15.72-3.96l.24.24-1.08.96 2.52 2.52.72-.84-2.4-2.4zM20.28 15.48l.72.72 2.4-2.4-.72-.72zm-2.04-9.84l.84-.72L12 1.8 4.92 8.88l.84.72L12 3.48zm-1.8 1.8l-5.4 5.4h10.8z"/></svg>;
const HerokuIcon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#430098" {...props}><title>Heroku</title><path d="m20.627 15.228-8.632 4.98-8.632-4.98v-9.96l8.632-4.98 8.632 4.98zM22.5 6.04l-10.5 6.06-10.5-6.06L12 .002l10.5 6.038zM1.5 17.96l10.5-6.06 10.5 6.06L12 23.998l-10.5-6.038z"/></svg>;
const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}><title>Vercel</title><path d="M12 1.5l12 21H0L12 1.5z"/></svg>;
const NetlifyIcon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00C7B7" {...props}><title>Netlify</title><path d="M12 0L1.706 5.868v12.264L12 24l10.294-5.868V5.868zM3.412 7.15l8.588-4.918 8.588 4.918v9.7l-8.588 4.918-8.588-4.918z"/></svg>;
const CIcon = (props: React.SVGProps<SVGSVGElement>) => <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#A8B9CC" {...props}><title>C</title><path d="M16.536 12.56a6.536 6.536 0 11-9.976-5.896 6.536 6.536 0 019.976 5.896zm-1.89-4.224a4.536 4.536 0 10-6.732 4.224 4.536 4.536 0 006.732-4.224z"/></svg>;

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Ezekiel Adebiyi Odewande",
  title: "Educator, Software engineer, Administrator, Human resource management, Technologist",
  bio: "I am a seasoned public administrator and educator with a strong background in software engineering, cybersecurity, and human resource management. I’ve served as a school principal, IT systems installer, and developer, blending administrative leadership with hands-on tech experience. My academic foundation in public administration is complemented by cutting-edge tech training and certifications in HR and security systems. I am passionate about using technology to address societal challenges, particularly in education, governance, and enterprise support.",
  profileImageUrl: PROFILE_IMAGE_BASE64,
  skills: [
    { name: "React", icon: <ReactIcon /> },
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Ruby on Rails", icon: <RubyOnRailsIcon /> },
    { name: "Node.js", icon: <NodeJSIcon /> },
    { name: "C", icon: <CIcon /> },
    { name: "WordPress", icon: <WordPressIcon /> },
    { name: "AWS", icon: <AWSIcon /> },
    { name: "Heroku", icon: <HerokuIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "Netlify", icon: <NetlifyIcon /> },
    { name: "Cybersecurity", icon: <SecurityIcon /> },
    { name: "Human Capital", icon: <HumanCapitalIcon /> },
  ],
  otherSkills: [
    "Public Speaking",
    "Leadership Development",
    "Consultancy Service",
    "Training and Development",
    "Policy Analysis",
    "Educator & Trainer",
    "Event Planning and Management",
    "Sound Management",
    "Jazz drummer and African drums percussionist"
  ],
  projects: [
    {
      title: "MyBaseCamp",
      description: "A project management tool mimicking Basecamp’s features. It includes user registration, session management, role permissions, project management, attachment management, and message management.",
      tags: ["Project Management", "Full-Stack", "Cloud"],
      imageUrl: "https://picsum.photos/seed/mybasecamp/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-Basecamp-app",
    },
    {
      title: "My Instagram",
      description: "A clone of Instagram, developed using ReactJS and AWS Amplify for backend services and database storage. The application includes features like user authentication, post interactions, and a responsive UI.",
      tags: ["React", "AWS Amplify", "Full-Stack", "Clone"],
      imageUrl: "https://picsum.photos/seed/myinstagram/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-Instagram",
    },
    {
      title: "My Yelp",
      description: "A ReactJS application deployed on AWS Amplify, utilizing GraphQL for API calls. This project demonstrates cloud deployment practices and GraphQL integration.",
      tags: ["React", "AWS Amplify", "GraphQL", "Cloud"],
      imageUrl: "https://picsum.photos/seed/myyelp/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-Yelp-app",
    },
    {
      title: "My Pokemon App",
      description: "A ReactJS-based multi-page application that lists Pokémon with lazy loading, displays detailed Pokémon information, includes a search feature, and handles errors gracefully.",
      tags: ["React", "API", "Frontend"],
      imageUrl: "https://picsum.photos/seed/mypokemon/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-pokemon-app",
    },
    {
      title: "My Dropbox",
      description: "A functional clone of Dropbox built with React, demonstrating file storage, retrieval, and management functionalities within a clean user interface.",
      tags: ["React", "File Management", "Clone", "Frontend"],
      imageUrl: "https://picsum.photos/seed/mydropbox/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-Dropbox",
    },
    {
      title: "My Users App",
      description: "A user management application featuring Create, Read, Update, and Delete (CRUD) operations, built to demonstrate core data handling concepts in React.",
      tags: ["React", "CRUD", "Frontend"],
      imageUrl: "https://picsum.photos/seed/myuserapp/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-Users-App",
    },
    {
      title: "My ReactJS Calculator",
      description: "A single-route application built with ReactJS that performs arithmetic operations. It includes components for each function and a sleek, user-friendly interface.",
      tags: ["React", "JavaScript", "UI/UX", "Frontend"],
      imageUrl: "https://picsum.photos/seed/mycalculator/600/400",
      repoUrl: "https://github.com/Eazy-Hardey/My-React-Calculator",
    },
  ],
  experience: [
    {
      role: "Administrator / School Principal",
      company: "Golden Mission Academy",
      period: "2019 to 2024",
      description: "Oversaw school administration, staff recruitment and training, staff supervision, student performance monitoring, and strategic school improvement planning.",
      technologies: ["Leadership", "Administration", "Education Management", "Curriculum Design"],
    },
    {
      role: "Sales Representative",
      company: "Genith Pharmaceutical Company",
      period: "Jan 2014 to May 2014",
      description: "Responsible for product sales, market expansion, customer engagement, and building strong client relationships through product education.",
      technologies: ["Sales", "Client Relations", "Communication"],
    },
  ],
  education: [
     {
      degree: "Postgraduate Diploma in Human Resource Management",
      institution: "ICSMP",
      period: "2024",
      description: "Completed a postgraduate diploma focusing on advanced human resource management principles, strategic talent acquisition, and employee relations.",
    },
    {
      degree: "Master of Public Administration (MPA)",
      institution: "Gombe State University",
      period: "2024",
      description: "Specialized in advanced public sector management, policy analysis, and organizational leadership.",
    },
    {
      degree: "Bachelor of Science in Public Administration",
      institution: "Gombe State University",
      period: "2018",
      description: "Gained a foundational understanding of administrative principles, public finance, and human resource management.",
    },
  ],
  certifications: [
    { name: "Youthrive Tech Product Management Graduate", issuer: "Youthrive (2025)" },
    { name: "Qwasar Full-Stack Developer Training Graduate", issuer: "Qwasar (2024)" },
    { name: "Professional Foundation", issuer: "ALX (2024)" },
    { name: "Cybersecurity", issuer: "3MTT (2024)" },
    { name: "Digital Marketing", issuer: "FGALAT by WEMA (2024)" },
    { name: "Certified Compensation and Benefit Professional", issuer: "ICSMP (2024)" },
    { name: "Certified Human Resource Management Professional", issuer: "ICSMP (2024)" },
    { name: "Certified Training and Development Professional", issuer: "ICSMP (2024)" },
    { name: "Technical Proficiency: System Security", issuer: "First Technical University (2019)" },
    { name: "System Security Maintenance and Installation(CCTV, IP-CCTV, GPS, OBD II, PBX)", issuer: "BugoTake Technologies (2019)" },
  ],
  badges: [
    {
      name: "Google Developer Profile",
      issuer: "Google",
      icon: <GoogleDeveloperIcon />,
      url: "https://g.dev/EazyHardey",
    },
    {
      name: "Full-Stack Developer",
      issuer: "Qwasar Silicon Valley",
      icon: <FullStackIcon />,
      url: "https://www.qwasar.io/",
    },
    {
      name: "Cybersecurity Professional",
      issuer: "3MTT",
      icon: <SecurityIcon />,
    },
    {
      name: "Open Source Contributor",
      issuer: "GitHub",
      icon: <GitHubIcon />,
      url: "https://github.com/Eazy-Hardey",
    },
  ],
  contact: {
    email: "ezekieladebiyi75@gmail.com",
    secondaryEmail: "princeadexlonso@rocketmail.com",
    linkedin: "https://linkedin.com/in/ezekiel-odewande",
    github: "https://github.com/Eazy-Hardey",
    instagram: "https://www.instagram.com/eazy_hardey/",
    x: "https://x.com/Agba_Eazy",
    phone: "+2348130716810",
    whatsapp: "https://wa.me/+2348130716810",
  }
};
