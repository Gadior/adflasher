// #region ~ hlop

// ___ import
// #region
import React, { useEffect, useState } from "react";
import { Flex, Typography, Table, Button } from "antd";
import { useAppSelector, useAppDispatch } from "../Feature/redux/hooks.tsx";
import { changeStatus } from "../Feature/redux/slices/task4__addPartners.tsx";
import "./addPartners__wjt.css";
const { Text, Title } = Typography;
// #endregion

// ___ component
// #region ~ component
export default function AddPartners__wjt() {
  // ___ states
  // #region ~ states
  const dispatch = useAppDispatch();
  const newList = useAppSelector((state) => state.newList.newList);
  const addList = useAppSelector((state) => state.newList.addedList);
  // #endregion ~ states

  // ___ Управление модальным окном
  // #region
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // #endregion

  // ___ table config
  // #region ~ table config
  const columns__addedPartns = [
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Название",
      dataIndex: "componyName",
      key: "componyName",
    },
  ];
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
  // ___ return
  // #region ~ return

  return (
    <Flex className="partners-container">
      <Button
        type="primary"
        onClick={() => {
          openModal();
        }}
      >
        Добавить партнера
      </Button>
      {addList.length > 0 && (
        <Table
          size="small"
          dataSource={addList}
          columns={columns__addedPartns}
          style={{ width: "100%" }}
        />
      )}
      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-window">
            <Flex
              className="modal-window-container"
              vertical={true}
              justify="space-between"
              align="flex-start"
            >
              <Title level={2}>info: [</Title>
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
                <Button type="default" onClick={closeModal}>
                  Выйти
                </Button>
              </Flex>
            </Flex>
          </div>
        </div>
      )}
    </Flex>
  );
  // #endregion ~ return
}
// #endregion ~ component
