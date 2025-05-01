"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '@/context/StateContext';
import { runFireworks } from '@/lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [setCartItems, setTotalPrice, setTotalQuantities]);

  return (
    <div className="success-wrapper min-h-[60vh] bg-white flex justify-center items-center">
      <div className="success w-[1000px] mx-auto mt-40 bg-gray-200 rounded-xl p-10 flex flex-col justify-center items-center">
        <p className="icon text-green-500 text-5xl">
          <BsBagCheckFill />
        </p>
        <h2 className="text-gray-700 text-4xl font-bold mt-4 capitalize">Thank you for your order!</h2>
        <p className="email-msg text-gray-700 font-bold text-base text-center mt-4">Check your email inbox for the receipt.</p>
        <p className="description text-gray-700 font-bold text-base text-center mt-6">
          If you have any questions, please email{' '}
          <a className="email text-orange-400" href="mailto:bunnytota3@gmail.com">
            bunnytota3@gmail.com
          </a>
        </p>
        <Link href="/">
          <button
            type="button"
            className="btn bg-orange-400 text-white px-6 py-3 rounded-xl text-xl font-medium mt-10 cursor-pointer transform transition duration-500 hover:scale-105"
          >
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;