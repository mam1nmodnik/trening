
import Timer from "@/components/UI/Time";

export default function MyHeader() {
  return (
    <header className="sm:h-[103px] h-[85px] bg-[#1D5B43] flex flex-col gap-[4px] text-center pt-[8px] pb-[8px]">
        <h1 className="sm:text-2xl text-[18px] font-semibold text-white   Montserrat">
          Успейте открыть пробную неделю
        </h1>
        <div className="flex justify-center gap-[8px]">
          <Timer />
        </div>
    </header>
  );
}
