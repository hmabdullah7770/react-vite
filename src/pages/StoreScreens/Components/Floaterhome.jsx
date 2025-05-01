// FloaterHome.js
import React from 'react';
import Link from 'next/link';
import { FiHome } from 'react-icons/fi';

const FloaterHome = () => {
  return (
    <div className="fixed bottom-8 right-8 flex items-center justify-center bg-red-500 w-16 h-16 md:w-14 md:h-14 rounded-full shadow-lg shadow-red-300 hover:translate-y-[-0.75rem] transition-transform duration-200 ease-in-out">
      <Link href="/" passHref>
        <a className="flex items-center justify-center w-10 h-10 md:w-8 md:h-8 text-white bg-transparent rounded-full">
          <FiHome className="text-2xl md:text-lg" />
        </a>
      </Link>
    </div>
  );
};

export default FloaterHome;