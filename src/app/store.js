import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import itemReducer from '../features/items/itemSlice'
import categoryReducer from '../features/category/categorySlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
    category: categoryReducer,
  },
})
