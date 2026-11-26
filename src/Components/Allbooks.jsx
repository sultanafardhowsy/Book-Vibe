import React, { use, useMemo, useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import BookCards from './UI/BookCards';
import { getBooks } from '../utils/books';

const Allbooks = () => {
  const books = use(getBooks());
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(() => ['All', ...new Set(books.map((b) => b.category))], [books]);

  const visible = books.filter((b) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      b.bookName.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.tags.some((t) => t.toLowerCase().includes(q));
    return matchesQuery && (category === 'All' || b.category === category);
  });

  return (
    <section id="books" className="mx-auto max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">The collection</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">Explore books</h2>
        </div>
        <label className="relative w-full md:w-80">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title, author or tag…"
            className="w-full rounded-full border border-ink/10 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
          />
        </label>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              category === c ? 'bg-ink text-white' : 'bg-ink/5 text-ink/70 hover:bg-ink/10'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((book) => (
            <BookCards book={book} key={book.bookId} />
          ))}
        </div>
      ) : (
        <div className="grid place-items-center rounded-3xl border border-dashed border-ink/15 py-20 text-center">
          <SearchX size={40} className="text-ink/30" />
          <p className="mt-4 font-semibold">No books match your search</p>
          <button
            onClick={() => {
              setQuery('');
              setCategory('All');
            }}
            className="mt-3 text-sm font-semibold text-brand-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};

export const BooksSkeleton = () => (
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="animate-pulse rounded-3xl border border-ink/10 p-5">
        <div className="h-64 rounded-2xl bg-ink/5" />
        <div className="mt-5 h-4 w-1/3 rounded bg-ink/5" />
        <div className="mt-4 h-6 w-3/4 rounded bg-ink/5" />
        <div className="mt-2 h-4 w-1/2 rounded bg-ink/5" />
      </div>
    ))}
  </div>
);

export default Allbooks;
