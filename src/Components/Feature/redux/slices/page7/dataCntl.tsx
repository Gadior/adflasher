// #region ~ hlop
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// ~ interface
import { type_Root, type_Id, type_Lvl1, type_Lvl2 } from "./interface.tsx";
import { act } from "react";

// ~ interface
// #region ~ счетчик сердец
interface int_State {
  roots: type_Root[];
  activeRoot: type_Root | null;
  lvls1: type_Lvl1[];
  activeLvl1: type_Lvl1 | null;
  lvls2: type_Lvl2[];
  activeLvl2: type_Lvl2 | null;
  isDragRoot: boolean;
  isDragLvl1: boolean;
  isDragLvl2: boolean;
  collapseAllState: boolean;
}
const initialState: int_State = {
  // - главный слой
  roots: [] as type_Root[],
  activeRoot: null,
  // - второй слой
  lvls1: [] as type_Lvl1[],
  activeLvl1: null,
  // - третий слой
  lvls2: [] as type_Lvl2[],
  activeLvl2: null,
  // - если драгать root слои
  isDragRoot: false,
  // - если драгать lvl1 слои
  isDragLvl1: false,
  // - если драгать lvl2 слои
  isDragLvl2: false,
  // - схлопнуть все карточки
  collapseAllState: false,
};
// #region ~ счетчик сердец

// ___ Генератор отметки времени для ID
// #region
// ~ генерация случайного id
const generateID = (): number => {
  /* Генерируем id по отметке текущего времени */
  return Date.now() - Math.floor(Math.random() * 1000);
};
// #endregion

// ~ функции
// #region ~ функции
const page7_dataCntl = createSlice({
  name: "name",
  initialState,
  reducers: {
    // ___ roots
    // #region
    // ~ Save
    setRoots: (state, action: PayloadAction<{ rt: type_Root[] }>) => {
      state.roots = action.payload.rt;
    },

    // ~ setActive
    setActiveRoot: (state, action: PayloadAction<{ rt: type_Root | null }>) => {
      state.activeRoot = action.payload.rt;
    },

    // ~ CREATE
    createRoot: (state) => {
      // ~ element
      const rootToAdd: type_Root = {
        id: generateID(),
        title: `include root_ ${state.roots.length + 1}`,
      };
      // ~ save state
      state.roots = [...state.roots, rootToAdd];
    },

    // ~ DELETE
    deleteRoot: (state, action: PayloadAction<{ id: type_Id }>) => {
      // ~ delete in root
      const filtRoot = state.roots.filter(
        (filt: type_Root) => filt.id !== action.payload.id
      );
      state.roots = filtRoot;

      // ~ delete in lvl1
      const filtLvl1 = state.lvls1.filter(
        (filt: type_Lvl1) => filt.columnId !== action.payload.id
      );
      state.lvls1 = filtLvl1;
    },

    // ~ UPDATE
    updateRoot: (
      state,
      action: PayloadAction<{ id: type_Id; title: string }>
    ) => {
      const newRoot = state.roots.map((root: type_Root) => {
        if (root.id !== action.payload.id) return root;
        let __title = action.payload.title;
        return { ...root, title: __title };
      });
      state.roots = newRoot;
    },
    // #endregion

    // ___ lvls1
    // #region
    // ~ Save
    setLvls1: (state, action: PayloadAction<{ lvl: type_Lvl1[] }>) => {
      state.lvls1 = action.payload.lvl;
    },

    // ~ setActive
    setActiveLvl1: (state, action: PayloadAction<{ rt: type_Lvl1 | null }>) => {
      state.activeLvl1 = action.payload.rt;
    },
    // #endregion

    // ___ lvls2
    // #region
    // ~ Save
    setLvls2: (state, action: PayloadAction<{ lvl: type_Lvl2[] }>) => {
      state.lvls2 = action.payload.lvl;
    },

    // ~ setActive
    setActiveLvl2: (state, action: PayloadAction<{ rt: type_Lvl2 | null }>) => {
      state.activeLvl2 = action.payload.rt;
    },

    // ~ DELETE
    deleteLvls2: (state, action: PayloadAction<{ id: type_Id }>) => {
      // ~ delete in root
      const newlvl = state.lvls2.filter(
        (filt: type_Lvl2) => filt.id !== action.payload.id
      );
      state.lvls2 = newlvl;
    },

    // ~ UPDATE
    updateLvls2: (
      state,
      action: PayloadAction<{ id: type_Id; content: string }>
    ) => {
      const newLvl = state.lvls2.map((level: type_Lvl2) => {
        if (level.id !== action.payload.id) return level;
        let __title = action.payload.content;
        return { ...level, content: __title };
      });
      state.lvls2 = newLvl;
    },
    // #endregion

    // ___ isDragged
    // #region
    // ~ root
    setIsDragRoot: (state, action: PayloadAction<{ fl: boolean }>) => {
      state.isDragRoot = action.payload.fl;
    },
    // ~ lvl1
    setIsDragLvl1: (state, action: PayloadAction<{ fl: boolean }>) => {
      state.isDragLvl1 = action.payload.fl;
    },
    // ~ lvl2
    setIsDragLvl2: (state, action: PayloadAction<{ fl: boolean }>) => {
      state.isDragLvl2 = action.payload.fl;
    },
    // #endregion

    // ___ collapse
    // #region
    // ~ Save
    setCollapseAllState: (state, action: PayloadAction<{ fl: boolean }>) => {
      state.collapseAllState = action.payload.fl;
    },
    // #endregion
  },
});
// #endregion ~ функции

// ~ экспортируем функции состояний
// - roots
export const { setRoots, setActiveRoot, createRoot, deleteRoot, updateRoot } =
  page7_dataCntl.actions;
// - lvls1
export const { setLvls1, setActiveLvl1 } = page7_dataCntl.actions;
// - lvls2
export const { setLvls2, setActiveLvl2, deleteLvls2, updateLvls2 } =
  page7_dataCntl.actions;
// - drag
export const { setIsDragRoot, setIsDragLvl1, setIsDragLvl2 } =
  page7_dataCntl.actions;
// - collapse
export const { setCollapseAllState } = page7_dataCntl.actions;

// ~ Экспорт редуьюсера для проводника store
export default page7_dataCntl.reducer;
// #endregion ~ hlop
