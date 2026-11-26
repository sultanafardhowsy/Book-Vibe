import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes'
import BookcontextProvider from './Context/Bookcontext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookcontextProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" autoClose={2500} theme="colored" />
    </BookcontextProvider>
  </StrictMode>,
)
