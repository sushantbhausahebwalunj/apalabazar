import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set up axios to include credentials (cookies)
axios.defaults.withCredentials = true;

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await axios.get('http://localhost:5454/api/cart/getCartDetails');
  const items = [response.data.data.cartItems, response.data.data];
  return items;
});

export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await axios.post('http://localhost:5454/api/cart/addCart', {
    productId: product,
  });
  if (response.data.success) {
    
    alert('Product added');
  } 
  
  return response.data;
});
export const addQuantity = createAsyncThunk('cart/addQuantity', async (product) => {
  const response = await axios.post('http://localhost:5454/api/cart/addCart', {
    productId: product,
  });
  if (response.data.success) {
    
    alert('Product added');
  } 
  console.log("data");
  console.log(response.data);
  return response.data;
});
export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId) => {
  await axios.delete(`http://localhost:5454/api/cart/removeCartItem?itemId=${productId}`);
  return productId;
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  await axios.delete('http://localhost:5454/api/cart/removeAllCart');
  return [];
});

export const updateCartQuantity = createAsyncThunk('cart/updateCartQuantity', async ({ productId, quantity }) => {
  const response = await axios.delete(`http://localhost:5454/api/cart/removeCartItemQuantity?itemId=${productId}`);
  return { productId, quantity };
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
        state.error = action.error.message;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        if (state.items[0]) { 
          state.items[0].push(action.payload);
          
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        const productId = action.payload;
        if (state.items[0]) { // Check if state.items[0] exists before filtering
          state.items[0] = state.items[0].filter(item => item._id !== productId);
        }
      })
      .addCase(clearCart.fulfilled, (state) => {
        if (state.items[0]) { // Check if state.items[0] exists before clearing
          state.items[0] = [];
        }
      })
      .addCase(addQuantity.fulfilled, (state, action) => {
        const { product } = action.payload;
        console.log(product);
         if(state.items[0])
         {
          const existingItem = state.items[0].find(item => item._id === product);
          if(existingItem){
           console.log(existingItem);
          }
         }
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        const { productId, quantity } = action.payload;
        if (state.items[0]) { // Check if state.items[0] exists before updating quantity
          const existingItem = state.items[0].find(item => item._id === productId);
          if (existingItem) {
            existingItem.quantity = quantity;
          }
        }
      });
  },
});

export default cartSlice.reducer;
