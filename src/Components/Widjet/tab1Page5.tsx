// ___ import
// #region ~ import
// ~style
import "./tab1_page5.css";
// ~ comps
import UiInputStringPage5 from "../Shared/uiInputStringPage5";
import UiInputNumberPage5 from "../Shared/uiInputNumberPage5";

import React, { useState, useEffect } from "react";
import { Flex, Collapse, Button } from "antd";

// ~ redux
import { useAppDispatch, useAppSelector } from "../Feature/redux/hooks";
import { addGroupItem } from "../Feature/redux/slices/page5/dataCntl";
// #endregion ~ import

export default function Tab1Page5(props: any) {
  // ___ state
  // #region
  // ~ хранилище номера группы
  const [currentGroup, setCurrentGroup] = useState<number>(0);
  useEffect(() => {
    setCurrentGroup(props.groupNum);
  }, [props.groupNum]);
  // #endregion

  // ___ redux in data
  // #region
  const mainData = useAppSelector((state) => state.page5_dataCntl.data)[
    currentGroup
  ].data;
  const dispatch = useAppDispatch();
  // #endregion

  // ___ return
  // #region
  return (
    <>
      <Collapse
        items={[
          {
            key: "1",
            showArrow: false,
            className: "tab1-page5-collapse",
            label: (
              <Flex className="">
                <Button type="link">Раскрыть группу</Button>
              </Flex>
            ),
            children: (
              <Flex gap={10} vertical={true}>
                {mainData && (
                  <>
                    {mainData.map((item: any) => (
                      <Flex
                        key={item.id}
                        gap={10}
                        className="tab1_page5_collapse-table"
                        align="center"
                      >
                        <Flex gap={10}>
                          Юзер номер: <b>{item.id}</b>
                        </Flex>

                        <UiInputStringPage5
                          placeholder={"Фамилия"}
                          inpLength={20}
                          name={item.surname}
                          id={item.id}
                          type={"surname"}
                          blockId={currentGroup}
                        />

                        <UiInputStringPage5
                          placeholder={"Имя"}
                          inpLength={15}
                          name={item.name}
                          id={item.id}
                          type={"name"}
                          blockId={currentGroup}
                        />

                        <UiInputNumberPage5
                          placeholder={"Цена/услуги"}
                          name={item.sallary}
                          id={item.id}
                          blockId={currentGroup}
                        />
                      </Flex>
                    ))}
                  </>
                )}

                <Button
                  onClick={() => {
                    dispatch(addGroupItem({ id: currentGroup }));
                  }}
                >
                  Добавить данные
                </Button>
              </Flex>
            ),
          },
        ]}
        defaultActiveKey={["1"]}
      />
    </>
  );
  // #endregion
}
