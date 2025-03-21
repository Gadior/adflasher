// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// _ __TYPE__
// #region
interface Data {
  searchValue: string;
  isburgerClick: boolean;
  test: string;
}
const initialState: Data = {
  searchValue: "",
  isburgerClick: false,
  test: "1231231",
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
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { setSearchValue, closeBurger, openBurger } = data.actions;
// ~ Экспорт редуьюсера для проводника store
export default data.reducer;
// #endregion ~ hlop
