let cache;

// Fetch the catalogue once and share the same promise everywhere (works with React's `use`).
export const getBooks = () => {
  if (!cache) {
    cache = fetch('/booksData.json').then((res) => {
      if (!res.ok) throw new Error('Could not load books');
      return res.json();
    });
  }
  return cache;
};
