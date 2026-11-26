import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { BookOpen, Menu, X } from 'lucide-react';
import { Bookcontext } from '../../Context/Bookcontext';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/books', label: 'Listed Books', showCount: true },
  { to: '/page-to-read', label: 'Pages to Read' },
  { to: '/dashboard', label: 'Dashboard' },
];

const Navbar = () => {
  const { storedBooks, whishlist } = useContext(Bookcontext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const listedCount = storedBooks.length + whishlist.length;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  const linkClass = ({ isActive }) =>
    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-brand-50 text-brand-600 ring-1 ring-brand-500/40'
        : 'text-ink/70 hover:text-ink hover:bg-ink/5'
    }`;

  const links = navItems.map((item) => (
    <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
      {item.label}
      {item.showCount && listedCount > 0 && (
        <span className="grid h-5 min-w-5 place-items-center rounded-full bg-brand-500 px-1.5 text-[11px] font-bold text-white">
          {listedCount}
        </span>
      )}
    </NavLink>
  ));

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? 'border-b border-ink/5 bg-white/80 shadow-sm backdrop-blur-lg' : 'bg-white'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 text-white shadow-lg shadow-brand-500/30">
            <BookOpen size={20} />
          </span>
          <span className="font-display text-2xl font-bold tracking-tight">Book Vibe</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{links}</div>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink/80 transition hover:bg-ink/5">
            Sign In
          </button>
          <button className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-ink/20 transition hover:-translate-y-0.5 hover:bg-brand-600">
            Get Started
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-white px-4 pb-6 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">{links}</div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="rounded-full border border-ink/10 py-2.5 text-sm font-semibold">Sign In</button>
            <button className="rounded-full bg-ink py-2.5 text-sm font-semibold text-white">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
