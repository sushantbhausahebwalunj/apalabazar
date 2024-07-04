import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import categoriesReducer from './Category/categoriesSlice';
import productReducer from './Product/productSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    categories: categoriesReducer,
  },
});

export default store;
