
import React from 'react';
import { LearningPath } from '../types';

interface LearningPathDisplayProps {
  data: LearningPath;
}

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-50/50 border border-gray-200 rounded-lg p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);

const LearningPathDisplay: React.FC<LearningPathDisplayProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in space-y-8">
      <header className="text-center pb-4 border-b border-gray-200">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">{data.programName}</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{data.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard title="Core Courses">
          <ul className="space-y-3">
            {data.courses.map((course, index) => (
              <li key={index}>
                <p className="font-semibold text-gray-800">{course.name}</p>
                <p className="text-sm">{course.description}</p>
              </li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="Learning Outcomes">
          <ul className="list-disc list-inside space-y-2">
            {data.learningOutcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </InfoCard>

        <InfoCard title="Financials">
          <div>
            <p className="font-semibold text-gray-800">Tuition</p>
            <p>{data.tuition}</p>
          </div>
          <div className="mt-3">
            <p className="font-semibold text-gray-800">Scholarships</p>
            <p>{data.scholarships}</p>
          </div>
        </InfoCard>

        <InfoCard title="Location">
          <p>{data.location}</p>
        </InfoCard>
      </div>

      <InfoCard title="Career Outlook & Job Market Suitability">
        <p>{data.jobMarketSuitability}</p>
      </InfoCard>
    </div>
  );
};

export default LearningPathDisplay;
