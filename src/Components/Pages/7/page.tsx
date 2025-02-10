// TODO: решить проблему с псеводпроекцией. может имеет смысл отключить
// TODO: или как вариант - сразу схлапывать все группы при драге, что бы был фиксированный размер

import React, { useState, useMemo, act } from "react";
import { createPortal } from "react-dom";
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
import { Flex, Typography, Button } from "antd";
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
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";

// ~ style
import "./page.css";
// ~ interface
import { type_Root, type_Id, type_Lvl1, type_Lvl2 } from "./interface.tsx";
import Page7Root from "../../Feature/dndGroupList/page7Root.tsx";
import Page7Lvl2 from "../../Feature/dndGroupList/page7Lvl2.tsx";
import Page7Lvl3 from "../../Feature/dndGroupList/page7Lvl3.tsx";

const { Text, Title } = Typography;

// ~ генерация случайного id
const generateID = (): number => {
  /* Генерируем id по отметке текущего времени */
  return Date.now() - Math.floor(Math.random() * 1000);
};

function Page() {
  // ___ state
  // #region
  // ~ data колонок
  const [roots, setRoots] = useState<type_Root[]>([]);
  //  ~ id колонок для отрисовки sprtableContext
  const rootsIds = useMemo(
    () => roots.map((col: type_Root) => col.id),
    [roots]
  );
  // ~ Данные уровня 1
  const [lvls1, setLvls1] = useState<type_Lvl1[]>([]);
  // ~ Данные уровня 2
  const [lvls2, setLvls2] = useState<type_Lvl2[]>([]);

  // ~ отключение вложенных полей на период драга у слоев
  const [collapseAllState, setCollapseAllState] = useState<boolean>(false);
  const [isDragRoot, setIsDragRoot] = useState(false);
  const [isDragLvl1, setIsDragLvl1] = useState(false);
  const [isDragLvl2, setIsDragLvl2] = useState(false);

  // ~ активная колонка (подверженная darg)
  const [activeRoot, setActiveRoot] = useState<type_Root | null>(null);
  // ~ активная (подверженная darg)
  const [activeLvl1, setActiveLvl1] = useState<type_Lvl1 | null>(null);
  const [activeLvl2, setActiveLvl2] = useState<type_Lvl2 | null>(null);

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

  // ___ Root
  // #region
  // ___ createNewRoot
  // #region
  // ~ обработчик главного уровня
  const createNewRoot = () => {
    // ~ создаем root
    const rootToAdd: type_Root = {
      id: generateID(),
      title: `include root_ ${roots.length + 1}`,
    };
    // ~ сохраняем в state
    setRoots([...roots, rootToAdd]);
  };
  // #endregion

  // ___ deleteRoot
  // #region
  const deleteRoot = (id: type_Id) => {
    const filteredRoot = roots.filter((filt: type_Root) => filt.id !== id);
    setRoots(filteredRoot);

    // чистим таски, у удаленной колонки
    const newLvl1 = lvls1.filter((task) => task.columnId !== id);
    setLvls1(newLvl1);
  };
  // #endregion

  // ___ updateRoot
  // #region
  const updateRoot = (id: type_Id, title: string) => {
    const newRoot = roots.map((root: type_Root) => {
      if (root.id !== id) return root;
      return { ...root, title };
    });
    setRoots(newRoot);
  };
  // #endregion
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

    setLvls1([...lvls1, newLvl1]);
  };
  // #endregion

  // ___ delete
  // #region
  const deleteLvl1 = (id: type_Id) => {
    const newlvl = lvls1.filter((level: type_Lvl1) => level.id !== id);
    setLvls1(newlvl);
  };
  // #endregion

  // ___ update
  // #region
  const updateLvl1 = (id: type_Id, content: string) => {
    const newLvl = lvls1.map((level: type_Lvl1) => {
      if (level.id !== id) return level;
      return { ...level, content };
    });
    setLvls1(newLvl);
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

    setLvls2([...lvls2, newLvl2]);
  };
  // #endregion

  // ___ delete
  // #region
  const deleteLvl2 = (id: type_Id) => {
    const newlvl = lvls2.filter((level: type_Lvl2) => level.id !== id);
    setLvls2(newlvl);
  };
  // #endregion

  // ___ update
  // #region
  const updateLvl2 = (id: type_Id, content: string) => {
    const newLvl = lvls2.map((level: type_Lvl2) => {
      if (level.id !== id) return level;
      return { ...level, content };
    });
    setLvls2(newLvl);
  };
  // #endregion

  // #endregion

  // ___ DndContext
  // #region
  // ~ начала движения
  const onDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Root") {
      // console.log(e.active.data.current);
      setIsDragRoot((prev) => true);
      setActiveRoot(e.active.data.current.column);
      return;
    }

    if (e.active.data.current?.type === "Lvl1") {
      setIsDragLvl1((prev) => true);
      setActiveLvl1(e.active.data.current.lvl1);
      return;
    }

    if (e.active.data.current?.type === "Lvl2") {
      // console.log(e.active.data.current);
      setIsDragLvl2((prev) => true);
      setActiveLvl2(e.active.data.current.task);
      return;
    }
  };

  // ~ завершение движения
  const onDragEnd = (e: DragEndEvent) => {
    setIsDragRoot((prev) => false);
    setIsDragLvl1((prev) => false);
    setActiveRoot(null);
    setActiveLvl1(null);
    setActiveLvl2(null);
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
    setRoots((columns: any) => {
      const activeColumnIndex = columns.findIndex(
        (col: any) => col.id === activeColumnId
      );
      const overColumnIndex = columns.findIndex(
        (col: any) => col.id === overColumnId
      );
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
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
      console.table("4");
      setLvls2((level) => {
        // Если таски в одной колонке
        const activeIndex = level.findIndex((t) => t.id === activeId);
        const overIndex = level.findIndex((t) => t.id === overId);
        // Если таски в разных колонках
        level[activeIndex].lvl1Id = level[overIndex].lvl1Id;
        level[activeIndex].columnId = level[overIndex].columnId;

        return arrayMove(level, activeIndex, overIndex);
      });
    }

    // ~ Если id наведенного и активного не равны, то
    if (activeId !== overId) {
      // ~ Если перемещение между карточками в рамкх root карточки
      let activeType = active.data.current?.type === "Lvl2";
      let overType = over.data.current?.type === "Lvl1";
      if (activeType && overType && isOverAColumn) {
        console.table("4");
        const currentLvlId = over.data.current?.lvl1.id;
        const currentColId = over.data.current?.lvl1.columnId;
        setLvls2((level) => {
          const columnIndex = level.findIndex((t) => t.id === activeId);
          const overIndex = level.findIndex((t) => t.lvl1Id === overId);

          level[columnIndex].lvl1Id = currentLvlId;
          level[columnIndex].columnId = currentColId;

          return arrayMove(level, columnIndex, overIndex);
        });
      }

      // Если нужно перенести между колонками и тасками
      if (isOverALvl1 && !isOverAColumn && activeType) {
        console.table("1");
        setLvls2((level) => {
          const currentRootId = over.data.current?.lvl1.columnId;
          const currentLvlId = over.data.current?.lvl1.id;
          const columnIndex = level.findIndex((t) => t.id === activeId);
          const overIndex = level.findIndex((t) => t.lvl1Id === overId);

          // Если таски в разных колонках
          level[columnIndex].columnId = currentRootId;
          level[columnIndex].lvl1Id = currentLvlId;

          // console.log(level);
          return arrayMove(level, columnIndex, overIndex);
        });
      }
    }

    // ___ для lvl1
    const isActiveATask = active.data.current?.type === "Lvl1";
    const isOverATask = over.data.current?.type === "Lvl1";

    // Если нет активного таска - выходим
    if (!isActiveATask) return;

    // Drop over another Task
    if (isActiveATask && isOverATask) {
      console.table("0");
      setLvls1((tasks) => {
        // Если таски в одной колонке
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        // Если таски в разных колонках
        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
      // setLvls2((tasks) => {
      //   console.log(tasks);
      //   // Если таски в одной колонке
      //   const activeIndex = tasks.findIndex((t) => t.id === activeId);
      //   const overIndex = tasks.findIndex((t) => t.id === overId);

      //   // Если таски в разных колонках
      //   tasks[activeIndex].lvl1Id = over.data.current?.lvl1.id;

      //   return arrayMove(tasks, activeIndex, overIndex);
      // });
    }

    // Drop over another Column
    if (isActiveATask && isOverAColumn) {
      // !!!!
      setLvls1((tasks) => {
        // Если таски в одной колонке
        const activeIndex = tasks.findIndex((t) => t.id === activeId);

        // Если таски в разных колонках
        tasks[activeIndex].columnId = overId;

        return arrayMove(tasks, activeIndex, activeIndex);
      });
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
          setCollapseAllState(!collapseAllState);
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
                  collapseAllState={collapseAllState}
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  isDragLvl2={isDragLvl2}
                  // Root
                  key={col.id}
                  column={col}
                  deleteRoot={deleteRoot}
                  updateRoot={updateRoot}
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
                  collapseAllState={collapseAllState}
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  isDragLvl2={isDragLvl2}
                  column={activeRoot}
                  deleteRoot={deleteRoot}
                  updateRoot={updateRoot}
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
                <Page7Lvl2
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  isDragLvl2={isDragLvl2}
                  lvl1={activeLvl1}
                  deleteLvl1={deleteLvl1}
                  updateLvl1={updateLvl1}
                  lvls2={lvls2}
                  createLvl2={createLvl2}
                  deleteLvl2={deleteLvl2}
                  updateLvl2={updateLvl2}
                />
              )}
              {activeLvl2 && (
                <Page7Lvl3
                  isDragLvl2={isDragLvl2}
                  column={activeLvl2}
                  task={activeLvl2}
                  deleteLvl2={deleteLvl2}
                  updateLvl2={updateLvl2}
                />
              )}
            </DragOverlay>,
            document.body
          )}

          {/* Кнопка "создать главу" */}
          <Button
            type="primary"
            className="test7-container-addChater-btn"
            onClick={() => createNewRoot()}
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
