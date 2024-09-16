import { Outlet } from 'react-router-dom';
import React, { useEffect, useMemo } from 'react';

// ==============================|| MINIMAL LAYOUT ||============================== //

const MinimalLayout = () => {

  return(
    <div>
      <h1> Minimal Layout </h1>
      <Outlet />
    </div>
  )
}

export default MinimalLayout;
