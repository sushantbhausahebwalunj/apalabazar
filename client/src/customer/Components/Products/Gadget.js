










import React from 'react';
import { Link } from 'react-router-dom';

const Gadgets = ({ advertisements, status }) => {
  return (
    <div className="p-8 bg-white rounded-md">
      <h2 className="text-2xl font-bold text-center mb-6">Best Gadgets & Appliances</h2>
      <div className="relative">
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {advertisements.filter(advertisement => advertisement.section === "Section 1").slice(0, 4).map((advertisement, index) => (
            <Link to={`/product/${advertisement.product._id}`} key={index} className="flex-shrink-0">
              <div className="bg-white border rounded-lg shadow-lg overflow-hidden w-64">
                <img
                  src={advertisement.imageUrl}
                  alt={advertisement.title}
                  className="w-full h-32 sm:h-48 transform hover:scale-105 transition duration-300 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold sm:text-lg">{advertisement.title}</h3>
                  <p className="text-green-600 text-xs sm:text-sm">{advertisement.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/gadgets" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;

