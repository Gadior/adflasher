// #region ~ hlop
import { createSlice } from "@reduxjs/toolkit";

// ~ счетчик сердец
// #region ~ счетчик сердец
interface CountHearts {
  value: number;
}
const initialState: CountHearts = {
  value: 0,
};
// #region ~ счетчик сердец

// ~ функции
// #region ~ функции
const heartCont = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addHeart: (state) => {
      if (state.value < 20) {
        state.value += 1;
      }
    },
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { addHeart } = heartCont.actions;
// ~ Экспорт редуьюсера для проводника store
export default heartCont.reducer;
// #endregion ~ hlop
