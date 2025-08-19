import { GoogleGenAI } from '@google/genai';
import type { PortfolioData } from '../types';

export const generateCoverLetter = async (jobDescription: string, portfolioData: PortfolioData): Promise<string> => {
  // First, check for the API key. This is a simple check and doesn't involve network requests.
  if (typeof process === 'undefined' || !process.env.API_KEY) {
    const errorMessage = "Configuration Error: The AI Assistant is not set up correctly. An API key is required and must be made available to the application during a build process.";
    console.error(errorMessage);
    return errorMessage;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const { name, title, bio, skills, otherSkills, projects, experience, education } = portfolioData;

    const portfolioSummary = `
      My name is ${name}, and my professional background covers: ${title}.
      Bio: ${bio}
      
      My Core Technical Skills:
      ${skills.map(skill => `- ${skill.name}`).join('\n')}

      My Professional & Other Skills:
      ${otherSkills.map(skill => `- ${skill}`).join('\n')}

      My Key Projects:
      ${projects.map(p => `- ${p.title}: ${p.description}`).join('\n')}

      My Work Experience:
      ${experience.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}`).join('\n')}
      
      My Education:
      ${education.map(e => `- ${e.degree} from ${e.institution} (${e.period}): ${e.description}`).join('\n')}
    `;

    const prompt = `
      Based on my professional portfolio summary below, please write a concise, professional, and compelling cover letter snippet (2-3 paragraphs) for the following job description.
      Your tone should be confident but not arrogant.
      Highlight how my skills and experience, particularly in software engineering, public administration, and human capital development, align with the requirements in the job description.
      Do not invent any new skills or experiences.
      End with a strong closing statement about my enthusiasm for the role.

      ---
      My Portfolio Summary:
      ${portfolioSummary}
      ---
      Job Description:
      ${jobDescription}
      ---
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.5,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error during AI generation:", error);
    if (error instanceof Error) {
        // Provide a more user-friendly message for common network errors.
        if (error.message.includes('Failed to fetch') || error.message.includes('refused to connect')) {
             return `Network Error: The AI Assistant could not connect to Google's servers. This might be due to a network issue, a browser extension blocking the request, or a missing API key configuration. Please check your connection and try again.`;
        }
        return `An error occurred while generating the cover letter. Details: ${error.message}`;
    }
    return "An unknown error occurred while generating the cover letter.";
  }
};
