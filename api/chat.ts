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
      console.error("GEMINI_API_KEY is missing in process.env. Visible keys:", visibleKeys);
      return new Response(
        JSON.stringify({
          error:
            "GEMINI_API_KEY environment variable is not accessible in this deployment. Please verify that 'GEMINI_API_KEY' is added in Vercel Project Settings -> Environment Variables for the 'Production' environment, and click Redeploy.",
          debugEnvKeys: visibleKeys,
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

    // Call Google Gemini API directly using global fetch
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

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

    const geminiRes = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(geminiPayload),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini API Error:", geminiRes.status, errText);
      return new Response(
        JSON.stringify({
          error: `Gemini API returned status ${geminiRes.status}: ${errText.slice(0, 120)}`,
        }),
        {
          status: 502,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return new Response(
        JSON.stringify({ error: "No response text candidate returned by Gemini." }),
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
