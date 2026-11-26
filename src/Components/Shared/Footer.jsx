import React from 'react';
import { Link } from 'react-router';
import { BookOpen } from 'lucide-react';
import { FaFacebookF, FaGithub, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const socials = [FaFacebookF, FaXTwitter, FaInstagram, FaGithub];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-teal-500">
              <BookOpen size={20} />
            </span>
            <span className="font-display text-2xl font-bold">Book Vibe</span>
          </Link>
          <p className="mt-4 max-w-sm leading-relaxed">
            Discover timeless stories, keep track of what you have read and build a wishlist worth
            looking forward to.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-brand-500 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Explore</h4>
          <ul className="space-y-3">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/books">Listed Books</Link></li>
            <li><Link className="hover:text-white" to="/page-to-read">Pages to Read</Link></li>
            <li><Link className="hover:text-white" to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Stay in the loop</h4>
          <p className="mb-4 text-sm">A new book recommendation every week. No spam.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-full bg-white/10 px-4 py-2.5 text-sm text-white outline-none ring-brand-500 placeholder:text-white/40 focus:ring-2"
            />
            <button className="rounded-full bg-brand-500 px-4 text-sm font-semibold text-white hover:bg-brand-600">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">
        © {year} Book Vibe. Made for readers, by readers.
      </div>
    </footer>
  );
};

export default Footer;
