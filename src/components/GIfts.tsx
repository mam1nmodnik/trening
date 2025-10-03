import CustomCheckbox from "@/components/UI/CustomCheckBox";
import { useState } from "react";
import Image from "next/image";
import { useGiftContext } from "@/context/gift-context";
import { useTimeContext } from "@/context/time-context";

export default function Gifts() {
  const { gifts, setGifts } = useGiftContext();
  const { seconds } = useTimeContext();
  const [checkBox, setCheckBox] = useState<boolean>(true);
  const [color, setColor] = useState<boolean>(false);
  function procent(full_price: number, price: number) {
    const result = (price * 100) / full_price;
    const res = 100 - result;
    return (
      <div
        className={`absolute top-[-2px] ${
          full_price == 18990 ? "right-15 " : "right-7"
        } lg:left-15 lg:right-auto bg-[#FD5656] rounded-b-[8px] sm:pt-[5px] sm:pr-[8px] sm:pb-[5px] sm:pl-[8px] pt-[3px] pr-[6px] pb-[3px] pl-[6px]`}
      >
        <p className="font-Montserrat text-[#FFFFFF] font-medium text-[16px]">
          -{res.toFixed(0)}%
        </p>
      </div>
    );
  }

  function activeGift(price: number) {
    const activeGift = gifts?.map((item) => {
      if (item.full_price === price) {
        item.is_best = true;
      } else {
        item.is_best = false;
      }
      return item;
    });
    setGifts(activeGift);
  }
  function byButton() {
    return checkBox ? setColor(false) : setColor(true);
  }
  const textMobile = [
    {
      text: "Чтобы просто начать",
    },
    {
      text: "Получить первые результаты",
    },
    {
      text: `Привести тело в порядок`,
    },
    {
      text: "Всегда быть в форме",
    },
  ];

  const getTextMob = (full_price: number) => {
    const index = gifts?.findIndex((item) => item.full_price === full_price);
    return index !== -1 && index !== undefined ? textMobile[index].text : "";
  };

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="grid lg:grid-cols-3 sm:gap-[16px] gap-[7px]">
        {gifts
          ?.map((item) => (
            <div
              key={item.full_price}
              className={`${
                item.full_price == 18990
                  ? "lg:col-span-3 lg:pt-[30px] lg:pr-[19px] lg:pb-[36px] lg:pl-[80px] lg:flex-row  lg:gap-[40px] "
                  : "lg:pt-[70px] lgpr-[21px] lg:pb-[26px] lg:pl-[21px] lg:flex-col  lg:gap-15 lg:h-[335px]"
              } ${item.is_best ? "border-[#FDB056] " : "border-[#484D4E]"} 
                w-full  bg-[#313637] pt-[20px] pr-[16px] pb-[20px] pl-[30px] border-[2px] flex items-center justify-around  sm:rounded-[34px] rounded-[20px] sm:h-auto relative cursor-pointer`}
              onClick={() => activeGift(item.full_price)}
            >
              {seconds !== 0 && procent(item.full_price, item.price)}

              {item.full_price == 18990 ? (
                <p className="absolute md:right-4 md:top-3 right-2 top-0.5 Montserrat text-[#FDB056] sm:text-[22px] text-[16px] leading-[130%] tracking-[130%] scale-x-100 font-medium">
                  хит!
                </p>
              ) : null}
              <div className="flex flex-col sm:text-center text-left justify-center w-fit sm:gap-[20px] gap-[10px] ">
                <p className="Montserrat text-white font-medium xl:text-[26px] lg:text-[24px] text-[18px] leading-[130%] tracking-[0.05em] scale-x-120 ">
                  {item.period}
                </p>
                <div className=" justify-center relative max-w-[200px] tabular-nums whitespace-pre-line gap-[10px]">
                  {seconds !== 0 ? (
                    <>
                      <p
                        className={`Montserrat ${
                          item.is_best ? "text-[#FDB056]" : "text-white"
                        } font-semibold xl:text-[3.125rem] lg:text-[2.125rem] text-[1.875rem] leading-[100%] tracking-[0.05em] scale-x-120`}
                      >
                        {item.price} ₽
                      </p>
                      <p className="text-[#919191] text-right font-normal text-[15px] leading-[130%] tracking-[0.05em]">
                        <s>{item.full_price} ₽</s>
                      </p>
                    </>
                  ) : (
                    <p
                      className={`Montserrat ${
                        item.is_best ? "text-[#FDB056]" : "text-white"
                      } font-semibold xl:text-[3.125rem] lg:text-[2.125rem] text-[1.875rem] leading-[130%] tracking-[0.05em] scale-x-120 `}
                    >
                      {item.full_price} ₽
                    </p>
                  )}
                </div>
              </div>
              <div className="h-fit text-left xl:max-w-[300px] lg:max-w-[250px] sm:max-w-[150px] max-w-[100px]  ">
                <p className="Montserrat text-white font-normal sm:text-[16px] text-[14px] leading-[130%] sm:hidden block">
                  {getTextMob(item.full_price)}
                </p>
                <p className="Montserrat text-white font-normal sm:text-[16px] text-[14px] leading-[130%] sm:block hidden ">
                  {item.text}
                </p>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className=" bg-[#313637] flex flex-row items-start gap-2 sm:pt-[18px] sm:pr-[20px] sm:pb-[18px] sm:pl-[20px] pt-[14px] pr-[20px] pb-[14px] pl-[12px] lg:w-[500px] w-full rounded-[20px]">
          <Image src="/alert.svg" width={24} height={26} alt="human" />
          <p className="Montserrat text-white font-normal sm:text-[16px] text-[12px]">
            Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
            результат, чем за 1 месяц
          </p>
        </div>
        <div className="w-[100%]">
          <CustomCheckbox setCheckBox={setCheckBox} color={color} />
        </div>
        <button
          className="bg-[#FDB056] sm:w-[352px] w-full sm:h-[66px] h-[55px] text-center rounded-[20px] Montserrat font-bold sm:text-[22px] text-[18px] cursor-pointer animate-blink"
          onClick={byButton}
        >
          Купить
        </button>
        <p className="Montserrat font-normal sm:text-[14px] text-[10px] text-[#9B9B9B]">
          Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
          денежных средств для получения пожизненного доступа к приложению.
          Пользователь соглашается, что данные кредитной/дебетовой карты будут
          сохранены для осуществления покупок дополнительных услуг сервиса в
          случае желания пользователя.
        </p>
      </div>
    </div>
  );
}
