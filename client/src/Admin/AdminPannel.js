import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import RecentOrders from './tables/RecentOrder';
import AdminNavbar from './Navigation/AdminNavbar';
import AdminSidebar from './components/AdminSidebar/AdminSidebar';

function AdminPanel() {
  return (
    <div className="h-screen flex">
      {/* Admin Sidebar */}
      <AdminSidebar />
      
    
      <div className="flex flex-col w-full">
        {/* Admin Navbar */}
        <AdminNavbar />
      

        <div className="flex-grow flex flex-col p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <p className="text-gray-600">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Dashboard Component */}
          <div className="flex-1">
            <Dashboard />
          </div>

          {/* Recent Orders Component */}
          <RecentOrders />
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
