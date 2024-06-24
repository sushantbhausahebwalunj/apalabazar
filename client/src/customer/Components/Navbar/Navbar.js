import React, { useState } from "react";
import Register from "../Auth/Register";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/category");
  };
  const showCart = () => {
    navigate("/cart");
  };

  return (
    <div className="shadow-lg">
      {/* Top Navbar */}
      <div className="bg-white p-6 border-b-[2px] flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_YhaXWp1A9kZxpeXYpCL0oj0764uVAWjdA&s"
            alt="Logo"
            className="h-10 rounded-md"
            crossOrigin="anonymous"
          />
          <div className="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search absolute left-2"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input
              type="text"
              placeholder="Search for Biscuits"
              className="border-[2px] border-zinc-200 rounded-md p-1 pl-8 w-[200px] dark:bg-white dark:text-zinc-300"
            />
          </div>
        </div>
       
        <div className="flex items-center space-x-7">
          <div className="flex items-center space-x-2">
            <button onClick={() => showCart()}>
              <svg
                className="w-6 h-6 text-zinc-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h18l-1.68 9.39a2 2 0 01-1.98 1.61H6.66a2 2 0 01-1.98-1.61L3 3zm0 0l1.68 9.39a2 2 001.98 1.61h10.68a2 2 001.98-1.61L21 3M5 21h14"
                ></path>
              </svg>
            </button>
            <span className="text-yellow-500">{props.number}</span>
            <span className="text-zinc-700">₹0</span>
          </div>
          <div className="flex bg-blue-600 p-2 px-3 rounded-md items-center space-x-1 ">
            <svg
              className="w-6 h-6 text-white "
              fill="none"
              stroke="white"
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
            <button onClick={() => setShowModal(true)} className=" text-white">
              Sign In / Register
            </button>
            <Register showModal={showModal} setShowModal={setShowModal} />
          </div>
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="bg-gray-700 border-b-[2px] flex items-center space-x-8">
        <div className="border-r-[3px] p-2 pr-16">
          <button onClick={handleNavigate} className="flex items-center space-x-1 text-white font-bold">
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
            <span className="text-white">All Categories</span>
          </button>
        </div>
        <a href="/grocery" className="text-white hover:text-white hover:font-semibold transition ease-in-out duration-1500">
          Grocery
        </a>
        <a href="#" className="text-white hover:text-white hover:font-semibold transition ease-in-out duration-1500">
          Value Packs
        </a>
        <a href="#" className="text-white hover:text-white hover:font-semibold transition ease-in-out duration-1500">
          Home Appliances
        </a>
        <a href="#" className="text-white hover:text-white hover:font-semibold transition ease-in-out duration-1500">
          Cleaners
        </a>
        <a href="#" className="text-white hover:text-white hover:font-semibold transition ease-in-out duration-1500">
          Detergent & Fabric Care
        </a>
      </div>
    </div>
  );
};

function HomeDeliveryStatus() {
  return (
    <div className="text-xs bg-gray-200 mx-3 p-2 px-3 rounded-lg font-bold">
      <div className="flex gap-2 text-gray-800 ">
        <span>Earliest</span>
        <span className="text-green-600">Home Delivery</span>
        <span>available</span>
      </div>
      <div className="flex gap-2 mx-5 items-center font-100 text-gray-500 justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clock-8"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 8 14" />
        </svg>
        <span>Tomorrow</span>
        <span>09:00AM</span>
        <span className="mx-1">-</span>
        <span>06:00AM</span>
      </div>
    </div>
  );
}

export default Navbar;
