import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';

const products = [
  { id: 1, title: 'Product 1', category: 'Category 1', price: '$10', quantity: 100 },
  { id: 2, title: 'Product 2', category: 'Category 2', price: '$20', quantity: 200 },
  { id: 3, title: 'Product 3', category: 'Category 3', price: '$30', quantity: 300 },
  { id: 4, title: 'Product 4', category: 'Category 1', price: '$40', quantity: 400 },
  { id: 5, title: 'Product 5', category: 'Category 2', price: '$50', quantity: 500 },
  { id: 6, title: 'Product 6', category: 'Category 3', price: '$60', quantity: 600 },
  { id: 7, title: 'Product 7', category: 'Category 1', price: '$70', quantity: 700 },
  { id: 8, title: 'Product 8', category: 'Category 2', price: '$80', quantity: 800 },
  { id: 9, title: 'Product 9', category: 'Category 3', price: '$90', quantity: 900 },
  { id: 10, title: 'Product 10', category: 'Category 1', price: '$100', quantity: 1000 },
  { id: 11, title: 'Product 11', category: 'Category 2', price: '$110', quantity: 1100 },
  { id: 12, title: 'Product 12', category: 'Category 3', price: '$120', quantity: 1200 },
  // add more products if needed
];

const ProductsTable = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const handleChange = (event, value) => {
    setPage(value);
  };

  const displayProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="p-4">
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto md:relative">
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Title</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Category</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Price</th>
            <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Quantity</th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {displayProducts.map(product => (
            <tr key={product.id} className="bg-white border border-gray-300 md:border-none block md:table-row">
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{product.title}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{product.category}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{product.price}</td>
              <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Pagination count={Math.ceil(products.length / itemsPerPage)} page={page} onChange={handleChange} />
      </div>
    </div>
  );
};

export default ProductsTable;
