import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/ui";

// EmailJS setup checklist (fixes "form submits but nothing arrives"):
// 1. Log into dashboard.emailjs.com and open your Email Template.
// 2. The template's "To Email" field must be YOUR real inbox address,
//    typed directly (not a variable) — this is the #1 cause of vanished
//    submissions, since the form itself never carries your address.
// 3. The template body must reference the SAME variable names sent below:
//    {{user_name}}, {{user_email}}, {{message}}. If your template uses
//    different variable names, either rename them to match, or update the
//    `name="..."` attributes on the inputs below to match your template.
// 4. Service ID / Template ID / Public Key below must match your EmailJS
//    account exactly (Account > API Keys for the public key).
const SERVICE_ID = "service_k38cald";
const TEMPLATE_ID = "template_bnnrxc9";
const PUBLIC_KEY = "_ZItVJtf8deZIWKCN";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const { lang } = useLanguage();
  const t = ui[lang].contact;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setStatus("success");
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS error:", error?.text || error);
        setStatus("error");
      }
    );
  };

  return (
    <div className="min-h-screen bg-ink bg-radial-fade flex items-center px-6 py-28 mt-8">
      <div className="bg-panel border border-line p-8 md:p-14 rounded-2xl shadow-2xl max-w-2xl mx-auto w-full">
        <span className="font-mono text-sm text-gold-400 block text-center">
          {t.eyebrow}
        </span>
        <h2 className="font-display text-4xl font-semibold text-ivory text-center mt-3 mb-4">
          {t.title}
        </h2>
        <p className="text-base text-ivory/70 text-center mb-10">{t.subtitle}</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label htmlFor="user_name" className="block text-sm font-medium text-ivory/80 mb-2">
              {t.name}
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              required
              className="w-full p-3.5 bg-panel2 text-ivory border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              placeholder={t.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="user_email" className="block text-sm font-medium text-ivory/80 mb-2">
              {t.email}
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              required
              className="w-full p-3.5 bg-panel2 text-ivory border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition"
              placeholder={t.emailPlaceholder}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ivory/80 mb-2">
              {t.message}
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              className="w-full p-3.5 bg-panel2 text-ivory border border-line rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition resize-none"
              placeholder={t.messagePlaceholder}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3.5 px-6 bg-gold-500 text-ink font-semibold rounded-lg hover:bg-gold-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? t.sending : t.send}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-emerald-400 pt-1" role="status">
              {t.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 pt-1" role="alert">
              {t.error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
