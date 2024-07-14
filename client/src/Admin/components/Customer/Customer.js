import React from 'react';

const inputClass = "w-full px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";
const buttonClass = "px-3 py-1 border rounded-md";
const iconButtonClass = "text-blue-500 hover:text-blue-700";

const Customer = () => {
  return (
    <div className="min-h-screen bg-zinc-100 p-4">
      <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Customer List</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">+ Add new</button>
        </div>
        <div className="relative mb-4">
          <input type="text" placeholder="Search here..." className={inputClass} />
          <span className="absolute right-3 top-3 text-zinc-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="hidden sm:block">User</div>
          <div className="hidden sm:block">Phone</div>
          <div className="hidden sm:block">Email</div>
          <div className="hidden sm:block">Address</div>
        </div>
        {[
          {
            name: "Kristin Watson",
            phone: "+1 234 567 890",
            email: "kristin@example.com",
            address: "123 Main St, Springfield, IL",
            image: "https://placehold.co/40x40"
          },
          {
            name: "Cameron Williamson",
            phone: "+1 987 654 321",
            email: "cameron@example.com",
            address: "456 Elm St, Shelbyville, IL",
            image: "https://placehold.co/40x40"
          },
          {
            name: "Jane Cooper",
            phone: "+1 456 789 012",
            email: "jane@example.com",
            address: "789 Oak St, Ogdenville, IL",
            image: "https://placehold.co/40x40"
          }
        ].map((user, index) => (
          <div key={index} className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 border-b hover:bg-zinc-50 transition duration-200">
            <div className="flex items-center space-x-3">
              <img src={user.image} alt="User" className="rounded-full w-10 h-10" />
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-zinc-500 text-sm">Grocery Shopper</p>
              </div>
            </div>
            <div className="hidden sm:block">{user.phone}</div>
            <div>{user.email}</div>
            <div className="">{user.address}</div>
            <div className="flex space-x-2">
              <button className={iconButtonClass}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 12a3 3 0 100-6 3 3 0 000 6zM2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 0v10h12V5H4z" />
                </svg>
              </button>
              <button className={iconButtonClass}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="green">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM5 12V7H3v10a1 1 0 001 1h10v-2H6a1 1 0 01-1-1z" />
                </svg>
              </button>
              <button className={iconButtonClass}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="red">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H3a1 1 0 000 2h1v10a2 2 0 002 2h8a2 2 0 002-2V6h1a1 1 0 100-2h-2V3a1 1 0 00-1-1H6zm2 3V3h4v2H8zm1 6a1 1 0 112 0v4a1 1 0 11-2 0v-4z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-8">
          <p className="text-zinc-600 text-xs">Showing 3 entries</p>
          <div className="flex space-x-1">
            <button className={buttonClass + " text-zinc-600 hover:bg-zinc-200 transition duration-300"}>1</button>
            <button className={buttonClass + " bg-blue-500 text-white"}>2</button>
            <button className={buttonClass + " text-zinc-600 hover:bg-zinc-200 transition duration-300"}>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
