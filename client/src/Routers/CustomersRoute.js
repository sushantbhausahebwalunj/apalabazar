import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from '../Pages/HomePage';

function CustomersRoute() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  )
}

export default CustomersRoute
