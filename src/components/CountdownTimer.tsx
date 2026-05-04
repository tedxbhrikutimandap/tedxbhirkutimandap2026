"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2026-06-06T10:00:00+05:45");

  const calculateTimeLeft = () => {
    const diff = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  // Initialize with zeros to avoid hydration mismatch (server vs client time)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center">
          <div className="bg-surface-card border border-white/[0.06] rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[60px] sm:min-w-[80px] text-center md:backdrop-blur-sm">
            <span className="text-2xl sm:text-4xl font-[900] text-white tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
