import React from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div 
      className="bg-gray-300 rounded-xl pt-3 pb-5 pl-7   relative w-full overflow-hidden 
                  md:px-5 lg:px-12 xl:px-20 2xl:px-28" // Add horizontal margins for large devices
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center relative">
        <div className="flex flex-row justify-between items-center w-full">
          {/* Left content column */}
          <div className="w-1/2 space-y-2 mt-6 md:mt-8 z-10">
            <p className="text-base sm:text-lg text-gray-600 md:ml-4">
              {heroBanner.smallText}
            </p>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800  w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
  {heroBanner.midText}
</h3>

<div className='flex'>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500  w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] ">
<span className='text-white whitespace-nowrap'> {heroBanner.largeText2} </span>{heroBanner.largeText1} 
</h1>


</div>
            <div className="pt-1 md:pt-2 flex justify-start sm:justify-end md:justify-start ">
              <Link href={`/product/${heroBanner.product}`}>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-base sm:text-lg font-medium transition-colors 
                                 md:ml-4 sm:-ml-4 xs:-ml-2" // Adjust button position on smaller screens
                >
                  {heroBanner.buttonText}
                </button>
              </Link>
            </div>
          </div>

          {/* Right content column with adjusted image position */}
          {/* <div className="w-1/2 flex flex-col "> */}
            <div className="relative  mt-3 mb-7 mr-2  sm:right-[15%] xs:right-[15%] md:right-[15%] xl:right-[20%] 2xl:right-[40%] 3xl:right-[50%] " // Move image slightly to the left on desktop
            >
              <img
                src={urlFor(heroBanner.image)}
                alt="headphones"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] object-cover " // Increase image size
              />
            </div>
            
            <div className="absolute top-[83%] left-[75%] md:left-[90%] xl:left-[90%] 2xl:left-[90%] mt-1 " // Decrease description margin
            >
              <h5 className="font-bold text-sm sm:text-base mb-0.5 ">Description</h5>
              <p className="text-xs sm:text-sm text-gray-600 max-w-[180px] sm:max-w-[220px] md:max-w-[220px]">
                {heroBanner.desc}
              </p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;