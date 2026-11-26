import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { ArrowLeft, BookCheck, ChevronRight, Heart, Star } from 'lucide-react';
import { Bookcontext } from '../../Context/Bookcontext';
import BookCards from '../../Components/UI/BookCards';

const BookDetails = () => {
  const { bookId: bookParamsId } = useParams();
  const books = useLoaderData();
  const book = books.find((b) => b.bookId === Number(bookParamsId));
  const { handleMarkAsRead, handleWishlist, isRead, isWished } = useContext(Bookcontext);

  if (!book) {
    return (
      <div className="mx-auto grid max-w-xl place-items-center px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Book not found</h1>
        <p className="mt-3 text-ink/60">We couldn't find the book you were looking for.</p>
        <Link to="/" className="mt-8 rounded-full bg-ink px-6 py-3 font-semibold text-white">
          Back to home
        </Link>
      </div>
    );
  }

  const { bookName, author, image, review, category, tags, publisher, yearOfPublishing, totalPages, rating } = book;
  const read = isRead(book.bookId);
  const wished = isWished(book.bookId);
  const related = books.filter((b) => b.category === category && b.bookId !== book.bookId).slice(0, 3);

  const meta = [
    { label: 'Number of pages', value: totalPages },
    { label: 'Publisher', value: publisher },
    { label: 'Year of publishing', value: yearOfPublishing },
    { label: 'Rating', value: rating },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-8 flex items-center gap-2 text-sm text-ink/50">
        <Link to="/" className="inline-flex items-center gap-1 hover:text-ink">
          <ArrowLeft size={16} /> Home
        </Link>
        <ChevronRight size={14} />
        <span>{category}</span>
        <ChevronRight size={14} />
        <span className="truncate font-medium text-ink">{bookName}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2">
        <div className="bg-grid relative grid min-h-[480px] place-items-center overflow-hidden rounded-[2rem] bg-[#f3f3f3] p-10 lg:sticky lg:top-28 lg:self-start">
          <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
          <img
            src={image}
            alt={bookName}
            className="relative max-h-[420px] w-auto rounded-lg shadow-2xl shadow-ink/30"
          />
        </div>

        <div>
          <span className="rounded-full bg-ink/5 px-3 py-1 text-sm font-semibold text-ink/70">{category}</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight sm:text-5xl">{bookName}</h1>
          <p className="mt-3 text-lg text-ink/60">
            By <span className="font-semibold text-ink">{author}</span>
          </p>

          <div className="mt-4 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className={i < Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-ink/20'}
              />
            ))}
            <span className="ml-2 text-sm font-semibold">{rating} / 5</span>
          </div>

          <div className="my-8 h-px bg-ink/10" />

          <h2 className="text-sm font-bold uppercase tracking-widest text-ink/50">Review</h2>
          <p className="mt-3 leading-relaxed text-ink/70">{review}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-sm font-bold">Tags</span>
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-600">
                #{tag}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4">
            {meta.map((m) => (
              <div key={m.label} className="rounded-2xl border border-ink/10 p-4">
                <dt className="text-xs uppercase tracking-wider text-ink/50">{m.label}</dt>
                <dd className="mt-1 font-semibold">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleMarkAsRead(book)}
              disabled={read}
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-3.5 font-semibold transition hover:border-ink disabled:cursor-not-allowed disabled:border-brand-500 disabled:bg-brand-50 disabled:text-brand-600"
            >
              <BookCheck size={18} /> {read ? 'Already read' : 'Mark as Read'}
            </button>
            <button
              onClick={() => handleWishlist(book)}
              disabled={read || wished}
              className="inline-flex items-center gap-2 rounded-full bg-[#50b1c9] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#50b1c9]/30 transition hover:-translate-y-0.5 hover:bg-[#3e9ab1] disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Heart size={18} fill={wished ? 'currentColor' : 'none'} /> {wished ? 'In your wishlist' : 'Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 font-display text-3xl font-bold">More in {category}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((b) => (
              <BookCards key={b.bookId} book={b} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BookDetails;
