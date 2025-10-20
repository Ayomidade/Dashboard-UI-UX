import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.account";
import cartSlice from "./slices/cart.slice";

const store = configureStore({
  reducer: { userSlice, cartSlice },
});
export default store;
