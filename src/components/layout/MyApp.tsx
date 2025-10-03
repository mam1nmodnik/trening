"use client";
import Gifts from "@/components/GIfts";
import MyHeader from "./MyHeader";
import Image from "next/image";

export default function MyApp() {
  return (
    <div className="">
      <MyHeader />
      <main className="flex justify-center   lg:mb-[150px]  sm:m-10  mt-5 mr-4 ml-4 mb-[20px]">
        <div className="max-w-[1216px] sm:mt-[50px] flex flex-col sm:gap-[100px] gap-[10px]">
          <h1 className="sm:text-[40px] text-[24px] font-bold text-white leading-[130%] tracking-[0.2rem] scale-x-100 font-stretch-expanded Montserrat">
            Выбери подходящий для себя
            <span className="text-yellow-400"> тариф</span>
          </h1>
          <div className="flex flex-col sm:gap-[100px] gap-[20px]">
            <div className="flex lg:flex-row flex-col sm:gap-[50px] gap-0 items-center justify-center tablet:text-2xl">
              <Image
                src="/human.svg"
                alt="human"
                width={368} 
                height={368} 
                className="lg:w-[368px] sm:w-[300px] w-[124px] sm:h-auto  h-[250px]"
              />
              <Gifts />
            </div>
            <div className="w-auto border-[#484D4E] border sm:p-[20px] p-[12px]  flex flex-col sm:gap-[30px] gap-[10px] Montserrat rounded-[30px]">
              <div className=" border-[#81FE95] bg-[#2D3233] border sm:pt-[16px] sm:pr-[30px] sm:pb-[18px] sm:pl-[30px] pt-[10px] pr-[18px] pb-[12px] pl-[18px] w-fit   rounded-[30px]">
                <p className="text-[#81FE95] font-medium sm:text-[28px] text-[18px] leading-[120%] Montserrat">
                  гарантия возврата 30 дней
                </p>
              </div>
              <p className="font-normal leading-[130%] sm:text-[24px] text-[14px] text-[#DCDCDC]">
                Мы уверены, что наш план сработает для тебя и ты увидишь видимые
                результаты уже через 4 недели! Мы даже готовы полностью вернуть
                твои деньги в течение 30 дней с момента покупки, если ты не
                получишь видимых результатов.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
