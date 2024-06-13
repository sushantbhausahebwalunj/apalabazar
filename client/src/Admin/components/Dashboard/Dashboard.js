import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Total Sales</h3>
          <p className="text-2xl">$12,742.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Total Orders</h3>
          <p className="text-2xl">134</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Total Customers</h3>
          <p className="text-2xl">89</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Active Users</h3>
          <p className="text-2xl">23</p>
        </div>
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-bold mb-2">Income Statistics</h3>
          <p className="text-2xl">$24,740.00</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
