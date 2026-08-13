// src/components/Chatbot.jsx
//
// A lightweight, keyword-matched FAQ assistant. It has no backend and no
// API key, so it costs nothing and can't break — it answers purely from
// src/data/portfolio.js, which is the same data the Skills/Works/About
// pages render. If you ever want it to hold real open-ended conversations,
// that needs an LLM call from a Netlify serverless function (to keep an
// API key off the client) — ask and it can be wired in.
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send } from "lucide-react";
import { profile, about, experiences, skillGroups, projects } from "../data/portfolio";

const QUICK_ACTIONS = [
  { label: "Skills", query: "What are your skills?" },
  { label: "Projects", query: "Show me your projects" },
  { label: "Experience", query: "What's your experience?" },
  { label: "Contact", query: "How can I contact you?" },
];

const GREETING = {
  from: "bot",
  text: `Hey, I'm ${profile.name}'s portfolio assistant. Ask me about skills, projects, experience, or how to get in touch.`,
  chips: QUICK_ACTIONS,
};

function buildResponse(rawInput, navigate) {
  const input = rawInput.toLowerCase();

  const has = (...words) => words.some((w) => input.includes(w));

  if (has("hi", "hello", "hey", "yo")) {
    return { text: `Hey there! I'm happy to talk about ${profile.name}'s work — try asking about skills, projects, or experience.` };
  }

  if (has("thank")) {
    return { text: "You're welcome! Anything else you'd like to know?" };
  }

  if (has("unity", "game", "c#", "c sharp")) {
    const gameSkills = skillGroups.find((g) => g.label === "Game Dev")?.skills.join(", ");
    const gameProjects = projects.filter((p) => p.stack.includes("Unity"));
    return {
      text: `On the game dev side: ${gameSkills}. Related project: ${gameProjects
        .map((p) => p.title)
        .join(", ")}.`,
      links: gameProjects.map((p) => ({ label: p.title, url: p.demo })),
    };
  }

  if (has("teach", "instructor", "dci", "lecture", "mentor", "student")) {
    return { text: about[2] };
  }

  if (has("who", "about", "background", "bio")) {
    return { text: about[0] };
  }

  if (has("skill", "tech", "stack", "know", "language", "tool")) {
    const text = skillGroups
      .map((g) => `${g.label}: ${g.skills.join(", ")}`)
      .join("\n");
    return { text: `Here's the toolkit:\n${text}` };
  }

  if (has("project", "work", "portfolio", "built", "made", "repo", "github")) {
    const featured = projects.slice(0, 4);
    return {
      text: `A few things I've built:`,
      links: featured.map((p) => ({ label: `${p.title} — ${p.description}`, url: p.demo })),
    };
  }

  if (has("experience", "job", "career", "history", "company", "worked")) {
    const text = experiences
      .map((e) => `${e.title}${e.period ? ` (${e.period})` : ""} — ${e.company}`)
      .join("\n");
    return { text: `Here's the career path:\n${text}` };
  }

  if (has("contact", "email", "reach", "hire", "available", "freelance", "get in touch")) {
    return {
      text: "The best way is the contact form — I'll take you there now.",
      action: () => navigate("/contact"),
    };
  }

  return {
    text: "I'm not totally sure about that one — try asking about skills, projects, experience, or how to get in touch.",
    chips: QUICK_ACTIONS,
  };
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const handleSend = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = buildResponse(trimmed, navigate);
      setMessages((prev) => [...prev, { from: "bot", ...response }]);
      setTyping(false);
      if (response.action) response.action();
    }, 500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold-500 hover:bg-gold-400 text-ink shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-panel border border-line rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up">
          <div className="px-5 py-4 bg-panel2 border-b border-line flex items-center gap-3">
            <img src="/ashgh.png" alt="" className="w-7 h-7 object-contain" />
            <div>
              <p className="text-sm font-semibold text-ivory leading-none">
                Ask about {profile.name.split(" ")[0]}
              </p>
              <p className="text-xs text-mist mt-1">Usually replies instantly</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "user" ? "flex justify-end" : "flex justify-start"}>
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-gold-500 text-ink rounded-br-sm"
                      : "bg-panel2 text-ivory rounded-bl-sm border border-line"
                  }`}
                >
                  {m.text}
                  {m.links && (
                    <div className="mt-2 flex flex-col gap-1.5">
                      {m.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-gold-300 hover:text-gold-200 underline underline-offset-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                  {m.chips && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {m.chips.map((chip) => (
                        <button
                          key={chip.label}
                          onClick={() => handleSend(chip.query)}
                          className="text-xs px-2.5 py-1 rounded-full bg-ink border border-line text-ivory/80 hover:border-gold-400 hover:text-gold-300 transition-colors"
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start">
                <div className="bg-panel2 border border-line rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-mist animate-blink [animation-delay:0ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-mist animate-blink [animation-delay:150ms]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-mist animate-blink [animation-delay:300ms]" />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="p-3 border-t border-line flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="flex-1 bg-panel2 border border-line rounded-lg px-3 py-2.5 text-sm text-ivory placeholder:text-mist focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <button
              type="submit"
              aria-label="Send"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-gold-500 hover:bg-gold-400 text-ink shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
