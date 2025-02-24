// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn";
import Options from "../../Widjet/page11/options";
import Price from "../../Widjet/page11/price";

import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  Input,
  Typography,
  TabsProps,
  Tabs,
} from "antd";

// ~ redux
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks";
import {
  setRootSelectorName,
  isModalFalse,
  setEstimateData,
} from "../../Feature/redux/slices/page11/dataCntl";

// ~ styles
import "./style.css";
import { parseInt } from "lodash";

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
    count: 0,
    total: formData ? formData.cost : 0,
  });
  // #endregion

  // ___ Если нажать "отменить"
  const cleanData = () => {
    dispatch(setRootSelectorName({ value: null, marker: null }));
    dispatch(isModalFalse());
    setIsNumber(false);
  };

  // ___ paket
  // #region
  // ~ save data from modal
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
          pay: {
            studio: formData
              ? formData.pay
                ? formData.pay.studio + __data.count * formData.pay.studio
                : 0
              : 0,
            photo: formData
              ? formData.pay
                ? formData.pay.photo + __data.count * formData.pay.photo
                : 0
              : 0,
            makeup: formData
              ? formData.pay
                ? formData.pay.makeup + __data.count * formData.pay.makeup
                : 0
              : 0,
            cake: formData
              ? formData.pay
                ? formData.pay.cake + __data.count * formData.pay.cake
                : 0
              : 0,
            decor: formData
              ? formData.pay
                ? formData.pay.decor + __data.count * formData.pay.decor
                : 0
              : 0,
            clean: formData
              ? formData.pay
                ? formData.pay.clean + __data.count * formData.pay.clean
                : 0
              : 0,
          },
        },
      })
    );
    dispatch(setRootSelectorName({ value: null, marker: null }));
    setIsNumber(false);
    dispatch(isModalFalse());
  };
  // #endregion

  // ___ rent
  // #region
  // ~ горячие дни выбраны?
  const [isHotDay, setIsHotDay] = useState(false);
  const setHotDayCheck = (e: any) => {
    setIsHotDay(e.target.checked);
  };
  const [isStopList, setIsStopList] = useState<boolean>(false);
  const setStopShow = () => {
    let __list = ["key", "totalWhite"];

    if (formData) {
      __list.map((item) => {
        if (item === formData.marker) {
          if (!isStopList) {
            setIsStopList((prev) => true);
          }
        }
      });
    }
  };
  useEffect(() => {
    setStopShow();
  }, [formData]);
  // #endregion

  // ___ option
  // #region
  // ~ есть ли в списке "считаемых" услуг
  const [isNUmber, setIsNumber] = useState<boolean>(false);
  const checkIsNumber = () => {
    let __list = ["retush", "bg", "animal"];

    if (formData) {
      __list.map((item) => {
        if (item === formData.marker) {
          if (!isNUmber) {
            setIsNumber((prev) => true);
          }
        }
      });
    }
  };
  useEffect(() => {
    checkIsNumber();
  }, [formData]);
  // #endregion

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
            min={0}
            value={__data.preCost}
            onChange={(e) => {
              let __value: number = parseInt(e.target.value);
              let data = __data;

              let cost = formData ? formData.cost : 0;
              cost = cost - __value;

              data = { ...data, preCost: __value };
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
        <div className="test11__modal">
          <Title level={3} className="test11__modal__title">
            {formData ? formData.value : 0}
          </Title>

          <Divider className="__divider" />
          {!isStopList && (
            <>
              <Checkbox
                checked={isHotDay}
                onChange={setHotDayCheck}
                className="__checkbox"
              >
                HOT TIME
              </Checkbox>
              <Divider className="__divider" />
            </>
          )}

          <Text className="test11__modal__text">Предоплата</Text>
          <Input
            type="number"
            value={__data.preCost}
            onChange={(e) => {
              const __value: number = parseInt(e.target.value);
              let data = __data;

              let cost;
              if (!isHotDay) {
                cost = formData ? formData.cost : 0;
              } else {
                cost = formData ? formData.halphPrice : 0;
              }
              if (cost === undefined) {
                cost = 0;
              }

              data = { ...data, preCost: __value };
              data = {
                ...data,
                total: cost - data.preCost + (data.count * cost) / 2,
              };

              set__Data(data);
            }}
          />
          <Text className="test11__modal__text">
            Сколько слотов по 30 минут добавить к основному времени?
          </Text>

          <Input
            type="number"
            value={__data.count}
            onChange={(e) => {
              const __value: number = parseInt(e.target.value);

              let data = __data;
              let cost: number;

              if (formData) {
                if (!isHotDay) {
                  cost = formData ? formData.cost : 0;
                } else {
                  cost =
                    formData && formData.halphPrice ? formData.halphPrice : 0;
                }
                if (cost === undefined) {
                  cost = 0;
                }

                data = { ...data, count: __value };
                if (!isStopList) {
                  data = {
                    ...data,
                    total: cost - data.preCost + (data.count * cost) / 2,
                  };
                } else {
                  if (formData) {
                    data = {
                      ...data,
                      total:
                        formData && formData.halphPrice
                          ? cost -
                            data.preCost +
                            data.count * formData.halphPrice
                          : 0,
                    };
                  }
                }

                set__Data(data);
              }
            }}
          />

          <Title level={3} className="test11__modal__title">
            Итого:{" "}
            {!isStopList ? (
              <>
                {isHotDay
                  ? formData
                    ? formData.halphPrice
                      ? (
                          formData.halphPrice -
                          __data.preCost +
                          (formData.halphPrice / 2) * __data.count
                        ).toLocaleString()
                      : 0
                    : 0
                  : formData
                  ? (
                      formData.cost -
                      __data.preCost +
                      (formData.cost / 2) * __data.count
                    ).toLocaleString()
                  : 0}
              </>
            ) : (
              <>{__data.total}</>
            )}{" "}
            ₽
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
    case "option":
      return (
        <div className="test11__modal">
          <Title level={3} className="test11__modal__title">
            {formData ? formData.value : 0}
          </Title>
          <Divider />
          <Text className="test11__modal__text">Предоплата</Text>
          <Input
            type="number"
            min={0}
            value={__data.preCost}
            onChange={(e) => {
              let __value: number = parseInt(e.target.value);
              let data = __data;

              let cost = formData ? formData.cost : 0;
              cost = cost - __value;

              data = { ...data, preCost: __value };
              data = { ...data, total: cost };

              set__Data(data);
            }}
          />

          {isNUmber && (
            <>
              <Text className="test11__modal__text">
                Сколько дополнительных раз применить опцию?
              </Text>
              <Input
                type="number"
                value={__data.count}
                onChange={(e) => {
                  const __value: number = parseInt(e.target.value);

                  let data = __data;
                  let cost;
                  cost = formData ? formData.cost : 0;
                  if (cost === undefined) {
                    cost = 0;
                  }

                  data = { ...data, count: __value };
                  data = {
                    ...data,
                    total: cost - data.preCost + data.count * cost,
                  };
                  set__Data(data);
                }}
              />
            </>
          )}
          <Title level={3} className="test11__modal__title">
            Итого:{" "}
            {formData
              ? (
                  formData.cost -
                  __data.preCost +
                  __data.count * formData.cost
                ).toLocaleString()
              : 0}{" "}
            ₽
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
  const rootSelectorName = useAppSelector(
    (state) => state.page11_dataCntl.rootSelectorName
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
      {/* <Button
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
      </Button> */}

      {/* Табер */}
      <Tabs
        defaultActiveKey="1"
        items={items}
        className="test11__wrapper__tab"
      />

      {/* модалка по услуге */}
      {isModal && (
        <div>
          <Form marker={rootSelectorName} />
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
