import CustomCheckbox from "@/components/UI/CustomCheckBox";
import { useEffect, useState } from "react";
import { getTariffs, getTariffsType } from "@/API/getTariffs";
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
      <div className="absolute top-0 lg:left-15  bg-[#FD5656] rounded-b-[8px] md:pt-[5px] md:pr-[8px] md:pb-[5px] md:pl-[8px] pt-[3px] pr-[6px] pb-[3px] pl-[6px]">
        <p className="Montserrat text-[#FFFFFF] font-medium text-[22px]">
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

  return (
    <div className="flex flex-col gap-[16px]">
      <div className="grid lg:grid-cols-3 gap-[16px] ">
        {gifts
          ?.map((item) => (
            <div
              key={item.full_price}
              onClick={() => activeGift(item.full_price)}
              className="relative flex flex-col justify-end" 
            >
              {seconds !== 0 && procent(item.full_price, item.price)}
              {item.full_price == 18990 ? (
                <p className="absolute right-4 top-2 Montserrat text-[#FDB056] md:text-[22px] text-[16px] font-medium">
                  хит!
                </p>
              ) : null}
              <div
                className={`${
                  item.full_price == 18990
                    ? "lg:col-span-3 lg:pt-[30px] lg:pr-[80px] lg:pb-[36px] lg:pl-[19px] lg:flex-row lg:justify-end  lg:gap-[40px] "
                    : "lg:pt-[70px] lgpr-[21px] lg:pb-[26px] lg:pl-[21px] lg:flex-col   lg:gap-15 lg:h-[335px]"
                }  w-full  bg-[#313637] pt-[20px] pr-[16px] pb-[20px] md:pl-[30px] pl-[20px] ${
                  item.is_best ? "border-[#FDB056] " : "border-[#484D4E]"
                }  border-[2px] flex items-center justify-between  rounded-[40px]  cursor-pointer`}
              >
                <div className="flex flex-col text-center items-center justify-center w-fit">
                  <p className="Montserrat text-white font-medium md:text-[26px] text-[18px] ">
                    {item.period}
                  </p>
                  <span className="flex flex-col text-center justify-center relative w-fit ">
                    {seconds !== 0 ? (
                      <>
                        <p
                          className={`Montserrat ${
                            item.is_best ? "text-[#FDB056] " : "text-white"
                          }  font-semibold lg:text-[50px]  text-[30px] `}
                        >
                          {item.price} ₽
                        </p>
                        <p className="text-[#919191] font-normal text-[15px] absolute bottom-[-15px] right-0">
                          <s>{item.full_price} ₽</s>
                        </p>
                      </>
                    ) : (
                      <p
                        className={`Montserrat ${
                          item.is_best ? "text-[#FDB056] " : "text-white"
                        }   font-semibold lg:text-[50px]  text-[30px] `}
                      >
                        {item.full_price} ₽
                      </p>
                    )}
                  </span>
                </div>
                <div className="h-fit min-w-[50px]">
                  <p className="Montserrat text-white font-normal md:text-[16px] text-[14px] leading-[130%]  ">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))
          .reverse()}
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className=" bg-[#313637] flex flex-row items-start gap-2  pt-[18px] pr-[20px] pb-[18px] pl-[20px] md:w-[500px] w-full rounded-[20px]">
          <Image src="/alert.svg" width={24} height={26} alt="human" />
          <p className="Montserrat text-white font-normal md:text-[16px]  text-[12px]">
            Следуя плану на 3 месяца и более, люди получают в 2 раза лучший
            результат, чем за 1 месяц
          </p>
        </div>
        <div className="w-[100%]">
          <CustomCheckbox setCheckBox={setCheckBox} color={color} />
        </div>
        <button
          className="bg-[#FDB056] md:w-[352px] w-full h-[66px] text-center rounded-[20px] Montserrat font-bold text-[22px] cursor-pointer animate-blink"
          onClick={byButton}
        >
          Купить
        </button>
        <p className="Montserrat font-normal md:text-[14px] text-[12px] text-[#9B9B9B]">
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
