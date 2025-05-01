'use client'

import React from 'react';

const tailwindform = () => {
  return (
    <>
      <form
        id="consultation-form"
        className="mt-9 flex flex-col w-[300px]"
        action="#"
      >
        <input
          required
          placeholder="Name"
          type="text"
          className="h-[54px] rounded-[5px] bg-white mb-[15px] border-none px-5 font-light text-sm text-[#4B4B4B] hover:scale-[1.009] hover:shadow-[0px_0px_3px_0px_#212529] transition-transform"
        />

        <input
          name="phone"
          required
          placeholder="Phone number"
          type="tel"
          className="h-[54px] rounded-[5px] bg-white mb-[15px] border-none px-5 font-light text-sm text-[#4B4B4B] hover:scale-[1.009] hover:shadow-[0px_0px_3px_0px_#212529] transition-transform"
        />

        <input
          name="email"
          required
          placeholder="E-mail"
          type="email"
          className="h-[54px] rounded-[5px] bg-white mb-[15px] border-none px-5 font-light text-sm text-[#4B4B4B] hover:scale-[1.009] hover:shadow-[0px_0px_3px_0px_#212529] transition-transform"
        />

        <button
          type="submit"
          className="w-full h-[54px] text-sm text-white bg-orange-500 rounded-[5px] border-none font-medium uppercase hover:scale-[1.009] hover:shadow-[0px_0px_3px_0px_#212529] transition-transform"
        >
          ORDER
        </button>
      </form>
    </>
  );
};

export default tailwindform;
