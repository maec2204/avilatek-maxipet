import React from 'react';
import Image from 'next/image';
import { ImageBannerType } from '../types/ImageBannerType';

interface ImageBannerProps {
  imageArray: Array<ImageBannerType>;
}

function ImageBanner({ imageArray }: ImageBannerProps) {
  return (
    <div className='flex justify-stretch items-stretch py-14'>
      {imageArray.map((image) => (
        <Image
          key={image.alt}
          src={image.image}
          alt={image.alt}
          className='w-full'
        />
      ))}
    </div>
  );
}

export default ImageBanner;
