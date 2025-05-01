

// Product.js
"use client"
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';

const Product = ({ product: { image, name, slug, price, discount }, customclass }) => {
  const imageUrl = urlFor(image && image[0]);
  console.log('Product Image URL:', imageUrl);

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className={` cursor-pointer  	 transform scale-100 transition-transform duration-500 ease-in-out hover:scale-110 text-gray-800 ${customclass}`}>
          <img
            src={imageUrl}
            alt={name}
            onError={(e) => console.error('Image loading error:', e)}
            className="product-image  bg-gray-200  transform scale-100 transition-transform duration-500 ease-in-out  [@media(max-width:399px)]:h-44 [@media(max-width:399px)]:w-40 h-52 w-48  md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80  "/>
          <p className="product-name font-medium text-base sm:text-xs">
            {name}
          </p>
          <p className="product-price font-bold text-black mt-1 ">Rs. {price}</p>
          <h5 className="product-discount flex text-xs sm:text-[10px]">
            {discount}
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;


