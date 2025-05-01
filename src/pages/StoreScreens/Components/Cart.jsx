"use client"

import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { HiX } from 'react-icons/hi';
import toast from 'react-hot-toast';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useStateContext } from '../../context/StateContext';
import { urlFor } from '../../lib/client';
// import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading('Redirecting...');
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div  className="fixed inset-0 z-40 w-full h-full bg-black bg-opacity-50 flex justify-end">
<button 
  onClick={() => setShowCart(false)} 
  className='flex relative top-[50%] h-12 w-12 z-50 rounded-full justify-center items-center mr-3
    bg-white/80 backdrop-blur-sm
    shadow-[0_8px_32px_rgba(0,0,0,0.1)]
    hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]
    border border-white/40
    hover:bg-white/90
    transform hover:scale-110
    transition-all duration-300 ease-out
    group'
>
  <ArrowForwardIosIcon className='h-16 w-16 text-gray-700 group-hover:text-orange-500 transition-colors duration-300'/>
</button>

      <div className=" [@media(max-width:550px)]:w-80 w-full max-w-lg h-full bg-white p-6 overflow-y-auto relative flex flex-col">
        <button
          type="button"
          className="flex items-center text-lg font-semibold gap-2 mb-6"
          onClick={() => setShowCart(false)}
        >
          <HiX className="text-3xl hover:scale-110 transition-transform duration-200 text-orange-500" />
          <span>Your Cart</span>
          <span className="text-orange-500">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 ? (
          <div className="flex flex-col items-center gap-4 text-center mt-10">
            <AiOutlineShopping size={100} className="text-gray-400" />
            <h3 className="text-lg font-medium">Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="w-full max-w-xs px-6 py-3 mt-4 text-lg font-medium text-white bg-orange-500 rounded-lg hover:scale-105 transition-transform"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 flex-grow">
              {cartItems.map((item) => (
                <div
                  className="flex items-center gap-2 py-2"
                  key={item._id}
                >
                  <img
                    src={urlFor(item?.image[0])}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg bg-gray-200"
                  />
                  <div className="flex flex-col justify-between w-full">
                    <div className="flex justify-between">
                      <h5 className="text-lg font-semibold">{item.name}</h5>
                      <h4 className="text-lg font-semibold">${item.price}</h4>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          className="px-3 py-1 text-gray-500 hover:text-orange-500 transition"
                          onClick={() => toggleCartItemQuanitity(item._id, 'dec')}
                        >
                          <AiOutlineMinus />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button
                          className="px-3 py-1 text-gray-500 hover:text-green-500 transition"
                          onClick={() => toggleCartItemQuanitity(item._id, 'inc')}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                      <button
                        className="text-orange-500 hover:text-orange-600 transition"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Subtotal:</h3>
                <h3 className="text-lg font-semibold">${totalPrice}</h3>
              </div>
              <div className="flex flex-col space-y-4">
                <Link href="/Cashondelivaryc">
                  <button
                    type="button"
                    className="w-full px-6 py-3 text-lg font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition"
                    onClick={() => setShowCart(false)}
                  >
                    Cash on Delivery
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
  
    </div>
  );
};

export default Cart;