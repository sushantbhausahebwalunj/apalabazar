import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { fetchOrders } from '../../../Redux/Order/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const orders1 = [
  {
    id: '1',
    date: '2024-07-20',
    paymentStatus: 'Paid',
    address: '123 Main St, City, State, ZIP',
    items: [
      { id: 'a1', name: 'Product A', quantity: 2, price: '$20.00' },
      { id: 'b2', name: 'Product B', quantity: 1, price: '$15.00' },
    ],
  },
  {
    id: '2',
    date: '2024-07-22',
    paymentStatus: 'Pending',
    address: '456 Another St, City, State, ZIP',
    items: [
      { id: 'c3', name: 'Product C', quantity: 1, price: '$30.00' },
    ],
  },
];

const MyOrders = () => {
  const dispatch = useDispatch();
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const { orders, status, error } = useSelector((state) => state.orders || {});

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  if (status === 'loading') {
    console.log("Loading");
  }

  if (status === 'failed') {
    console.log("failed");
  }
  if (status === 'succeeded') {
    console.log("succeeded");
  }
  
  const handleToggle = (id) => {
    setExpandedOrderId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      {orders && orders.map((order) => (
        <div key={order.id} className="border border-gray-300 rounded-lg mb-4">
          <div
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100"
            onClick={() => handleToggle(order.id)}
          >
            <div className="text-lg font-medium">Order #{order.id}</div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Date: {order.createdAt}</span>
              <span className={`text-sm font-semibold ${order.orderStatus === 'PENDING' ? 'text-yellow-600' : 'text-red-600'}`}>
                Payment Status:
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
                  {order.orderItems.map((item) => (
                    <li key={item.product._id} className="flex justify-between mb-2">
                      <span>{item.product.title}</span>
                      <span>{item.product.quantity} x {item.product.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
