import React, { use } from 'react';
import BookCards from './UI/BookCards';


 const booksPromise = fetch('/booksData.json').then(res => res.json())

const Allbooks = () => {
 const books = use(booksPromise);
 console.log(books,'books');

    return (
        <div>
          <h2 className='font-bold text-4xl text-center mb-10'>Books</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
            books.map((book,ind) =>{
                return  <BookCards book={book} key={ind}/>
              })
          }  
          </div>
        </div>
    );
};

export default Allbooks;