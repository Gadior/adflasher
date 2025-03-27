// #region ~ hlop
// ___ import
// #region ~ import
import { useState, useEffect } from "react";
import { Input, Button, Flex, Tabs, Space, Checkbox, Divider } from "antd";
const { TextArea } = Input;
// ~ comps
import TasksBackBtn from "../../../../../Shared/ui/tasksBackBtn/tasksBackBtn";
// ~ style
// ~ style
import * as css from "./style.module.scss";
// #endregion ~ import

// ___ component
// #region ~ component
export default function AddNews() {
  return (
    <div className={css.container}>
      <h3>Добавление новостей:</h3>
      <Input
        placeholder="Введите название заголовка"
        type={"text"}
        maxLength={100}
        showCount={true}
      />
      <TextArea placeholder="Введите описание новости" rows={7} />
      <Button type="primary">Добавить</Button>
    </div>
  );
}
