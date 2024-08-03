import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import { FaUser, FaHeart, FaBox, FaSignOutAlt } from "react-icons/fa";
import { clearUser } from "../../../Redux/User/userSlice";
import logo from "../../../logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from '../../../Redux/Cart/cartSlice';
import { fetchCategories } from "../../../Redux/Category/categoriesSlice.js"; // Adjust the path as necessary
import { signoutUser } from "../../../Redux/User/userSlice";
import "./nabar_sty.css"
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
              key={category._id}
              onClick={() => handleSide(`/category/${category._id}`)}
              className="border-none focus:border-none ml-3"
            >
              {category.name.toUpperCase()}
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
    <div className="shadow-lg overflow-hidden relative">
      {/* Top Navbar */}
      <div className="bg-orange-500 p-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-4 logo-title">
          <img src={logo} alt="Logo" className="h-10" crossOrigin="anonymous" />
          <h2 className="text-white text-xl">Aapla <span className="text-red-500">Bajar</span></h2>
        </a>
        <div className="hidden md:flex items-center search-form">
          <form onSubmit={handleSearch} className="flex">
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
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <div
            className="flex items-center space-x-2 rounded-md p-2 border-[1px] border-none profile-dropdown-trigger"
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
                Register
              </button>
            )}
            <Register showModal={showModal} setShowModal={setShowModal} />
          </div>
          {hoverDropdown && (
            <div
              className="fixed bg-white shadow-lg space-y-2 w-fit border-[1px] border-gray-200 rounded-md z-[1000] navbar-profile-dropdown visible"
              style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
              onMouseEnter={() => setHoverDropdown(true)}
              onMouseLeave={() => setHoverDropdown(false)}
            >
              <button
                onClick={() => navigate('/myprofile/profile-information')}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left navbar-profile-dropdown-item"
              >
                <FaUser className="mr-2" />
                My Profile
              </button>
              <button
                onClick={() => navigate('/myprofile/likes')}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left navbar-profile-dropdown-item"
              >
                <FaHeart className="mr-2" />
                Wishlist
              </button>
              <button
                onClick={() => navigate('/myprofile/orders')}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left navbar-profile-dropdown-item"
              >
                <FaBox className="mr-2" />
                Orders
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left navbar-profile-dropdown-item"
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          )}
          <button onClick={showCart} className="relative cart-button">
            <svg
              className="w-8 h-8 text-black-500 hover:text-blue-500 transition-colors duration-300 ease-in-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.34 2.17M7 13h10l4-8H5.978L4.34 5.17M7 13l-1.52 6.714M7 13h10.28a1 1 0 0 1 .93.635l.097.175.516 1.045M19.5 13H8.5m0 0L6.978 19.714M19.5 13h2.5m-4.5 5.5A1.5 1.5 0 1 1 20.5 19A1.5 1.5 0 0 1 19 17.5zm-9 0A1.5 1.5 0 1 1 11.5 19A1.5 1.5 0 0 1 10 17.5z"
              ></path>
            </svg>
            {items.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center animate-bounce">
                {items.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white flex justify-between items-center p-2 shadow-md">
        <div className="flex items-center space-x-2 overflow-hidden">
          {renderCategories()}
          <button
            onClick={handleNavigate}
            className="border-none focus:border-none ml-3"
          >
            All Categories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
