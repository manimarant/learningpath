
import React from 'react';
import { LearningPath } from '../types';

interface LearningPathDisplayProps {
  data: LearningPath;
  onBackToSearch: () => void;
}

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
      <div className="w-1 h-6 bg-gray-400 rounded-full"></div>
      {title}
    </h3>
    <div className="text-gray-600 space-y-3">{children}</div>
  </div>
);

const LearningPathDisplay: React.FC<LearningPathDisplayProps> = ({ data, onBackToSearch }) => {
  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in space-y-8">
      {/* Enhanced Header with better back button */}
      <header className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <button
          onClick={onBackToSearch}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Search
        </button>
        
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Program Found
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">{data.programName}</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InfoCard title="Core Courses" className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-gray-700 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">{course.name}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Learning Outcomes">
          <ul className="space-y-3">
            {data.learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm leading-relaxed">{outcome}</span>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="Financial Information">
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <p className="font-semibold text-gray-800">Tuition</p>
              </div>
              <p className="text-gray-600">{data.tuition}</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-semibold text-gray-800">Scholarships</p>
              </div>
              <p className="text-gray-600">{data.scholarships}</p>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="Campus Location">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-600 leading-relaxed">{data.location}</p>
          </div>
        </InfoCard>
      </div>

      <InfoCard title="Career Outlook & Job Market Suitability">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Career Prospects</h4>
              <p className="text-gray-600 leading-relaxed">{data.jobMarketSuitability}</p>
            </div>
          </div>
        </div>
      </InfoCard>
    </div>
  );
};

export default LearningPathDisplay;
