import React from 'react';
import LocationIcon from './svg/LocationIcon';
import FbIcon from './svg/FbIcon';
import IgIcon from './svg/IgIcon';
import FramerIcon from './svg/FrameIcon';
import TwIcon from './svg/TwIcon';

function SocialsBar() {
  return (
    <div
      className="bg-[#E2081E] h-auto text-lg md:text-xl
    flex justify-end items-center gap-3 text-white px-10 md:px-20"
    >
      <div className="flex justify-center items-center  ">
        <LocationIcon className="h-[14px] w-[14px]" />
        <h4 className="font-medium text-[12px]">Bello monte</h4>
        <FramerIcon className="w-[10px] h-[10px]" />
      </div>

      <TwIcon className="w-[16.372px] h-[13px]" />
      <IgIcon className="w-[13.098px] h-[13px]" />
      <FbIcon className="w-[7.335px] h-[13px]" />
    </div>
  );
}

export default SocialsBar;
