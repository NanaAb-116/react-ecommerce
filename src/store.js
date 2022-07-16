import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice';
import cartReducer from './features/cart/cartSlice';
import modalReducer from './features/modal/modalSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
