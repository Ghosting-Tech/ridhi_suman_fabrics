"use client";

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slice/cartSlice";
import wishlistReducer from "./slice/wishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
