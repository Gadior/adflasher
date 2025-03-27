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
    // -- Работа со списком новостей
    // #region
    // ~ сохранение списка
    setNewsList: (state, action: PayloadAction<{ list: NewsCard__int[] }>) => {
      state.newsList = action.payload.list;
    },
    // #endregion

    // -- Сохранени данные в форме при создании статьи
    // #region
    setTitleFormData: (state, action: PayloadAction<{ title: string }>) => {
      state.formData = { ...state.formData, title: action.payload.title };
    },
    setDescFormData: (
      state,
      action: PayloadAction<{ description: string }>
    ) => {
      state.formData = {
        ...state.formData,
        description: action.payload.description,
      };
    },
    // #endregion

    // --- editing ID
    // #region
    setEditingID: (state, action: PayloadAction<{ id: string | null }>) => {
      // console.log(action.payload.id);
      state.editingId = action.payload.id;
    },
    // #endregion
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { setNewsList, setTitleFormData, setDescFormData, setEditingID } =
  data.actions;

// ~ Экспорт редуьюсера для проводника store
export default data.reducer;
// #endregion ~ hlop
