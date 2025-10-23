import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: {
      info: { firstname: "", lastname: "", email: "", password: "", role: "" },
      properties: [],
    },
  },

  reducers: {
    listProduct: (state, { payload }) => {
      const { product } = payload``;
      state.properties.push(product);
    },
    setUserProfile: (state, { payload }) => {
      const { user } = payload;
      state.user.info = user; //   console.log(state.user.info);
    },
  },
});

export const { listProduct, setUserProfile } = userSlice.actions;

export default userSlice.reducer;
