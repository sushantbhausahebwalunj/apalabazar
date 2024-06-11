import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import Grocery from "../Pages/Grocery/Grocery"

import Category from "../customer/Components/Navbar/Category.js";

import Dairy from '../Pages/Dairy/Dairy';

import ProductDetails from '../customer/Components/Product/ProductDetails/ProductDetails.js';

import Register from '../customer/Components/Auth/Login';



function CustomersRoute() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/grocery" element={<Grocery />}></Route>
      <Route path="/category" element={<Category />} />
      <Route path="/dairy" element={<Dairy />}></Route>

      <Route path="/product/:id" element={<ProductDetails />}></Route>

      <Route path="/register" element={<Register />}></Route>


      </Routes>
    </div>
  )
}

export default CustomersRoute
