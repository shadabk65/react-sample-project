import React, { useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

// project imports
// import Header from './Header';
// import Sidebar from './Sidebar';
// import HorizontalBar from './HorizontalBar';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
	  <div>
	  	<h1> Main Layout </h1>
    	<Outlet />
    </div>       
  )
};

export default MainLayout
