// #region ~ hlop

// ___ import
// #region
import React, { useState } from "react";
import { Flex, Table, Button, Typography } from "antd";
import { useAppSelector } from "../../../../../Feature/redux/hooks";
import PartnersSelectModal from "../../../../../Feature/partnersSelectModal";
import "./addPartners__wjt.css";
const { Text } = Typography;
// #endregion

// ___ component
// #region ~ component
export default function AddPartnersWJT() {
  // ___ states
  // #region ~ states
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
      title: "Название фирмы",
      dataIndex: "componyName",
      key: "componyName",
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
        <>
          <Text>Списк подключенных парнтеров:</Text>
          <Table
            size="small"
            dataSource={addList}
            columns={columns__addedPartns}
            style={{ width: "100%" }}
          />
        </>
      )}
      {/* Модальное окно */}
      {isModalOpen && (
        <PartnersSelectModal newList={newList} closeModal={closeModal} />
      )}
    </Flex>
  );
  // #endregion ~ return
}
// #endregion ~ component
