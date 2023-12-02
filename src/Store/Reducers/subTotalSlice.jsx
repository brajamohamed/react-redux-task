import { createSlice } from "@reduxjs/toolkit";
const initialState = { subTotal: 0 };
const subTotalSlice = createSlice({
  name: "finalTotal",
  initialState,
  reducers: {
    calculateSubTotal: (state, action) => {
      const products = action.payload.products;
      state.subTotal = products.reduce((acc, product) => {
        const total = product.qty * product.price;
        return acc + total;
      }, initialState.subTotal);
    },
  },
});
export const { calculateSubTotal } = subTotalSlice.actions;
export default subTotalSlice.reducer;
