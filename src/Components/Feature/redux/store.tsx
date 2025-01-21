import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice.tsx";

// ~ Store
const store = configureStore({
  reducer: { counter: counterReducer },
});

// ~ типы для Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
