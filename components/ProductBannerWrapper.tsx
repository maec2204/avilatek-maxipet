import React from 'react';
import { IPSUM_TITLE } from '../constant';

interface ProductBannerWrapperProps {
  title: string;
  children: React.ReactNode;
}

function ProductBannerWrapper({ title, children }: ProductBannerWrapperProps) {
  return (
    <div className='flex flex-col justify-center items-start w-full py-14'>
      <p className='text-secondary-500 text-[14px]'>{IPSUM_TITLE}</p>
      <h3 className='font-semibold text-primary-300 text-[20px] uppercase pb-10'>
        {title}
      </h3>
      {children}
    </div>
  );
}

export default ProductBannerWrapper;
