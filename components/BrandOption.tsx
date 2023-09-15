import React from "react";
import Image from "next/image";
import { BEST_BRANDS_DESCRIPTION } from "../constant";
import BrandImage from "../public/brand_choice.png";

function BrandOption() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-12 md:grid-rows-1 justify-center items-center h-full w-full gap-x-10">
      <div className=" md:col-span-5">
        <p className="text-[16px] font-normal line-clamp-2 text-[#333] text-left md:first-letter:pt-2">
          {BEST_BRANDS_DESCRIPTION}
        </p>
      </div>
      <div className="flex justify-between items-center pt-5 md:pt-0 md:col-span-7">
        {Array.from({ length: 4 }, (_, index) => (
          <Image
            src={BrandImage}
            alt={`brandAlt-image-${index}`}
            key={`brand-image-${index}`}
          />
        ))}
      </div>
    </div>
  );
}

export default BrandOption;
