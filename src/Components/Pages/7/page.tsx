// ___ import
// #region
import React, { act, useMemo } from "react";
import { createPortal } from "react-dom";
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
import { Flex, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

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
import { arrayMove, SortableContext } from "@dnd-kit/sortable";

// ~ style
import "./page.css";
// ~ interface
import {
  type_Lvl1,
  type_Root,
  type_Lvl2,
} from "../../Feature/redux/slices/page7/interface.tsx";
import Page7Root from "../../Feature/dndGroupList/page7Root.tsx";
import Page7Lvl1 from "../../Feature/dndGroupList/page7Lvl1.tsx";
import Page7Lvl2 from "../../Feature/dndGroupList/page7Lvl2.tsx";

// ~ regux
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

  // ~ sensors для dnd
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        // Растояние на котором начинает работать dnd. Иначе будут срабатывать клики
        distance: 10,
      },
    })
  );
  // #endregion

  // ___ DndContext
  // #region
  // ~ начала движения
  const onDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Root") {
      dispatch(setIsDragRoot({ fl: true }));
      dispatch(setActiveRoot({ rt: e.active.data.current.data }));
      return;
    }

    if (e.active.data.current?.type === "Lvl1") {
      dispatch(setIsDragLvl1({ fl: true }));
      dispatch(setActiveLvl1({ rt: e.active.data.current.data }));
      return;
    }

    if (e.active.data.current?.type === "Lvl2") {
      dispatch(setIsDragLvl2({ fl: true }));
      dispatch(setActiveLvl2({ rt: e.active.data.current.data }));
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

    // console.log("===================");
    // console.log("===================");
    // console.log("Active");
    // console.log(active);
    // console.log("Over");
    // console.log(over);

    // ~ Проверка / null -> если нету второй карточки, второй объект нуль
    if (!over) return;
    // ~ иначе забираем id двух объектов
    const activeId = active.id;
    const overId = over.id;

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;
    // console.log(``);
    // console.log(`activeColumnId - ${activeColumnId}`);
    // console.log(`overColumnId - ${overColumnId}`);
    // console.log(`activeType - ${activeType}`);
    // console.log(`overType - ${overType}`);

    // ___ ROOT
    // #region
    // - [*******]
    // - если переносим тип root карточек
    if (
      activeType === overType &&
      activeType === "Root" &&
      overType === "Root"
    ) {
      // - [*******]
      // -- Если id root карточек разный
      if (activeId !== overId) {
        console.log("12131231231231");
        dispatch(
          setRoots({
            rt: arrayMove(
              roots,
              roots.findIndex((item) => item.id === activeId),
              roots.findIndex((item) => item.id === overId)
            ),
          })
        );
      }
    }
    // #endregion

    // ___ LVL1
    // #region
    // - [*******]
    // - карточки внутри одной root карточки
    if (
      activeType === overType &&
      activeType === "Lvl1" &&
      overType === "Lvl1"
    ) {
      if (activeId !== overId) {
        dispatch(
          setLvls1({
            lvl: arrayMove(
              lvls1,
              lvls1.findIndex((item) => item.id === activeId),
              lvls1.findIndex((item) => item.id === overId)
            ),
          })
        );
      }
    }
    // - [*******]
    // - карточка переносится между root карточками
    if (
      activeType !== overType &&
      activeType === "Lvl1" &&
      overType === "Root"
    ) {
      let __data: type_Lvl1[] = [...lvls1];
      let __overRootId = over.data.current?.data.id;

      const activeIndex: number = __data.findIndex(
        (item) => item.id === activeId
      );

      if (activeIndex !== -1) {
        // ~ обновили данные колонок в lvl1
        __data[activeIndex] = {
          ...__data[activeIndex],
          columnId: __overRootId,
        };
        dispatch(setLvls1({ lvl: __data }));

        // ~ обновили данные колонок в lvl2
        let __data2: type_Lvl2[];
        __data2 = lvls2.map((lvl) => {
          if (lvl.lvl1Id === __data[activeIndex].id) {
            return { ...lvl, columnId: __data[activeIndex].columnId };
          }
          return lvl;
        });
        dispatch(setLvls2({ lvl: __data2 }));
      }
    }
    // #endregion

    // ___ LVL2
    // #region
    // - [*******]
    // - карточки внутри одной LVL1 карточки
    if (
      activeType === overType &&
      activeType === "Lvl2" &&
      overType === "Lvl2"
    ) {
      if (activeId !== overId) {
        console.log("SAME __ LVL1 __ !ID -- save(setLvl2)");
        dispatch(
          setLvls2({
            lvl: arrayMove(
              lvls2,
              lvls2.findIndex((item) => item.id === activeId),
              lvls2.findIndex((item) => item.id === overId)
            ),
          })
        );
      }
    }
    // - [*******]
    // - карточки lvl2 переносяться между карточками lvl1
    if (
      activeType !== overType &&
      activeType === "Lvl2" &&
      overType === "Lvl1"
    ) {
      console.log("im here");
      let __data: type_Lvl2[] = [...lvls2];
      let __overLvl2Id = over.data.current?.data.id;
      let __overLvl2ColId = over.data.current?.data.columnId;

      const activeIndex: number = __data.findIndex(
        (item) => item.id === activeId
      );

      if (activeIndex !== -1) {
        __data[activeIndex] = {
          ...__data[activeIndex],
          lvl1Id: __overLvl2Id,
          columnId: __overLvl2ColId,
        };
        dispatch(setLvls2({ lvl: __data }));
      }
    }
    // #endregion
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
      >
        <Flex vertical={true} justify="flex-start" align="flex-start" gap={20}>
          <SortableContext items={rootsIds}>
            {roots.map((col: type_Root) => (
              <Flex key={col.id} className="test7-container-wrapper">
                <Page7Root
                  // Root
                  key={col.id}
                  column={col}
                  lvl1={lvls1.filter((task) => task.columnId === col.id)}
                  lvls2={lvls2.filter(
                    (level) => level.columnId && level.lvl1Id
                  )}
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
                  lvl1={lvls1.filter((level) => level.columnId)}
                  lvls2={lvls2.filter(
                    (level) => level.columnId && level.lvl1Id
                  )}
                />
              )}
              {activeLvl1 && <Page7Lvl1 lvl1={activeLvl1} lvls2={lvls2} />}
              {activeLvl2 && <Page7Lvl2 lvl2={activeLvl2} />}
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
