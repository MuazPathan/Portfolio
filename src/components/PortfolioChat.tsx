// components/PortfolioChat.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Cpu } from "lucide-react";
import { TECH_STACK_ITEMS, type TechStackItem } from "../data/tech-stack";

interface Message {
  role: "user" | "assistant";
  content: string;
  techStack?: TechStackItem[];
}

const STARTER_PROMPTS = [
  "What is your multi-cloud architecture stack?",
  "Tell me about the ALMAS voice assistant",
  "How did you scale teams at Reliance Trends?",
  "Which DevOps tools do you use?",
];

const ALIAS_MAP: Array<{ item: string; patterns: string[] }> = [
  { item: "AWS", patterns: ["aws", "amazon web services", "ec2", "s3", "lambda", "rds"] },
  { item: "Microsoft Azure", patterns: ["azure", "microsoft azure", "entra"] },
  { item: "Google Cloud (GCP)", patterns: ["gcp", "google cloud", "google cloud platform"] },
  { item: "Kubernetes", patterns: ["kubernetes", "k8s"] },
  { item: "Docker", patterns: ["docker", "container", "containers", "containerization"] },
  { item: "Terraform", patterns: ["terraform", "iac", "infrastructure as code"] },
  { item: "Linux", patterns: ["linux", "ubuntu", "debian", "arch linux"] },
  { item: "Python", patterns: ["python"] },
  { item: "TypeScript", patterns: ["typescript"] },
  { item: "JavaScript", patterns: ["javascript", "js"] },
  { item: "React", patterns: ["react", "react.js", "reactjs"] },
  { item: "Next.js", patterns: ["next.js", "nextjs"] },
  { item: "Flutter", patterns: ["flutter"] },
  { item: "Dart", patterns: ["dart"] },
  { item: "Firebase", patterns: ["firebase", "firestore"] },
  { item: "MySQL", patterns: ["mysql"] },
  { item: "PostgreSQL", patterns: ["postgresql", "postgres"] },
  { item: "Redis", patterns: ["redis"] },
  { item: "Prometheus", patterns: ["prometheus"] },
  { item: "Grafana", patterns: ["grafana"] },
  { item: "Ansible", patterns: ["ansible"] },
  { item: "Nginx", patterns: ["nginx"] },
  { item: "Git", patterns: ["git", "version control"] },
  { item: "GitHub", patterns: ["github"] },
  { item: "GitHub Actions", patterns: ["github actions", "gitops"] },
  { item: "Bootstrap", patterns: ["bootstrap"] },
  { item: "Tailwind CSS", patterns: ["tailwind", "tailwindcss"] },
  { item: "HTML5", patterns: ["html", "html5"] },
  { item: "CSS3", patterns: ["css", "css3"] },
  { item: "PHP", patterns: ["php"] },
  { item: "Figma", patterns: ["figma"] },
];

const itemByName = new Map<string, TechStackItem>(
  TECH_STACK_ITEMS.map((item) => [item.name, item])
);

const CORE_FLAGSHIP_NAMES = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud (GCP)",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Python",
  "Linux",
];

function getCoreFlagshipStack(): TechStackItem[] {
  return CORE_FLAGSHIP_NAMES.map((name) => itemByName.get(name)).filter(
    (item): item is TechStackItem => Boolean(item)
  );
}

