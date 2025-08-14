import React, { useState, useCallback } from 'react';
import type { PortfolioData } from '../types';
import { generateCoverLetter } from '../services/geminiService';
import Section from './Section';
import { ClipboardIcon, CheckIcon } from './Icons';

interface AICoverLetterProps {
  data: PortfolioData;
}

const AICoverLetter: React.FC<AICoverLetterProps> = ({ data }) => {
  const [jobDescription, setJobDescription] = useState('');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = useCallback(async () => {
    if (!jobDescription.trim()) {
      setError('Please paste a job description first.');
      return;
    }
    setError('');
    setIsLoading(true);
    setGeneratedLetter('');
    setIsCopied(false);

    try {
      const result = await generateCoverLetter(jobDescription, data);
      setGeneratedLetter(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setError(`Failed to generate cover letter: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, [jobDescription, data]);

  const handleCopy = () => {
    if (generatedLetter) {
      navigator.clipboard.writeText(generatedLetter);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };


  return (
    <Section id="ai-assistant" title="AI Assistant">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-300 text-lg mb-8">
          Want to see how my skills fit your needs? Paste a job description below, and my AI assistant (powered by Gemini) will generate a custom cover letter snippet for you.
        </p>
        <div className="bg-slate-900/70 p-6 rounded-xl shadow-lg border border-slate-800">
          <textarea
            className="w-full h-48 p-4 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all duration-200 placeholder-slate-500 resize-none"
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            disabled={isLoading}
            aria-label="Job Description Input"
          ></textarea>
          <button
            onClick={handleGenerate}
            disabled={isLoading || !jobDescription.trim()}
            className="group relative inline-flex items-center justify-center w-full mt-4 px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg focus:outline-none disabled:cursor-not-allowed"
          >
           <div className="absolute -inset-px bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg transition-all duration-200 group-hover:shadow-[0_0_1rem_0.1rem_#a855f7] group-hover:-inset-1 disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-none"></div>
            <span className="relative flex items-center justify-center">
             {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate Snippet'
            )}
            </span>
          </button>
          {error && <p className="mt-4 text-red-400">{error}</p>}
        </div>
        
        {generatedLetter && (
          <div className="mt-8 text-left bg-slate-900/50 p-6 rounded-xl border border-slate-800/80 relative transition-opacity duration-500">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-bold text-slate-100">Generated Snippet:</h4>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-slate-800 text-slate-300 px-3 py-1.5 rounded-md hover:bg-slate-700 hover:text-white transition-all text-sm border border-slate-700"
                aria-label="Copy to clipboard"
              >
                {isCopied ? <CheckIcon className="h-5 w-5 text-green-400" /> : <ClipboardIcon className="h-5 w-5" />}
                <span>{isCopied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <pre className="text-slate-300 whitespace-pre-wrap font-sans leading-relaxed bg-slate-900 p-4 rounded-md border border-slate-800">
              {generatedLetter}
            </pre>
          </div>
        )}
      </div>
    </Section>
  );
};

export default AICoverLetter;