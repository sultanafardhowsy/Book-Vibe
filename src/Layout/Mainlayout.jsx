import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router';
import Allbooks from '../Components/Allbooks';

const Mainlayout = () => {
    return (
        <div>
          <Navbar />
          <Outlet />
          
        </div>
    );
};

export default Mainlayout;