import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalQuantity: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addItemToWishlist: (state, action) => {
      const { id, product } = action.payload;

      if (!state.items[id]) {
        state.items[id] = {
          ...product,
          quantity: 1,
        };

        state.totalQuantity += 1;
      } else {
        return;
      }
    },

    updateItemInWishlist: (state, action) => {
      const { id, quantity } = action.payload;

      if (!state.items[id]) {
        return;
      }

      if (quantity <= 0) {
        return;
      }

      state.items[id].quantity = quantity;
    },

    removeItemFromWishlist: (state, action) => {
      const id = action.payload;

      if (state.items[id]) {
        delete state.items[id];
        state.totalQuantity -= 1;
      } else {
        return;
      }
    },

    clearWishlist: (state) => {
      state.items = {};
      state.totalQuantity = 0;
    },
  },
});

export const {
  addItemToWishlist,
  removeItemFromWishlist,
  updateItemInWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
