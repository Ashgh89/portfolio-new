// src/components/Chatbot.jsx
//
// A lightweight, keyword-matched FAQ assistant. It has no backend and no
// API key, so it costs nothing and can't break — it answers purely from
// src/data/portfolio.js, which is the same data the Skills/Works/About
// pages render. Understands both English and German keywords and always
// replies in whichever language is currently selected. If you ever want
// it to hold real open-ended conversations, that needs an LLM call from a
// Netlify serverless function (to keep an API key off the client).
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send } from "lucide-react";
import {
  profile,
  content,
  getSkillGroups,
  getProjects,
} from "../data/portfolio";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/ui";

function buildResponse(rawInput, lang, navigate) {
  const input = rawInput.toLowerCase();
  const has = (...words) => words.some((w) => input.includes(w));
  const c = content[lang];
  const t = ui[lang].chatbot;
  const skillGroups = getSkillGroups(lang);
  const projects = getProjects(lang);

  if (has("hi", "hello", "hey", "hallo", "servus", "moin")) {
    return {
      text:
        lang === "de"
          ? `Hey! Frag mich gern nach Skills, Projekten oder Erfahrung von ${profile.name}.`
          : `Hey there! Happy to talk about ${profile.name}'s work — try asking about skills, projects, or experience.`,
    };
  }

  if (has("thank", "danke")) {
    return {
      text:
        lang === "de"
          ? "Gern geschehen! Noch etwas?"
          : "You're welcome! Anything else you'd like to know?",
    };
  }

  if (has("unity", "game", "c#", "c sharp", "spiel")) {
    const gameSkills = skillGroups
      .find((g) => g.skills.includes("Unity"))
      ?.skills.join(", ");
    const gameProjects = projects.filter((p) => p.stack.includes("Unity"));
    return {
      text:
        lang === "de"
          ? `Im Game-Dev-Bereich: ${gameSkills}. Passendes Projekt: ${gameProjects.map((p) => p.title).join(", ")}.`
          : `On the game dev side: ${gameSkills}. Related project: ${gameProjects.map((p) => p.title).join(", ")}.`,
      links: gameProjects.map((p) => ({ label: p.title, url: p.demo })),
    };
  }

  if (
    has(
      "teach",
      "instructor",
      "dci",
      "lecture",
      "mentor",
      "student",
      "unterricht",
      "dozent",
      "lehrer",
    )
  ) {
    return { text: c.about[2] };
  }

  if (has("who", "about", "background", "bio", "wer", "über", "hintergrund")) {
    return { text: c.about[0] };
  }

  if (
    has(
      "skill",
      "tech",
      "stack",
      "know",
      "language",
      "tool",
      "fähigkeit",
      "technologie",
      "sprache",
      "kenntnisse",
    )
  ) {
    const text = skillGroups
      .map((g) => `${g.label}: ${g.skills.join(", ")}`)
      .join("\n");
    return {
      text: `${lang === "de" ? "Hier ist das Toolkit" : "Here's the toolkit"}:\n${text}`,
    };
  }

  if (
    has(
      "project",
      "work",
      "portfolio",
      "built",
      "made",
      "repo",
      "github",
      "projekt",
      "arbeit",
      "gemacht",
      "gebaut",
    )
  ) {
    const featured = projects.slice(0, 4);
    return {
      text:
        lang === "de"
          ? "Ein paar Dinge, die ich gebaut habe:"
          : "A few things I've built:",
      links: featured.map((p) => ({
        label: `${p.title} — ${p.description}`,
        url: p.demo,
      })),
    };
  }

  if (
    has(
      "experience",
      "job",
      "career",
      "history",
      "company",
      "worked",
      "erfahrung",
      "karriere",
      "firma",
      "gearbeitet",
    )
  ) {
    const text = c.experiences
      .map(
        (e) => `${e.title}${e.period ? ` (${e.period})` : ""} — ${e.company}`,
      )
      .join("\n");
    return {
      text: `${lang === "de" ? "Hier ist der Werdegang" : "Here's the career path"}:\n${text}`,
    };
  }

  if (
    has(
      "contact",
      "email",
      "reach",
      "hire",
      "available",
      "freelance",
      "get in touch",
      "kontakt",
      "erreichen",
      "einstellen",
      "verfügbar",
      "freiberuflich",
    )
  ) {
    return {
      text:
        lang === "de"
          ? "Am besten über das Kontaktformular — ich bringe dich jetzt dorthin."
          : "The best way is the contact form — I'll take you there now.",
      action: () => navigate("/contact"),
    };
  }

  return {
    text:
      lang === "de"
        ? "Da bin ich mir nicht sicher — frag mich gern nach Skills, Projekten, Erfahrung oder wie du Kontakt aufnehmen kannst."
        : "I'm not totally sure about that one — try asking about skills, projects, experience, or how to get in touch.",
    chips: quickActions(t),
  };
}

function quickActions(t) {
  return [
    { label: t.chips.skills, query: t.queries.skills },
    { label: t.chips.projects, query: t.queries.projects },
    { label: t.chips.experience, query: t.queries.experience },
    { label: t.chips.contact, query: t.queries.contact },
  ];
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(null);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = ui[lang].chatbot;

  // (Re)seed the greeting whenever the language changes, but only touch the
  // greeting message itself so an in-progress conversation isn't wiped.
  useEffect(() => {
    const greeting = {
      from: "bot",
      text: t.greeting(profile.name),
      chips: quickActions(t),
    };
    setMessages((prev) =>
      prev === null ? [greeting] : [greeting, ...prev.slice(1)],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  const handleSend = (text) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...(prev || []), { from: "user", text: trimmed }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = buildResponse(trimmed, lang, navigate);
      setMessages((prev) => [...(prev || []), { from: "bot", ...response }]);
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
        aria-label={open ? t.closeLabel : t.openLabel}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold-500 hover:bg-gold-400 text-ink shadow-2xl flex items-center justify-center transition-transform hover:scale-105"
      >
        {open ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-panel border border-line rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-up">
          <div className="px-5 py-4 bg-panel2 border-b border-line flex items-center gap-3">
            <img src="/ashgh.png" alt="" className="w-7 h-7 object-contain" />
            <div>
              <p className="text-sm font-semibold text-ivory leading-none">
                {t.askAbout(profile.name.split(" ")[0])}
              </p>
              <p className="text-xs text-mist mt-1">{t.headerSubtitle}</p>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
          >
            {(messages || []).map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "user" ? "flex justify-end" : "flex justify-start"
                }
              >
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

          <form
            onSubmit={onSubmit}
            className="p-3 border-t border-line flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.inputPlaceholder}
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
