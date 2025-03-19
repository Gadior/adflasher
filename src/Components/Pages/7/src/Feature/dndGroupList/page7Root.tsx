import React, { useEffect, useMemo, useState } from "react";
import { Flex, Button, Input } from "antd";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  DragOutlined,
} from "@ant-design/icons";
import PageLvl1 from "./page7Lvl1";

// ~ dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ~ interface
import { type_Root, type_Lvl1, type_Lvl2 } from "../../../interface";

// ~ regux
// #region
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../Feature/redux/hooks";
import {
  deleteRoot,
  updateRoot,
  createLvl1,
} from "../../../../../Feature/redux/slices/page7/dataCntl";
import DragAndDropAnimation from "../../Shared/ui/dragAndDropAnimation/dragAndDropAnimation";
// #endregion

// ~ что получаем через пропсы?
interface Props {
  column: type_Root;
  lvl1: type_Lvl1[];
  lvls2: type_Lvl2[];
}

export default function Page7Root(props: Props) {
  // ___ const
  // #region
  // деструктуризация
  const { column, lvl1, lvls2 } = props;
  // #endregion

  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();

  // ~ маркер наведенного состояния
  let overMarker = useAppSelector((state) => state.page7_dataCntl.checkOver);

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
      data: column,
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
        // wrap={true}
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
          {overMarker &&
            overMarker.id === column.id &&
            overMarker.type !== null && (
              <>
                {overMarker.type === "Root" &&
                  overMarker.activeType !== "Root" &&
                  overMarker.activeType !== "Lvl2" && <DragAndDropAnimation />}
              </>
            )}
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch(updateRoot({ id: column.id, title: titleState }));
                  setEditMode(false);
                }
              }}
            />
          )}
        </Flex>

        {/* Правая часть раздела */}
        <Flex
          gap={10}
          // wrap={true}
          className="test7-container-wrapper-addChaterContainer-right"
        >
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
                    lvls2={lvls2.filter((lev) => {
                      return (
                        lev.columnId === level.columnId &&
                        lev.lvl1Id === level.id
                      );
                    })}
                  />
                ))}
              </SortableContext>
              {/* ~ footer */}
              <Button
                onClick={() => {
                  dispatch(createLvl1({ id: column.id }));
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
