// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ~ interface
// #region ~ счетчик сердец
interface int_Item {
  id: number;
  name: string;
  surname: string;
  sallary: number;
}
interface int_Group {
  id: number;
  data: int_Item[];
}

interface int_State {
  data: int_Group[];
}
const initialState: int_State = {
  data: [],
};
// #region ~ счетчик сердец

// ~ функции
// #region ~ функции
const page5_dataCntl = createSlice({
  name: "dataCount",
  initialState,
  reducers: {
    // Добавить группу
    addGroup: (state) => {
      state.data.push({
        id: state.data.length,
        data: [],
      });
    },
    // Добавить элемент в группу
    addGroupItem: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      const item = state.data.find((item: int_Group) => item.id === id);
      if (item) {
        item.data.push({
          id: item.data.length,
          name: "",
          surname: "",
          sallary: 0,
        });
      }
    },
    // Редактировать элемент группы типа "строка"
    editItemString: (
      state,
      action: PayloadAction<{
        id: number;
        name: string;
        type: string;
        curInd: number;
      }>
    ) => {
      const { id, name, type, curInd } = action.payload;
      const item = state.data.find((item: int_Group) => item.id === curInd);
      if (item) {
        const elem = item.data.find((el: int_Item) => el.id === id);
        if (elem && type === "surname") {
          elem.surname = name;
        }
        if (elem && type === "name") {
          elem.name = name;
        }
      }
    },
    // Редактировать элемент группы типа "число"
    editItemNumber: (
      state,
      action: PayloadAction<{ id: number; name: number; curInd: number }>
    ) => {
      const { id, name, curInd } = action.payload;
      const item = state.data.find((item: int_Group) => item.id === curInd);
      if (item) {
        const elem = item.data.find((item: int_Item) => item.id === id);
        if (elem && elem !== undefined) {
          elem.sallary = name;
        }
      }
    },
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { addGroup, addGroupItem, editItemString, editItemNumber } =
  page5_dataCntl.actions;
// ~ Экспорт редуьюсера для проводника store
export default page5_dataCntl.reducer;
// #endregion ~ hlop
