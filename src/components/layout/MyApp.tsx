"use client";
import Gifts from "@/components/GIfts";
import MyHeader from "./MyHeader";
import Image from "next/image";

export default function MyApp() {
  return (
    <div className="">
      <MyHeader />
      <main className="flex justify-center lg:mb-[150px] h-screen m-10  ">
        <div className="max-w-[1200px] mt-[50px] flex flex-col gap-[100px]">
          <h1 className="md:text-[40px] text-[24px] font-bold text-white leading-[110%] Montserrat">
            Выбери подходящий для себя
            <span className="text-yellow-400"> тариф</span>
          </h1>
          <div className="flex flex-col gap-[100px]">
            <div className="flex lg:flex-row flex-col gap-[50px] items-center justify-center">
              <Image
                src="/human.svg"
                alt="human"
                width={368} // максимальная ширина картинки
                height={368} // укажи реальную высоту svg или квадратное значение
                className="lg:w-[368px] md:w-[300px] w-[200px] h-auto"
              />
              <Gifts />
            </div>
            <div className="w-auto border p-[20px] flex flex-col gap-[30px] Montserrat rounded-[30px]">
              <div className=" border-[#81FE95] border pt-[16px] pr-[30px] pb-[18px] pl-[30px] w-fit rounded-[30px]">
                <p className="text-[#81FE95] font-medium md:text-[28px] text-[18px] leading-[120%] Montserrat">
                  гарантия возврата 30 дней
                </p>
              </div>
              <p className="font-normal leading-[130%] md:text-[24px] text-[14px] text-[#DCDCDC]">
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
