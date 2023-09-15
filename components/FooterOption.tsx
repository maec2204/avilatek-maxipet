import React from "react";
import TwIcon from "./svg/TwIcon";
import IgIcon from "./svg/IgIcon";
import FbIcon from "./svg/FbIcon";

interface FooterOptionProps {
  footerOptionArray: Array<string>;
  iconsGroup?: boolean;
}

function FooterOption({ footerOptionArray, iconsGroup }: FooterOptionProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      {footerOptionArray.map((footerOption, index) => (
        <p
          key={footerOption}
          className={`${
            index > 0
              ? "text-secondary-500 text-[14px] pb-2 max-w-[240px]"
              : "text-primary-300 font-semibold text-[18px] pb-4"
          }

          `}
        >
          {footerOption}
        </p>
      ))}
      {iconsGroup && (
        <div className="flex justify-between items-center gap-2 text-secondary-500 text-[14px] pb-2 max-w-[240px]">
          <TwIcon className="w-[16.372px] h-[13px] cursor-pointer" />
          <IgIcon className="w-[13.098px] h-[13px] cursor-pointer" />
          <FbIcon className="w-[7.335px] h-[13px] cursor-pointer" />
        </div>
      )}
    </div>
  );
}

export default FooterOption;
