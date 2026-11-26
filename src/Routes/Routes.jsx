import { createBrowserRouter } from 'react-router';
import Mainlayout from '../Layout/Mainlayout';
import Bookspage from '../Pages/Bookspage';
import Homepage from '../Pages/Homepage';
import Errorpage from '../Pages/Errorpage/Errorpage';
import BookDetails from '../Pages/BookDetails/BookDetails';
import PagesToRead from '../Pages/PagesToRead/PagesToRead';
import Dashboard from '../Dashboard/Dashboard';
import { getBooks } from '../utils/books';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Mainlayout,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: 'books', element: <Bookspage /> },
      { path: 'bookdetails/:bookId', Component: BookDetails, loader: () => getBooks() },
      { path: 'page-to-read', Component: PagesToRead },
      { path: 'dashboard', Component: Dashboard },
    ],
  },
]);
