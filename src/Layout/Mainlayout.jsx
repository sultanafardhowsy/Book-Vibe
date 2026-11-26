import React from 'react';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const Mainlayout = () => {
  const navigation = useNavigation();
  return (
    <div className="flex min-h-screen flex-col">
      {navigation.state === 'loading' && (
        <div className="fixed inset-x-0 top-0 z-[60] h-1 animate-pulse bg-gradient-to-r from-brand-500 via-teal-400 to-blue-500" />
      )}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Mainlayout;
