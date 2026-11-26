import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// eslint-disable-next-line react-refresh/only-export-components
export const Bookcontext = createContext();

const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  } catch {
    return [];
  }
};

const BookcontextProvider = ({ children }) => {
  const [storedBooks, setstoredbooks] = useState(() => load('bookvibe:read'));
  const [whishlist, setWishlist] = useState(() => load('bookvibe:wishlist'));

  useEffect(() => {
    localStorage.setItem('bookvibe:read', JSON.stringify(storedBooks));
  }, [storedBooks]);

  useEffect(() => {
    localStorage.setItem('bookvibe:wishlist', JSON.stringify(whishlist));
  }, [whishlist]);

  const isRead = (id) => storedBooks.some((b) => b.bookId === id);
  const isWished = (id) => whishlist.some((b) => b.bookId === id);

  const handleMarkAsRead = (currentBook) => {
    if (isRead(currentBook.bookId)) {
      toast.info(`"${currentBook.bookName}" is already in your read list`);
      return;
    }
    setstoredbooks((prev) => [...prev, currentBook]);
    // Finishing a book moves it off the wishlist.
    setWishlist((prev) => prev.filter((b) => b.bookId !== currentBook.bookId));
    toast.success(`"${currentBook.bookName}" marked as read`);
  };

  const handleWishlist = (currentBook) => {
    if (isRead(currentBook.bookId)) {
      toast.error(`You've already read "${currentBook.bookName}"`);
      return;
    }
    if (isWished(currentBook.bookId)) {
      toast.info(`"${currentBook.bookName}" is already in your wishlist`);
      return;
    }
    setWishlist((prev) => [...prev, currentBook]);
    toast.success(`"${currentBook.bookName}" added to your wishlist`);
  };

  const removeFromRead = (id) => setstoredbooks((prev) => prev.filter((b) => b.bookId !== id));
  const removeFromWishlist = (id) => setWishlist((prev) => prev.filter((b) => b.bookId !== id));

  const data = {
    storedBooks,
    setstoredbooks,
    handleMarkAsRead,
    whishlist,
    setWishlist,
    handleWishlist,
    removeFromRead,
    removeFromWishlist,
    isRead,
    isWished,
  };
  return <Bookcontext.Provider value={data}>{children}</Bookcontext.Provider>;
};

export default BookcontextProvider;
