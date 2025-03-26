// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ~ interface
// #region
interface IntState {
  isView: boolean;
  pointCheckedData: number;
}
const initialState: IntState = {
  isView: false,
  pointCheckedData: 0,
};
// #region

// ~ функции
// #region ~ функции
const page10_dataCntl = createSlice({
  name: "dataCount",
  initialState,
  reducers: {
    // Добавить элемент в группу
    changeView: (state, action: PayloadAction<{ flag: boolean }>) => {
      state.isView = action.payload.flag;
    },
    // Указатель выбранного пункта меню
    pointChecked: (state, action: PayloadAction<{ point: number }>) => {
      state.pointCheckedData = action.payload.point;
    },
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { changeView, pointChecked } = page10_dataCntl.actions;
// ~ Экспорт редуьюсера для проводника store
export default page10_dataCntl.reducer;
// #endregion ~ hlop
