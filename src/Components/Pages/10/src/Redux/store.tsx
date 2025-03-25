import { configureStore } from "@reduxjs/toolkit";
import data from "./__slice/data";
import dataCntl10 from "./__slice/dataCntl";

// ~ Store
const store = configureStore({
  reducer: {
    counter: data,
    dataCntl10: dataCntl10,
  },
});

// ~ типы для Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
