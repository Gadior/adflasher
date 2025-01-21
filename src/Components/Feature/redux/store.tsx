import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/task4__hearts.tsx";
import listCont from "./slices/task4__addPartners.tsx";

// ~ Store
const store = configureStore({
  reducer: { counter: counterReducer, newList: listCont },
});

// ~ типы для Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
