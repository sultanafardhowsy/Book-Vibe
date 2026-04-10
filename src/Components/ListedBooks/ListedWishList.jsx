import React, { useContext } from 'react';
import { Bookcontext } from '../../Context/Bookcontext';
import BookCards from '../UI/BookCards';

const ListedWishList = () => {
    const {whishlist} = useContext(Bookcontext)
    
    if(whishlist.length === 0){
        return <div className='h-[50vh] bg-gray-300 flex justify-center items-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
    }
        return (
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
               {
                whishlist.map((book,ind) =>(
                 <BookCards key={ind} book={book}/>
                ))
                 }
            </div>
            </div>
        );
};

export default ListedWishList;