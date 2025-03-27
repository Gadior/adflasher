// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
// ~ style
import * as css from "./style.module.scss";

import { useState, useEffect } from "react";
import { Input, Button, Flex, Tabs, Space, Checkbox, Divider } from "antd";
const { TextArea } = Input;

// ~ comps
import { AddNews } from "./src/Feature";
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region ~ state
  // #endregion ~ state

  // ___ return
  // #region ~ return
  return (
    <div className={css.wrapper}>
      <TasksBackBtn />
      <AddNews />
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
