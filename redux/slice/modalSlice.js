import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",

  initialState: {
    cartDrawer: true,
  },

  reducers: {
    toggleCartDrawer: (state) => {
      state.cartDrawer = !state.cartDrawer;
    },
  },
});

export const { toggleCartDrawer } = modalSlice.actions;

export default modalSlice.reducer;