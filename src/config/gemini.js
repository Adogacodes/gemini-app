import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = 'AIzaSyAjGY2QywGtamnfw4cAF590COojNayDHyE'; // Use environment variables for API key
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            // safetySettings: Adjust safety settings
            // See https://ai.google.dev/gemini-api/docs/safety-settings
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text(); // Return the response text
    } catch (error) {
        console.error("Error during chat session:", error);
        return ''; // Return an empty string or handle the error as needed
    }
}

export default run;
