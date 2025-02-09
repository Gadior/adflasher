import React, { useEffect, useMemo, useState } from "react";
import { Flex, Typography, Button, Input } from "antd";
import Icon, {
  DeleteOutlined,
  PlusCircleOutlined,
  DragOutlined,
} from "@ant-design/icons";
import PageLvl2 from "./page7Lvl2.tsx";

// ~ dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ~ interface
import {
  type_Root,
  type_Id,
  type_Lvl1,
  type_Lvl2,
} from "../../Pages/7/interface.tsx";

// ~ что получаем через пропсы?
interface Props {
  collapseAllState: boolean;
  isDragRoot: boolean;
  isDragLvl1: boolean;
  column: type_Root;
  deleteRoot: (id: type_Id) => void;
  updateRoot: (id: type_Id, title: string) => void;
  createLvl1: (columnId: type_Id) => void;
  lvl1: type_Lvl1[];
  deleteLvl1: (id: type_Id) => void;
  updateLvl1: (id: type_Id, content: string) => void;
  lvl2: type_Lvl2[];
}

export default function Page7Root(props: Props) {
  // ___ const
  // #region
  // деструктуризация
  const {
    collapseAllState,
    isDragRoot,
    isDragLvl1,
    column,
    deleteRoot,
    updateRoot,
    createLvl1,
    lvl1,
    deleteLvl1,
    updateLvl1,
    lvl2,
  } = props;
  // #endregion

  // ___ state
  // #region
  // ~ edit mode для редактирования полей
  const [editMode, setEditMode] = useState<boolean>(false);
  // ~ memo ids всех lvl1 вложеннойстей
  const tasksIds = useMemo(() => {
    return lvl1.map((task) => task.id);
  }, [lvl1]);
  // ~ схлапывание группы данных
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  // #endregion

  // ___ схлопнуть "все" __кнопка __root
  // #region
  useEffect(() => {
    setIsCollapse((prev) => true);
  }, [collapseAllState]);
  // #endregion

  // ___ dnd sortable
  // #region
  /* Получаем значение из props.column (деструктурированны) в data.
  А потом передаем id в column.id
  */
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Root",
      column,
    },
    disabled: editMode,
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="test7-container-wrapper-addChaterContainer-isdragged"
      ></div>
    );
  }
  // #endregion

  return (
    <div
      // Область, которая будет drageble
      ref={setNodeRef}
      style={style}
      // иные настройки
      className="test7-container-wrapper-addChaterContainer"
    >
      {/* ~ title */}
      <Flex
        // иные настройки
        className="test7-container-wrapper-addChaterContainer-title"
        justify="space-between"
        align="center"
      >
        {/* Левая часть раздела */}
        <Flex
          justify="flex-start"
          gap={5}
          align="center"
          onClick={() => {
            console.log("111");
            setEditMode(true);
          }}
        >
          {/* Иконка для перетаскивания */}
          <div
            // маркер dragged
            {...attributes}
            {...listeners}
            className="test7-container-wrapper-addChaterContainer-title-count"
          >
            <DragOutlined />
          </div>

          {/* Здесь функционал редактирования имени раздела */}
          {!editMode && <div> {column.title} </div>}
          {editMode && (
            <Input
              autoFocus
              placeholder={column.title}
              value={column.title}
              onChange={(e) => {
                updateRoot(column.id, e.target.value);
              }}
              onBlur={() => {
                setEditMode(false);
              }}
            />
          )}
        </Flex>

        {/* Правая часть раздела */}
        <Flex justify="end" gap={10} align="center">
          {/* свойства раздела */}
          <div>данные: 1</div>
          <div>данные: 2</div>
          <div>данные: 3</div>

          {isCollapse ? (
            <Button
              type="link"
              onClick={() => {
                setIsCollapse(!isCollapse);
              }}
            >
              Раскрыть
            </Button>
          ) : (
            <Button
              type="link"
              onClick={() => {
                setIsCollapse(!isCollapse);
              }}
            >
              Схлопнуть
            </Button>
          )}

          {/* кнопка удаления раздела */}
          <button
            className="test7-container-wrapper-addChaterContainer-title-delBtn"
            // type="text"
            onClick={() => {
              deleteRoot(column.id);
            }}
          >
            <DeleteOutlined style={{ padding: 0, margin: 0 }} />
          </button>
        </Flex>
      </Flex>

      {/* схлоп и рассхлоп при клике на кнопку / процесс перетягивания */}
      {!isCollapse && (
        <>
          {!isDragRoot && (
            <>
              {/* ~ container */}
              <SortableContext items={tasksIds}>
                {lvl1.map((task: type_Lvl1) => (
                  <PageLvl2
                    isDragLvl1={isDragLvl1}
                    key={task.id}
                    task={task}
                    deleteLvl1={deleteLvl1}
                    updateLvl1={updateLvl1}
                  />
                ))}
              </SortableContext>
              {/* ~ footer */}
              <Button
                onClick={() => {
                  createLvl1(column.id);
                }}
              >
                <PlusCircleOutlined />
                ADD_INCLUDE2
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
}
