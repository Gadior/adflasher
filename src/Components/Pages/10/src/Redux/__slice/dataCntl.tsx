// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ~ interface
// #region
interface IntState {
  isView: boolean;
}
const initialState: IntState = {
  isView: false,
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
    // Редактировать элемент группы типа "строка"
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { changeView } = page10_dataCntl.actions;
// ~ Экспорт редуьюсера для проводника store
export default page10_dataCntl.reducer;
// #endregion ~ hlop
