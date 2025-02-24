// #region ~ hlop
// ___ import
// #region ~ import

import React, { useEffect, useState } from "react";
import {} from "lucide-react";

// ~ redux
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks";
import {
  setRootSelectorName,
  setlvl2SelectorName,
  deleteEstimateData,
} from "../../Feature/redux/slices/page11/dataCntl";
import { Flex, Typography } from "antd";
const { Title } = Typography;

// ~ assets

// ~ styles
// import "./style.css";
// #endregion ~ import

// ___ component Page
// #region ~ component
export default function Price(props: any) {
  // ___ redux in data
  // #region
  // ~ корневой селектор для выбора услуги
  const estimateData = useAppSelector(
    (state) => state.page11_dataCntl.estimateData
  );
  // #endregion

  // __ Получение объекта с распределительными ценами на команду
  // #region
  interface int_PayPls {
    studio: number;
    photo: number;
    makeup: number;
    cake: number;
    decor: number;
    clean: number;
  }
  const [exportObj, setExportObj] = useState<int_PayPls>({
    studio: 0,
    photo: 0,
    makeup: 0,
    cake: 0,
    decor: 0,
    clean: 0,
  });

  const getAllPrice = () => {
    let __data = exportObj;

    estimateData.map((item) => {
      if (item.data.pay) {
        __data = { ...__data, studio: __data.studio + item.data.pay.studio };
        __data = { ...__data, photo: __data.photo + item.data.pay.photo };
        __data = { ...__data, makeup: __data.makeup + item.data.pay.makeup };
        __data = { ...__data, cake: __data.cake + item.data.pay.cake };
        __data = { ...__data, decor: __data.decor + item.data.pay.decor };
        __data = { ...__data, clean: __data.clean + item.data.pay.clean };
      }
      setExportObj(__data);
    });
  };

  useEffect(() => {
    getAllPrice();
  }, [estimateData]);
  // #endregion

  // ___ state
  // #region
  // #endregion

  // ___ return
  // #region ~ return
  return (
    <Flex className="test11__payAll">
      <Title level={4}>ОБЩИЙ РАСЧЕТ:</Title>
      <div>Студия: {exportObj.studio}</div>
      <div>Фотограф: {exportObj.photo}</div>
      <div>Макияж: {exportObj.makeup}</div>
      <div>Торт: {exportObj.cake}</div>
      <div>Декорации: {exportObj.decor}</div>
      <div>Уборка: {exportObj.clean}</div>
    </Flex>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
