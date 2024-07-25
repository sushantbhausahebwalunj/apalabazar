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

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
//   try {
//     const response = await axiosInstance.get('/admin/product/view');
//     // console.log(response.data.data);
//     return response.data.data;
    
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId, { rejectWithValue }) => {
//   try {
//     const response = await axiosInstance.delete(`/admin/product/delete/${productId}`);
//     return response.data.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// export const updateProduct = createAsyncThunk('products/updateProduct', async ({ id, productData }, { rejectWithValue }) => {
//   try {
//     const response = await axiosInstance.put(`/admin/product/update/${id}`, productData);
//     return response.data.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// export const fetchProduct = createAsyncThunk('products/fetchProduct', async (productId, { rejectWithValue }) => {
//   try {
//     const response = await axiosInstance.get(`/admin/product/view/${productId}`);
//     return response.data.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });



const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    products: [],
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
        state.products.push(action.payload);
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      }); 
  },
});

export default orderSlice.reducer;
