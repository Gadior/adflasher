// #region ~ hlop
// ___ import
// #region ~ import

import React from "react";
import { Button, Divider, Flex, Select, Typography } from "antd";

// ~ redux
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks";
import {
  setRootSelectorName,
  setlvl2SelectorName,
  deleteEstimateData,
} from "../../Feature/redux/slices/page11/dataCntl";
const { Title, Text } = Typography;
// #endregion ~ import

// ___ компонента - выбор типа услуги
function Service(props: any) {
  // ~ корневой селектор для выбора услуги
  const lvl2Selector = useAppSelector(
    (state) => state.page11_dataCntl.lvl2Selector
  );
  const dispatch = useAppDispatch();

  const handleChange = (value: string, index: any) => {
    dispatch(
      setlvl2SelectorName({
        value: index.value,
        marker: index.marker,
      })
    );
  };

  if (!lvl2Selector) {
    return;
  } else {
    return (
      <Select
        className="text11__option__selector"
        placeholder="Что добавляем?"
        onChange={handleChange}
        options={lvl2Selector}
      />
    );
  }
}

// ___ component Page
// #region ~ component
export default function Options(props: any) {
  // ___ redux in data
  // #region
  // ~ корневой селектор для выбора услуги
  const rootSelector = useAppSelector(
    (state) => state.page11_dataCntl.rootSelector
  );

  // ~ value
  const positionTitle = useAppSelector(
    (state) => state.page11_dataCntl.rootSelectorTitle
  );

  // ~ marker
  const positionMarker = useAppSelector(
    (state) => state.page11_dataCntl.rootSelectorName
  );

  // ~ dispatch
  const dispatch = useAppDispatch();

  // ~ Карточки с данными
  const estimateData = useAppSelector(
    (state) => state.page11_dataCntl.estimateData
  );
  // ~ card color style

  // ~ стиль фона карточки, в зависимости от переданого маркера в type объекта
  const styleCard = (marker: string): string => {
    switch (marker) {
      case "paket":
        return "__color";
      case "arenda":
        return "__color1";
      case "option":
        return "__color2";
      default:
        return "__color";
    }
  };
  // #endregion

  // ___ полная стоимость со всех карточек
  // #region
  const getTotalPrice = () => {
    let __total: number = 0;
    estimateData.map((item: any) => {
      __total = __total + parseInt(item.data.cost);
    });
    return __total;
  };
  // #endregion

  // ___ предоплата со всех карточек
  // #region
  const getPrePayPrice = () => {
    let __total: number = 0;
    estimateData.map((item: any) => {
      __total = __total + parseInt(item.data.prePrice);
    });
    return __total;
  };
  // #endregion

  // ___ реакция root селектора
  // #region
  const handleChange = (value: string, index: any) => {
    dispatch(setRootSelectorName({ value: index.value, marker: index.marker }));
  };
  // #endregion

  // ___ return
  // #region ~ return
  if (!rootSelector) {
    return;
  } else {
    return (
      <Flex vertical={true} gap={20} className="text11__option">
        {/* Плашка оплаты */}
        {estimateData.length > 0 && (
          <div className="__totalPrice">
            <div>ИТОГО {getTotalPrice().toLocaleString()} ₽</div>
            <div className="__prePay">
              ПРЕДПОЛАТА {getPrePayPrice().toLocaleString()} ₽
            </div>
            <div className="__totalPrice--red">
              ВЗЯТЬ {(getTotalPrice() - getPrePayPrice()).toLocaleString()} ₽
            </div>
          </div>
        )}

        {/* Селектор первого уровня */}
        <Select
          className="text11__option__selector"
          placeholder="Что добавляем?"
          value={positionTitle}
          onChange={handleChange}
          options={rootSelector}
        />

        {/* Селектор второго уровня */}
        {positionTitle && (
          <div>
            <Service marker={positionMarker} />
          </div>
        )}

        {/* Виды карточек */}
        {estimateData.length > 0 && (
          <div className="__cards">
            {estimateData.map((item: any) => (
              <div
                className={`__card ${styleCard(item.data.type)}`}
                key={item.id}
              >
                <Title level={4}>{item.data.value}</Title>
                <Divider />
                <Flex vertical={true}>
                  <Text>Предоплата: {item.data.prePrice}</Text>
                  <Text>Время: {item.data.min}</Text>
                </Flex>
                <Divider />
                <Flex className="__price" justify="space-between">
                  <Title level={4}>
                    Итого: {item.data.cost.toLocaleString()} ₽
                  </Title>
                </Flex>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    dispatch(deleteEstimateData({ id: item.id }));
                  }}
                >
                  Удалить
                </Button>
              </div>
            ))}
          </div>
        )}
      </Flex>
    );
  }
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component

// #endregion ~ hlop
