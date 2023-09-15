import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import MaxiPetLogo from "../public/maxipet-logo.png";
import LocationIcon from "./svg/LocationIcon";
import PetIcon from "./svg/PetIcon";
import UserIcon from "./svg/UserIcon";
import ShoppingIcon from "./svg/ShoppingIcon";
import NavOption from "./NavOption";

function SearchNav() {
  return (
    <div className="bg-[#fff] flex flex-col px-10 md:px-20 py-5 gap-3">
      <div
        className=" h-auto text-lg md:text-xl
        flex justify-between items-center "
      >
        <Link href="/">
          <Image
            src={MaxiPetLogo}
            className="w-[169.464px] h-[46px]"
            alt="logo"
          />
        </Link>

        <SearchBar />

        <div className="flex justify-center items-center gap-3 w-[169.464px]">
          <LocationIcon className="w-[16px] h-[16px] cursor-pointer text-primary-600" />
          <PetIcon className="w-[16px] h-[16px] cursor-pointer" />
          <UserIcon className="w-[16px] h-[16px] cursor-pointer" />
          <ShoppingIcon className="w-[16px] h-[16px] cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-evenly items-center">
        <NavOption />
      </div>
    </div>
  );
}

export default SearchNav;
