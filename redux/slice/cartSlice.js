import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],

    totalQuantity: 0,
    totalPrice: 0,
  },

  reducers: {
    addItemToCart: (state, action) => {
      state.items = action.payload;
    },

    updateCart: (state, action) => {
      const { totalQuantity, totalPrice } = action.payload;

      state.totalQuantity = totalQuantity;
      state.totalPrice = totalPrice;
    },

    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item._id === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;

        state.items.splice(itemIndex, 1);
      }
    },

    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItemToCart, updateCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
