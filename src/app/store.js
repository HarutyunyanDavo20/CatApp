import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categoriesSlice';
import imageSlice from './imageSlice';
import globalSlice from './globalSlice'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    images: imageSlice,
    globalState: globalSlice,
    user: userSlice
  },
});
