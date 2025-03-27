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
import { NewsList } from "./src/Widjet";
import { AddNews, NewsCard } from "./src/Feature";
import { Title } from "./src/Shared";

// ! Data
import { __data } from "./src/Data/data";

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
      <Title title={"Новости:"} />

      <NewsList __data={__data} />
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
