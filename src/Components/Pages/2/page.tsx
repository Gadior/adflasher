// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
// ~ styles
import "./reset.css";
import "./page.css";
// ~ interface
import { int__mainData } from "./interface.tsx";
// ~ settings
import {
  nameLength,
  nameReg,
  fioLength,
  fioReg,
  descriptionLength,
} from "./settings.tsx";

import React, { useState } from "react";
import { Input, Button, Typography, Flex, Divider } from "antd";
const { TextArea } = Input;
const { Title, Text } = Typography;
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region ~ state
  // ~ объект формы
  const [mainData, setMainData] = useState<int__mainData>({
    name: "",
    lastName: "",
    middleName: "",
    firstName: "",
    description: "",
  });
  // ~ состояние ошибок
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [errorMsg, setErrorMsg] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<boolean>(false);
  // ~ валидация
  const validate = (): boolean => {
    // ~ Валидация на обязательные (не пустые) поля
    let newErrors: Record<string, boolean> = {
      name: !mainData.name.trim(),
      lastName: !mainData.lastName.trim(),
      middleName: !mainData.middleName.trim(),
      firstName: !mainData.firstName.trim(),
    };
    // ~ передать ошибку в объект
    setErrors(newErrors);
    // ~ отключить красную рамку через 0,5 секунд
    setTimeout(() => setErrors({}), 500);
    return !Object.values(newErrors).includes(true);
  };
  // ~ кнопка "валидирова"
  const acceptForm = () => {
    if (!validate()) {
      setErrorMsg(true);
      setTimeout(() => setErrorMsg(false), 2000);
    } else {
      cleanMainData();
      setSuccessMsg(true);
      setTimeout(() => setSuccessMsg(false), 2000);
    }
  };
  // Чистка формы
  const cleanMainData = () => {
    setMainData({
      name: "",
      lastName: "",
      middleName: "",
      firstName: "",
      description: "",
    });
  };

  // #endregion ~ state

  // ___ return
  // #region ~ return
  return (
    <Flex className="test2-container" vertical={true}>
      <Text>
        Данная форма не сохраняет и не обрабатывает данные. Поле "о себе" не
        является обязательным
      </Text>

      <Divider style={{ margin: "0px 0 15px 0" }} />

      <Title level={2}>Создайте объект сохранения</Title>
      <Input
        placeholder={"Введите название группы"}
        showCount={true}
        maxLength={nameLength}
        value={mainData.name}
        className={errors.name ? "test2-content-basic--red" : ""}
        onChange={(e) => {
          const regex = nameReg;
          const { value } = e.target;
          if (regex.test(value) || value === "") {
            setMainData({ ...mainData, name: value });
          }
        }}
      ></Input>
      <Text>Укажите персональные данные</Text>
      <Input
        placeholder={"Введите фамилию"}
        showCount={true}
        maxLength={fioLength}
        value={mainData.lastName}
        className={errors.lastName ? "test2-content-basic--red" : ""}
        onChange={(e) => {
          const regex = fioReg;
          const { value } = e.target;
          if (regex.test(value) || value === "") {
            setMainData({ ...mainData, lastName: value });
          }
        }}
      ></Input>
      <Input
        placeholder={"Введите Отчество"}
        showCount={true}
        maxLength={fioLength}
        value={mainData.middleName}
        className={errors.middleName ? "test2-content-basic--red" : ""}
        onChange={(e) => {
          const regex = fioReg;
          const { value } = e.target;
          if (regex.test(value) || value === "") {
            setMainData({ ...mainData, middleName: value });
          }
        }}
      ></Input>
      <Input
        placeholder={"Введите имя"}
        showCount={true}
        maxLength={fioLength}
        value={mainData.firstName}
        className={errors.firstName ? "test2-content-basic--red" : ""}
        onChange={(e) => {
          const regex = fioReg;
          const { value } = e.target;
          if (regex.test(value) || value === "") {
            setMainData({ ...mainData, firstName: value });
          }
        }}
      ></Input>
      <Text>Расскажите о себе</Text>
      <TextArea
        maxLength={descriptionLength}
        showCount={true}
        autoSize={{ minRows: 2, maxRows: 4 }}
        value={mainData.description}
        onChange={(e) => {
          const regex = fioReg;
          const { value } = e.target;
          if (regex.test(value) || value === "") {
            setMainData({ ...mainData, description: value });
          }
        }}
      ></TextArea>
      <Button
        type="primary"
        style={{ marginTop: "15px", marginBottom: "10px" }}
        onClick={() => {
          acceptForm();
        }}
      >
        Валидировать
      </Button>
      {errorMsg && (
        <Flex justify={"center"} style={{ width: "100%" }}>
          <Text style={{ color: "red" }}>Заполните поля формы</Text>
        </Flex>
      )}
      {successMsg && (
        <Flex justify={"center"} style={{ width: "100%" }}>
          <Text style={{ color: "green" }}>Данные сохранены</Text>
        </Flex>
      )}
      <TasksBackBtn />
    </Flex>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
