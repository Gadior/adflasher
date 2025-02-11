// ___ Root
// #region
export type type_Id = number | string;

export type type_Root = {
  id: type_Id;
  title: string;
};
// #endregion

// ___ Lvl1
// #region
export type type_Lvl1 = {
  id: type_Id;
  columnId: type_Id;
  content: string;
};
// #endregion

// ___ Lvl2
// #region
export type type_Lvl2 = {
  id: type_Id;
  columnId: type_Id;
  lvl1Id: type_Id;
  content: string;
};
// #endregion
