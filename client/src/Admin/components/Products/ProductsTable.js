import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography, TextField, MenuItem } from '@mui/material';

// Dummy grocery products with images
const products = [
  { id: 1, title: 'Apple', category: 'Fruits', price: 2.5, quantity: 50, image: 'https://img.freepik.com/free-psd/red-fresh-apple-isolated-con-transparent-background_125540-5172.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718236800&semt=ais_user' },
  { id: 2, title: 'Banana', category: 'Fruits', price: 1.5, quantity: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHvuo427ZibCmrJqhMEv_trKmC9wrnT0piw&s' },
  { id: 3, title: 'Carrot', category: 'Vegetables', price: 3, quantity: 30, image: '/images/carrot.jpg' },
  { id: 4, title: 'Broccoli', category: 'Vegetables', price: 4, quantity: 20, image: '/images/broccoli.jpg' },
  { id: 5, title: 'Milk', category: 'Dairy', price: 2, quantity: 100, image: '/images/milk.jpg' },
  { id: 6, title: 'Eggs', category: 'Dairy', price: 3.5, quantity: 80, image: '/images/eggs.jpg' },
  { id: 7, title: 'Chicken', category: 'Meat', price: 10, quantity: 15, image: '/images/chicken.jpg' },
  { id: 8, title: 'Salmon', category: 'Seafood', price: 15, quantity: 10, image: '/images/salmon.jpg' },
  { id: 9, title: 'Bread', category: 'Bakery', price: 2.5, quantity: 60, image: '/images/bread.jpg' },
  { id: 10, title: 'Cheese', category: 'Dairy', price: 5, quantity: 40, image: '/images/cheese.jpg' },
];

const categories = [...new Set(products.map((product) => product.category))];

const ProductsTable = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const itemsPerPage = 10;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const filteredProducts = products
    .filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
    .filter((product) => !filterCategory || product.category === filterCategory)
    .filter((product) => !filterPrice || product.price <= filterPrice);

  const displayProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box className="flex flex-col h-screen p-4 bg-gray-100"sx={{ borderRadius: "5px", }} >
      <Typography variant="h4" component="h1" className="text-center mb-6 text-black-600" sx={{ letterSpacing: ".25px", fontWeight: "bold", fontFamily: "sans-serif", mt:2 }}>
        Product List
      </Typography>
      <Box className="mb-4 p-4  rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={handleSearchChange}
          className="w-full md:w-1/3"
          style={{ backgroundColor: '#f0f0f0' }}
        />
        <TextField
          label="Category"
          variant="outlined"
          select
          value={filterCategory}
          onChange={handleCategoryChange}
          className="w-full md:w-1/3"
          style={{ backgroundColor: '#f0f0f0' }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Max Price"
          variant="outlined"
          type="number"
          value={filterPrice}
          onChange={handlePriceChange}
          className="w-full md:w-1/3"
          style={{ backgroundColor: '#f0f0f0' }}
        />
      </Box>
      <Box className="flex-1 overflow-y-auto " sx={{ borderRadius: "5px" }}>
        <table className="min-w-full border-collapse block md:table bg-white shadow-lg rounded-lg" >
          <thead className="block md:table-header-group bg-green-600" >
            <tr className="md:table-row">
              <th className="p-4 text-white font-semibold text-left block md:table-cell">Title</th>
              <th className="p-4 text-white font-semibold text-left block md:table-cell">Category</th>
              <th className="p-4 text-white font-semibold text-left block md:table-cell">Price</th>
              <th className="p-4 text-white font-semibold text-left block md:table-cell">Quantity</th>
              <th className="p-4 text-white font-semibold text-left block md:table-cell">Image</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {displayProducts.map((product) => (
              <tr key={product.id} className="bg-white border-b border-gray-200 md:border-none block md:table-row hover:bg-gray-50">
                <td className="p-4 md:border md:border-gray-200 text-left block md:table-cell">{product.title}</td>
                <td className="p-4 md:border md:border-gray-200 text-left block md:table-cell">{product.category}</td>
                <td className="p-4 md:border md:border-gray-200 text-left block md:table-cell">${product.price}</td>
                <td className="p-4 md:border md:border-gray-200 text-left block md:table-cell">{product.quantity}</td>
                <td className="p-4 md:border md:border-gray-200 text-left block md:table-cell">
                  <img src={product.image} alt={product.title} className="h-10 w-10 object-cover rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <Box className="flex justify-center mt-6">
        <Pagination
          count={Math.ceil(filteredProducts.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default ProductsTable;
