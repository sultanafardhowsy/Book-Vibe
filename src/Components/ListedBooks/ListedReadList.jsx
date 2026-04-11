import React, { useContext, useEffect, useState } from 'react';
import { Bookcontext } from '../../Context/Bookcontext';
import BookCards from '../UI/BookCards';
import { div } from 'framer-motion/client';


const ListedReadList = ({sortingType}) => {
    const {storedBooks} = useContext(Bookcontext);
    const [filterdReadList, setFilterdReadList] = useState(storedBooks)

    useEffect(() => {
        if(sortingType){
            if(sortingType == "pages"){
         const sortedData = [...storedBooks].sort(
            (a,b) => a.totalPages - b.totalPages)
            console.log(sortedData);
            setFilterdReadList(sortedData);
            }else if(sortingType == "rating"){
             const sortedData = [...storedBooks].sort(
            (a,b) => a.rating - b.rating)
            console.log(sortedData);
            setFilterdReadList(sortedData);
            }
        }
    }, [sortingType,storedBooks])

            if(filterdReadList.length === 0){
        return <div className='h-[50vh] bg-gray-300 flex justify-center items-center'>
            <h2 className='font-bold text-3xl'>No read list data found</h2>
        </div>
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           {
            filterdReadList.map((book,ind) =>(
             <BookCards key={ind} book={book}/>
            ))
             }
        </div>
        </div>
    );
};

export default ListedReadList;