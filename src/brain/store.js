import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.account";
import cartSlice from "./slices/watchlist.slice";
import marketPlaceSlice from "./slices/marketplace.slice";
import watchListSlice from "./slices/watchlist.slice";


const store = configureStore({
  reducer: { userSlice, cartSlice, marketPlaceSlice, watchListSlice },
});
export default store;
