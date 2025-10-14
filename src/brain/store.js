import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user.account";
export default store = configureStore({
  reducer: { userSlice },
});
