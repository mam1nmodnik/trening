"use client";
import { useContext, ReactNode, useState, useEffect } from "react";
import { createContext } from "react";
import { getTariffsType, getTariffs } from "../API/getTariffs";

type GiftContextType = {
  gifts: getTariffsType[] | undefined;
  setGifts: React.Dispatch<React.SetStateAction<getTariffsType[] | undefined>>;
};

const GiftContext = createContext<GiftContextType | undefined>(undefined);

export function GiftContextProvider({ children }: { children: ReactNode }) {
  const [gifts, setGifts] = useState<getTariffsType[] | undefined>();
  useEffect(() => {
    async function preload() {
      const result = await getTariffs();
      setGifts(result);
    }
    preload();
  }, []);

  return (
    <GiftContext.Provider value={{ gifts, setGifts }}>
      {children}
    </GiftContext.Provider>
  );
}
export function useGiftContext() {
  const context = useContext(GiftContext);
  if (!context) {
    throw new Error(
      "useGiftContext must be used inside GiftContext.Provider"
    );
  }
  return context;
}
