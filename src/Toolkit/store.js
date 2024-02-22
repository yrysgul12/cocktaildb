import { configureStore } from "@reduxjs/toolkit";
import CocktailSlice from "./CocktailSlice";

const store = configureStore({
  reducer: {
    products: CocktailSlice
  },
});

export default store;
