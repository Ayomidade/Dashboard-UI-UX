import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user.account";

const store = configureStore({
  reducer: { userSlice },
});
export default store;
