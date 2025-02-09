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
import { type_Root, type_Id, type_Lvl1 } from "./interface.tsx";
import Page7Root from "../../Feature/dndGroupList/page7Root.tsx";
import Page7Lvl2 from "../../Feature/dndGroupList/page7Lvl2.tsx";

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
  const [root, setRoot] = useState<type_Root[]>([]);
  //  ~ id колонок для отрисовки sprtableContext
  const columnsId = useMemo(() => root.map((col: type_Root) => col.id), [root]);
  const [lvl1, setLvl1] = useState<type_Lvl1[]>([]);

  // ~ активная колонка (подверженная darg)
  const [activeColumn, setActiveColumn] = useState<type_Root | null>(null);
  // ~ отключение вложенных полей на период драга у слоев
  const [collapseAllState, setCollapseAllState] = useState<boolean>(false);
  const [isDragRoot, setIsDragRoot] = useState(false);
  const [isDragLvl1, setIsDragLvl1] = useState(false);

  // ~ активная колонка (подверженная darg)
  const [activeTask, setActiveTask] = useState<type_Lvl1 | null>(null);

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

  // ___ createNewColumn
  // #region
  // ~ обработчик нажатия колонки
  const createNewColumn = () => {
    // ~ создаем колонку
    const columnToAdd: type_Root = {
      id: generateID(),
      title: `include 1_ ${root.length + 1}`,
    };
    // ~ сохраняем колонку в state
    setRoot([...root, columnToAdd]);
  };
  // #endregion

  // ___ deleteColumn
  // #region
  const deleteColumn = (id: type_Id) => {
    const filteredColumns = root.filter((filt: type_Root) => filt.id !== id);
    setRoot(filteredColumns);

    // чистим таски, у удаленной колонки
    const newTask = lvl1.filter((task) => task.columnId !== id);
    setLvl1(newTask);
  };
  // #endregion

  // ___ updateColumn
  // #region
  const updateColumn = (id: type_Id, title: string) => {
    const newColumns = root.map((col: type_Root) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
    setRoot(newColumns);
  };
  // #endregion

  // ___ createTask
  // #region
  const createTask = (columnId: type_Id) => {
    const newTask: type_Lvl1 = {
      id: generateID(),
      columnId,
      content: `include 11_ ${lvl1.length + 1}`,
    };

    setLvl1([...lvl1, newTask]);
  };
  // #endregion

  // ___ deleteTask
  // #region
  const deleteTask = (id: type_Id) => {
    const newTasks = lvl1.filter((task: type_Lvl1) => task.id !== id);
    setLvl1(newTasks);
  };
  // #endregion

  // ___ updateTask
  // #region
  const updateTask = (id: type_Id, content: string) => {
    const newTask = lvl1.map((task: type_Lvl1) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    setLvl1(newTask);
  };
  // #endregion

  // ___ DndContext
  // #region
  // ~ начала движения
  const onDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Column") {
      setIsDragRoot((prev) => true);
      setActiveColumn(e.active.data.current.column);
      return;
    }

    if (e.active.data.current?.type === "Task") {
      setIsDragLvl1((prev) => true);
      setActiveTask(e.active.data.current.task);
      return;
    }
  };

  // ~ завершение движения
  const onDragEnd = (e: DragEndEvent) => {
    setIsDragRoot((prev) => false);
    setActiveColumn(null);
    setActiveTask(null);
    // ~ у нас два значения. Активный и наведенные объекты
    const { active, over } = e;

    // ~ Проверка / null -> если нету второй карточки, второй объект нуль
    if (!over) return;
    // ~ иначе забираем id двух объектов
    const activeColumnId = active.id;
    const overColumnId = over.id;

    // ~ если id совпадают, то
    if (activeColumnId === overColumnId) return;
    // ~ иначе
    setRoot((columns: any) => {
      const activeColumnIndex = columns.findIndex(
        (col: any) => col.id === activeColumnId
      );
      const overColumnIndex = columns.findIndex(
        (col: any) => col.id === overColumnId
      );
      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  };

  // ~ лоя работы с соедними карточкам
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

    const isActiveATask = active.data.current?.type === "Task";
    const isOverATask = over.data.current?.type === "Task";

    // Если нет активного таска - выходим
    if (!isActiveATask) return;

    // Drop over another Task
    if (isActiveATask && isOverATask) {
      setLvl1((tasks) => {
        // Если таски в одной колонке
        const activeIndex = tasks.findIndex((t) => t.id === activeId);
        const overIndex = tasks.findIndex((t) => t.id === overId);

        // Если таски в разных колонках
        tasks[activeIndex].columnId = tasks[overIndex].columnId;

        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "Column";
    // Drop over another Column
    if (isActiveATask && isOverAColumn) {
      setLvl1((tasks) => {
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
          // setIsDragRoot(true);
          // setIsDragLvl1(true);
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
          <SortableContext items={columnsId}>
            {root.map((col: type_Root) => (
              <Flex key={col.id} className="test7-container-wrapper">
                <Page7Root
                  collapseAllState={collapseAllState}
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  tasks={lvl1.filter((task) => task.columnId === col.id)}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              </Flex>
            ))}
          </SortableContext>

          {/* portal - псевдопроекция эллемента */}
          {createPortal(
            <DragOverlay>
              {activeColumn && (
                <Page7Root
                  collapseAllState={collapseAllState}
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  column={activeColumn}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  tasks={lvl1.filter((task) => task.columnId)}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              )}
              {activeTask && (
                <Page7Lvl2
                  isDragLvl1={isDragLvl1}
                  task={activeTask}
                  deleteTask={deleteTask}
                  updateTask={updateColumn}
                />
              )}
            </DragOverlay>,
            document.body
          )}

          {/* Кнопка "создать главу" */}
          <Button
            type="primary"
            className="test7-container-addChater-btn"
            onClick={() => createNewColumn()}
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
