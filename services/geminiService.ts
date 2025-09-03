
import { GoogleGenAI, Type } from "@google/genai";
import { LearningPath } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const fetchLearningPath = async (interest: string): Promise<LearningPath> => {
  const prompt = `Based on the interest in "${interest}", generate a comprehensive learning path for a prospective student at the fictional 'Innovate University'. Provide details on a suitable program.`;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      programName: { type: Type.STRING, description: "The full name of the academic program." },
      description: { type: Type.STRING, description: "A detailed description of the program, its goals, and who it's for." },
      courses: {
        type: Type.ARRAY,
        description: "A list of 4-6 key courses in the program.",
        items: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING, description: "The name of the course." },
            description: { type: Type.STRING, description: "A brief description of the course content." }
          },
          required: ["name", "description"]
        }
      },
      tuition: { type: Type.STRING, description: "Estimated annual tuition fee." },
      scholarships: { type: Type.STRING, description: "Information on available scholarships or financial aid." },
      location: { type: Type.STRING, description: "The campus location or if it's available online." },
      learningOutcomes: {
        type: Type.ARRAY,
        description: "A list of 3-5 key skills and knowledge students will acquire.",
        items: { type: Type.STRING }
      },
      jobMarketSuitability: { type: Type.STRING, description: "An analysis of how this program prepares students for the current job market and potential career paths." }
    },
    required: ["programName", "description", "courses", "tuition", "scholarships", "location", "learningOutcomes", "jobMarketSuitability"]
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    const learningPathData: LearningPath = JSON.parse(jsonText);
    return learningPathData;
  } catch (error) {
    console.error("Error fetching learning path from Gemini API:", error);
    throw new Error("Failed to generate learning path. The AI may be experiencing high demand. Please try again later.");
  }
};
