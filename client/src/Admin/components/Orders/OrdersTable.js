import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, Avatar, TextField, MenuItem, Pagination, FormControl, Select, Button, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';

// Dummy data for orders
const orders = [
  { orderId: 1, orderName: 'Order 1', orderQuantity: 2, orderPrice: 50, customerId: 1, status: 'Pending' },
  { orderId: 2, orderName: 'Order 2', orderQuantity: 1, orderPrice: 30, customerId: 2, status: 'Delivered' },
  { orderId: 3, orderName: 'Order 3', orderQuantity: 3, orderPrice: 80, customerId: 3, status: 'Processing' },
  { orderId: 4, orderName: 'Order 4', orderQuantity: 1, orderPrice: 20, customerId: 4, status: 'Cancelled' },
  { orderId: 5, orderName: 'Order 5', orderQuantity: 2, orderPrice: 60, customerId: 5, status: 'Delivered' },
  // Add more orders as needed
];

// Dummy data for customers
const customers = [
  { id: 1, name: 'John Doe', image: '/images/john.jpg', address: '123 Main St, Anytown', mobile: '123-456-7890' },
  { id: 2, name: 'Jane Smith', image: '/images/jane.jpg', address: '456 Elm St, Othertown', mobile: '987-654-3210' },
  { id: 3, name: 'Alice Johnson', image: '/images/alice.jpg', address: '789 Oak Ave, Another Town', mobile: '555-123-4567' },
  { id: 4, name: 'Michael Brown', image: '/images/michael.jpg', address: '567 Pine Rd, New City', mobile: '222-333-4444' },
  { id: 5, name: 'Sarah Adams', image: '/images/sarah.jpg', address: '890 Cedar Ln, Nearby City', mobile: '777-888-9999' },
  // Add more customers as needed
];

const OrdersTable = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [statusToUpdate, setStatusToUpdate] = useState('');

  const itemsPerPage = 5; // Adjust the number of orders per page here

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

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    setPage(1); // Reset page to 1 when max price filter changes
  };

  const handleOrderSelection = (orderId) => {
    const selectedIndex = selectedOrders.indexOf(orderId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedOrders, orderId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelected = newSelected.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelected);
  };

  const handleStatusChange = (event) => {
    setStatusToUpdate(event.target.value);
  };

  const updateStatus = () => {
    // Implement logic to update status of selected orders
    console.log(`Updating status of selected orders to ${statusToUpdate}`);
    // Clear selected orders after updating
    setSelectedOrders([]);
    setStatusToUpdate('');
  };

  const filteredOrders = orders.filter((order) =>
    order.orderName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (maxPrice === '' || order.orderPrice <= parseInt(maxPrice))
  );

  const sortedOrders = sortBy ? filteredOrders.sort((a, b) => {
    const comparator = (a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    };
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * comparator(a[sortBy], b[sortBy]);
  }) : filteredOrders;

  const displayOrders = sortedOrders.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box className="flex flex-col items-center p-4 bg-gray-100">
      <Typography variant="h4" component="h1" className="mb-6 text-blue-600">
        Orders Table
      </Typography>
      <Box className="mb-4 p-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 w-full md:w-3/4">
        <TextField
          label="Search Order"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full md:w-1/2 md:mb-0 mb-4"
          InputProps={{ classes: { input: 'h-8' } }} // Custom height for input field
        />
        <TextField
          select
          label="Max Price"
          variant="outlined"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full md:w-1/2"
          InputProps={{ classes: { input: 'h-8' } }} // Custom height for input field
        >
          <MenuItem value="">No Max Price</MenuItem>
          <MenuItem value="50">$50</MenuItem>
          <MenuItem value="100">$100</MenuItem>
          <MenuItem value="200">$200</MenuItem>
          <MenuItem value="500">$500</MenuItem>
        </TextField>
      </Box>
      <TableContainer component={Paper} className="w-full md:w-3/4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'orderId'}
                  direction={sortBy === 'orderId' ? sortOrder : 'asc'}
                  onClick={() => handleSort('orderId')}
                >
                  Order ID
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'orderName'}
                  direction={sortBy === 'orderName' ? sortOrder : 'asc'}
                  onClick={() => handleSort('orderName')}
                >
                  Order Name
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'orderQuantity'}
                  direction={sortBy === 'orderQuantity' ? sortOrder : 'asc'}
                  onClick={() => handleSort('orderQuantity')}
                >
                  Order Quantity
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'orderPrice'}
                  direction={sortBy === 'orderPrice' ? sortOrder : 'asc'}
                  onClick={() => handleSort('orderPrice')}
                >
                  Order Price ($)
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">Customer Details</TableCell>
              <TableCell className="p-4 text-left">
                <TableSortLabel
                  active={sortBy === 'status'}
                  direction={sortBy === 'status' ? sortOrder : 'asc'}
                  onClick={() => handleSort('status')}
                >
                  Order Status
                </TableSortLabel>
              </TableCell>
              <TableCell className="p-4 text-left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayOrders.map((order) => (
              <TableRow key={order.orderId} className="hover:bg-gray-50">
                <TableCell className="p-4 text-left">{order.orderId}</TableCell>
                <TableCell className="p-4 text-left">{order.orderName}</TableCell>
                <TableCell className="p-4 text-left">{order.orderQuantity}</TableCell>
                <TableCell className="p-4 text-left">${order.orderPrice}</TableCell>
                <TableCell className="p-4 text-left">
                  <div className="flex items-center">
                    <Avatar alt={customers.find((customer) => customer.id === order.customerId)?.name} src={customers.find((customer) => customer.id === order.customerId)?.image} />
                    <div className="ml-2">
                      <Typography variant="subtitle2">{customers.find((customer) => customer.id === order.customerId)?.name}</Typography>
                      <Typography variant="body2">{customers.find((customer) => customer.id === order.customerId)?.address}</Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="p-4 text-left">{order.status}</TableCell>
                <TableCell className="p-4 text-left">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleOrderSelection(order.orderId)}
                    className={selectedOrders.includes(order.orderId) ? 'text-blue-500' : ''}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="mt-4 flex items-center justify-between w-full md:w-3/4">
        <Pagination count={Math.ceil(filteredOrders.length / itemsPerPage)} page={page} onChange={handleChangePage} color="primary" />
        {selectedOrders.length > 0 && (
          <FormControl variant="outlined">
            <Select
              value={statusToUpdate}
              onChange={handleStatusChange}
              displayEmpty
              className="p-1"
              inputProps={{ 'aria-label': 'Select Status' }}
            >
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Delivered">Delivered</MenuItem>
              <MenuItem value="Cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        )}
        {selectedOrders.length > 0 && (
          <Button
            variant="contained"
            color="primary"
            onClick={updateStatus}
            className="ml-4"
          >
            Update Status
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default OrdersTable;
