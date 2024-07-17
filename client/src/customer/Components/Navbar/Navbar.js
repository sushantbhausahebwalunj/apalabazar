import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import {
  FaUser,
  FaHeart,
  FaBox,
  FaSignOutAlt,
} from "react-icons/fa";
import { clearUser } from "../../../Redux/User/userSlice";
import MobNavbar from "./MobileNavbar.js";
import logo from "../../../logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart} from '../../../Redux/Cart/cartSlice';
import { fetchCategories } from "../../../Redux/Category/categoriesSlice.js"; // Adjust the path as necessary

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [hoverDropdown, setHoverDropdown] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false); // Track profile hover state
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const { items, status, fetchCartError } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCart());
  },[dispatch]);
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
              className=" border-none focus:border-none ml-3"
            >
              {category.name}
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
      // navigate("/myprofile/profile-information");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(clearUser());
    navigate("/");
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
      setViewport(window.innerWidth < 620);
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
          <div className="bg-white p-4 border-b-[2px] flex items-center justify-between">
            <a href="/" className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Logo"
                className="h-10"
                crossOrigin="anonymous"
              />
            </a>
            <div className="md:flex items-center hidden ">
              <form onSubmit={handleSearch}>
                <input
                  type="search"
                  placeholder="Search for Biscuits"
                  className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[40vw] lg:w-[35vw] dark:bg-white dark:text-black"
                  onChange={(e) => setSearch(e.target.value)}
                  required
                  value={search}
                />
                <button
                  type="submit"
                  className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-r-lg font-sans"
                >
                  SEARCH
                </button>
              </form>
            </div>
            <div className="flex lg:space-x-12">
              <div className="relative">
                <div
                  className="flex items-center space-x-2 rounded-md p-2 border-[1px] bg-blue-500 hover:bg-blue-600"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <svg
                    className="w-6 h-6 text-zinc-700 border-zinc-700 border-[2px] bg-white rounded-xl"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  {isAuthenticated ? (
                    <button
                      onClick={handleProfileClick}
                      className="text-white font-medium flex items-center"
                    >
                      Profile
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
                  ) : (
                    <button
                      onClick={() => setShowModal(true)}
                      className="text-white font-medium"
                    >
                      Sign In / Register
                    </button>
                  )}
                  <Register showModal={showModal} setShowModal={setShowModal} />
                </div>
                {hoverDropdown && (
                  <div
                    className="fixed bg-white shadow-lg space-y-2 w-fit border-[1px] border-gray-200 rounded-md z-[1000]"
                    style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
                    onMouseEnter={() => setHoverDropdown(true)}
                    onMouseLeave={() => setHoverDropdown(false)}
                  >
                    <button
                      onClick={() => navigate('/myprofile/profile-information')}
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      <FaUser className="mr-2" />
                      My Profile
                    </button>
                    <button
                      onClick={() => navigate('/myprofile/likes')}
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      <FaHeart className="mr-2" />
                      Wishlist
                    </button>
                    <button
                      onClick={() => navigate('/myprofile/orders')}
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      <FaBox className="mr-2" />
                      Orders
                    </button>
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center ml-4 lg:space-x-2">
             <button onClick={showCart}>
                  <svg
                    className="w-8 h-8 text-blue-500"
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
                </button>   <sup className="text-bold px-2 rounded-full bg-blue-500 text-black text-lg" style={{marginTop:'-15px',marginLeft:'-5px'}}>{items&&items[0]&&items[0].length} </sup>
              </div>
            </div>
          </div>
          {/* Bottom Navbar */}
          <div className="bg-white/70 backdrop-blur-lg border-b-[2px] flex flex-wrap gap-2 w-full items-center lg:space-x-8">
            <div className="border-r-[3px] p-2 pr-5 lg:pr-16 w-fit">
              <button
                onClick={handleNavigate}
                className="flex items-center space-x-1 text-zinc-700"
              >
                <svg
                  className="w-6 h-6"
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
                {viewport ? (
        null
      ) : (  <span>All Categories</span>)}
              </button>
            </div>
            <div >
              <div className="md:flex justify-evenly lg:w-[60vw] md:w-100 hidden">
              {renderCategories()}
              </div>
              <div className="md:hidden items-center flex ">
              <form onSubmit={handleSearch} className="w-100%">
                <input
                  type="search"
                  placeholder="Search for Biscuits"
                  className="border-[2px] border-zinc-300 rounded-l-md shadow-md p-2 w-[56vw] dark:bg-white dark:text-black"
                  onChange={(e) => setSearch(e.target.value)}
                  required
                  value={search}
                />
                <button
                  type="submit"
                  className="bg-blue-500 border-[2px] border-blue-500 text-white p-2 rounded-r-lg font-sans w-fit"
                >
                  SEARCH
                </button>
              </form>
            </div>
     
            </div>
      
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default Navbar;
