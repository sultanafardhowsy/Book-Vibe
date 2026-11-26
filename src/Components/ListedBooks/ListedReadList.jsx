import React, { useContext } from 'react';
import { Bookcontext } from '../../Context/Bookcontext';
import ListedBookRow from './ListedBookRow';
import EmptyList from './EmptyList';
import { sortBooks } from './sortBooks';

const ListedReadList = ({ sortingType }) => {
  const { storedBooks, removeFromRead } = useContext(Bookcontext);

  if (storedBooks.length === 0) {
    return <EmptyList title="Your read list is empty" text="Open any book and hit “Mark as Read” to start building your library." />;
  }

  return (
    <div className="space-y-5">
      {sortBooks(storedBooks, sortingType).map((book) => (
        <ListedBookRow key={book.bookId} book={book} onRemove={removeFromRead} />
      ))}
    </div>
  );
};

export default ListedReadList;
