import Data from "./../../components/marketplace/product.json";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: Data,
};

const marketplaceSlice = createSlice({
  name: "marketplaceSlice",
  initialState,
  reducers: {
    addProperty: (state, { payload }) => {
      let { newProduct } = payload;
      state.products.push(newProduct);
    },
    removeProperty: (state, { payload }) => {
      let { id } = payload;
      let propIndex = state.products.findIndex((prop) => prop.id == id);
      state.products.splice(propIndex, 1);
    },
    updatePropertiesDetails: (state, { payload }) => {
      let { id, newProduct } = payload;
      let propertyIndex = state.products.findIndex((prop) => prop.id == id);
      state.products[propertyIndex] = newProduct;
    },
  },
});

export const { addProperty, removeProperty, updatePropertiesDetails } =
  marketplaceSlice.actions;

export default marketplaceSlice.reducer;
