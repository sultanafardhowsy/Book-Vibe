import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCards = ({book,ind}) => {
    return (
        <Link to={`/bookdetails/${book.bookId}`} key={ind} className="card bg-base-100 shadow-sm">
  <figure className='p-6'>
    <img
      src={book.image}
      alt={book.bookName} className='rounded-xl h-[250px]'/>
  </figure>
  <div className="card-body  ">
    <div className='flex items-center gap-4' >
        {
        book.tags.map((tag,ind) => (
        <div key={ind}  className="badge bg-green-100 text-green-500 font-bold">{tag}</div>
        ))
    }
    </div>
     
    <h2 className="card-title font-bold">
     {book.bookName}
     
    </h2>
    <p></p>
    <p className='font-semibold text-lg gap-2'>By : {book.author}</p>
    <div className="card-actions justify-between border-t border-dashed pt-4 border-gray-300 text-xl">
      <div className="font-semibold">{book.category}</div>
      <div className="font-semibold flex items-center gap-2">{book.rating}<FaRegStar /></div>
    </div>
  </div>
</Link>
    );
};

export default BookCards;
