import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async actions for interacting with the backend
const token = localStorage.getItem("authToken");

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const token = localStorage.getItem("authToken");
  const response = await axios.get('http://localhost:5454/api/cart/getCartDetails', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response.data)
  return response.data.data.cartItems;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {

  console.log(token)
  const response = await axios.post('http://localhost:5454/api/cart/addCart', {
    productId: product.product._id,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
if(response.data.success==true){
alert('Product added')
}
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId) => {
  await axios.delete(`http://localhost:5454/api/cart/removeCartItem/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return productId;
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  await axios.post('http://localhost:5454/api/cart/clear', {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return [];
});

export const updateCartQuantity = createAsyncThunk('cart/updateCartQuantity', async ({ productId, quantity }) => {
  const response = await axios.put(`http://localhost:5454/api/cart/removeCartItemQuantity/${productId}`, { quantity }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],  // Ensure this is initialized as an empty array
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
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        if (Array.isArray(state.items)) {
          state.items.push(action.payload);
        } else {
          state.items = [action.payload];
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        if (Array.isArray(state.items)) {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        if (Array.isArray(state.items)) {
          const { productId, quantity } = action.payload;
          const existingItem = state.items.find((item) => item.id === productId);
          if (existingItem) {
            existingItem.quantity = quantity;
          }
        }
      });
  },
});

export default cartSlice.reducer;
