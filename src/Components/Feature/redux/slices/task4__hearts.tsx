import { createSlice } from "@reduxjs/toolkit";

// ~ счетчик сердец
interface CountHearts {
  value: number;
}
const initialState: CountHearts = {
  value: 0,
};

// ~ функции
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

// ~ экспортируем функции состояний
export const { addHeart } = heartCont.actions;

export default heartCont.reducer;
