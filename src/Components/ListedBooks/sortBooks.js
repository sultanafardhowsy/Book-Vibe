export const sortOptions = [
  { value: '', label: 'Date added' },
  { value: 'rating', label: 'Rating (high → low)' },
  { value: 'pages', label: 'Pages (low → high)' },
  { value: 'year', label: 'Year (newest first)' },
];

export const sortBooks = (books, sortingType) => {
  const list = [...books];
  if (sortingType === 'rating') return list.sort((a, b) => b.rating - a.rating);
  if (sortingType === 'pages') return list.sort((a, b) => a.totalPages - b.totalPages);
  if (sortingType === 'year') return list.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
  return list;
};
