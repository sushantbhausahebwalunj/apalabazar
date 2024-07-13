import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../axiosConfig';

// Set up axios to include credentials (cookies)
axios.defaults.withCredentials = true;

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axiosInstance.get('/cart/getCartDetails');
  const items = [response.data.data.cartItems, response.data.data];
  return items;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await axiosInstance.post('/cart/addCart', {
    productId: product,
  });
  if (response.data.success) {
    
    alert('Product added');
  } 
  
  return response.data;
});
export const addQuantity = createAsyncThunk('cart/addQuantity', async (productId) => {
  const response = await axiosInstance.post('/cart/addCart', {
    productId: productId,
  });
  if (response.data.success) {
    
    alert('Product added');
  } 
  return response.data;
});
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId) => {
const response = await axiosInstance.delete(`/cart/removeCartItem?itemId=${productId}`);
  return response.data;
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
 await axiosInstance.delete('/cart/removeAllCart');

});

export const updateCartQuantity = createAsyncThunk('cart/updateCartQuantity', async ({ productId}) => {
  const response = await axiosInstance.delete(`/cart/removeCartItemQuantity?itemId=${productId}`);
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Ensure items is initialized as an array
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.items[0] = [];
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        if (state.items[0]) { 
          state.items[0].push(action.payload);
          
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const {data} = action.payload;
        if (state.items[0]) { // Check if state.items[0] exists before filtering
          state.items[0] = state.items[0].filter(item => item._id !== data._id);
        }
      })
      .addCase(clearCart.fulfilled, (state) => {
      
          state.items[0] = [];
   
      })
      .addCase(addQuantity.fulfilled, (state, action) => {
        const { data } = action.payload; // Extract the 'data' object from the payload
    
        if (state.items[0]) {
          // Find the index of the item to update
          const existingItem = state.items[0].find(item => item._id === data._id);
          if (existingItem) {
            existingItem.quantity = data.quantity;
          }
        }
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const { data} = action.payload;
        if (state.items[0]) { // Check if state.items[0] exists before updating quantity
          const existingItem = state.items[0].find(item => item._id === data._id);
          if (existingItem) {
            existingItem.quantity = data.quantity;
          }
        }
      });
  },
});

export default cartSlice.reducer;
