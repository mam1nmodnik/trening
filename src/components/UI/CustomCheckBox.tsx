import Image from "next/image";
import {  useEffect, useState } from "react";

export default function CustomCheckbox({
  setCheckBox,
  color,
}: {
  setCheckBox: React.Dispatch<React.SetStateAction<boolean>>;
  color: boolean;
}) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setCheckBox(checked);
  }, );
  return (
    <label className="flex items-center gap-2 cursor-pointer text-[#CDCDCD] h-fit ">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <div
        className={`min-w-[25px] min-h-[25px] flex flex-wrap items-center justify-center text-[12px] rounded border-2 transition-all
        ${
          checked
            ? "border-gray-500"
            : color
            ? "border-red-500"
            : "border-gray-500"
        }
        `}
      >
        {checked && <Image src="./Vector.svg" width={20} height={15} alt="" />}
      </div>
      <p className="sm:text-[16px] text-[12px]">
        Я согласен с {" "}
        <span className="underline underline-offset-1">
          офертой рекуррентных платежей
        </span>{" "}
        и{" "}
        <span className="underline underline-offset-1">
          Политикой конфиденциальности
        </span>
      </p>
    </label>
  );
}
