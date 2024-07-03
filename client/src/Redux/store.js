import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/userSlice';
import categoriesReducer from './Category/categoriesSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
  },
});

export default store;
