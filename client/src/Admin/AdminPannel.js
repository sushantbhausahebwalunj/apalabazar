import React, { useState, useEffect } from 'react';

const AdminPannel = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.sidebar') && !e.target.closest('.burger-button')) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex h-screen">
      <nav className={`sidebar fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 bg-gray-200 w-64 p-4`}>
        <ul>
          <li><a href="#" className="block py-2 text-gray-600">Dashboard</a></li>
          <li><a href="#" className="block py-2 text-gray-600">Products</a></li>
          <li><a href="#" className="block py-2 text-gray-600">Orders</a></li>
          <li><a href="#" className="block py-2 text-gray-600">Customers</a></li>
          <li><a href="#" className="block py-2 text-gray-600">Reports</a></li>
          <li><a href="#" className="block py-2 text-gray-600">Settings</a></li>
        </ul>
      </nav>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between px-4 py-2 bg-white w-full border-b">
          <div className="flex items-center space-x-4">
            <button onClick={toggleSidebar} className="burger-button text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 9a1 1 0 112 0v2a1 1 0 11-2 0V9zM5 5a1 1 0 100-2h10a1 1 0 100 2H5zm12 6a1 1 0 00-1-1H6a1 1 0 100 2h10a1 1 0 001-1z" clipRule="evenodd" />
              </svg>
            </button>
            <input type="text" placeholder="Search..." className="bg-gray-100 px-2 py-1 rounded-lg" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </header>

        <main className="p-4 flex-1 overflow-y-auto bg-white">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-800 dark:text-zinc-800">Welcome, [Admin Name]!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black">
                <p className="text-lg font-semibold text-black ">Total Sales</p>
                <p className="text-xl font-bold text-blue-500">$10,000</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black">
                <p className="text-lg font-semibold text-black ">New Orders</p>
                <p className="text-xl font-bold text-blue-500">50</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black">
                <p className="text-lg font-semibold text-black ">Total Customers</p>
                <p className="text-xl font-bold text-blue-500">1,200</p>
              </div>
            </div>
          </div>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-800">Sales Overview</h2>
            <div className="bg-white p-4 rounded-lg  shadow-lg border-[2px] border-black mt-4">
              <p>Sales Chart</p>
              <img src="https://placehold.co/500x200" alt="Sales Chart" className="w-full mb-4" crossorigin="anonymous" />
              <p>Summary: Sales are up 10% this month.</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-800">Recent Orders</h2>
            <table className="min-w-full bg-white  rounded-lg shadow-md">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-blue-500  text-white">Order ID</th>
                  <th className="py-2 px-4 bg-blue-500  text-white">Customer</th>
                  <th className="py-2 px-4 bg-blue-500  text-white">Total</th>
                  <th className="py-2 px-4 bg-blue-500  text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">001</td>
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">$100</td>
                  <td className="py-2 px-4">Shipped</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">002</td>
                  <td className="py-2 px-4">Joshan sho</td>
                  <td className="py-2 px-4">$150</td>
                  <td className="py-2 px-4">Deliverd</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">003</td>
                  <td className="py-2 px-4">David sharma</td>
                  <td className="py-2 px-4">$900</td>
                  <td className="py-2 px-4">Pending</td>
                </tr>
              </tbody>
            </table>
            <a href="#" className="block text-blue-500 mt-2">View All Orders</a>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-800">Top Selling Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black">
                <p>Product 1</p>
                <p>Sales: $5000</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black">
                <p>Product 2</p>
                <p>Sales: $3000</p>
              </div>
            </div>
            <a href="#" className="block text-blue-500 mt-2">View All Products</a>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-800">Customer Activity</h2>
            <table className="w-full bg-white dark:bg-zinc-800 rounded-lg shadow-md mt-4">
              {/* Table content */}
            </table>
            <a href="#" className="block text-blue-500 mt-2">View All Customers</a>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-800">Notifications and Alerts</h2>
            <div className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black">
              <p>Low stock alert for "Product Name"</p>
              <p>New customer registration: John Doe</p>
            </div>
            <a href="#" className="block text-blue-500 mt-2">View All Notifications</a>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-800">Tasks</h2>
            <ul className="bg-white p-4 rounded-lg shadow-lg border-[2px] border-black mt-4">
              <li>
                <input type="checkbox" id="task1" />
                <label htmlFor="task1">Task 1</label>
              </li>
              <li>
                <input type="checkbox" id="task2" />
                <label htmlFor="task2">Task 2</label>
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Add New Task</button>
          </section>
        </main>

      </div>
    </div>
  );
};

export default AdminPannel;
