
export interface Course {
  name: string;
  description: string;
}

export interface LearningPath {
  programName: string;
  description: string;
  courses: Course[];
  tuition: string;
  scholarships: string;
  location: string;
  learningOutcomes: string[];
  jobMarketSuitability: string;
}
