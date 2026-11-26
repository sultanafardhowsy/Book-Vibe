import React, { Suspense } from 'react';
import { BookMarked, ChartPie, Heart, Quote } from 'lucide-react';
import Banner from './banner/Banner';
import Allbooks, { BooksSkeleton } from '../Components/Allbooks';

const features = [
  {
    icon: BookMarked,
    title: 'Track what you read',
    text: 'Mark books as read and build a personal library that grows with you.',
  },
  {
    icon: Heart,
    title: 'Save for later',
    text: 'Keep a wishlist of the stories you cannot wait to start next.',
  },
  {
    icon: ChartPie,
    title: 'See your progress',
    text: 'Charts that turn your reading habits into something worth celebrating.',
  },
];

const Homepage = () => {
  return (
    <div className="space-y-24">
      <Banner />

      <section className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {features.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-3xl border border-ink/10 p-8 transition hover:shadow-xl">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <Icon size={22} />
            </span>
            <h3 className="mt-5 text-lg font-bold">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink/60">{text}</p>
          </div>
        ))}
      </section>

      <Suspense fallback={<BooksSkeleton />}>
        <Allbooks />
      </Suspense>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink to-[#1f2a1d] px-8 py-16 text-center text-white sm:px-16">
          <Quote size={48} className="mx-auto text-brand-500" />
          <p className="mx-auto mt-6 max-w-3xl font-display text-2xl leading-relaxed sm:text-3xl">
            A reader lives a thousand lives before he dies. The man who never reads lives only one.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/50">George R.R. Martin</p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
