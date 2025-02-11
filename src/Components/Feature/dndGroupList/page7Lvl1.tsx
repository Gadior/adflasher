import React, { useState, useMemo } from "react";
import {
  type_Id,
  type_Root,
  type_Lvl1,
  type_Lvl2,
} from "../../Pages/7/interface.tsx";
import { Flex, Typography, Button, Input } from "antd";
// const { TextArea } = Input;
import Icon, { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import Page7Lvl2 from "./page7Lvl2.tsx";

// ~ dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ~ regux
// #region
import { useAppDispatch, useAppSelector } from "../redux/hooks.tsx";
import {} from "../redux/slices/page7/dataCntl.tsx";
// #endregion

interface Props {
  lvl1: type_Lvl1;
  deleteLvl1: (id: type_Id) => void;
  updateLvl1: (id: type_Id, content: string) => void;
  lvls2: type_Lvl2[];
  createLvl2: (columnId: type_Id, lvl1Id: type_Id) => void;
  deleteLvl2: (id: type_Id) => void;
  updateLvl2: (id: type_Id, content: string) => void;
}
export default function Page7Lvl1(props: Props) {
  // ___ const
  // #region
  const {
    lvl1,
    deleteLvl1,
    updateLvl1,
    lvls2,
    createLvl2,
    deleteLvl2,
    updateLvl2,
  } = props;
  // #endregion

  // ~ Драг слоя на lvl1
  const isDragLvl1 = useAppSelector((state) => state.page7_dataCntl.isDragLvl1);

  // ___ state
  // #region
  // ~ наведение мыши на карточку
  const [mouseOverFiled, setMouseOverFiled] = useState<boolean>(false);
  // ~ memo ids всех lvl1 вложеннойстей
  const lvls2Ids = useMemo(() => {
    return lvls2.map((task) => task.id);
  }, [lvls2]);
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
    id: lvl1.id,
    data: {
      type: "Lvl1",
      lvl1,
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
  // #endregion

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
          value={lvl1.content}
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
            updateLvl1(lvl1.id, e.target.value);
          }}
          maxLength={30}
          showCount={true}
        />
      </Flex>
    );
  }
  // #endregion

  return (
    <Flex vertical={true} gap={5}>
      <Flex
        vertical={true}
        ref={setNodeRef}
        style={style}
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
        className="test7-container-wrapper-addChaterContainer-task"
      >
        <Flex
          {...attributes}
          {...listeners}
          justify="space-between"
          align="center"
          style={{ width: "100%" }}
        >
          <Flex gap={20}>
            <DragOutlined />

            {lvl1.content}
          </Flex>

          {mouseOverFiled && (
            <button
              className="test7-container-wrapper-addChaterContainer-title-delBtn"
              onClick={() => {
                deleteLvl1(lvl1.id);
              }}
            >
              <DeleteOutlined style={{ padding: 0, margin: 0 }} />
            </button>
          )}
        </Flex>
      </Flex>
      {!isDragLvl1 && (
        <>
          {/* ~ container */}
          <SortableContext items={lvls2Ids}>
            {lvls2.map((level: type_Lvl2) => (
              <Page7Lvl2 key={level.id} task={level} />
            ))}
          </SortableContext>
          <Button
            danger
            onClick={() => {
              createLvl2(lvl1.columnId, lvl1.id);
            }}
          >
            ADD_INCLUDE3
          </Button>
        </>
      )}
    </Flex>
  );
}
