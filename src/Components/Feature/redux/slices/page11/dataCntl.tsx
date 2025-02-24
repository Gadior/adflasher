// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// ~ interface
import {
  int__EstimateData,
  type__Name,
  int__rootSelect,
  int__lvl2Selector,
} from "./interface";
import {
  rootSelector,
  paketSelector,
  optionSelector,
  rentSelector,
} from "./data";

// ~ interface
// #region ~ счетчик сердец
interface int_State {
  isModal: boolean;
  rootSelector: int__rootSelect[] | null;
  rootSelectorName: type__Name;
  rootSelectorTitle: type__Name;
  lvl2Selector: int__lvl2Selector[] | null;
  lvl2SelectorName: type__Name;
  lvl2SelectorTitle: type__Name;
  formData: int__lvl2Selector | null;
  estimateData: int__EstimateData[];
}
const initialState: int_State = {
  isModal: false,
  rootSelector: rootSelector,
  rootSelectorName: null,
  rootSelectorTitle: null,
  lvl2Selector: [],
  lvl2SelectorName: null,
  lvl2SelectorTitle: null,
  formData: null,
  estimateData: [],
};
// #region ~ счетчик сердец

// ~ функции
// #region ~ функции
const page11_dataCntl = createSlice({
  name: "name",
  initialState,
  reducers: {
    // #region
    // setRoots: (state, action: PayloadAction<{ rt: type_Root[] }>) => {

    // ___ rootSelector
    setRootSelectorName: (
      state,
      action: PayloadAction<{ value: type__Name; marker: type__Name }>
    ) => {
      // --- сохраняем селекторное имя
      state.rootSelectorName = action.payload.marker;
      state.rootSelectorTitle = action.payload.value;
      // --- загружаем данные для селектора второго уровня
      switch (action.payload.marker) {
        case "paket":
          state.lvl2Selector = paketSelector;
          break;
        case "arenda":
          state.lvl2Selector = rentSelector;
          break;
        case "option":
          state.lvl2Selector = optionSelector;
          break;
        default:
          state.lvl2Selector = null;
          break;
      }
      // --- нулим данные для селектора второго уровня
      state.lvl2SelectorName = null;
    },

    // ___ lvl2Selector
    setlvl2SelectorName: (
      state,
      action: PayloadAction<{
        value: type__Name;
        marker: type__Name;
      }>
    ) => {
      // --- сохраняем селекторное имя второго уровня
      state.lvl2SelectorName = action.payload.marker;
      state.lvl2SelectorTitle = action.payload.value;
      // --- слепок даты
      if (state.lvl2Selector) {
        let __data = state.lvl2Selector.find((item: int__lvl2Selector) => {
          return item.marker === action.payload.marker;
        });
        if (__data) {
          state.formData = __data;
        }
      }
      // --- переключаем флаг модалки
      state.isModal = true;
    },

    // ___ isModal = false
    isModalFalse: (state) => {
      // --- переключаем флаг модалки
      state.isModal = false;
    },

    // ___ estimateData
    // ~ save
    setEstimateData: (
      state,
      action: PayloadAction<{ data: int__lvl2Selector }>
    ) => {
      let randomID = Date.now() - Math.floor(Math.random() * 1000);
      let __row = action.payload.data;
      let __data = { id: randomID, data: __row };
      state.estimateData = [...state.estimateData, __data];
    },

    // ~ delete
    deleteEstimateData: (state, action: PayloadAction<{ id: number }>) => {
      state.estimateData = state.estimateData.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
// - roots
export const {
  setEstimateData,
  deleteEstimateData,
  setRootSelectorName,
  setlvl2SelectorName,
  isModalFalse,
} = page11_dataCntl.actions;

// ~ Экспорт редуьюсера для проводника store
export default page11_dataCntl.reducer;
// #endregion ~ hlop
