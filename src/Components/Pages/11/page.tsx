// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn";
import Options from "../../Widjet/page11/options";
import Price from "../../Widjet/page11/price";

import React, { useState } from "react";
import { Button, Divider, Input, Typography } from "antd";
import { Tabs } from "antd";
import { TabsProps } from "antd";

// ~ redux
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks";
import {
  setRootSelectorName,
  isModalFalse,
  setEstimateData,
} from "../../Feature/redux/slices/page11/dataCntl";

// ~ styles
import "./style.css";

const { Text, Title } = Typography;
// #endregion ~ import

// ___ компонента - форма для заполнения данных
// #region
function Form(props: any) {
  // ___ state
  // #region
  // ~ дата таблицы
  // #endregion

  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();

  // ~ корневой селектор для выбора услуги
  const formData = useAppSelector((state) => state.page11_dataCntl.formData);

  const rootSelectorName = useAppSelector(
    (state) => state.page11_dataCntl.rootSelectorName
  );
  const [__data, set__Data] = useState({
    preCost: 0,
    count: 1,
    total: formData ? formData.cost : 0,
  });
  // #endregion

  // ___ Если нажать "отменить"
  const cleanData = () => {
    dispatch(setRootSelectorName({ value: null, marker: null }));
    dispatch(isModalFalse());
  };

  const saveData = () => {
    let __type = rootSelectorName ? rootSelectorName : "";
    dispatch(
      setEstimateData({
        data: {
          id: formData ? formData.id : 0,
          value: formData ? formData.value : "",
          label: formData ? formData.label : "",
          marker: formData ? formData.marker : "",
          prePrice: __data.preCost,
          min: formData ? formData.min : 0,
          cost: __data.total,
          type: __type,
        },
      })
    );
    dispatch(setRootSelectorName({ value: null, marker: null }));
    dispatch(isModalFalse());
  };

  const marker = props.marker;
  switch (marker) {
    case "paket":
      return (
        <div className="test11__modal">
          <Title level={3} className="test11__modal__title">
            {formData ? formData.value : 0}
          </Title>
          <Divider />
          <Text className="test11__modal__text">Предоплата</Text>
          <Input
            type="number"
            value={__data.preCost}
            onChange={(e) => {
              let data = __data;

              let cost = formData ? formData.cost : 0;
              cost = cost - parseInt(e.target.value);

              data = { ...data, preCost: parseInt(e.target.value) };
              data = { ...data, total: cost };

              set__Data(data);
            }}
          />
          <Title level={3} className="test11__modal__title">
            Итого:{" "}
            {formData ? (formData.cost - __data.preCost).toLocaleString() : 0} ₽
          </Title>

          <Divider />

          <Button type="primary" className="test11__btn" onClick={saveData}>
            Сохранить
          </Button>

          <Button
            type="primary"
            danger={true}
            className="test11__btn"
            onClick={cleanData}
          >
            Отменить
          </Button>
        </div>
      );
    case "arenda":
      return (
        <div>
          <div>arenda</div>
        </div>
      );
    case "option":
      return (
        <div>
          <div>option</div>
        </div>
      );
    default:
      return <div>somthing wrong</div>;
  }
}
// #endregion

// ___ списко для вкладок
// #region
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Опции",
    children: <Options />,
  },
  {
    key: "2",
    label: "Оплата",
    children: <Price />,
  },
];
// #endregion

// ___ component Page
// #region ~ component
export default function Page(props: any) {
  // ___ redux in data
  // #region
  // ~ корневой селектор для выбора услуги
  const isModal: boolean = useAppSelector(
    (state) => state.page11_dataCntl.isModal
  );

  // const dispatch = useAppDispatch();
  // #endregion

  // ___ state
  // #region
  // #endregion

  // ___ return
  // #region ~ return
  return (
    <div className="test11__wrapper">
      <TasksBackBtn />
      <Button
        type="primary"
        danger={true}
        className="test11__btn"
        onClick={() => {
          console.log("click on save btn");
        }}
      >
        Сохранить смету
      </Button>
      <Button
        type="primary"
        danger={true}
        className="test11__btn"
        onClick={() => {
          console.log("click on save btn");
        }}
      >
        Загрузить последнюю смету
      </Button>

      {/* Табер */}
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="test11__wrapper__tab"
      />

      {/* модалка по услуге */}
      {isModal && (
        <div>
          <Form marker={"paket"} />
        </div>
      )}
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
