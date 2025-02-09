// ___ Column
// #region
export type type_Id = number | string;

export type type_Root = {
  id: type_Id;
  title: string;
};
// #endregion

// ___ Tasks
// #region
export type type_Lvl1 = {
  id: type_Id;
  columnId: type_Id;
  content: string;
};
// #endregion
