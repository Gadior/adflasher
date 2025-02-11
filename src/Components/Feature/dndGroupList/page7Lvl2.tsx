// TODO: LVL3
import React, { useState, useEffect } from "react";
import { type_Id, type_Lvl1, type_Lvl2 } from "../../Pages/7/interface.tsx";
import { Flex, Typography, Button, Input } from "antd";
// const { TextArea } = Input;
import Icon, { DeleteOutlined, DragOutlined } from "@ant-design/icons";

// ~ dnd
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ~ regux
// #region
import { useAppDispatch, useAppSelector } from "../redux/hooks.tsx";
import { deleteLvls2, updateLvls2 } from "../redux/slices/page7/dataCntl.tsx";
// #endregion

interface Props {
  task: type_Lvl2;
}
export default function Page7Lvl2(props: Props) {
  // ___ const
  // #region
  const { task } = props;

  // #endregion
  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();
  // #endregion

  // ___ state
  // #region
  // ~ Драг слоя на root
  const isDragLvl2 = useAppSelector((state) => state.page7_dataCntl.isDragLvl2);

  // ___ form states __comp
  // #region
  // ___title
  // #region
  const [titleState, setTitleState] = useState<string>(task.content);
  useEffect(() => {
    setTitleState(task.content);
  }, [task.content]);
  // #endregion

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
      type: "Lvl2",
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
      <Flex ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Input
          placeholder="Введите название задачи"
          value={titleState}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(updateLvls2({ id: task.id, content: titleState }));
              toggleEditMode();
            }
          }}
          onBlur={() => {
            dispatch(updateLvls2({ id: task.id, content: titleState }));
            toggleEditMode();
          }}
          onChange={(e) => {
            setTitleState(e.target.value);
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
      className="test7-container-wrapper-addChaterContainer-lvl3"
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
            dispatch(deleteLvls2({ id: task.id }));
          }}
        >
          <DeleteOutlined style={{ padding: 0, margin: 0 }} />
        </button>
      )}
    </Flex>
  );
}
