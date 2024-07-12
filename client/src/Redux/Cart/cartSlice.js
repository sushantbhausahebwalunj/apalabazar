import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = localStorage.getItem("authToken");

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const token = localStorage.getItem("authToken");
  const response = await axios.get('http://localhost:5454/api/cart/getCartDetails', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const items = [response.data.data.cartItems, response.data.data];
  return items;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const token = localStorage.getItem("authToken");
  const response = await axios.post('http://localhost:5454/api/cart/addCart', {
    productId: product.product._id,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if(response.data.success) {
    alert('Product added');
  }
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId) => {
  const token = localStorage.getItem("authToken");
  await axios.delete(`http://localhost:5454/api/cart/removeCartItem?itemId=${productId}`,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return productId;
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  const token = localStorage.getItem("authToken");
  await axios.delete('http://localhost:5454/api/cart/removeAllCart', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return [];
});

export const updateCartQuantity = createAsyncThunk('cart/updateCartQuantity', async ({ productId, quantity }) => {
  const token = localStorage.getItem("authToken");
  const response = await axios.delete(`http://localhost:5454/api/cart/removeCartItemQuantity?itemId=${productId}&&quantity=${quantity}`,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //console.log(response.data)
  return { productId, quantity };
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
        state.items = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items[0].push(action.payload); // Add new item to the cart items
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const productId = action.payload;
        state.items[0] = state.items[0].filter(item => item._id !== productId); // Remove item from the cart items
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items[0] = []; // Clear all items from the cart items
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const { productId, quantity } = action.payload;
        const existingItem = state.items[0].find(item => item._id === productId);
        if (existingItem) {
          existingItem.quantity = quantity; // Update the quantity of the existing item
        }
      });
  },
});

export default cartSlice.reducer;
