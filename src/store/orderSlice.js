import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    getOrderData: null, // function reference
  },
  reducers: {
    setGetOrderData: (state, action) => {
      state.getOrderData = action.payload;
    },
  },
});

export const { setGetOrderData } = orderSlice.actions;
export default orderSlice.reducer;
