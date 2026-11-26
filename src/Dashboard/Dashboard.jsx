import { useContext } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BookCheck, FileText, Heart, Star } from 'lucide-react';
import { Bookcontext } from '../Context/Bookcontext';
import EmptyList from '../Components/ListedBooks/EmptyList';

const COLORS = ['#23be0a', '#50b1c9'];

const Dashboard = () => {
  const { storedBooks, whishlist } = useContext(Bookcontext);
  const all = [...storedBooks, ...whishlist];
  const total = all.length;

  const pagesRead = storedBooks.reduce((s, b) => s + b.totalPages, 0);
  const avgRating = storedBooks.length
    ? (storedBooks.reduce((s, b) => s + b.rating, 0) / storedBooks.length).toFixed(1)
    : '—';

  const pieData = [
    { name: 'Read', value: storedBooks.length },
    { name: 'Wishlist', value: whishlist.length },
  ];

  const byCategory = Object.values(
    all.reduce((acc, b) => {
      acc[b.category] ??= { category: b.category, Read: 0, Wishlist: 0 };
      acc[b.category][storedBooks.includes(b) ? 'Read' : 'Wishlist'] += 1;
      return acc;
    }, {}),
  );

  const stats = [
    { label: 'Books read', value: storedBooks.length, icon: BookCheck, tone: 'bg-brand-50 text-brand-600' },
    { label: 'In wishlist', value: whishlist.length, icon: Heart, tone: 'bg-sky-50 text-sky-600' },
    { label: 'Pages read', value: pagesRead.toLocaleString(), icon: FileText, tone: 'bg-violet-50 text-violet-600' },
    { label: 'Avg. rating', value: avgRating, icon: Star, tone: 'bg-amber-50 text-amber-600' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">Your stats</p>
        <h1 className="mt-2 font-display text-4xl font-bold">Reading dashboard</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, tone }) => (
          <div key={label} className="rounded-3xl border border-ink/10 p-6">
            <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tone}`}>
              <Icon size={20} />
            </span>
            <p className="mt-4 text-sm text-ink/50">{label}</p>
            <p className="font-display text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      {total === 0 ? (
        <div className="mt-8">
          <EmptyList title="No reading data yet" text="Mark books as read or add them to your wishlist to see your charts." />
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="rounded-3xl border border-ink/10 p-6 lg:col-span-2">
            <h2 className="font-semibold">Read vs wishlist</h2>
            <div className="relative h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={4}
                    cornerRadius={10}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-x-0 top-[42%] -translate-y-1/2 text-center">
                <p className="font-display text-4xl font-bold">{total}</p>
                <p className="text-xs text-ink/50">books</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-ink/10 p-6 lg:col-span-3">
            <h2 className="font-semibold">Books by category</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={byCategory} margin={{ top: 16, right: 8, left: -16, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="category" tick={{ fontSize: 12 }} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                  <Tooltip cursor={{ fill: 'rgba(19,19,19,0.04)' }} />
                  <Legend />
                  <Bar dataKey="Read" stackId="a" fill={COLORS[0]} />
                  <Bar dataKey="Wishlist" stackId="a" fill={COLORS[1]} radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
