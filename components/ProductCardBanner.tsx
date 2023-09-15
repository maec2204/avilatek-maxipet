import Image, { StaticImageData } from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

interface ProductCardBannerProps {
  reverse?: boolean;
  altImage: string;
  image: StaticImageData;
}

function ProductCardBanner({
  reverse,
  altImage,
  image,
}: ProductCardBannerProps) {
  return (
    <div
      className={` flex w-full ${reverse ? "flex-row-reverse" : "flex-row"}`}
    >
      <Image src={image} className="w-4/12" alt={altImage} />
      <div className="grid grid-cols-3 grid-rows-2 gap-3 w-8/12">
        {Array.from({ length: 6 }, (_, index) => (
          <ProductCard key={`card-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default ProductCardBanner;
