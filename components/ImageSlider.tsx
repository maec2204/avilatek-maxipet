import Image from 'next/image';
import React, { useState } from 'react';
import { ImageBannerType } from '../types/ImageBannerType';

interface ImageSliderProps {
  images: Array<ImageBannerType>;
}

function ImageSlider({ images }: ImageSliderProps) {
  const [current, setCurrent] = useState<number>(0);

  const handleSliderNavigation = (imageIndex) => {
    setCurrent(imageIndex);
  };

  return (
    <div className='w-screen h-[580px] relative'>
      <Image
        src={images[current].image}
        alt={images[current].alt}
        className='w-full h-full object-cover'
      />
      <div className='absolute bottom-0 left-0 right-0 flex justify-center items-center pb-8'>
        <div className='flex justify-center items-center w-1/3'>
          {images.map((_, index) => (
            <button
              key={index}
              type='button'
              onClick={() => handleSliderNavigation(index)}
              className={`h-[6px] mx-1 rounded-full ${
                index === current ? 'bg-primary-300' : 'bg-secondary-100'
              }`}
              style={{ width: `${100 / images.length}%` }}
            >
              {' '}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
