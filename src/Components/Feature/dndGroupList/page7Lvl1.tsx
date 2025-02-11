import React, { useState, useMemo, useEffect } from "react";
import { type_Id, type_Lvl1, type_Lvl2 } from "../../Pages/7/interface.tsx";
import { Flex, Typography, Button, Input } from "antd";
// const { TextArea } = Input;
import { DeleteOutlined, DragOutlined } from "@ant-design/icons";
import Page7Lvl2 from "./page7Lvl2.tsx";

// ~ dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ~ regux
// #region
import { useAppDispatch, useAppSelector } from "../redux/hooks.tsx";
import {
  createLvl2,
  deleteLvls1,
  updateLvls1,
} from "../redux/slices/page7/dataCntl.tsx";
import DragAndDropAnimation from "../../Shared/dragAndDropAnimation.tsx";
// #endregion

interface Props {
  lvl1: type_Lvl1;
  lvls2: type_Lvl2[];
}
export default function Page7Lvl1(props: Props) {
  // ___ const
  // #region
  const { lvl1, lvls2 } = props;
  // #endregion

  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();
  // #endregion

  // ___ states  с названиями для формы
  // #region
  // ~ заголовок
  const [titleState, setTitleState] = useState<string>(lvl1.content);
  useEffect(() => {
    setTitleState(lvl1.content);
  }, [lvl1.content]);
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
  // ~ маркер наведенного состояния
  let overMarker = useAppSelector((state) => state.page7_dataCntl.checkOver);

  // ___ схлопнуть "все" __кнопка __root
  // #region
  // ~ схлапывание карточек
  const collapseAllState = useAppSelector(
    (state) => state.page7_dataCntl.collapseAllState
  );
  // ~ схлапывание группы данных
  const [isCollapse, setIsCollapse] = useState<boolean>(false);
  useEffect(() => {
    setIsCollapse((prev) => true);
  }, [collapseAllState]);
  // #endregion
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
      data: lvl1,
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
          value={titleState}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(updateLvls1({ id: lvl1.id, content: titleState }));
              toggleEditMode();
            }
          }}
          onBlur={() => {
            dispatch(updateLvls1({ id: lvl1.id, content: titleState }));
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
        className="test7-container-wrapper-addChaterContainer-task"
      >
        <Flex
          {...attributes}
          {...listeners}
          justify="space-between"
          align="center"
          style={{ width: "100%" }}
        >
          <Flex
            gap={20}
            // режим редактировать
            onClick={() => {
              toggleEditMode();
            }}
          >
            {overMarker?.id === lvl1.id && overMarker?.type !== null && (
              <>{overMarker?.type === "Lvl1" && <DragAndDropAnimation />}</>
            )}

            <DragOutlined />

            {lvl1.content}
          </Flex>
          <Flex gap={10}>
            {mouseOverFiled && (
              <button
                className="test7-container-wrapper-addChaterContainer-title-delBtn"
                onClick={() => {
                  dispatch(deleteLvls1({ id: lvl1.id }));
                }}
              >
                <DeleteOutlined style={{ padding: 0, margin: 0 }} />
              </button>
            )}
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
          </Flex>
        </Flex>
      </Flex>
      {!isCollapse && (
        <>
          {!isDragLvl1 && (
            <>
              {/* ~ container */}
              <SortableContext items={lvls2Ids}>
                {lvls2.map((level: type_Lvl2) => (
                  <Page7Lvl2 key={level.id} lvl2={level} />
                ))}
              </SortableContext>
              <Button
                danger
                onClick={() => {
                  dispatch(
                    createLvl2({ columnId: lvl1.columnId, lvl1Id: lvl1.id })
                  );
                }}
              >
                ADD_INCLUDE3
              </Button>
            </>
          )}
        </>
      )}
    </Flex>
  );
}
