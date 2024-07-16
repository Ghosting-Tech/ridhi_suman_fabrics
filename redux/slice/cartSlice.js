import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: {},

    totalQuantity: 0,
    totalPrice: 0,
  },

  reducers: {
    addItemToCart: (state, action) => {
      const { id, image, title, price, quantity } = action.payload;

      if (!state.items[id]) {
        state.items[id] = { quantity: 0, price, image, title };
      }

      state.items[id].quantity += quantity;
      state.totalQuantity += quantity;
      state.totalPrice += price * quantity;
    },

    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      if (!state.items[id]) {
        console.warn(`Item with id ${id} not found in cart.`);
        return;
      }

      const quantityDifference = quantity - state.items[id].quantity;
      state.items[id].quantity = quantity;

      state.totalQuantity += quantityDifference;
      state.totalPrice += quantityDifference * state.items[id].price;
    },

    removeItemFromCart: (state, action) => {
      const { id } = action.payload;

      if (!state.items[id]) {
        return;
      }

      const itemTotalPrice = state.items[id].price * state.items[id].quantity;

      state.totalQuantity -= state.items[id].quantity;
      state.totalPrice -= itemTotalPrice;

      delete state.items[id];
    },

    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
