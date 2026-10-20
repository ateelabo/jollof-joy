
"use client";

import { useEffect, useState } from "react";

const COUNTDOWN_DURATION = 12 * 60 * 60 * 1000;

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    // Set the target only after the component mounts in the browser.
    const targetTime = Date.now() + COUNTDOWN_DURATION;

    const updateCountdown = () => {
      setTimeLeft(Math.max(0, targetTime - Date.now()));
    };

    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const totalSeconds =
    timeLeft === null ? 12 * 60 * 60 : Math.floor(timeLeft / 1000);

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");

  const minutes = String(
    Math.floor((totalSeconds % 3600) / 60)
  ).padStart(2, "0");

  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return (
    <div
      className="flex flex-wrap gap-4 mt-6"
      aria-label="Special offer countdown"
    >
      {[hours, minutes, seconds].map((value, index) => (
        <div
          key={index}
          className="bg-green-700 text-white w-20 h-20 rounded-2xl flex flex-col justify-center items-center shadow-lg"
        >
          <span className="text-2xl font-bold">{value}</span>

          <span className="text-xs">
            {index === 0
              ? "Hours"
              : index === 1
                ? "Minutes"
                : "Seconds"}
          </span>
        </div>
      ))}
    </div>
  );
}