import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import orderReducer from "./orderSlice"; // import the new slice

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer, // add here
  },
});
