import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./slices/countrySlice";

const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});

export default store;
