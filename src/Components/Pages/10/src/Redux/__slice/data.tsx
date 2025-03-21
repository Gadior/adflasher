// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// _ __TYPE__
// #region
interface Data {
  searchValue: string;
}
const initialState: Data = {
  searchValue: "",
};
// #region

// _ __REDUCERS__
// #region ~ функции
const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;
    },
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { setSearchValue } = data.actions;
// ~ Экспорт редуьюсера для проводника store
export default data.reducer;
// #endregion ~ hlop
