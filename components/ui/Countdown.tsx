"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 12);

  const [timeLeft, setTimeLeft] = useState(targetDate.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return (
    <div className="flex gap-4 mt-6">
      {[hours, minutes, seconds].map((value, index) => (
        <div
          key={index}
          className="bg-green-700 text-white w-20 h-20 rounded-2xl flex flex-col justify-center items-center shadow-lg"
        >
          <span className="text-2xl font-bold"> {value} </span>
          <span className="text-xs">
            {index === 0 ? "Hours" : index === 1 ? "Minutes" : "Seconds"}
          </span>
        </div>
      ))}
    </div>
  );
}