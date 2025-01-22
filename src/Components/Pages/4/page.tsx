// #region ~ hlop
// TODO: произвести чистку

// ___ import
// #region ~ import
// ~ comps
import ClickLikeWJT from "../../Widjet/clickLikeWJT.tsx";
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
import AddPartnersWJT from "../../Widjet/addPartnersWJT.tsx";

// ~ styles
import "./reset.css";
import "./page.css";

import React from "react";
import { Flex, Typography } from "antd";
const { Text } = Typography;
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ return
  // #region ~ return
  return (
    <>
      <Flex vertical={true} className="test4-container" justify="flex-start">
        <Text>
          Ниже представлены два компонента - виджета, которые обрабатывают
          данные своих состояний через контекст. Контекст реализован через 
          библиотеку Redux.
          <br />
          В репозитории видно, что компоненты теперь абсолютно изолированны и
          свободно пеермещаемы.
          <br />
          Подробности в репозитории
        </Text>
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
