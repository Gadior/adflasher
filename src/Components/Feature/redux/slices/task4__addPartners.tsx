// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ~ fake data
// #region ~ fake data
const dataSource = [
  {
    key: "1",
    name: "Миша Фролов",
    componyName: "Легенда",
  },
  {
    key: "2",
    name: "Сергей Уст",
    componyName: "Форма правления",
  },
  {
    key: "3",
    name: "Семен Строгунов",
    componyName: "Белые ночи",
  },
  {
    key: "4",
    name: "Дмитрий Коршун",
    componyName: "Атлас",
  },
];
// #endregion ~ fake data

// ~ обработчики для таблиц партнеров
// #region ~ обработчики для таблиц партнеров
interface partnersList {
  key: string;
  name: string;
  componyName: string;
  isAdded?: boolean;
}
// ~ возвращает начальный список с дополнительным полем "isAdded"
const newList = (): partnersList[] =>
  dataSource.map((item) => ({ ...item, isAdded: false }));

// ~ возвращаем данные для окна с кандидатами (isAdde = true)
const addedList = (__data: partnersList[]): partnersList[] => {
  return __data.filter((item: partnersList) => item.isAdded === true);
};

// ~ находим ряд по вошедшему KEY и меняем в нем isAdded на противоположное
const changeDataRow = (id: string, data: any): partnersList[] => {
  return data.map((item: partnersList) =>
    item.key === id ? { ...item, isAdded: !item.isAdded } : item
  );
};

const initialState = {
  newList: newList(),
  addedList: addedList(newList()),
};

// #endregion ~ обработчики для таблиц партнеров

// ~ функции
// #region ~ функции
const listCont = createSlice({
  name: "partnersList",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<string>) => {
      state.newList = changeDataRow(action.payload, state.newList);
      state.addedList = addedList(state.newList);
    },
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
export const { changeStatus } = listCont.actions;
// ~ Экспорт редуьюсера для проводника store
export default listCont.reducer;
// #endregion ~ hlop
