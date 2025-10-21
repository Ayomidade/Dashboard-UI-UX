import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "cart",

  initialState: {
    watchList: [],
  },

  reducers: {
    addProduct: (state, { payload }) => {
      let { product } = payload;
      let productIndex = state.watchList.findIndex(
        (prod) => prod.id == product.id
      );
      let existingProduct = state.watchList[productIndex];
      if (existingProduct) {
        state.watchList.splice(productIndex, 1);
        return;
      }
      state.watchList.push(product);
    },

    deleteProduct: (state, { payload }) => {
      const { id } = payload;
      let productIndex = state.watchList.findIndex((prod) => prod.id == id);
      state.watchList = state.watchList.splice(productIndex, 1);
      
      //logic
    },
  },
});
export const { addProduct, deleteProduct } = watchListSlice.actions;
export default watchListSlice.reducer;
