import React from 'react';
import { Grid, Box } from '@mui/material';
import Achivement from './Achivement';
import MonthlyOverview from './MonthlyOverview';
import ProductsTable from '../Products/ProductsTable';
import Customers from '../Customer/Customer';
import Navbar from '../../tables/navbar';
import ChartGallery from '../../tables/ChartGallery';

function AdminDashboard() {
  return (
    <div style={{ paddingTop: 0, marginTop: 0 }}>
      <Box>
        <Box mt={0} mb={0}>
          <Navbar />
        </Box>
        <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
            <Achivement />
          </Grid>
          <Grid item xs={10} md={8}>
            <MonthlyOverview />
          </Grid>
         
          <Box mt={0} mb={0} mx={1.5}> 
            <ChartGallery />
          </Box>
          <Grid item xs={12} md={6}>
            <Box mx={3}> 
              <ProductsTable />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box mx={3}> 
              <Customers />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminDashboard;
