// src/i18n/ui.js
// UI chrome strings — navigation, buttons, headings, form labels.
// Content data (bio, skills, projects, experience) lives in src/data/portfolio.js.

export const ui = {
  en: {
    nav: { home: "Home", about: "About", work: "Projects", skills: "Skills", contact: "Contact" },
    home: {
      eyebrow: "// frontend developer · game programmer · instructor",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
    },
    about: {
      eyebrow: "<About />",
      title: "About Me",
      expEyebrow: "<Experience />",
      expTitle: "Where I've worked",
    },
    skills: {
      eyebrow: "<Skills />",
      title: "My Skills",
      subtitle: "Here are some of the technologies and tools I work with",
    },
    works: {
      eyebrow: "<Projects />",
      title: "My Projects",
      subtitle: "Projects I've worked on over the past few years",
      github: "GitHub",
      demo: "Live Demo",
    },
    contact: {
      eyebrow: "<Contact />",
      title: "Get in Touch",
      subtitle: "I'd love to hear from you. Fill out the form below and I'll get back to you as soon as I can.",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email",
      message: "Message",
      messagePlaceholder: "Type your message here",
      send: "Send Message",
      sending: "Sending…",
      success: "Message sent — thanks for reaching out! I'll reply soon.",
      error: "Something went wrong sending that. Please check the EmailJS setup, or try again in a moment.",
    },
    footer: {
      rights: "All rights reserved.",
    },
    chatbot: {
      headerSubtitle: "Usually replies instantly",
      askAbout: (name) => `Ask about ${name}`,
      inputPlaceholder: "Ask a question…",
      greeting: (name) =>
        `Hey, I'm ${name}'s portfolio assistant. Ask me about skills, projects, experience, or how to get in touch.`,
      chips: { skills: "Skills", projects: "Projects", experience: "Experience", contact: "Contact" },
      queries: {
        skills: "What are your skills?",
        projects: "Show me your projects",
        experience: "What's your experience?",
        contact: "How can I contact you?",
      },
      openLabel: "Open chat",
      closeLabel: "Close chat",
    },
  },
  de: {
    nav: { home: "Start", about: "Über mich", work: "Projekte", skills: "Skills", contact: "Kontakt" },
    home: {
      eyebrow: "// Frontend-Entwickler · Game Programmer · Dozent",
      viewProjects: "Projekte ansehen",
      getInTouch: "Kontakt aufnehmen",
    },
    about: {
      eyebrow: "<Über mich />",
      title: "Über mich",
      expEyebrow: "<Erfahrung />",
      expTitle: "Wo ich gearbeitet habe",
    },
    skills: {
      eyebrow: "<Skills />",
      title: "Meine Skills",
      subtitle: "Hier sind einige der Technologien und Tools, mit denen ich arbeite",
    },
    works: {
      eyebrow: "<Projekte />",
      title: "Meine Projekte",
      subtitle: "Projekte, an denen ich in den letzten Jahren gearbeitet habe",
      github: "GitHub",
      demo: "Live-Demo",
    },
    contact: {
      eyebrow: "<Kontakt />",
      title: "Kontakt aufnehmen",
      subtitle: "Ich freue mich von dir zu hören. Fülle das Formular aus und ich melde mich so schnell wie möglich.",
      name: "Vollständiger Name",
      namePlaceholder: "Gib deinen vollständigen Namen ein",
      email: "E-Mail-Adresse",
      emailPlaceholder: "Gib deine E-Mail-Adresse ein",
      message: "Nachricht",
      messagePlaceholder: "Schreib hier deine Nachricht",
      send: "Nachricht senden",
      sending: "Wird gesendet…",
      success: "Nachricht gesendet — danke für deine Nachricht! Ich melde mich bald.",
      error: "Beim Senden ist etwas schiefgelaufen. Bitte prüfe die EmailJS-Einrichtung oder versuche es gleich noch einmal.",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
    },
    chatbot: {
      headerSubtitle: "Antwortet meist sofort",
      askAbout: (name) => `Frag mich über ${name}`,
      inputPlaceholder: "Stell eine Frage…",
      greeting: (name) =>
        `Hey, ich bin der Portfolio-Assistent von ${name}. Frag mich nach Skills, Projekten, Erfahrung oder wie du Kontakt aufnehmen kannst.`,
      chips: { skills: "Skills", projects: "Projekte", experience: "Erfahrung", contact: "Kontakt" },
      queries: {
        skills: "Was sind deine Skills?",
        projects: "Zeig mir deine Projekte",
        experience: "Was ist deine Erfahrung?",
        contact: "Wie kann ich dich kontaktieren?",
      },
      openLabel: "Chat öffnen",
      closeLabel: "Chat schließen",
    },
  },
};
