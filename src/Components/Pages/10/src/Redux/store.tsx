import { configureStore } from "@reduxjs/toolkit";
import data from "./__slice/data";

// ~ Store
const store = configureStore({
  reducer: {
    counter: data,
  },
});

// ~ типы для Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
