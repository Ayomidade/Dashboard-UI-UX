import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    metaData: {
      Fullname: "John Doe",
      password: "pasword!234",
      email: "John@doe.info",
    },
    settings: {},
  },
  reducers: {},
});

export default userSlice.reducer;
