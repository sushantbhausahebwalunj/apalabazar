import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/Dashboard";
import CreateProductForm from "./components/createProduct/CreateProductForm";
import OrdersTable from "./components/Orders/OrdersTable";
import ProductsTable from "./components/Products/ProductsTable";
import Customers from "./components/Customer/Customer";
import Categories from './components/Category/categories';
import { BiSolidCategoryAlt } from "react-icons/bi";
import Navbar from "./tables/navbar";
import { FaTachometerAlt, FaBoxOpen, FaTags, FaShoppingCart, FaUser, FaCog, FaTimes } from 'react-icons/fa';
import { RiAdvertisementFill,RiCoupon2Fill } from "react-icons/ri";

import Advertisements from "./components/Advertisements/Advertisements";
import Coupons from "./components/Coupons/Coupons";

const sidebarClasses = 'w-64 bg-white border-r border-gray-200 shadow-lg fixed lg:static h-full lg:z-auto'; // Increased z-index
const linkClasses = 'flex items-center p-4 mt-2 text-gray-600 hover:bg-gray-100 hover:text-green-500 rounded-lg transition-colors duration-200';
const activeLinkClasses = 'flex items-center p-4 text-green-500 bg-gray-100 rounded-lg font-bold shadow-sm';

const menu = [
  { name: "Dashboard", path: "/admin", icon: <FaTachometerAlt /> },
  { name: "Products", path: "/admin/products", icon: <FaBoxOpen /> },
  { name: "Add Products", path: "/admin/product/create", icon: <FaTags /> },
  { name: "Categories", path: "/admin/categories", icon: <BiSolidCategoryAlt /> },
  { name: "Customers", path: "/admin/customers", icon: <FaUser /> },
  { name: "Orders", path: "/admin/orders", icon: <FaShoppingCart /> },
  { name: "Advertisements", path: "/admin/advertisements", icon: <RiAdvertisementFill />},
  { name: "Coupons", path: "/admin/coupons", icon: <RiCoupon2Fill />},
  { name: "Settings", path: "/admin/settings", icon: <FaCog /> },
];

function AdminPanel() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    if (window.innerWidth <= 1024) { // Adjust this width based on your design breakpoints
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  

  return (
    <section className="flex w-screen">
      <div className="bg-[#eff4f8] w-fit">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex h-full">
          {isSidebarOpen && (
            <div className={sidebarClasses}>
              <div className="p-4 flex justify-between z-55 items-center w-[280px]">
                <h1 className="text-2xl font-bold text-green-500">Admin</h1>
                <button className="text-gray-600 hover:text-green-500 lg:hidden" onClick={toggleSidebar}>
                  <FaTimes />
                </button>
              </div>
              <nav className="mt-8 h-screen">
                {menu.map((item, index) => (
                  <Link to={item.path} key={index} className={linkClasses} onClick={toggleSidebar}>
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
          <div className='flex-grow'>
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/product/create" element={<CreateProductForm />} />
              <Route path="/products" element={<ProductsTable />} />
              <Route path="/orders" element={<OrdersTable />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/advertisements" element={<Advertisements />} />
              <Route path="/coupons" element={<Coupons />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPanel;
