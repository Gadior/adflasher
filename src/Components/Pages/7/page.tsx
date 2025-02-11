// TODO: решить проблему с псеводпроекцией. может имеет смысл отключить
// TODO: или как вариант - сразу схлапывать все группы при драге, что бы был фиксированный размер

import React, { useState, useMemo, act } from "react";
import { createPortal } from "react-dom";
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
import { Flex, Typography, Button } from "antd";
import { ConsoleSqlOutlined, PlusCircleOutlined } from "@ant-design/icons";

// ~ dnd
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  useSensors,
  useSensor,
  PointerSensor,
  DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";

// ~ style
import "./page.css";
// ~ interface
import { type_Root, type_Id, type_Lvl1, type_Lvl2 } from "./interface.tsx";
import Page7Root from "../../Feature/dndGroupList/page7Root.tsx";
import Page7Lvl1 from "../../Feature/dndGroupList/page7Lvl1.tsx";
import Page7Lvl2 from "../../Feature/dndGroupList/page7Lvl2.tsx";

// ~ regux
// #region
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks.tsx";
import {
  setRoots,
  setActiveRoot,
  createRoot,
  setLvls1,
  setActiveLvl1,
  setLvls2,
  setActiveLvl2,
  setIsDragRoot,
  setIsDragLvl1,
  setIsDragLvl2,
  setCollapseAllState,
} from "../../Feature/redux/slices/page7/dataCntl.tsx";
// #endregion

const { Text, Title } = Typography;

// ~ генерация случайного id
const generateID = (): number => {
  /* Генерируем id по отметке текущего времени */
  return Date.now() - Math.floor(Math.random() * 1000);
};

