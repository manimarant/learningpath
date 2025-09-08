
import React, { useState, useCallback } from 'react';
import { LearningPath } from './types';
import { fetchLearningPath } from './services/geminiService';
import SearchBar from './components/SearchBar';
import LearningPathDisplay from './components/LearningPathDisplay';
import UniversityIcon from './components/icons/UniversityIcon';

const App: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [learningPath, setLearningPath] = useState<LearningPath | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!interest.trim()) {
      setError('Please enter a field of interest.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setLearningPath(null);

    try {
      const data = await fetchLearningPath(interest);
      setLearningPath(data);
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [interest]);
  
  const handleReset = () => {
    setInterest('');
    setLearningPath(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <main className="w-full flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl text-center">
          {!learningPath && (
            <div className="flex flex-col items-center animate-fade-in">
              <div onClick={handleReset} className="cursor-pointer mb-4">
                 <UniversityIcon className="w-20 h-20 text-gray-800" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                Find Your Path at <span className="text-black">Innovate University</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Tell us your passion, and our AI advisor will craft a personalized university program for you.
              </p>
            </div>
          )}

          {!learningPath && (
            <div className="mt-10 transition-all duration-500 flex justify-center">
              <SearchBar 
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </div>
          )}

          {error && <p className="mt-4 text-red-600">{error}</p>}

          {isLoading && !learningPath && (
            <div className="mt-12 text-center text-gray-600">
              <p>Analyzing curricula and career trends...</p>
              <p className="text-sm">This may take a moment.</p>
            </div>
          )}

          {learningPath && <LearningPathDisplay data={learningPath} onBackToSearch={handleReset} />}
        </div>
      </main>
      
      <footer className="text-center py-4 text-gray-400 text-sm">
        <p>Powered by AI. Program details are illustrative.</p>
      </footer>
    </div>
  );
};

export default App;
