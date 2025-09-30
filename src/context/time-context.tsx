"use client";
import { useContext, ReactNode, useState, useEffect, useRef } from "react";
import { createContext } from "react";

type TimeContextType = {
  seconds: number;
  formatTime: (sec: number) => string;
};

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export function TimeContextProvider({ children }: { children: ReactNode }) {
  const [seconds, setSeconds] = useState(120);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    ref.current = window.setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          if (ref.current) clearInterval(ref.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, []);

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <TimeContext.Provider value={{ seconds, formatTime }}>
      {children}
    </TimeContext.Provider>
  );
}

export function useTimeContext() {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error("useTimeContext must be used inside TimeContext.Provider");
  }
  return context;
}
