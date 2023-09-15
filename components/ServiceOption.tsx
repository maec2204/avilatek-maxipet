import Image from 'next/image';
import React from 'react';
import DogLogo from '../public/dog.png';
import { SERVICE_ITEMS } from '../constant';

function ServiceOption() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-x-12 gap-y-8 w-full h-full">
      {SERVICE_ITEMS.map((service, index) => (
        <div
          key={`service-${index}`}
          className="flex flex-col justify-center items-start cursor-pointer"
        >
          <Image
            src={DogLogo}
            className=" w-[120px] h-[100px]"
            alt={`serviceAlt-${index}`}
          />

          <h4 className="font-semibold text-[16px] text-[#333] capitalize">
            {service}
          </h4>
          <p className="text-[14px] font-normal text-[#333] pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
            molestie rhoncus id nunc, porta leo tempus facilisi.
          </p>
        </div>
      ))}
    </div>
  );
}

export default ServiceOption;
