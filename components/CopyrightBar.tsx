import React from 'react';
import MountainIcon from './svg/MountainIcon';
import { COPYRIGHT_TITLE } from '../constant';
import DogHouseIcon from './svg/DogHouseIcon';
import TreeIcon from './svg/TreeIcon';

function CopyrightBar() {
  return (
    <div className="relative">
      <div className="flex justify-between items-end w-full px-28">
        <DogHouseIcon />
        <TreeIcon />
      </div>
      <div className="flex justify-center items-center gap-2 h-[36px] w-full bg-primary-300">
        <p className="text-white text-[14px]">{COPYRIGHT_TITLE}</p>
        <MountainIcon />
      </div>
    </div>
  );
}

export default CopyrightBar;
