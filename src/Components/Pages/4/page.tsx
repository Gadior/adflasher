// #region ~ hlop
// TODO: произвести чистку

// ___ import
// #region ~ import
// ~ comps
import ClickLikeWJT from "../../Widjet/clickLikeWJT";
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
import AddPartnersWJT from "../../Widjet/addPartnersWJT";

// ~ styles
import "./page.css";

import React from "react";
import { Flex } from "antd";
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ return
  // #region ~ return
  return (
    <>
      <Flex vertical={true} className="test4-container" justify="flex-start">
        <p>
          Ниже представлены два компонента - виджета, которые обрабатывают
          данные своих состояний через контекст. Контекст реализован через 
          библиотеку Redux.
          <br />
          В репозитории видно, что компоненты теперь абсолютно изолированны и
          свободно пеермещаемы.
          <br />
          Подробности в репозитории
        </p>
        <AddPartnersWJT />
        <ClickLikeWJT />
      </Flex>
      <TasksBackBtn />
    </>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
