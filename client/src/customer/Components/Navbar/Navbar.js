import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import {
  FaUser,
  FaHeart,
  FaBox,
  FaSignOutAlt,
} from "react-icons/fa";

import { clearUser } from "../../../Redux/User/userSlice";
import logo from "../../../logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from '../../../Redux/Cart/cartSlice';
import { fetchCategories } from "../../../Redux/Category/categoriesSlice.js"; // Adjust the path as necessary
import { signoutUser } from "../../../Redux/User/userSlice";
import "./navbar_sty.css";

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false); // Track profile hover state
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [showProfileMenu, setShowProfileMenu] = useState(false); // For mobile profile menu
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const authToken = localStorage.getItem("authToken");
  const isAuthenticated = !!authToken;

  const categories = useSelector((state) => state.categories.categories);
  const handleSide = (path) => {
    navigate(path);
  };

  const renderCategories = () => {
    return categories
      .filter((category) => category.level === 1)
      .map((category, i) => {
        if (i < 8) {
          return (
            <button
              onClick={() => handleSide(`/category/${category._id}`)}
              className={`category-button ${category.name === 'Groceries' ? 'bg-orange-500 text-black' : 'bg-gray-200 text-black-700'}`}
              key={category._id}
            >
              {category.name}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          );
        }
        return null;
      });
  };


  const handleNavigate = () => {
    navigate("/category");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") return; // Check if the search field is empty
    navigate(`/search/${search}`);
  };

  const showCart = () => {
    navigate("/cart");
  };

  const handleProfileClick = () => {
    if (localStorage.getItem("role") === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/myprofile/profile-information");
    }
  };

  const handleLogout = () => {
    dispatch(signoutUser());
    dispatch(clearUser());
    window.location.reload();
  };

  const handleMouseEnter = (event) => {
    if (isAuthenticated) {
      const { top, left, height } = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({ top: top + height, left });
      setHoverProfile(true); // Track profile hover state
      setHoverDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (isAuthenticated) {
      setTimeout(() => {
        if (!hoverProfile && !hoverDropdown) {
          setHoverDropdown(false);
        }
      }, 100);
    }
  };

  const [viewport, setViewport] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 620);

  useEffect(() => {
    const handleResize = () => {
      setViewport(window.innerWidth < 768);
      setIsMobile(window.innerWidth < 620);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      <div className="shadow-lg overflow-hidden relative">
        {/* Top Navbar */}
        <div style={{ backgroundColor: '#FE4305' }} className=" p-4 flex items-center justify-between">
          <a href="/" className=" logo-title">
            <img className="object-contain md:object-cover rounded-xl" src={logo} alt="Logo" crossOrigin="anonymous" />
            {/* <h2 className="text-white text-xl">Aapla <span className="text-red-500">Bajar</span></h2> */}
          </a>
          <div className="hidden md:flex items-center search-form">
            <form onSubmit={handleSearch} className="flex items-center search-form-container">
              <span className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 30 30"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
                  />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search essentials, groceries and more..."
                className="rounded-xl font-md border-white p-2 pl-10 w-[40vw] lg:w-[35vw]  search-input"
                onChange={(e) => setSearch(e.target.value)}
                required
                value={search}
              />
              {/* <button type="submit" className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-lg font-sans search-button">
                SEARCH
              </button> */}
            </form>
            {/* <form onSubmit={handleSearch} className="flex">
              <input
                type="search"
                placeholder="Search essentials, groceries and more..."
                className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[40vw] lg:w-[35vw] dark:bg-white dark:text-black search-input"
                onChange={(e) => setSearch(e.target.value)}
                required
                value={search}
              />
              <button type="submit" className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-r-lg font-sans search-button">
                SEARCH
              </button>
            </form> */}
          </div>
          <div className="flex">


            <div className="hidden md:flex items-center ml-4 lg:space-x-2">
              <button onClick={showCart}>
                <svg
                  className="w-6 h-6 text-white hover:text-blue-500 transition-colors duration-300 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="65 55 60 60"
                  xmlns="http://www.w3.org/2000/svg"
                >


                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="5"
                    d="M65.58,90.82l10.49,9.91L65.58,90.82Zm-2.52,5.76a3.06,3.06,0,0,1,0,6.12H7.12a7.09,7.09,0,0,1-5-2.1h0a7.1,7.1,0,0,1-2.09-5V7.12a7.06,7.06,0,0,1,2.1-5h0A7.1,7.1,0,0,1,7.12,0H91.63a7.1,7.1,0,0,1,5,2.09l.21.23a7.16,7.16,0,0,1,1.88,4.8V49a3.06,3.06,0,0,1-6.12,0V7.12a1,1,0,0,0-.22-.62l-.08-.08a1,1,0,0,0-.7-.3H7.12a1,1,0,0,0-.7.3h0a1,1,0,0,0-.29.7V95.58a1,1,0,0,0,.3.7h0a1,1,0,0,0,.7.29ZM95.44,67.42c3.54-3.7,6-6.89,11.5-7.52,10.24-1.17,19.65,9.32,14.47,19.64-1.47,2.94-4.47,6.44-7.78,9.87C110,93.18,106,96.87,103.14,99.67l-7.69,7.63-6.36-6.12C81.44,93.82,69,84.54,68.55,73.06c-.28-8,6.07-13.2,13.37-13.11,6.53.09,9.29,3.33,13.52,7.47Zm-71.66,0A3.62,3.62,0,1,1,20.16,71a3.62,3.62,0,0,1,3.62-3.62Zm14.71,7.27a3.15,3.15,0,0,1,0-6.19h11.8a3.15,3.15,0,0,1,0,6.19ZM23.78,46a3.62,3.62,0,1,1-3.62,3.61A3.62,3.62,0,0,1,23.78,46Zm14.71,6.94a3.1,3.1,0,0,1,0-6.11H62.58a3.1,3.1,0,0,1,0,6.11ZM23.78,24.6a3.62,3.62,0,1,1-3.62,3.62,3.62,3.62,0,0,1,3.62-3.62Zm14.71,6.65a2.84,2.84,0,0,1-2.57-3.05,2.85,2.85,0,0,1,2.57-3.06H72.38A2.85,2.85,0,0,1,75,28.2a2.84,2.84,0,0,1-2.57,3.05Z"
                  />
                </svg>
              </button>
              <sup className="text-bold px-2 rounded-full bg-red-500 text-white text-lg animate-bounce" style={{ marginTop: '-15px', marginLeft: '-5px' }}>
                {items && items[0] && items[0].length}
              </sup>
            </div>

            <div className="flex items-center ml-10 md:ml-4 lg:space-x-2">
              <button onClick={showCart}>
                <svg
                  className="md:w-8 md:h-8 h-6 w-6 text-white hover:text-blue-500 transition-colors duration-300 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >


                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
                  />
                </svg>
              </button>


              <sup className="text-bold px-2 rounded-full bg-red-500 text-white text-lg animate-bounce" style={{ marginTop: '-15px', marginLeft: '-5px' }}>
                {items && items[0] && items[0].length}
              </sup>
            </div>
            <div className="flex items-center space-x-4">
              <div
                className="flex items-center space-x-2 rounded-md p-2 border-[1px] border-none profile-dropdown-trigger"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setShowProfileMenu(!showProfileMenu)} // Toggle profile menu on click
              >
                <svg
                  className="md:w-8 md:h-8 h-6 w-6 text-zinc-700  bg-white rounded-3xl hover:bg-blue-500 transition-colors duration-300 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="1 1 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="m26.7489 24.93a13.9893 13.9893 0 1 0 -24.7489-8.93 13.899 13.899 0 0 0 3.2511 8.93l-.02.0166c.07.0845.15.1567.2222.2392.09.1036.1864.2.28.3008.28.3033.5674.5952.87.87.0915.0831.1864.1612.28.2417.32.2759.6484.5372.99.7813.0441.0312.0832.0693.1276.1006v-.0127a13.9011 13.9011 0 0 0 16 0v.0125c.0444-.0313.0835-.0694.1276-.1006.3412-.2441.67-.5054.99-.7813.0936-.08.1885-.1586.28-.2417.3025-.2749.59-.5668.87-.87.0933-.1006.1894-.1972.28-.3008.0719-.0825.1522-.1547.2222-.2392zm-10.7489-16.93a4.5 4.5 0 1 1 -4.5 4.5 4.5 4.5 0 0 1 4.5-4.5zm-7.9929 16.93a4.9957 4.9957 0 0 1 4.9929-4.93h6a4.9958 4.9958 0 0 1 4.9929 4.93 11.94 11.94 0 0 1 -15.9858 0z"
                  ></path>
                </svg>
                {isAuthenticated ? (
                  <span>
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </span>
                ) : (
                  <button onClick={() => setShowModal(true)} className="text-black font-medium">
                  </button>
                )}
                <Register showModal={showModal} setShowModal={setShowModal} />
              </div>


            </div>
          </div>
        </div>


        {/* Search bar for mobile */}
        {/* {isMobile && (
            
            // <form onSubmit={handleSearch} className="search-form-mobile flex items-center mt-2 p-4">
            //   <input
            //     className="search-input-mobile border border-gray-400 rounded-lg p-2 flex-grow"
            //     type="text"
            //     placeholder="Search for products..."
            //     value={search}
            //     onChange={(e) => setSearch(e.target.value)}
            //   />
            //   <button type="submit" className="search-button-mobile bg-blue-500 text-white rounded-lg p-2 ml-2">
            //     Search
            //   </button>
            // </form>

            <div className="bg-white/70 backdrop-blur-lg border-b-[3px] flex flex-wrap gap-0.01 w-full items-center ">
          <div className="p-1.5 pr-1 lg:pr-90 w-fit">
            <button
              onClick={handleNavigate}
              className="bg-orange-500 text-white  pr-2 'bg-gray-200 text-gray-700 lg:w-[10vw] lg:space-x-1 category-button">
              <svg
              className="w-4 h-4 ml-1"
              fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              {viewport ? null : <span>All Categories</span>}
            </button>
          </div>
          <div>
            <div className="md:flex justify-evenly lg:w-[20vw] md:w-20 gap-0.01 hidden">
              {renderCategories()}
            </div>
          
          </div>
          </div>
          )
          } */}


      </div>
      {/* Bottom Navbar */}
      <div className="bg-white/70 backdrop-blur-lg mt-2 border-b-[3px] flex flex-wrap gap-0.01 w-full items-center py-4 ">
        <div className="w-100 flex row">
          
          <div className="flex  items-center flex-wrap space-x-3 overflow-hidden w-100">
          
        
          {renderCategories()}
        </div>
        </div>
        


      </div>
    </>
  );
};

export default Navbar;
