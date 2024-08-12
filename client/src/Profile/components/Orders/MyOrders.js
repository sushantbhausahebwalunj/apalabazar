import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { fetchOrders } from '../../../Redux/Order/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const MyOrders = () => {
  const dispatch = useDispatch();
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const { orders, status, error } = useSelector((state) => state.orders || {});

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (status === 'succeeded' && !orders) {
    return <div>No orders found.</div>;
  }
  
  const handleToggle = (id) => {
    setExpandedOrderId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      {orders && orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="border border-gray-300 rounded-lg mb-4">
            <div
              className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => handleToggle(order.id)}
            >
              <div className="text-lg font-medium">Order #{order.id}</div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Date: {order.date}</span>
                <span className={`text-sm font-semibold ${order.paymentStatus === 'Pending' ? 'text-yellow-600' : 'text-green-600'}`}>
                  Payment Status: {order.paymentStatus}
                </span>
                <FontAwesomeIcon icon={expandedOrderId === order.id ? faChevronUp : faChevronDown} />
              </div>
            </div>
            {expandedOrderId === order.id && (
              <div className="p-4 border-t border-gray-200">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">{order.address}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Order Items</h3>
                  <ul className="list-disc pl-5">
                    {order.items && order.items.length > 0 ? (
                      order.items.map((item) => (
                        <li key={item.id} className="flex justify-between mb-2">
                          <span>{item.name}</span>
                          <span>{item.quantity} x {item.price}</span>
                        </li>
                      ))
                    ) : (
                      <li>No items available</li>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No orders available</div>
      )}
    </div>
  );
};

export default MyOrders;
