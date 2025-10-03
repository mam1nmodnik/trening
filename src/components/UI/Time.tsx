"use client";
import { useTimeContext } from "@/context/time-context";
import Image from "next/image";


export default function Timer() {
  const { seconds , formatTime } = useTimeContext()

  return (
    <>
      {seconds <= 30 ? (
        <Image src="/StarR.svg" alt="" width={14} height={14} />
      ) : (
        <Image src="/StarW.svg" alt="" width={14} height={14} />
      )}
      <h1
        className={`lg:text-[40px] sm:text-[32px] text-[28px] font-bold ${
          seconds <= 30 ? "text-red-600 animate-blink" : "text-white"
        }  Raleway`}
      >
        {formatTime(seconds)}
      </h1>
      {seconds <= 30 ? (
        <Image src="/StarR.svg" alt="" width={14} height={14} />
      ) : (
        <Image src="/StarW.svg" alt="" width={14} height={14} />
      )}{" "}
    </>
  );
}
