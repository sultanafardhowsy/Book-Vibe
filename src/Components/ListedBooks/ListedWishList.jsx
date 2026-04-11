import React, { useContext, useEffect, useState } from 'react';
import { Bookcontext } from '../../Context/Bookcontext';
import BookCards from '../UI/BookCards';

const ListedWishList = ({ sortingType }) => {
    const { whishlist } = useContext(Bookcontext)
    console.log(sortingType);
    


    const [filterdWishList, setFilterdWishList] = useState(whishlist)

    useEffect(() => {
        if (sortingType) {
            if (sortingType == "pages") {
                const sortedData = [...whishlist].sort(
                    (a, b) => a.totalPages - b.totalPages)
                console.log(sortedData);
                setFilterdWishList(sortedData);
            } else if (sortingType == "rating") {
                const sortedData = [...whishlist].sort(
                    (a, b) => a.rating - b.rating)
                console.log(sortedData);
                setFilterdWishList(sortedData);
            }
        }
    }, [sortingType, whishlist])

    if (filterdWishList.length === 0) {
        return <div className='h-[50vh] bg-gray-300 flex justify-center items-center'>
            <h2 className='font-bold text-3xl'>No wish list data found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    filterdWishList.map((book, ind) => (
                        <BookCards key={ind} book={book} />
                    ))
                }
            </div>
        </div>
    );
};

export default ListedWishList;