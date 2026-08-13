// src/components/TypingRoles.jsx
import React, { useEffect, useState } from "react";

// Cycles through a list of role labels with a simple type/erase effect.
const TypingRoles = ({ roles, className = "" }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | erasing

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1200);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 900);
    } else if (phase === "erasing") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-gold-400 ml-1 align-middle animate-blink" />
    </span>
  );
};

export default TypingRoles;
