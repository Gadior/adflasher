import React, { useState } from "react";
import { type_Id, type_Tasks } from "../Pages/7/interface";
import { Flex, Typography, Button, Input } from "antd";
// const { TextArea } = Input;
import Icon, { DeleteOutlined, PlusCircleOutlined } from "@ant-design/icons";

interface Props {
  task: type_Tasks;
  deleteTask: (id: type_Id) => void;
  updateTask: (id: type_Id, content: string) => void;
}
export default function Page7TaskCard(props: Props) {
  // ___ const
  // #region
  const { task, deleteTask, updateTask } = props;
  // #endregion

  // ___ state
  // #region
  // ~ наведение мыши на карточку
  const [mouseOverFiled, setMouseOverFiled] = useState<boolean>(false);
  // ~ edit Mode
  const [editMode, setEditMode] = useState<boolean>(false);
  // #endregion

  // ___ toogle EditMode
  // #region
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseOverFiled(false);
  };
  // ~ если режим включен вернем следующий контент
  if (editMode) {
    return (
      <Flex
        justify="space-between"
        align="center"
        className="test7-container-wrapper-addChaterContainer-task"
      >
        <Input
          placeholder="Введите название задачи"
          value={task.content}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              toggleEditMode();
            }
          }}
          onBlur={() => {
            toggleEditMode();
          }}
          onChange={(e) => {
            updateTask(task.id, e.target.value);
          }}
          maxLength={30}
          showCount={true}
        />
      </Flex>
    );
  }
  // #endregion

  return (
    <Flex
      justify="space-between"
      align="center"
      className="test7-container-wrapper-addChaterContainer-task"
      // listener наведения мыши для отоброжения кнопки удаления
      onMouseOver={() => {
        setMouseOverFiled(true);
      }}
      onMouseOut={() => {
        setMouseOverFiled(false);
      }}
      // режим редактировать
      onClick={() => {
        toggleEditMode();
      }}
    >
      {task.content}

      {mouseOverFiled && (
        <button
          className="test7-container-wrapper-addChaterContainer-title-delBtn"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <DeleteOutlined style={{ padding: 0, margin: 0 }} />
        </button>
      )}
    </Flex>
  );
}
