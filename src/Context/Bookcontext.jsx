import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Bookcontext = createContext()

const BookcontextProvider = ({children}) => {
     const [storedBooks, setstoredbooks] = useState([])  
     const[whishlist,setWishlist] = useState([])     
        
        const handleMarkAsRead = (currentBook) =>{
            const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('book already exist')}
                else{
                    setstoredbooks([...storedBooks,currentBook])
                    toast.success(`${currentBook.bookName} added successfully to the list`)
                }}

                 const handleWishlist = (currentBook) =>{
                 const isExistInReadList = storedBooks.find(
                    (book) => book.bookId === currentBook.bookId)
                 
                    if( isExistInReadList){
                       toast.error("This book already exist in readlist")
                       return;

                    }

            const isExistBook = whishlist.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('book already exist in whishlist')}
                else{
                    setWishlist([...whishlist,currentBook])
                    toast.success(`${currentBook.bookName} added successfully to the wishlist`)
                }
            
        console.log(currentBook,storedBooks,"bookid");
        }

    const data = {
       storedBooks,
       setstoredbooks,
       handleMarkAsRead,
       whishlist,
       setWishlist,
       handleWishlist
    }
    return <Bookcontext.Provider value={data}>{children}</Bookcontext.Provider>
};



export default BookcontextProvider;