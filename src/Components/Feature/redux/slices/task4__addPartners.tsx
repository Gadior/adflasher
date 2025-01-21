import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ~ fake data
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

// ~ interface
interface partnersList {
  key: string;
  name: string;
  componyName: string;
  isAdded?: boolean;
}
// ~ возвращает начальный список с дополнительным полем "isAdded"
const newList = () => {
  return dataSource.map((item: partnersList) => {
    return { ...item, isAdded: false };
  });
};
// ~ возвращаем данные для окна с кандидатами (isAdde = true)
const addedList = (__data: partnersList[]) => {
  return __data
    .filter((item) => {
      return item.isAdded === true;
    })
    .map((it) => {
      return it;
    });
};
const changeDataRow = (id: string, data: any) => {
  return data.map((item: any) => {
    let __row = item;
    if (item.key === id) {
      return { ...__row, isAdded: !item.isAdded };
    } else {
      return item;
    }
  });
};

const initialState = {
  newList: newList(),
  addedList: addedList(newList()),
};

// ~ функции
const listCont = createSlice({
  name: "partnersList",
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<string>) => {
      state.newList = changeDataRow(action.payload, state.newList);
      state.addedList = addedList(state.newList);
      console.log(state.newList);
    },
  },
});

// ~ экспортируем функции состояний
export const { changeStatus } = listCont.actions;

export default listCont.reducer;
