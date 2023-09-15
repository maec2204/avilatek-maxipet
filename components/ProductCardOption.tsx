import React from 'react';
import ProductCard from './ProductCard';

function ProductCardOption() {
  return (
    <div className='flex justify-between items-center gap-10 w-full'>
      {Array.from({ length: 5 }, (_, index) => (
        <ProductCard key={`product-card-${index}`} />
      ))}
    </div>
  );
}

export default ProductCardOption;
