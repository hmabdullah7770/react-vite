"use client";
import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { Cart } from './';
import { useStateContext } from '../../context/StateContext';
import { TemporaryDrawer } from './';
import Search from './Search';

const Navbar = ({searchterms}) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 bg-white border-b border-orange-400">
      <TemporaryDrawer />
      <div className="text-orange-400 font-bold text-lg">
        <Link href="/">Sports-Providers</Link>
      </div>

      {/* Add flexbox container for icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <div>
          <Search />
        </div>

        {/* Shopping Cart Icon */}
        <button
          type="button"
          className="relative text-gray-500 transition-transform duration-400 ease-in-out hover:scale-110"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping className="text-2xl" />
          <span className="absolute top-[-10px] right-[-10px] w-5 h-5 text-[10px] font-bold text-white bg-orange-400 rounded-full flex justify-center items-center">
            {totalQuantities}
          </span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
