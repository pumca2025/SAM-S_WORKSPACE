
import { GoogleGenAI } from "@google/genai";
import type { Participant, EventOption, EventRegistrations } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    // In a real app, you'd want to handle this more gracefully.
    // For this environment, we assume it's set.
    console.warn("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateTeamMotto = async (
    teamName: string,
    participants: Participant[],
    allEvents: EventOption[],
    eventRegistrations: EventRegistrations
): Promise<string> => {
    
    const registeredEventIds = new Set<string>(Object.keys(eventRegistrations));

    const eventNames = Array.from(registeredEventIds)
        .map(id => allEvents.find(e => e.id === id)?.name)
        .filter(Boolean);

    const prompt = `
        Generate a short, inspiring, and fun team motto for a team competing in an event.

        Team Name: "${teamName}"
        Number of members: ${participants.length}
        They are competing in these events: ${eventNames.join(', ') || 'various events'}.

        The motto should be catchy, positive, and no more than 15 words. Do not include quotation marks in the output.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const text = response.text.trim().replace(/"/g, ''); // Remove quotes
        
        if (!text) {
          throw new Error("Received an empty response from the AI.");
        }

        return text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        // Provide a fallback motto in case of an API error
        return "Together, we conquer all challenges!";
    }
};
