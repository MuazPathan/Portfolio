import { GoogleGenAI } from "@google/genai";
import { PROFILE_CONTEXT } from "../../data/profileData";
import fs from "node:fs";
import path from "node:path";

function getApiKey(): string {
  const envKey =
    process.env["GEMINI_API_KEY"] ||
    process.env["VITE_GEMINI_API_KEY"] ||
    process.env["GOOGLE_API_KEY"] ||
    process.env["GEMINI_KEY"];
  if (envKey && envKey.trim()) {
    return envKey.trim();
  }
  try {
    const envPath = path.resolve(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf8");
      const match = content.match(/(?:GEMINI_API_KEY|VITE_GEMINI_API_KEY|GOOGLE_API_KEY)=(.+)/);
      if (match && match[1]) {
        const key = match[1].trim();
        process.env["GEMINI_API_KEY"] = key;
        return key;
      }
    }
  } catch {
    // ignore
  }
  return "";
}

export async function generateChatReply(
  messages: Array<{ role: string; content: string }>
): Promise<string> {
  const apiKey = getApiKey();
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    throw new Error("Invalid payload: messages array required");
  }

  const ai = new GoogleGenAI({ apiKey });
  const contents = messages.map((m) => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: m.content }],
  }));

  const candidateModels = [
    "gemini-3.5-flash-lite",
    "gemini-3.5-flash",
    "gemini-3.1-flash-lite",
    "gemini-flash-lite-latest",
  ];
  let lastError: unknown;

  for (const model of candidateModels) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents,
        config: {
          systemInstruction: PROFILE_CONTEXT,
          temperature: 0.2,
        },
      });
      if (response.text) {
        return response.text;
      }
    } catch (err) {
      lastError = err;
      console.warn(`[Gemini Chat] Model ${model} failed, trying next candidate:`, err);
    }
  }

  throw lastError ?? new Error("Failed to generate response from Gemini");
}
