import React from 'react';
import { FaBell, FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  // Function to handle search button click
  const handleSearch = () => {
    // Implement your search logic here
    console.log('Performing search...');
  };

  return (
    <nav className="bg-white p-6 py-6 flex justify-between items-center w-full"> 
      <div className="flex items-center px-3">
        <div  className="text-black font-bold text-2xl " sx={{  fontWeight: "bold", fontFamily: "sans-serif", }}>My Dashboard</div>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="bg-red text-gray rounded-lg px-3 py-1 focus:outline-none flex items-center"
          onClick={handleSearch}
        >
          <FaSearch className="text-xl" />
          <span className="ml-2 hidden sm:inline-block">Search</span>
        </button>

        
        <div className="text-black cursor-pointer text-2xl hover:text-gray-400">
          <FaBell />
        </div>

        {/* User icon */}
        <div className="text-black cursor-pointer text-2xl px-2  hover:text-gray-400">
          <FaUserCircle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
