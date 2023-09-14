import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import ProductBannerWrapper from '../components/ProductBannerWrapper';
import { CATEGORY_TITLE, FEATURED_PRODUCT_TITLE } from '../constant';
import CategoryOption from '../components/CategoryOption';
import ProductCardOption from '../components/ProductCardOption';

function HomePage() {
  return (
    <div className='min-h-screen w-screen bg-white flex dark:bg-black'>
      <SectionWrapper>
        <ProductBannerWrapper title={CATEGORY_TITLE}>
          <CategoryOption />
        </ProductBannerWrapper>
        <ProductBannerWrapper title={FEATURED_PRODUCT_TITLE}>
          <ProductCardOption />
        </ProductBannerWrapper>
      </SectionWrapper>
    </div>
  );
}

export default HomePage;
