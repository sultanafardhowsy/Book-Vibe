import { BookX, Home, RefreshCw } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Errorpage = () => {
  return (
    <div className="bg-grid flex min-h-screen items-center justify-center bg-[#f6f7f4] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md rounded-[2rem] bg-white p-10 text-center shadow-2xl shadow-ink/10"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
          <BookX size={30} />
        </span>
        <h1 className="mt-6 font-display text-6xl font-extrabold">404</h1>
        <h2 className="mt-2 text-xl font-semibold">This page is missing from the shelf</h2>
        <p className="mt-3 text-ink/60">The page you are looking for doesn't exist or has been moved.</p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-semibold text-white transition hover:bg-brand-600"
          >
            <Home size={18} /> Go home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 font-semibold transition hover:border-ink"
          >
            <RefreshCw size={18} /> Retry
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Errorpage;
