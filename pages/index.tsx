import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProductBannerWrapper from '../components/ProductBannerWrapper';
import {
  CATEGORY_TITLE,
  FEATURED_PRODUCT_TITLE,
  POPULAR_PRODUCT_TITLE,
} from '../constant';
import CategoryOption from '../components/CategoryOption';
import ProductCardOption from '../components/ProductCardOption';
import ProductCardBanner from '../components/ProductCardBanner';
import FirstProductBanner from '../public/first_product_banner.png';
import FirstImageBanner from '../public/first_image_banner.png';
import SecondImageBanner from '../public/second_image_banner.png.png';
import ThirdImageBanner from '../public/third_image_banner.png';
import ImageBanner from '../components/ImageBanner';
import { ImageBannerType } from '../types/ImageBannerType';
import ImageSlider from '../components/ImageSlider';
import SliderImage from '../public/slider_image.png';

const SliderOptions: Array<ImageBannerType> = [
  { image: SliderImage, alt: 'first-slider' },
  { image: SecondImageBanner, alt: 'second-slider' },
  { image: FirstImageBanner, alt: 'third-slider' },
  { image: SecondImageBanner, alt: 'four-slider' },
];

const FirstImageBannerOptions: Array<ImageBannerType> = [
  { image: FirstImageBanner, alt: 'first-image-banner' },
  { image: SecondImageBanner, alt: 'second-image-banner' },
];

const SecondImageBannerOptions: Array<ImageBannerType> = [
  { image: ThirdImageBanner, alt: 'third-image-banner' },
];

function HomePage() {
  return (
    <div className='min-h-screen w-screen bg-white flex flex-col dark:bg-black'>
      <ImageSlider images={SliderOptions} />
      <SectionWrapper>
        <ProductBannerWrapper title={CATEGORY_TITLE}>
          <CategoryOption />
        </ProductBannerWrapper>
        <ProductBannerWrapper title={FEATURED_PRODUCT_TITLE}>
          <ProductCardBanner
            altImage='first-product-banner'
            image={FirstProductBanner}
          />
        </ProductBannerWrapper>
        <ImageBanner imageArray={FirstImageBannerOptions} />
        <ProductBannerWrapper title={POPULAR_PRODUCT_TITLE}>
          <ProductCardOption />
        </ProductBannerWrapper>
        <ImageBanner imageArray={SecondImageBannerOptions} />
        <ProductBannerWrapper title={FEATURED_PRODUCT_TITLE}>
          <ProductCardBanner
            altImage='first-product-banner'
            image={FirstProductBanner}
            reverse
          />
        </ProductBannerWrapper>
      </SectionWrapper>
    </div>
  );
}

export default HomePage;
