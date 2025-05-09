// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import React, { useState } from "react";
import { Input, Typography, Button, Divider, Flex } from "antd";

// ~ styles
import "./page.css";

const { Title } = Typography;
// #endregion ~ import

// ___ interface
// #region
// --- 2 lvl
interface ParamValue {
  paramId: number;
  value: string;
}
// как добыть новый вид параметров?
interface Size {
  id: number;
  name: string;
}

// --- 1 lvl
interface Model {
  paramValues: ParamValue[];
  colors: string[];
  size: Size[]; // Добавление доп параметра
}
interface Param {
  id: number;
  name: string;
  type: string;
}

// --- 0 lvl
interface Props {
  params: Param[];
  model: Model;
}
// #endregion

// ___ component EfitParams
// #region ~ component
const EfitParams = (props: Props) => {
  // ___ props
  // #region
  const { params, model } = props;
  // #endregion

  // ___ state
  // #region
  // ~ параметры модели
  const [paramValues, setParamValues] = useState<ParamValue[]>(
    model.paramValues
  );
  // ~ export model
  const [exportModel, setExportModel] = useState<Model>();
  // #endregion

  // ___ changeParam
  //   #region
  // ~ изменить параметры по onChange
  const changeParam = (paramId: number, value: string) => {
    setParamValues((prevValues) =>
      prevValues.map((paramValue) =>
        paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
      )
    );
  };
  //   #endregion

  //   ___ model
  //   #region
  // ~ модель данных
  const getModel = (): Model => {
    return {
      paramValues,
      colors: model.colors,
      size: model.size, // Добавление доп параметра
    };
  };
  // ~ получить модель данных
  const handleGetModel = () => {
    setExportModel(getModel());
  };
  //   #endregion

  // ___ return
  // #region ~ return
  return (
    <>
      {/* enter */}
      <div>
        {params.map((param) => {
          const paramValue = paramValues.find((pv) => pv.paramId === param.id);
          return (
            <div key={param.id} className="test9__container__table">
              <Flex>{param.name}</Flex>
              <Input
                type="text"
                value={paramValue ? paramValue.value : ""}
                onChange={(e) => changeParam(param.id, e.target.value)}
              />
            </div>
          );
        })}
        <Button type="primary" onClick={handleGetModel}>
          Получить модель
        </Button>
      </div>

      <Divider />

      {/* export */}
      <div className="test9__container__export">
        <Title level={2}>Модель</Title>
        {exportModel && (
          <>
            <Flex wrap={true}>Основные параметры:</Flex>
            <div className="test9__exportBlock">
              {exportModel.paramValues.map((param: ParamValue) => (
                <div key={param.paramId}>
                  <Flex>value: </Flex>
                  <Flex>{param.value}</Flex>
                </div>
              ))}
            </div>
            <Flex wrap={true}>
              Дополнительный параметры color содержит параметры:{" "}
            </Flex>
            <Flex gap={5} wrap={true}>
              {exportModel.colors.map((item) => (
                <Flex key={item}>{item} |</Flex>
              ))}
            </Flex>

            <br />
            <Flex wrap={true}>
              Дополнительный параметры Size содержит параметры:{" "}
            </Flex>
            <Flex gap={5} wrap={true}>
              {exportModel.size.map((item: Size) => (
                <Flex key={item.id}>{item.name} |</Flex>
              ))}
            </Flex>
          </>
        )}
      </div>
    </>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
};
// #endregion ~ component

// ___ component Page
// #region ~ component
export default function Page() {
  // ___ DATA
  // #region
  const params: Param[] = [
    { id: 1, name: "Наименование", type: "string" },
    { id: 2, name: "Описание", type: "string" },
    { id: 3, name: "Новый параметр модели", type: "string" }, // Добавление доп параметра
  ];

  const model: Model = {
    paramValues: [
      { paramId: 1, value: "Товар 1" },
      { paramId: 2, value: "Описание 1" },
      { paramId: 3, value: "Новое" }, // Добавление доп параметра
    ],
    colors: ["white", "black"],
    size: [
      { id: 0, name: "Small" },
      { id: 1, name: "Medium" },
      { id: 2, name: "Large" },
      { id: 3, name: "OverSize" },
    ], // Добавление доп параметра
  };
  // #endregion

  // ___ return
  // #region ~ return
  return (
    <div className="test9__container">
      <EfitParams params={params} model={model} />
      <TasksBackBtn />
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
