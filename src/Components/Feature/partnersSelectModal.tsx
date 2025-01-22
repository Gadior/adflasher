import React from "react";
import { Flex, Typography, Table, Button } from "antd";
import { useAppDispatch } from "../Feature/redux/hooks.tsx";
import { changeStatus } from "../Feature/redux/slices/task4__addPartners.tsx";
import ClickLikeWJT from "../Widjet/clickLikeWJT.tsx";
const { Text, Title } = Typography;

export default function PartnersSelectModal(props: any) {
  // ___ states
  // #region ~ states
  let newList = props.newList;
  const dispatch = useAppDispatch();
  // #endregion ~ states

  // ___ table config
  // #region ~ table config

  const columns__allPartns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Статус",
      render: (item: any) => {
        return item.isAdded === true ? (
          <Button
            size="small"
            danger
            onClick={() => {
              dispatch(changeStatus(item.key));
            }}
          >
            Убрать
          </Button>
        ) : (
          <Button
            size="small"
            onClick={() => {
              dispatch(changeStatus(item.key));
            }}
          >
            Включить
          </Button>
        );
      },
    },
  ];
  // #endregion ~ table config

  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <Flex
          className="modal-window-container"
          vertical={true}
          justify="space-between"
          align="flex-start"
        >
          <Title level={2}>Включить в список:</Title>
          <Flex
            style={{ width: "100%", marginBottom: 20 }}
            vertical={true}
            className="modal-window-container-body"
            align="flex-start"
          >
            <Table
              size="small"
              dataSource={newList}
              columns={columns__allPartns}
              style={{ width: "100%" }}
            />
            <Text style={{ fontSize: 16 }}></Text>
          </Flex>
          <Flex style={{ width: "100%" }} justify={"flex-end"}>
            <Button type="default" onClick={props.closeModal}>
              Выйти
            </Button>
          </Flex>
          <ClickLikeWJT />
        </Flex>
      </div>
    </div>
  );
}
