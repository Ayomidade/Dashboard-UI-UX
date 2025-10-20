import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    carts: [],
  },

  reducers: {
    addProduct: () => {
      //logic
    },
    deleteProduct: () => {
      //logic
    },
  },
});
export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer
