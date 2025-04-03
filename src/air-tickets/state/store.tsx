import { configureStore } from "@reduxjs/toolkit";
import orderInfoSlice from "./air-tickets.store";

const store = configureStore({
  reducer: {
    orderInfoSlice,
  },
});

export default store;
