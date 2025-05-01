import { ShieldCheck, CreditCard, Truck, MessageCircle } from 'lucide-react';
import { BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-7">
      <div className="max-w-6xl mx-auto pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Services Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-green-500" size={48} />
            <h4 className="font-semibold text-lg mt-4">Authentic Merchandise</h4>
            <p className="text-gray-400 text-sm">100% Official Licensed Products</p>
          </div>
          <div className="flex flex-col items-center">
            <CreditCard className="text-blue-500" size={48} />
            <h4 className="font-semibold text-lg mt-4">Secure Payment</h4>
            <p className="text-gray-400 text-sm">Multiple Payment Options</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="text-indigo-500" size={48} />
            <h4 className="font-semibold text-lg mt-4">Fast Shipping</h4>
            <p className="text-gray-400 text-sm">Worldwide Delivery</p>
          </div>
          <div className="flex flex-col items-center">
            <MessageCircle className="text-purple-500" size={48} />
            <h4 className="font-semibold text-lg mt-4">Customer Support</h4>
            <p className="text-gray-400 text-sm">24/7 Professional Help</p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 pb-12 border-b border-gray-800">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center mb-4 md:justify-start ">
              <Image className='rounded-full' src="/assets/footballlogo.jpg" alt="logo" width={80} height={80} />
            </div>
            <h3 className="font-bold text-2xl text-orange-500">Sports-Providers</h3>
            <p className="text-gray-400 text-sm mt-2">
              Your ultimate destination for premium football merchandise and gear.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500">
                <BsInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <BsTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <BsWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              {['Jersey', 'Shorts', 'Boots', 'Training Gear'].map((item) => (
                <li key={item}>
                  <Link href={`/shop/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Teams & Leagues */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Teams & Leagues</h4>
            <ul className="space-y-2">
              {['Premier League', 'La Liga', 'Champions League', 'National Teams'].map((league) => (
                <li key={league}>
                  <Link href={`/league/${league.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white">
                    {league}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <div className="bg-gray-800 rounded-md p-4 space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 border-gray-600 rounded-md w-full px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-md w-full px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} FootballHub. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
