import React, { useState } from 'react';
import { Box, Typography, TextField, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Avatar } from '@mui/material';

// Dummy data for customers
const customers = [
  { id: 1, name: 'John Doe', orders: 5, image: '/images/john.jpg', address: '123 Main St, Anytown', mobile: '123-456-7890' },
  { id: 2, name: 'Jane Smith', orders: 8, image: '/images/jane.jpg', address: '456 Elm St, Othertown', mobile: '987-654-3210' },
  { id: 3, name: 'Alice Johnson', orders: 3, image: '/images/alice.jpg', address: '789 Oak Ave, Another Town', mobile: '555-123-4567' },
  { id: 4, name: 'Michael Brown', orders: 4, image: '/images/michael.jpg', address: '567 Pine Rd, New City', mobile: '222-333-4444' },
  { id: 5, name: 'Sarah Adams', orders: 6, image: '/images/sarah.jpg', address: '890 Cedar Ln, Nearby City', mobile: '777-888-9999' },
  { id: 6, name: 'David Wilson', orders: 7, image: '/images/david.jpg', address: '678 Maple Dr, Remote City', mobile: '111-222-3333' },
  { id: 7, name: 'Emily Taylor', orders: 2, image: '/images/emily.jpg', address: '234 Oak Blvd, Faraway Town', mobile: '444-555-6666' },
  { id: 8, name: 'Matthew Clark', orders: 9, image: '/images/matthew.jpg', address: '789 Pine St, Distant City', mobile: '999-000-1111' },
  { id: 9, name: 'Olivia White', orders: 1, image: '/images/olivia.jpg', address: '345 Birch Ave, Remote Town', mobile: '666-777-8888' },
  { id: 10, name: 'Daniel Martinez', orders: 3, image: '/images/daniel.jpg', address: '456 Cedar Rd, Distant Town', mobile: '333-444-5555' },
  // Add more customers as needed
];

const Customers = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const itemsPerPage = 5; // Adjust the number of customers per page here

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(1); // Reset page to 1 when search term changes
  };

  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === 'asc';
    setSortBy(property);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCustomers = sortBy ? filteredCustomers.sort((a, b) => {
    const comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * comparator(a[sortBy], b[sortBy]);
  }) : filteredCustomers;

  const displayCustomers = sortedCustomers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box className="flex flex-col items-center h-screen p-4 bg-gray-100">
      <Typography variant="h4" component="h1" className="mb-6 text-blue-600">
        Customer List
      </Typography>
      <Box className="mb-4 p-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-1/2">
        <TextField
          label="Search Customer"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full md:w-full"
          InputProps={{ style: { backgroundColor: '#f0f0f0' } }}
        />
      </Box>
      <TableContainer component={Paper} className="w-full md:w-3/4">
        <Table>
          <TableHead>
            <TableRow className="bg-blue-600">
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'id'}
                  direction={sortBy === 'id' ? sortOrder : 'asc'}
                  onClick={() => handleSort('id')}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'name'}
                  direction={sortBy === 'name' ? sortOrder : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'orders'}
                  direction={sortBy === 'orders' ? sortOrder : 'asc'}
                  onClick={() => handleSort('orders')}
                >
                  Orders
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">Image</TableCell>
              <TableCell className="p-4 text-left">Address</TableCell>
              <TableCell className="p-4 text-left">Mobile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayCustomers.map((customer) => (
              <TableRow key={customer.id} className="hover:bg-gray-50">
                <TableCell className="p-4 text-left">{customer.id}</TableCell>
                <TableCell className="p-4 text-left">{customer.name}</TableCell>
                <TableCell className="p-4 text-left">{customer.orders}</TableCell>
                <TableCell className="p-4 text-left">
                  <Avatar alt={customer.name} src={customer.image} />
                </TableCell>
                <TableCell className="p-4 text-left">{customer.address}</TableCell>
                <TableCell className="p-4 text-left">{customer.mobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="flex justify-center mt-6">
        <Pagination
          count={Math.ceil(filteredCustomers.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default Customers;
