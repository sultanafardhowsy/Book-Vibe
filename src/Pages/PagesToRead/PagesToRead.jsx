import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Bookcontext } from '../../Context/Bookcontext';
import EmptyList from '../../Components/ListedBooks/EmptyList';

const COLORS = ['#23be0a', '#0ea5a3', '#2563eb', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#64748b'];

// Triangle-shaped bar, a nod to a stack of pages.
const TriangleBar = ({ fill, x, y, width, height }) => {
  const path = `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}Z`;
  return <path d={path} fill={fill} stroke="none" />;
};

const shortName = (name) => (name.length > 14 ? `${name.slice(0, 13)}…` : name);

const PagesToRead = () => {
  const { storedBooks, whishlist } = useContext(Bookcontext);
  const books = [...storedBooks, ...whishlist];
  const data = books.map((b) => ({ name: shortName(b.bookName), fullName: b.bookName, pages: b.totalPages }));
  const totalRead = storedBooks.reduce((sum, b) => sum + b.totalPages, 0);
  const totalLeft = whishlist.reduce((sum, b) => sum + b.totalPages, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Reading volume</p>
        <h1 className="mt-2 font-display text-4xl font-bold">Pages to Read</h1>
      </div>

      {books.length === 0 ? (
        <EmptyList title="Nothing to chart yet" text="Add books to your read list or wishlist to see how many pages they hold." />
      ) : (
        <>
          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-ink/10 p-6">
              <p className="text-sm text-ink/50">Pages already read</p>
              <p className="mt-1 font-display text-4xl font-bold text-brand-600">{totalRead.toLocaleString()}</p>
            </div>
            <div className="rounded-3xl border border-ink/10 p-6">
              <p className="text-sm text-ink/50">Pages waiting in your wishlist</p>
              <p className="mt-1 font-display text-4xl font-bold text-[#0ea5a3]">{totalLeft.toLocaleString()}</p>
            </div>
          </div>
          <div className="h-[460px] rounded-[2rem] bg-[#f8f8f8] p-4 sm:p-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 24, right: 8, left: 0, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  cursor={{ fill: 'rgba(19,19,19,0.04)' }}
                  formatter={(v) => [`${v} pages`, 'Length']}
                  labelFormatter={(_, p) => p?.[0]?.payload?.fullName}
                />
                <Bar dataKey="pages" shape={<TriangleBar />} label={{ position: 'top', fontSize: 12 }}>
                  {data.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
};

export default PagesToRead;
