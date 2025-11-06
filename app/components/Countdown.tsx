"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const targetDate = new Date("2025-11-07T23:59:59");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime(); // ✅ Fix: convert to timestamps
      const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
      setDaysLeft(days);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60 * 60); // update hourly
    return () => clearInterval(interval);
  }, []);

  if (daysLeft === null) return null;

  return (
    <p className="mt-4 text-white text-sm">
      Registration closes in{" "}
      <span className="font-semibold">{daysLeft}</span> day
      {daysLeft !== 1 && "s"}!
    </p>
  );
}

