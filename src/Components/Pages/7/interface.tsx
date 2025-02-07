// ___ Column
// #region
export type type_Id = number | string;

export type type_Column = {
  id: type_Id;
  title: string;
};
// #endregion

// ___ Tasks
// #region
export type type_Tasks = {
  id: type_Id;
  columnId: type_Id;
  content: string;
};
// #endregion
