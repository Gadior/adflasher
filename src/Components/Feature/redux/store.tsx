import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/task4__hearts";
import listCont from "./slices/task4__addPartners";
import page5_dataCntl from "./slices/page5/dataCntl";
import page7_dataCntl from "./slices/page7/dataCntl";
import page11_dataCntl from "./slices/page11/dataCntl";

// ~ Store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    newList: listCont,
    page5_dataCntl: page5_dataCntl,
    page7_dataCntl: page7_dataCntl,
    page11_dataCntl: page11_dataCntl,
  },
});

// ~ типы для Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
