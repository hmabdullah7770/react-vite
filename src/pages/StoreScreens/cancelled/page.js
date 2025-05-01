'use client';  // Add this for Next.js 13+ client components

import React from 'react';
import Link from 'next/link';

const cancelled = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-[400px] mx-auto">
        <Link 
          href="/"
          className="inline-block w-full"
        >
          <button
            type="button"
            className="w-full max-w-[400px] px-3 py-2.5 mt-10 
                     bg-[#FE7847] text-white 
                     rounded-[15px] border-none 
                     text-xl uppercase 
                     cursor-pointer
                     transform transition-transform duration-500 ease-in-out
                     hover:scale-110
                     sm:mx-0
                     max-[410px]:ml-4"
          >
            <span className="block">Your order is cancelled</span>
            <span className="block">Continue Shopping</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default cancelled;