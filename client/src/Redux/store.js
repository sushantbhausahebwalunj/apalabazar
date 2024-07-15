import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import categoriesReducer from './Category/categoriesSlice';
import productReducer from './Product/productSlice';
import cartReducer from './Cart/cartSlice';  // Import the cart reducer
import advertisementReducer from './Advertisements/advertisementSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,  // Add cart reducer
    advertisements: advertisementReducer,

  },
});

export default store;
