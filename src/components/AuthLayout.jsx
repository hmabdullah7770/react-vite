// components/layouts/AuthLayout.js
import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Logo';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-500 md:flex-row">
      {/* Left Panel (moves to top on mobile) */}
      <div className="w-full md:w-2/5 bg-blue-600 text-white flex flex-col justify-center items-center p-2 md:min-h-screen">
        <div className="max-w-md mx-auto">
          <Logo />
          <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4">
            A few clicks away from creating your Lottery Display
          </h1>
          <div className="relative mt-8">
            <img 
              src="/api/placeholder/400/320" 
              alt="Lottery Display Dashboard"
              className="w-full rounded-lg shadow-lg" 
            />
          </div>
          
          {/* Dots for pagination/slides */}
          <div className="flex justify-center mt-6 space-x-2">
            <div className="h-2 w-2 bg-white rounded-full"></div>
            <div className="h-2 w-2 bg-white/40 rounded-full"></div>
            <div className="h-2 w-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Panel with form */}
      <div className="w-full md:w-3/5 bg-white flex items-center justify-center p-2 md:p-2">
        <div className="w-full ">
          {children}
        </div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;