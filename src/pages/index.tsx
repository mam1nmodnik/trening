import MyApp from "@/components/layout/MyApp";
import { GiftContextProvider } from "@/context/gift-context";
import { TimeContextProvider } from "@/context/time-context";

export default function Home() {
  return (
    <GiftContextProvider>
      <TimeContextProvider>
        <MyApp />
      </TimeContextProvider>
    </GiftContextProvider>
  );
}
