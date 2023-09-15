import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORY_ITEMS } from '../constant';
import DogLogo from '../public/dog.png';
import PawIcon from './svg/PawIcon';

function CategoryOption() {
  return (
    <div className="flex justify-between items-center gap-10 w-full">
      {CATEGORY_ITEMS.map((category) => (
        <Link
          key={category}
          href={`/category/${category}`}
          className="flex flex-col justify-center items-center relative"
        >
          <PawIcon className="w-auto md:w-[153px] h-[149px] rotate-[-14.955deg] text-[#F8F5F3] top- absolute z-0" />
          <Image
            src={DogLogo}
            alt="paw-logo"
            className="w-[170px] h-[120.434px] z-10"
          />

          <p className="text-[#333] font-semibold capitalize z-10">
            {category}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default CategoryOption;
