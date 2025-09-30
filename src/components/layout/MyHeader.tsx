
import Timer from "@/components/UI/Time";

export default function MyHeader() {
  return (
    <header className="   h-[103px] bg-[#1D5B43] text-center flex flex-col gap-[4px] pt-[8px] pb-[8px]">
      <div className=" w-full top-0 h-[103px] bg-[#1D5B43] text-center flex flex-col gap-[4px] pt-[8px] pb-[8px]" >
        <h1 className="lg:text-2xl md:text-[18px] text-[14px] font-semibold text-white leading-[130%] Montserrat">
          Успейте открыть пробную неделю
        </h1>
        <div className="flex justify-center gap-[8px]">
          <Timer />
        </div>
      </div>
    </header>
  );
}
