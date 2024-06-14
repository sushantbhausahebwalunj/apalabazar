import React from 'react';
import { Grid } from '@mui/material';
import Achivement from './Achivement';
import MonthlyOverview from './MonthlyOverview';
import ProductsTable from '../Products/ProductsTable';
import Customers from '../Customer/Customer';

function AdminDashboard() {
  return (
    <div className=''>
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <Achivement/>
      </Grid>
      <Grid item xs={12} md={8}>
        <MonthlyOverview/>
      </Grid>
      <Grid item xs={12} md={6}>
        <ProductsTable/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Customers/>
      </Grid>
    </Grid>
  </div>
  )
}

export default AdminDashboard
