import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Star, BookCheck, Heart } from 'lucide-react';
import { Bookcontext } from '../../Context/Bookcontext';

const BookCards = ({ book }) => {
  const { isRead, isWished } = useContext(Bookcontext);
  const read = isRead(book.bookId);
  const wished = isWished(book.bookId);

  return (
    <Link
      to={`/bookdetails/${book.bookId}`}
      className="group flex flex-col rounded-3xl border border-ink/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-500/10"
    >
      <div className="relative grid h-64 place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3f3f3] to-[#e8f5e4]">
        <img
          src={book.image}
          alt={book.bookName}
          loading="lazy"
          className="h-52 w-auto rounded-md object-contain shadow-xl shadow-ink/20 transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
        />
        {(read || wished) && (
          <span
            className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold backdrop-blur ${
              read ? 'bg-brand-500/90 text-white' : 'bg-white/90 text-rose-500'
            }`}
          >
            {read ? <BookCheck size={14} /> : <Heart size={14} fill="currentColor" />}
            {read ? 'Read' : 'Wishlist'}
          </span>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {book.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-4 font-display text-xl font-bold leading-snug transition group-hover:text-brand-600">
        {book.bookName}
      </h3>
      <p className="mt-1 text-sm font-medium text-ink/60">By {book.author}</p>

      <div className="mt-auto flex items-center justify-between border-t border-dashed border-ink/15 pt-4 text-sm font-medium text-ink/70">
        <span>{book.category}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-ink">
          {book.rating.toFixed(1)}
          <Star size={16} className="fill-amber-400 text-amber-400" />
        </span>
      </div>
    </Link>
  );
};

export default BookCards;
