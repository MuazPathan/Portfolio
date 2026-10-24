// api/chat.ts - Vercel Serverless Function
import type { IncomingMessage, ServerResponse } from "node:http";
import { generateChatReply } from "../src/lib/chat-service.ts";

export default async function handler(
  req: IncomingMessage & { body?: any },
  res: ServerResponse & { json?: (data: any) => void; status?: (code: number) => any }
) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method Not Allowed" }));
    return;
  }

  try {
    let body = req.body;
    if (!body) {
      body = await new Promise((resolve) => {
        let raw = "";
        req.on("data", (chunk) => {
          raw += chunk;
        });
        req.on("end", () => {
          try {
            resolve(JSON.parse(raw));
          } catch {
            resolve({});
          }
        });
      });
    } else if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        // keep as is
      }
    }

    const messages = body?.messages ?? [];
    const reply = await generateChatReply(messages);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ reply }));
  } catch (err: unknown) {
    console.error("Vercel Chat API error:", err);
    const message = err instanceof Error ? err.message : "Failed to generate reply";
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: message }));
  }
}
