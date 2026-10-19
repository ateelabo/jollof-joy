"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
}

export default function Typewriter({
  words,
  speed = 120,
  deleteSpeed = 70,
  delay = 1500,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setDeleting(true), delay);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, speed, deleteSpeed, delay]);

  return (
    <span className="text-yellow-400">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}