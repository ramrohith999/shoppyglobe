import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import searchReducer from "../redux/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});
//added cart to save so that on refresh cart is not lost
store.subscribe(() => {
  localStorage.setItem(
    "cart",
    JSON.stringify(store.getState().cart.items)
  );
});