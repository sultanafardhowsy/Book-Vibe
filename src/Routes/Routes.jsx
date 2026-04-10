import { createBrowserRouter } from "react-router";
import Mainlayout from "../Layout/Mainlayout";
import Bookspage from "../Pages/Bookspage";
import Homepage from "../Pages/Homepage";
import Errorpage from "../Pages/Errorpage/Errorpage";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component:Mainlayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: 'books',
        element: <Bookspage />
      },
      {
        path: '/bookdetails/:bookId',
        Component: BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement: <Errorpage />
  }
])