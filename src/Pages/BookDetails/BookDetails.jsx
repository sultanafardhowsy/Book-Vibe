import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bookcontext } from '../../Context/Bookcontext';


const BookDetails = () => {
    const {bookId:bookParamsId} = useParams();
   
    const books  = useLoaderData();
   // console.log(books, 'books');
    const expectedBooks = books.find((book) => book.bookId === Number(bookParamsId))
   // console.log(expectedBooks);
    const {bookName,
        author,
        bookId,
        image,
        review,
        category,
        tags,
        publisher,
        yearOfPublishing,
        totalPages,
        rating}  = expectedBooks; 
    
        const {handleMarkAsRead,handleWishlist} = useContext(Bookcontext)
        console.log(handleMarkAsRead,handleWishlist,'bookcontext');

     
    return (
        <div className="grid grid-cols-2 lg:card-side bg-base-100 shadow-sm container mx-auto my-10"> 
  <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl'>
    <img
      src={image}
      alt="Album" className='h-[400px] w-[400px]'/>
      
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">{bookName}</h2>
    <h2 className="card-title">by : {author}</h2>
    <p>{category}</p>
    <p>Review : {review}</p>
      {
        tags.map((tag,ind) => (
        <div key={ind}  className="badge bg-green-100 text-green-500 font-bold">{tag}</div>
        ))
    }
    <div className=" border-t space-y-3">
        <div className='flex justify-between items-center gap-2'>
            <span>Number of Pages :</span><span>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Publisher :</span><span>{publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Year of Publishing :</span><span>{yearOfPublishing}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Rating :</span><span>{rating}</span>
        </div>
      <div className='gap-4'>
        <button className="btn" onClick={()=> handleMarkAsRead(expectedBooks )}> Mark as Read</button>
        <button className="btn btn-info" onClick={() => handleWishlist(expectedBooks)}>Add to Wish List</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;