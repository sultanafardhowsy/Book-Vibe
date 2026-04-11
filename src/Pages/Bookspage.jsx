import React, { useContext, useState } from 'react';
import { Bookcontext } from '../Context/Bookcontext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../Components/ListedBooks/ListedReadList';
import ListedWishList from '../Components/ListedBooks/ListedWishList';


const Bookspage = () => {
     const {storedBooks,whishlist} = useContext(Bookcontext)
        // console.log(storedBooks,'bookcontext');
        const [sortingType, setSortingType] = useState("")
        console.log(sortingType,'sorting type');
    return  <div className='container mx-auto'>
  <div className='flex justify-center my-3'>
     
   <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">Sort by</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setSortingType("pages")}><a>Pages</a></li>
    <li onClick={() => setSortingType("rating")}><a>Rating </a></li>
  </ul>
</div>
    
  </div>
    <Tabs>
    <TabList>
      <Tab>Readlist</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList sortingType={sortingType}/>
    </TabPanel>
    <TabPanel>
      <ListedWishList sortingType={sortingType}/>
    </TabPanel>
  </Tabs>


    </div>
    
};

export default Bookspage;