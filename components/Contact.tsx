import React from 'react';
import type { PortfolioData } from '../types';
import Section from './Section';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, InstagramIcon, XIcon, WhatsAppIcon } from './Icons';

interface ContactProps {
  data: PortfolioData;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const { contact } = data;

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-slate-300 mb-10 leading-relaxed">
          I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to connect, feel free to reach out. Let's bring your ideas to life.
        </p>
        <div className="flex flex-col items-center gap-4">
             <a
                href={`mailto:${contact.email}`}
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
               <div className="absolute -inset-px bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg transition-all duration-200 group-hover:shadow-[0_0_1rem_0.1rem_#a855f7] group-hover:-inset-1"></div>
                <span className="relative inline-flex items-center gap-3">
                    <MailIcon className="h-6 w-6" />
                    <span>Contact via Email</span>
                </span>
            </a>

            <div className="mt-6 text-slate-400 w-full">
                <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-[#0a0a0f] px-2 text-sm text-slate-500">Or find me here</span>
                    </div>
                </div>
                
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mt-4">
                    {contact.phone && (
                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors">
                            <PhoneIcon className="h-5 w-5" />
                            <span>{contact.phone}</span>
                        </a>
                    )}
                     {contact.whatsapp && (
                      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors" aria-label="WhatsApp">
                          <WhatsAppIcon className="h-5 w-5" />
                          <span>WhatsApp</span>
                      </a>
                    )}
                    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors" aria-label="GitHub">
                        <GitHubIcon className="h-5 w-5" />
                        <span>GitHub</span>
                    </a>
                    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors" aria-label="LinkedIn">
                        <LinkedInIcon className="h-5 w-5" />
                        <span>LinkedIn</span>
                    </a>
                    {contact.instagram && (
                      <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors" aria-label="Instagram">
                          <InstagramIcon className="h-5 w-5" />
                          <span>Instagram</span>
                      </a>
                    )}
                    {contact.x && (
                      <a href={contact.x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-violet-400 transition-colors" aria-label="X">
                          <XIcon className="h-5 w-5" />
                          <span>X</span>
                      </a>
                    )}
                </div>
                 <p className="mt-6 text-sm">
                    Secondary Email: <a href={`mailto:${contact.secondaryEmail}`} className="text-violet-400 hover:text-white hover:underline transition-colors">{contact.secondaryEmail}</a>
                 </p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;