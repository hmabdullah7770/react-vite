// ImageGrid.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../../lib/client';

const Box = ({ boxes }) => {
  return (
    <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[1200px] mx-auto px-2 sm:px-0">
      {boxes?.map((box) => {
        // Check if box.image exists before trying to generate URL
        const imageUrl = box.image ? urlFor(box.image) : '';
        
        return (
          <Link href={box.href || '#'} key={box._id}>
            <div
              className="relative w-full aspect-square overflow-hidden rounded-md"
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={box.title || 'Category image'}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-orange-400 font-bold text-lg px-4 py-2 rounded-md">
                {box.title || 'Untitled'}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Box;
