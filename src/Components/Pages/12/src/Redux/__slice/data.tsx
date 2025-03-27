// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsCard__int } from "../../types/types";
import { useEffect } from "react";

// _ __TYPE__
// #region
interface Form {
  title: string;
  description: string;
}

interface Data {
  searchValue: string;
  // --- Состояние для формы
  formData: Form;
  // --- Списко новостей
  newsList: NewsCard__int[];
  isError: boolean;
  editingId: string | null;
}
const initialState: Data = {
  searchValue: "asdasd",
  formData: { title: "", description: "" },
  newsList: [],
  isError: false,
  editingId: null,
};
// #region

// _ __LOGIC__
// #region
// #endregion

// _ __REDUCERS__
// #region ~ функции
const data = createSlice({
  name: "data",
  initialState,
  reducers: {
    // --
    // #region
    getNewsList: (state, action: PayloadAction<{ list: NewsCard__int[] }>) => {
      state.newsList = action.payload.list;
    },
    // #endregion
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { getNewsList } = data.actions;

// ~ Экспорт редуьюсера для проводника store
export default data.reducer;
// #endregion ~ hlop
