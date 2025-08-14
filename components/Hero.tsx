import React, { useState, useEffect, useRef } from 'react';
import type { PortfolioData } from '../types';
import { GitHubIcon, LinkedInIcon, InstagramIcon, XIcon, WhatsAppIcon, CameraIcon } from './Icons';

interface HeroProps {
  data: PortfolioData;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  const { name, title, contact, bio, skills, otherSkills, projects, experience, education, certifications } = data;
  const roles = title.split(', ').map(role => role.trim());
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState('https://picsum.photos/seed/ezekiel-odewande/200/200');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      setProfileImageUrl(savedImage);
    }
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setDisplayedRole(current => fullRole.substring(0, current.length - 1));
      } else {
        setDisplayedRole(current => fullRole.substring(0, current.length + 1));
      }

      if (!isDeleting && displayedRole.length === fullRole.length) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayedRole.length === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 110;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roles, currentRoleIndex]);

  const handleDownloadCV = () => {
    const cvContent = `
# ${name}
**${title}**

- **Email:** ${contact.email}
${contact.phone ? `- **Phone:** ${contact.phone}` : ''}
${contact.whatsapp ? `- **WhatsApp:** ${contact.whatsapp}` : ''}
- **LinkedIn:** ${contact.linkedin}
- **GitHub:** ${contact.github}
${contact.instagram ? `- **Instagram:** ${contact.instagram}` : ''}
${contact.x ? `- **X (Twitter):** ${contact.x}` : ''}

---

## Professional Summary
${bio}

---

## Core Skills
${skills.map(skill => `* ${skill.name}`).join('\n')}

---

## Professional & Other Skills
${otherSkills.map(skill => `* ${skill}`).join('\n')}

---

## Professional Experience
${experience.map(job => `
### ${job.role} | ${job.company}
*${job.period}*

${job.description}

**Technologies:** ${job.technologies.join(', ')}`).join('\n\n---\n\n')}

---

## Projects
${projects.map(p => `
### ${p.title}
${p.description}

* **Tags:** ${p.tags.join(', ')}
* **Repository:** <${p.repoUrl || 'N/A'}>
${p.liveUrl ? `* **Live Demo:** <${p.liveUrl}>` : ''}`).join('\n\n---\n\n')}

---

## Education
${education.map(edu => `
### ${edu.degree}, ${edu.institution}
*${edu.period}*

${edu.description}`).join('\n\n---\n\n')}

---

## Certifications & Training
${certifications.map(cert => `* **${cert.name}** - *${cert.issuer}*`).join('\n')}
    `.trim().replace(/^[ \t]+/gm, '');

    const blob = new Blob([cvContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Ezekiel_Odewande_CV.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfileImageUrl(result);
        localStorage.setItem('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-white relative isolate">
       <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="text-center p-4">
        <div className="relative inline-block mb-6 group">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto border-4 border-slate-800/80 shadow-2xl object-cover"
          />
          <div
            className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            onClick={triggerFileUpload}
            role="button"
            aria-label="Upload new profile picture"
          >
            <CameraIcon className="h-10 w-10 text-white" />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
            accept="image/png, image/jpeg, image/gif"
            aria-hidden="true"
          />
          <div className="absolute -inset-2 rounded-full border-2 border-dashed border-violet-500/50 animate-spin-slow pointer-events-none"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
          {name}
        </h1>
        <div className="text-xl md:text-2xl text-violet-300 font-semibold mb-6 max-w-3xl mx-auto h-16 md:h-10 flex items-center justify-center">
          <p>
            <span>{displayedRole}</span>
            <span className="text-slate-500 animate-ping">|</span>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-10">
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="GitHub Profile">
            <GitHubIcon className="h-8 w-8" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="LinkedIn Profile">
            <LinkedInIcon className="h-8 w-8" />
          </a>
          {contact.instagram && (
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="Instagram Profile">
              <InstagramIcon className="h-8 w-8" />
            </a>
          )}
          {contact.x && (
            <a href={contact.x} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="X Profile">
              <XIcon className="h-8 w-8" />
            </a>
          )}
          {contact.whatsapp && (
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-violet-400 transition-transform duration-300 transform hover:scale-110" aria-label="WhatsApp Profile">
              <WhatsAppIcon className="h-8 w-8" />
            </a>
          )}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
           <div className="absolute -inset-px bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg transition-all duration-200 group-hover:shadow-[0_0_1rem_0.1rem_#a855f7] group-hover:-inset-1"></div>
            <span className="relative">Discover My Work</span>
          </a>
           <button
            onClick={handleDownloadCV}
            aria-label="Download CV"
            className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <div className="absolute -inset-px bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-fuchsia-600"></div>
            <span className="relative">Download CV</span>
          </button>
        </div>
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <div className="w-6 h-10 border-2 rounded-full border-slate-700 flex justify-center items-start p-1 hover:border-violet-500 transition-colors">
            <div className="w-1 h-2 bg-slate-500 rounded-full animate-bounce" style={{animationDuration: '1.5s'}}></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;