function detectTechStack(replyText: string, userPrompt: string = ""): TechStackItem[] {
  const combined = `${replyText} ${userPrompt}`.toLowerCase();
  const matched = new Map<string, TechStackItem>();

  for (const { item, patterns } of ALIAS_MAP) {
    const techItem = itemByName.get(item);
    if (!techItem) continue;

    for (const pat of patterns) {
      const regex = new RegExp(`(?:^|[^a-z0-9_])${pat}(?:[^a-z0-9_]|$)`, "i");
      if (regex.test(combined)) {
        matched.set(techItem.name, techItem);
        break;
      }
    }
  }

  // Detect if query is asking about Muaz / himself, his skills, or his tech stack
  const isAboutMuaz =
    /(who are you|about (you|muaz|himself|me)|tell me about (you|yourself|muaz|me)|who is muaz|what do you do|cloud architect|(your|muaz's?|you).*?(stack|skill|technolog|tool|background|experience))/i.test(
      userPrompt
    );

  if (isAboutMuaz && matched.size < 4) {
    for (const name of CORE_FLAGSHIP_NAMES) {
      const tech = itemByName.get(name);
      if (tech) matched.set(tech.name, tech);
    }
  }

  return Array.from(matched.values()).slice(0, 8);
}

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! Ask me anything about Muaz's cloud architecture standards, Kubernetes workflows, tech stack, or background!",
      techStack: getCoreFlagshipStack(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      if (data.reply) {
        const detected = detectTechStack(data.reply, text);
        setMessages([
          ...updated,
          { role: "assistant", content: data.reply, techStack: detected },
        ]);
      } else {
        throw new Error(data.error);
      }
    } catch {
      setMessages([
        ...updated,
        {
          role: "assistant",
          content:
            "Sorry, my healthcare sensors ran into an error. Feel free to contact Muaz directly via the 'Get in touch' button!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans select-none">
      {/* ================= CLOSED STATE: FLOATING MARSHMALLOW ROBOT ================= */}
      {!isOpen && (
        <div className="relative group flex flex-col items-center">
          {/* Hover Speech Bubble */}
          <div className="pointer-events-none absolute bottom-[102%] right-2 mb-2 w-56 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-50">
            <div className="relative border-2 border-black bg-[#FFE600] px-3 py-2 shadow-[3px_3px_0px_#000000]">
              <p className="text-[11px] font-black leading-snug text-black">
                hi.. i am Muaz u cn ask me about me here
              </p>
              {/* Speech bubble arrow pointing down */}
              <div className="absolute -bottom-2 right-10 h-0 w-0 border-x-7 border-x-transparent border-t-7 border-t-black" />
              <div className="absolute -bottom-1.5 right-10 h-0 w-0 border-x-7 border-x-transparent border-t-7 border-t-[#FFE600]" />
            </div>
          </div>

          {/* Marshmallow Robot Trigger (Baymax with Mochi Cat) */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Ask About Me"
            className="group relative flex flex-col items-center focus:outline-none transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="relative flex flex-col items-center">
              {/* Animated Baymax Avatar */}
              <div className="relative h-32 sm:h-40 aspect-[683/864] drop-shadow-[4px_4px_0px_#000000] transition-transform duration-200 group-hover:-translate-y-1">
                {/* Baymax Body & Cat */}
                <img
                  src="/baymax-body.png"
                  alt="Baymax with Mochi"
                  className="absolute inset-0 h-full w-full object-contain animate-baymax-body"
                  loading="eager"
                />
                {/* Articulated Waving Arm (Waves every 2 seconds) */}
                <img
                  src="/baymax-arm.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-contain animate-baymax-wave"
                  loading="eager"
                />
              </div>

              {/* Closed status pill */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap border-2 border-black bg-white px-2 py-0.5 text-[9px] font-black uppercase tracking-tight text-black shadow-[2px_2px_0px_#000000] group-hover:bg-[#FFE600] transition-colors">
                Ask About Me
              </span>
            </div>
          </button>
        </div>
      )}

      {/* ================= OPEN STATE: ROBOT'S STOMACH BELLY SCREEN ================= */}
      {isOpen && (
        <div className="relative flex h-[540px] w-[340px] sm:w-[390px] max-w-[calc(100vw-2rem)] flex-col rounded-[2rem] border-3 border-black bg-white shadow-[8px_8px_0px_#000000] overflow-hidden">
          {/* Header */}
          <div className="relative border-b-2 border-black bg-[#FDFBF7] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Baymax Avatar Badge */}
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white shadow-[2px_2px_0px_#000000] overflow-hidden p-0.5">
                <img
                  src="/baymax-head.png"
                  alt="Baymax and Mochi"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex items-center gap-2">
                <h3 className="text-sm font-black uppercase tracking-tight text-black">
                  Ask About Me
                </h3>
                <span
                  className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"
                  title="Online"
                />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="rounded-full border-2 border-black bg-[#FFE600] p-1.5 text-black shadow-[2px_2px_0px_#000000] transition hover:bg-black hover:text-[#FFE600] cursor-pointer"
            >
              <X className="h-4 w-4 stroke-[3]" />
            </button>
          </div>

          {/* Conversation Feed inside the Stomach */}
          <div className="flex-1 space-y-3.5 overflow-y-auto p-4 bg-[#FCFCF9]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[88%] border-2 border-black p-3 text-xs leading-relaxed ${
                    m.role === "user"
                      ? "bg-[#FFE600] font-semibold text-black shadow-[3px_3px_0px_#000000] rounded-tl-xl rounded-tr-xl rounded-bl-xl"
                      : "bg-white text-zinc-900 shadow-[3px_3px_0px_#000000] rounded-tl-xl rounded-tr-xl rounded-br-xl"
                  }`}
                >
                  <p className="whitespace-pre-line">{m.content}</p>

                  {/* Tech Stack Icons & Badges */}
                  {m.techStack && m.techStack.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t-2 border-black/10">
                      <div className="mb-1.5 flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-black/70">
                        <Cpu className="h-3 w-3 stroke-[2.5]" />
                        <span>Technologies:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.techStack.map((tech) => (
                          <button
                            key={tech.file}
                            type="button"
                            onClick={() =>
                              setInput(`Tell me more about your experience with ${tech.name}`)
                            }
                            title={`${tech.name} (${tech.category}) • Click to ask`}
                            className="group inline-flex items-center gap-1.5 border border-black bg-[#FFE600] px-2 py-0.5 text-[11px] font-bold text-black shadow-[1.5px_1.5px_0px_#000000] transition-all hover:-translate-y-0.5 hover:bg-black hover:text-[#FFE600] active:translate-y-0 cursor-pointer"
                          >
                            <img
                              src={`/icons/${tech.file}`}
                              alt={tech.name}
                              className="h-3.5 w-3.5 object-contain"
                              loading="lazy"
                            />
                            <span>{tech.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="inline-flex items-center gap-2 border-2 border-black bg-white px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_#000000] rounded-lg">
                <span className="h-2 w-2 animate-ping bg-[#FFE600]" />
                Scanning & Thinking...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {messages.length === 1 && (
            <div className="border-t-2 border-black/15 bg-[#F6F4EE] p-2.5">
              <span className="mb-1.5 flex items-center gap-1 text-[10px] font-black uppercase tracking-wide text-zinc-600">
                <Sparkles className="h-3 w-3 text-black" /> Suggested Prompts
              </span>
              <div className="flex flex-wrap gap-1.5">
                {STARTER_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="border border-black bg-white px-2 py-1 text-[11px] font-medium text-black shadow-[1.5px_1.5px_0px_#000000] transition hover:bg-[#FFE600] cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Form at the base of the Stomach */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="flex gap-2 border-t-2 border-black bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Muaz..."
              className="flex-1 border-2 border-black bg-[#FDFBF7] px-3 py-2 text-xs font-medium text-black placeholder-zinc-500 shadow-[2px_2px_0px_#000000] focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="border-2 border-black bg-[#FFE600] px-4 py-2 font-bold text-black shadow-[2px_2px_0px_#000000] transition hover:bg-black hover:text-[#FFE600] disabled:opacity-40 cursor-pointer"
            >
              <Send className="h-4 w-4 stroke-[2.5]" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
