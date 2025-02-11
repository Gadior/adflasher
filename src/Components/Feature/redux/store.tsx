import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/task4__hearts.tsx";
import listCont from "./slices/task4__addPartners.tsx";
import page5_dataCntl from "./slices/page5/dataCntl.tsx";
import page7_dataCntl from "./slices/page7/dataCntl.tsx";

// ~ Store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    newList: listCont,
    page5_dataCntl: page5_dataCntl,
    page7_dataCntl: page7_dataCntl,
  },
});

// ~ типы для Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
