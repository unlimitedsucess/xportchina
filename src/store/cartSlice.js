import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const exists = state.cart.find(
        (item) => item.slug === action.payload.slug
      );
      if (exists) {
        exists.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.slug !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    updateQuantity(state, action) {
      const item = state.cart.find((i) => i.slug === action.payload.slug);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
