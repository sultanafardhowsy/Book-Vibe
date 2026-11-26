import React, { useContext } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import image from '../../assets/hero_img.jpg';
import { Bookcontext } from '../../Context/Bookcontext';

const Banner = () => {
  const { storedBooks, whishlist } = useContext(Bookcontext);

  return (
    <section className="px-4 pt-6 sm:px-6 lg:px-8">
      <div className="bg-grid relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f6f7f4] px-6 py-16 sm:px-12 lg:py-24">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />

        <div className="relative grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-white px-4 py-1.5 text-sm font-semibold text-brand-600 shadow-sm">
              <Sparkles size={16} /> Curated classics & modern favourites
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Books to freshen up <span className="text-gradient">your bookshelf</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/60">
              Find your next great read, track every page you turn and keep a wishlist of stories
              waiting for you — all in one beautiful place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#books"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-600"
              >
                Browse books <ArrowRight size={18} />
              </a>
              <Link
                to="/books"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 font-semibold transition hover:border-ink/30"
              >
                View the list
              </Link>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                { label: 'Books', value: '9+' },
                { label: 'Read', value: storedBooks.length },
                { label: 'Wishlist', value: whishlist.length },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-sm text-ink/50">{s.label}</dt>
                  <dd className="font-display text-3xl font-bold">{s.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-gradient-to-br from-brand-500 to-teal-500" />
            <img src={image} alt="Featured book" className="relative w-full rounded-3xl object-cover shadow-2xl" />
            <div className="absolute -left-8 bottom-10 hidden items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:flex">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-100">
                <Star size={18} className="fill-amber-400 text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-ink/50">Average rating</p>
                <p className="font-bold">4.6 / 5</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
