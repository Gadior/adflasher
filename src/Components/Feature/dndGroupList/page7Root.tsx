import React, { useEffect, useMemo, useState } from "react";
import { Flex, Typography, Button, Input } from "antd";
import Icon, {
  DeleteOutlined,
  PlusCircleOutlined,
  DragOutlined,
} from "@ant-design/icons";
import PageLvl1 from "./page7Lvl1.tsx";

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

// ~ regux
// #region
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks.tsx";
import {
  deleteRoot,
  updateRoot,
} from "../../Feature/redux/slices/page7/dataCntl.tsx";
// #endregion

// ~ что получаем через пропсы?
interface Props {
  column: type_Root;
  lvl1: type_Lvl1[];
  createLvl1: (columnId: type_Id) => void;
  deleteLvl1: (id: type_Id) => void;
  updateLvl1: (id: type_Id, content: string) => void;
  lvls2: type_Lvl2[];
  createLvl2: (columnId: type_Id, lvl1Id: type_Id) => void;
  deleteLvl2: (id: type_Id) => void;
  updateLvl2: (id: type_Id, content: string) => void;
}

export default function Page7Root(props: Props) {
  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();
  // #endregion

  // ___ const
  // #region
  // деструктуризация
  const {
    column,
    lvl1,
    createLvl1,
    deleteLvl1,
    updateLvl1,
    lvls2,
    createLvl2,
    deleteLvl2,
    updateLvl2,
  } = props;
  // #endregion

  // ___ state
  // #region
  // ~ Драг слоя на root
  const isDragRoot = useAppSelector((state) => state.page7_dataCntl.isDragRoot);
  const collapseAllState = useAppSelector(
    (state) => state.page7_dataCntl.collapseAllState
  );

  // ~ edit mode для редактирования полей
  const [editMode, setEditMode] = useState<boolean>(false);
  // ~ memo ids всех lvl1 вложеннойстей
  const tasksIds = useMemo(() => {
    return lvl1.map((task) => task.id);
  }, [lvl1]);
  // ~ схлапывание группы данных
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  // #endregion

  // ___ form states __comp
  // #region
  // ___title
  // #region
  const [titleState, setTitleState] = useState<string>(column.title);
  useEffect(() => {
    setTitleState(column.title);
  }, [column.title]);
  // #endregion

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
              placeholder="Введите название"
              value={titleState}
              onChange={(e) => {
                setTitleState((prev) => e.target.value);
              }}
              onBlur={() => {
                dispatch(updateRoot({ id: column.id, title: titleState }));
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
              dispatch(deleteRoot({ id: column.id }));
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
                {lvl1.map((level: type_Lvl1) => (
                  <PageLvl1
                    key={level.id}
                    lvl1={level}
                    deleteLvl1={deleteLvl1}
                    updateLvl1={updateLvl1}
                    lvls2={lvls2.filter((lev) => {
                      return (
                        lev.columnId === level.columnId &&
                        lev.lvl1Id === level.id
                      );
                    })}
                    createLvl2={createLvl2}
                    deleteLvl2={deleteLvl2}
                    updateLvl2={updateLvl2}
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
