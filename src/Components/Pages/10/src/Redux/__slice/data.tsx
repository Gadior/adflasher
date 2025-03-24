// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// _ __TYPE__
// #region
interface Data {
  searchValue: string;
  isburgerClick: boolean;
  subscribeValue: string;
  isMail: boolean;
}
const initialState: Data = {
  searchValue: "",
  isburgerClick: false,
  subscribeValue: "",
  isMail: false,
};
// #region

// _ __REDUCERS__
// #region ~ функции
const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    // -- Search options
    // #region
    setSearchValue: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;
    },
    // #endregion

    // -- burgerClick
    // #region
    openBurger: (state) => {
      state.isburgerClick = true;
    },
    closeBurger: (state) => {
      state.isburgerClick = false;
    },
    // #endregion

    // -- Subscribe
    // #region
    setSubscribeValue: (state, action: PayloadAction<{ value: string }>) => {
      state.subscribeValue = action.payload.value;
    },
    changeIsMail: (state, action: PayloadAction<{ value: boolean }>) => {
      state.isMail = action.payload.value;
    },
    // #endregion
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { setSearchValue, closeBurger, openBurger } = data.actions;
export const { setSubscribeValue, changeIsMail } = data.actions;

// ~ Экспорт редуьюсера для проводника store
export default data.reducer;
// #endregion ~ hlop
