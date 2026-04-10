import React, { useContext } from 'react';
import { Bookcontext } from '../Context/Bookcontext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../Components/ListedBooks/ListedReadList';
import ListedWishList from '../Components/ListedBooks/ListedWishList';


const Bookspage = () => {
     const {storedBooks,whishlist} = useContext(Bookcontext)
        console.log(storedBooks,'bookcontext');
    return  <div className='container mx-auto'>
   
    
    <Tabs>
    <TabList>
      <Tab>Readlist</Tab>
      <Tab>Wishlist</Tab>
    </TabList>

    <TabPanel>
      <ListedReadList/>
    </TabPanel>
    <TabPanel>
      <ListedWishList/>
    </TabPanel>
  </Tabs>


    </div>
    
};

export default Bookspage;