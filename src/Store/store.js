import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducers/productSlice";
import subTotalSlice from "./Reducers/subTotalSlice";
const store = configureStore({
  reducer: {
    product: productSlice,
    finalTotal: subTotalSlice,
  },
});
export default store;
