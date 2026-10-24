// api/chat.ts - Vercel Edge Serverless Function
import { PROFILE_CONTEXT } from "../data/profileData";

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  // CORS Preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const env = (process.env ?? {}) as Record<string, string | undefined>;
    const apiKey = (
      env["GEMINI_API_KEY"] ||
      env["VITE_GEMINI_API_KEY"] ||
      env["GOOGLE_API_KEY"] ||
      env["GEMINI_KEY"] ||
      env["VITE_API_KEY"] ||
      env["API_KEY"] ||
      env["GEMINI"]
    )?.trim();

    if (!apiKey) {
      const visibleKeys = Object.keys(env).filter((k) => !k.startsWith("__"));
      const projectName = env["VERCEL_PROJECT_NAME"] || "unknown";
      console.error("GEMINI_API_KEY is missing. Project:", projectName);
      return new Response(
        JSON.stringify({
          error: `GEMINI_API_KEY is missing in Vercel project '${projectName}'. Please open Vercel -> Project '${projectName}' -> Settings -> Environment Variables, and ensure 'GEMINI_API_KEY' is added for the 'Production' environment.`,
          vercelProjectName: projectName,
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const body = (await req.json()) as {
      messages?: Array<{ role: string; content: string }>;
    };

    const messages = body?.messages;
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid payload: messages array required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const candidateModels = [
      "gemini-3.5-flash-lite",
      "gemini-3.5-flash",
      "gemini-3.1-flash-lite",
      "gemini-flash-lite-latest",
    ];

    const geminiPayload = {
      system_instruction: {
        parts: [{ text: PROFILE_CONTEXT }],
      },
      contents: messages.map((m) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
      generationConfig: {
        temperature: 0.2,
      },
    };

    let reply = "";
    let lastError = "";

    for (const model of candidateModels) {
      try {
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
        const geminiRes = await fetch(geminiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(geminiPayload),
          signal: AbortSignal.timeout(9000),
        });

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            reply = text;
            break;
          }
        } else {
          const errText = await geminiRes.text();
          lastError = `Model ${model} returned ${geminiRes.status}: ${errText.slice(0, 100)}`;
          console.warn(`[Gemini API] ${lastError}, trying next model...`);
        }
      } catch (err) {
        lastError = err instanceof Error ? err.message : String(err);
        console.warn(`[Gemini API] Model ${model} failed: ${lastError}, trying next model...`);
      }
    }

    if (!reply) {
      return new Response(
        JSON.stringify({
          error: `Google Gemini service unavailable: ${lastError}`,
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err: unknown) {
    console.error("Chat edge handler exception:", err);
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
