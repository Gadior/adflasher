// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn";
import Tab1Page5 from "../../Widjet/tab1Page5";
import Tab2Page5 from "../../Widjet/tab2Page5";

// ~ styles
import "./page.css";

import React from "react";
import { Flex, Button, Tabs } from "antd";
import { TabsProps } from "antd";
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks";
import { addGroup } from "../../Feature/redux/slices/page5/dataCntl";

// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ redux in data
  // #region
  const mainData = useAppSelector((state) => state.page5_dataCntl.data);
  const dispatch = useAppDispatch();
  // #endregion

  // ___ tabs config
  // #region
  const tabsItems: TabsProps["items"] = [
    {
      key: "1",
      label: "Создать",
      children: (
        <>
          {mainData.map((item: any) => (
            <Tab1Page5 groupNum={item.id} />
          ))}
          <Button
            onClick={() => {
              dispatch(addGroup());
            }}
            className="test5-container-btn"
            type="default"
          >
            Добавить группу
          </Button>
        </>
      ),
    },
    {
      key: "2",
      label: "Сводная",
      children: <Tab2Page5 />,
    },
  ];
  // #endregion

  // ___ return
  // #region ~ return
  return (
    <>
      <Flex vertical={true} className="test5-container" justify="start">
        <p>
          Необходимо создать хотя бы две группы и в каждой создать хотя бы по 2
          записи. Потом перейти в раздел сводной.
        </p>
        <Tabs defaultActiveKey="1" items={tabsItems} />
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
// #endregion ~ hlop
