import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../axiosConfig';

export const placeOrder = createAsyncThunk('order/placeOrder', async (orderData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/order/placeOrder', orderData);
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const fetchOrders = createAsyncThunk('order/fetchOrders', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/order/getAllOrders');
    console.log("insider orderslice: ",response.data.data);
    return response.data.data;
    
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});



const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders.push(action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
        console.log("inside addcase: ",action.payload);
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
