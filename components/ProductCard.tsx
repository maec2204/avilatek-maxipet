import React from "react";
import Image from "next/image";
import PetProdcut from "../public/pet_product.png";
import { FIXED_PRICE, PRODUCT_NAME_TITLE } from "../constant";
import PawIcon from "./svg/PawIcon";
import AddCartButton from "./AddCartButton";

function ProductCard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={PetProdcut}
        className="w-[144.481px] h-[200px]"
        alt="pet-product"
      />
      <div className="flex flex-col justify-center items-start h-full pt-6 pb-2">
        <p className="font-semibold text-[14px] text-[#333]">
          {PRODUCT_NAME_TITLE}
        </p>
        <div className="flex justify-start items-center gap-1">
          <PawIcon className="w-[12.577px] h-[12px] text-secondary-300" />
          <PawIcon className="w-[12.577px] h-[12px] text-secondary-300" />
          <PawIcon className="w-[12.577px] h-[12px] text-secondary-300" />
        </div>
        <p className="font-normal text-[14px] text-neutral-600">
          {FIXED_PRICE}
        </p>
      </div>
      <AddCartButton />
    </div>
  );
}

export default ProductCard;
