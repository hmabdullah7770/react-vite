// Layout.js
import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/store5.webp" />
        <title>MR-store</title>
      </Head>

      <Navbar />
      
      <div className="p-2">
        <main className="max-w-screen-xl mx-auto w-full">
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
