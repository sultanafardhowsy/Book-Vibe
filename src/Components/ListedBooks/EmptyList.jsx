import React from 'react';
import { Link } from 'react-router';
import { BookOpen } from 'lucide-react';

const EmptyList = ({ title, text }) => (
  <div className="grid place-items-center rounded-3xl border border-dashed border-ink/15 bg-[#fafafa] px-6 py-20 text-center">
    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
      <BookOpen size={28} />
    </span>
    <h3 className="mt-5 font-display text-2xl font-bold">{title}</h3>
    <p className="mt-2 max-w-sm text-ink/60">{text}</p>
    <Link to="/#books" className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600">
      Discover books
    </Link>
  </div>
);

export default EmptyList;
