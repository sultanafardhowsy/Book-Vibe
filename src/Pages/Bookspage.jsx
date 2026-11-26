import React, { useContext, useState } from 'react';
import { ArrowDownUp, BookCheck, Heart } from 'lucide-react';
import { Bookcontext } from '../Context/Bookcontext';
import ListedReadList from '../Components/ListedBooks/ListedReadList';
import ListedWishList from '../Components/ListedBooks/ListedWishList';
import { sortOptions } from '../Components/ListedBooks/sortBooks';

const Bookspage = () => {
  const { storedBooks, whishlist } = useContext(Bookcontext);
  const [sortingType, setSortingType] = useState('');
  const [tab, setTab] = useState('read');

  const tabs = [
    { id: 'read', label: 'Read Books', icon: BookCheck, count: storedBooks.length },
    { id: 'wish', label: 'Wishlist', icon: Heart, count: whishlist.length },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] bg-[#f3f3f3] py-10 text-center">
        <h1 className="font-display text-4xl font-bold">Listed Books</h1>
        <p className="mt-2 text-ink/60">Everything you have read and everything you want to.</p>
      </div>

      <div className="mt-8 flex flex-col-reverse items-stretch justify-between gap-4 sm:flex-row sm:items-center">
        <div className="inline-flex rounded-full bg-ink/5 p-1" role="tablist">
          {tabs.map(({ id, label, icon: Icon, count }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition sm:flex-none ${
                tab === id ? 'bg-white text-ink shadow' : 'text-ink/60 hover:text-ink'
              }`}
            >
              <Icon size={16} /> {label}
              <span className={`rounded-full px-2 text-xs ${tab === id ? 'bg-brand-500 text-white' : 'bg-ink/10'}`}>
                {count}
              </span>
            </button>
          ))}
        </div>

        <label className="relative inline-flex items-center">
          <ArrowDownUp size={16} className="pointer-events-none absolute left-4 text-white" />
          <select
            value={sortingType}
            onChange={(e) => setSortingType(e.target.value)}
            className="appearance-none rounded-full bg-brand-500 py-2.5 pl-10 pr-6 text-sm font-semibold text-white outline-none focus:ring-4 focus:ring-brand-500/20"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value} className="text-ink">
                Sort by: {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8">
        {tab === 'read' ? <ListedReadList sortingType={sortingType} /> : <ListedWishList sortingType={sortingType} />}
      </div>
    </div>
  );
};

export default Bookspage;
