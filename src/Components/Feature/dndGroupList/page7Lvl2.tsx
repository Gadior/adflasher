import React, { useState } from "react";
import { type_Id, type_Lvl1 } from "../../Pages/7/interface";
import { Flex, Typography, Button, Input } from "antd";
// const { TextArea } = Input;
import Icon, { DeleteOutlined, DragOutlined } from "@ant-design/icons";

// ~ dnd
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  isDragLvl1;
  task: type_Lvl1;
  deleteTask: (id: type_Id) => void;
  updateTask: (id: type_Id, content: string) => void;
}
export default function Page7Lvl2(props: Props) {
  // ___ const
  // #region
  const { isDragLvl1, task, deleteTask, updateTask } = props;
  // #endregion

  // ___ state
  // #region
  // ~ наведение мыши на карточку
  const [mouseOverFiled, setMouseOverFiled] = useState<boolean>(false);
  // ~ edit Mode
  const [editMode, setEditMode] = useState<boolean>(false);
  // #endregion

  // ___ dnd
  // #region
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Lvl1",
      task,
    },
    disabled: editMode,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if (isDragging) {
    return (
      <Flex
        ref={setNodeRef}
        style={style}
        className="test7-container-wrapper-addChaterContainer-task-isDragging"
      >
        <p style={{ color: "rgba(0,0,0,0)" }}>1</p>
      </Flex>
    );
  }
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
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
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
      ref={setNodeRef}
      style={style}
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
      <Flex gap={20} {...attributes} {...listeners}>
        <DragOutlined />
        {task.content}
      </Flex>

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
