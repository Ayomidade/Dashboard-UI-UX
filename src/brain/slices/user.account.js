import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    metaData: {
      name: "Ayomide",
      password: "Ayomide22689$",
      email: "alfredchrisayo@gmail.com",
    },
    settings: {},
  },
  reducers: {},
});

export default userSlice.reducer;
