import React from 'react';
import { Link } from 'react-router';
import { CalendarDays, FileText, MapPin, Star, Trash2 } from 'lucide-react';

const ListedBookRow = ({ book, onRemove, action }) => (
  <article className="flex flex-col gap-6 rounded-3xl border border-ink/10 p-5 transition hover:shadow-lg sm:flex-row">
    <div className="grid h-48 shrink-0 place-items-center rounded-2xl bg-[#f3f3f3] sm:w-44">
      <img src={book.image} alt={book.bookName} className="h-40 w-auto rounded shadow-lg" loading="lazy" />
    </div>
    <div className="flex flex-1 flex-col">
      <h3 className="font-display text-2xl font-bold">{book.bookName}</h3>
      <p className="mt-1 text-ink/60">By {book.author}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/60">
        <span className="flex flex-wrap gap-2">
          {book.tags.map((t) => (
            <span key={t} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
              #{t}
            </span>
          ))}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays size={16} /> {book.yearOfPublishing}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={16} /> {book.publisher}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <FileText size={16} /> {book.totalPages} pages
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-4">
        <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
          {book.category}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-600">
          <Star size={14} className="fill-amber-400 text-amber-400" /> {book.rating}
        </span>
        <Link
          to={`/bookdetails/${book.bookId}`}
          className="rounded-full bg-brand-500 px-5 py-1.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          View details
        </Link>
        {action}
        <button
          onClick={() => onRemove(book.bookId)}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-ink/50 transition hover:bg-rose-50 hover:text-rose-600"
          aria-label={`Remove ${book.bookName}`}
        >
          <Trash2 size={16} /> Remove
        </button>
      </div>
    </div>
  </article>
);

export default ListedBookRow;
