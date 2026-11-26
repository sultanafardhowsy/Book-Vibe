import React, { useContext } from 'react';
import { BookCheck } from 'lucide-react';
import { Bookcontext } from '../../Context/Bookcontext';
import ListedBookRow from './ListedBookRow';
import EmptyList from './EmptyList';
import { sortBooks } from './sortBooks';

const ListedWishList = ({ sortingType }) => {
  const { whishlist, removeFromWishlist, handleMarkAsRead } = useContext(Bookcontext);

  if (whishlist.length === 0) {
    return <EmptyList title="Your wishlist is empty" text="Save books you want to read next and they will show up here." />;
  }

  return (
    <div className="space-y-5">
      {sortBooks(whishlist, sortingType).map((book) => (
        <ListedBookRow
          key={book.bookId}
          book={book}
          onRemove={removeFromWishlist}
          action={
            <button
              onClick={() => handleMarkAsRead(book)}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-1.5 text-sm font-semibold hover:border-ink"
            >
              <BookCheck size={16} /> Mark as read
            </button>
          }
        />
      ))}
    </div>
  );
};

export default ListedWishList;