function Page() {
  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();
  // #endregion

  // ___ state
  // #region
  // ~ root
  const roots = useAppSelector((state) => state.page7_dataCntl.roots);
  //  ~ id root
  const rootsIds = useMemo(
    () => roots.map((col: type_Root) => col.id),
    [roots]
  );
  // ~ lvls 1
  const lvls1 = useAppSelector((state) => state.page7_dataCntl.lvls1);
  // ~ lvls 2
  const lvls2 = useAppSelector((state) => state.page7_dataCntl.lvls2);

  // ~ схлапывание всех карточек разом
  const collapseAllState = useAppSelector(
    (state) => state.page7_dataCntl.collapseAllState
  );

  // ~ активная колонка (подверженная darg)
  const activeRoot = useAppSelector((state) => state.page7_dataCntl.activeRoot);
  const activeLvl1 = useAppSelector((state) => state.page7_dataCntl.activeLvl1);
  const activeLvl2 = useAppSelector((state) => state.page7_dataCntl.activeLvl2);
  // !
  // ~ активная (подверженная darg)

  // ~ sensors для dnd
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // Растояние на котором начинает работать dnd. Иначе будут срабатывать клики
        distance: 30,
      },
    })
  );
  // #endregion

  // ___ Level 1
  // #region
  // ___ create
  // #region
  const createLvl1 = (columnId: type_Id) => {
    const newLvl1: type_Lvl1 = {
      id: generateID(),
      columnId,
      content: `include 2_ ${lvls1.length + 1}`,
    };

    // ~ сохранение state
    let __data = [...lvls1, newLvl1];
    dispatch(setLvls1({ lvl: __data }));
  };
  // #endregion

  // ___ delete
  // #region
  const deleteLvl1 = (id: type_Id) => {
    const newlvl = lvls1.filter((level: type_Lvl1) => level.id !== id);
    dispatch(setLvls1({ lvl: newlvl }));
  };
  // #endregion

  // ___ update
  // #region
  const updateLvl1 = (id: type_Id, content: string) => {
    const newLvl = lvls1.map((level: type_Lvl1) => {
      if (level.id !== id) return level;
      return { ...level, content };
    });
    dispatch(setLvls1({ lvl: newLvl }));
  };
  // #endregion

  // #endregion

  // ___ level 2
  // #region
  // ___ create
  // #region
  const createLvl2 = (columnId: type_Id, lvl1Id: type_Id) => {
    const newLvl2: type_Lvl2 = {
      id: generateID(),
      columnId,
      lvl1Id,
      content: `include 3_ ${lvls2.length + 1}`,
    };

    dispatch(setLvls2({ lvl: [...lvls2, newLvl2] }));
  };
  // #endregion

  // ___ delete
  // #region
  const deleteLvl2 = (id: type_Id) => {
    const newlvl = lvls2.filter((level: type_Lvl2) => level.id !== id);
    dispatch(setLvls2({ lvl: newlvl }));
  };
  // #endregion

  // ___ update
  // #region
  const updateLvl2 = (id: type_Id, content: string) => {
    const newLvl = lvls2.map((level: type_Lvl2) => {
      if (level.id !== id) return level;
      return { ...level, content };
    });
    dispatch(setLvls2({ lvl: newLvl }));
  };
  // #endregion

  // #endregion

  // ___ DndContext
  // #region
  // ~ начала движения
  const onDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Root") {
      dispatch(setIsDragRoot({ fl: true }));
      dispatch(setActiveRoot({ rt: e.active.data.current.column }));

      return;
    }

    if (e.active.data.current?.type === "Lvl1") {
      dispatch(setIsDragLvl1({ fl: true }));
      dispatch(setActiveLvl1({ rt: e.active.data.current.lvl1 }));
      return;
    }

    if (e.active.data.current?.type === "Lvl2") {
      dispatch(setIsDragLvl2({ fl: true }));
      dispatch(setActiveLvl2({ rt: e.active.data.current.lvl2 }));
      return;
    }
  };

  // ~ завершение движения
  const onDragEnd = (e: DragEndEvent) => {
    dispatch(setIsDragRoot({ fl: false }));
    dispatch(setIsDragLvl1({ fl: false }));
    dispatch(setActiveRoot({ rt: null }));

    dispatch(setActiveLvl1({ rt: null }));
    dispatch(setActiveLvl2({ rt: null }));
    // ~ у нас два значения. Активный и наведенные объекты
    const { active, over } = e;

    // ~ Проверка / null -> если нету второй карточки, второй объект нуль
    if (!over) return;
    // ~ иначе забираем id двух объектов
    const activeColumnId = active.id;
    const overColumnId = over.id;

    // ! не трогать
    // ~ если id совпадают, то
    if (activeColumnId === overColumnId) return;
    // ~ иначе
    dispatch(
      setRoots({
        rt: arrayMove(
          roots,
          roots.findIndex((col) => col.id === activeColumnId),
          roots.findIndex((col) => col.id === overColumnId)
        ),
      })
    );
  };

  // ~ для работы с соедними карточкам
  const onDragOver = (e: DragOverEvent) => {
    // ~ у нас два значения. Активный и наведенные объекты
    const { active, over } = e;

    // ~ Проверка / null -> если нету второй карточки, второй объект нуль
    if (!over) return;
    // ~ иначе забираем id двух объектов
    const activeId = active.id;
    const overId = over.id;

    // ~ если id совпадают, то
    if (activeId === overId) return;

    // ___ общая проверка. Не приходим ли мы в root?
    const isOverAColumn = over.data.current?.type === "Root";
    const isOverALvl1 = over.data.current?.type === "Lvl1";

    // ___ для lvl2
    const isActiveALvl2 = active.data.current?.type === "Lvl2";
    const isOverALvl2 = over.data.current?.type === "Lvl2";

    // + перемещение в между карточками lvl2
    if (isActiveALvl2 && isOverALvl2) {
      dispatch(
        setLvls2({
          lvl: arrayMove(
            lvls2.map((task) =>
              task.id === activeId
                ? {
                    ...task,
                    lvl1Id:
                      lvls2.find((t) => t.id === overId)?.lvl1Id ?? task.lvl1Id,
                    columnId:
                      lvls2.find((t) => t.id === overId)?.columnId ??
                      task.columnId,
                  }
                : task
            ),
            lvls2.findIndex((t) => t.id === activeId),
            lvls2.findIndex((t) => t.id === overId)
          ),
        })
      );
    }

    // ~ Если id наведенного и активного не равны, то
    if (activeId !== overId) {
      // ~ Если перемещение между карточками в рамкх root карточки
      let activeType = active.data.current?.type === "Lvl2";
      let overType = over.data.current?.type === "Lvl1";
      if (activeType && overType && isOverAColumn) {
        const currentLvlId = over.data.current?.lvl1.id;
        const currentColId = over.data.current?.lvl1.columnId;

        dispatch(
          setLvls2({
            lvl: arrayMove(
              lvls2.map((task) =>
                task.id === activeId
                  ? {
                      ...task,
                      lvl1Id: currentLvlId,
                      columnId: currentColId,
                    }
                  : task
              ),
              lvls2.findIndex((t) => t.id === activeId),
              lvls2.findIndex((t) => t.lvl1Id === overId)
            ),
          })
        );

        // setLvls2((level) => {
        //   const columnIndex = level.findIndex((t) => t.id === activeId);
        //   const overIndex = level.findIndex((t) => t.lvl1Id === overId);

        //   level[columnIndex].lvl1Id = currentLvlId;
        //   level[columnIndex].columnId = currentColId;

        //   return arrayMove(level, columnIndex, overIndex);
        // });
      }

      // Если нужно перенести между колонками и тасками
      if (isOverALvl1 && !isOverAColumn && activeType) {
        dispatch(
          setLvls2({
            lvl: arrayMove(
              lvls2.map((task) =>
                task.id === activeId
                  ? {
                      ...task,
                      columnId:
                        over.data.current?.lvl1.columnId ?? task.columnId,
                      lvl1Id: over.data.current?.lvl1.id ?? task.lvl1Id,
                    }
                  : task
              ),
              lvls2.findIndex((t) => t.id === activeId),
              lvls2.findIndex((t) => t.lvl1Id === overId)
            ),
          })
        );

        // setLvls2((level) => {
        //   const currentRootId = over.data.current?.lvl1.columnId;
        //   const currentLvlId = over.data.current?.lvl1.id;
        //   const columnIndex = level.findIndex((t) => t.id === activeId);
        //   const overIndex = level.findIndex((t) => t.lvl1Id === overId);

        //   // Если таски в разных колонках
        //   level[columnIndex].columnId = currentRootId;
        //   level[columnIndex].lvl1Id = currentLvlId;

        //   return arrayMove(level, columnIndex, overIndex);
        // });
      }
    }

    // ___ для lvl1
    const isActiveATask = active.data.current?.type === "Lvl1";
    const isOverATask = over.data.current?.type === "Lvl1";

    // Если нет активного таска - выходим
    if (!isActiveATask) return;

    // Drop over another Task
    if (isActiveATask && isOverATask) {
      dispatch(
        setLvls1({
          lvl: arrayMove(
            lvls1.map((task) =>
              task.id === activeId
                ? {
                    ...task,
                    columnId:
                      lvls1.find((t) => t.id === overId)?.columnId ??
                      task.columnId,
                  }
                : task
            ),
            lvls1.findIndex((t) => t.id === activeId),
            lvls1.findIndex((t) => t.id === overId)
          ),
        })
      );
    }

    // Drop over another Column
    if (isActiveATask && isOverAColumn) {
      dispatch(
        setLvls1({
          lvl: arrayMove(
            lvls1.map((task) =>
              task.id === activeId ? { ...task, columnId: overId } : task
            ),
            lvls1.findIndex((t) => t.id === activeId),
            lvls1.findIndex((t) => t.id === activeId) // Перемещение на то же место
          ),
        })
      );
    }
  };
  // #endregion

  // #endregion
  return (
    <Flex
      vertical={true}
      className="test7-container"
      justify="start"
      wrap={true}
    >
      {/* Кнопка "схлопнуть все позиции" */}
      <Button
        style={{ marginBottom: 20, width: "250px" }}
        onClick={() => {
          dispatch(setCollapseAllState({ fl: !collapseAllState }));
        }}
      >
        Схлопнуть все
      </Button>

      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <Flex vertical={true} justify="flex-start" align="flex-start" gap={20}>
          <SortableContext items={rootsIds}>
            {roots.map((col: type_Root) => (
              <Flex key={col.id} className="test7-container-wrapper">
                <Page7Root
                  // Root
                  key={col.id}
                  column={col}
                  // lvl 1
                  lvl1={lvls1.filter((task) => task.columnId === col.id)}
                  createLvl1={createLvl1}
                  deleteLvl1={deleteLvl1}
                  updateLvl1={updateLvl1}
                  // lvl 2
                  lvls2={lvls2.filter(
                    (level) => level.columnId && level.lvl1Id
                  )}
                  createLvl2={createLvl2}
                  deleteLvl2={deleteLvl2}
                  updateLvl2={updateLvl2}
                />
              </Flex>
            ))}
          </SortableContext>

          {/* portal - псевдопроекция эллемента */}
          {createPortal(
            <DragOverlay>
              {activeRoot && (
                <Page7Root
                  column={activeRoot}
                  createLvl1={createLvl1}
                  lvl1={lvls1.filter((level) => level.columnId)}
                  deleteLvl1={deleteLvl1}
                  updateLvl1={updateLvl1}
                  lvls2={lvls2.filter(
                    (level) => level.columnId && level.lvl1Id
                  )}
                  createLvl2={createLvl2}
                  deleteLvl2={deleteLvl2}
                  updateLvl2={updateLvl2}
                />
              )}
              {activeLvl1 && (
                <Page7Lvl1
                  lvl1={activeLvl1}
                  deleteLvl1={deleteLvl1}
                  updateLvl1={updateLvl1}
                  lvls2={lvls2}
                  createLvl2={createLvl2}
                  deleteLvl2={deleteLvl2}
                  updateLvl2={updateLvl2}
                />
              )}
              {activeLvl2 && <Page7Lvl2 task={activeLvl2} />}
            </DragOverlay>,
            document.body
          )}

          {/* Кнопка "создать главу" */}
          <Button
            type="primary"
            className="test7-container-addChater-btn"
            onClick={() => dispatch(createRoot())}
          >
            <PlusCircleOutlined />
            ADD_LVL1
          </Button>
        </Flex>
      </DndContext>
      <TasksBackBtn />
    </Flex>
  );
}

export default Page;
