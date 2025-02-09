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
import { type_Column, type_Id, type_Tasks } from "./interface.tsx";
import Page7ColumnContainer from "../../Feature/page7ColumnContainer.tsx";
import Page7TaskCard from "../../Feature/page7TaskCard.tsx";

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
  const [columns, setColumns] = useState<type_Column[]>([]);
  //  ~ id колонок для отрисовки sprtableContext
  const columnsId = useMemo(
    () => columns.map((col: type_Column) => col.id),
    [columns]
  );
  const [tasks, setTasks] = useState<type_Tasks[]>([]);

  // ~ активная колонка (подверженная darg)
  const [activeColumn, setActiveColumn] = useState<type_Column | null>(null);
  // ~ отключение вложенных полей на период драга у слоев
  const [isDragRoot, setIsDragRoot] = useState(false);
  const [isDragLvl1, setIsDragLvl1] = useState(false);

  // ~ активная колонка (подверженная darg)
  const [activeTask, setActiveTask] = useState<type_Tasks | null>(null);

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
    const columnToAdd: type_Column = {
      id: generateID(),
      title: `include 1_ ${columns.length + 1}`,
    };
    // ~ сохраняем колонку в state
    setColumns([...columns, columnToAdd]);
  };
  // #endregion

  // ___ deleteColumn
  // #region
  const deleteColumn = (id: type_Id) => {
    const filteredColumns = columns.filter(
      (filt: type_Column) => filt.id !== id
    );
    setColumns(filteredColumns);

    // чистим таски, у удаленной колонки
    const newTask = tasks.filter((task) => task.columnId !== id);
    setTasks(newTask);
  };
  // #endregion

  // ___ updateColumn
  // #region
  const updateColumn = (id: type_Id, title: string) => {
    const newColumns = columns.map((col: type_Column) => {
      if (col.id !== id) return col;
      return { ...col, title };
    });
    setColumns(newColumns);
  };
  // #endregion

  // ___ createTask
  // #region
  const createTask = (columnId: type_Id) => {
    const newTask: type_Tasks = {
      id: generateID(),
      columnId,
      content: `include 11_ ${tasks.length + 1}`,
    };

    setTasks([...tasks, newTask]);
  };
  // #endregion

  // ___ deleteTask
  // #region
  const deleteTask = (id: type_Id) => {
    const newTasks = tasks.filter((task: type_Tasks) => task.id !== id);
    setTasks(newTasks);
  };
  // #endregion

  // ___ updateTask
  // #region
  const updateTask = (id: type_Id, content: string) => {
    const newTask = tasks.map((task: type_Tasks) => {
      if (task.id !== id) return task;
      return { ...task, content };
    });
    setTasks(newTask);
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
    setColumns((columns: any) => {
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
      setTasks((tasks) => {
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
      setTasks((tasks) => {
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
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <Flex vertical={true} justify="flex-start" align="flex-start" gap={20}>
          <SortableContext items={columnsId}>
            {columns.map((col: type_Column) => (
              <Flex key={col.id} className="test7-container-wrapper">
                <Page7ColumnContainer
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
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
                <Page7ColumnContainer
                  isDragRoot={isDragRoot}
                  isDragLvl1={isDragLvl1}
                  column={activeColumn}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  tasks={tasks.filter((task) => task.columnId)}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              )}
              {activeTask && (
                <Page7TaskCard
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
