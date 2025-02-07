import React, { useMemo, useState } from "react";
import { Flex, Typography, Button, Input } from "antd";
import Icon, {
  DeleteOutlined,
  PlusCircleOutlined,
  DragOutlined,
} from "@ant-design/icons";
import Page7TaskCard from "./page7TaskCard.tsx";

// ~ dnd
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// ~ interface
import { type_Column, type_Id, type_Tasks } from "../Pages/7/interface";

// ~ что получаем через пропсы?
interface Props {
  column: type_Column;
  deleteColumn: (id: type_Id) => void;
  updateColumn: (id: type_Id, title: string) => void;
  createTask: (columnId: type_Id) => void;
  tasks: type_Tasks[];
  deleteTask: (id: type_Id) => void;
  updateTask: (id: type_Id, content: string) => void;
}

export default function Page7ColumnContainer(props: Props) {
  // ___ const
  // #region
  // деструктуризация
  const {
    column,
    deleteColumn,
    updateColumn,
    createTask,
    tasks,
    deleteTask,
    updateTask,
  } = props;
  // #endregion

  // ___ state
  // #region
  const [editMode, setEditMode] = useState<boolean>(false);
  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);
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
      type: "Column",
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
      <Flex
        ref={setNodeRef}
        style={style}
        className="test7-container-wrapper-addChaterContainer-isdragged"
      >
        1
      </Flex>
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
                updateColumn(column.id, e.target.value);
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

          {/* кнопка удаления раздела */}
          <button
            className="test7-container-wrapper-addChaterContainer-title-delBtn"
            // type="text"
            onClick={() => {
              deleteColumn(column.id);
            }}
          >
            <DeleteOutlined style={{ padding: 0, margin: 0 }} />
          </button>
        </Flex>
      </Flex>

      {/* ~ container */}
      <SortableContext items={tasksIds}>
        {tasks.map((task: type_Tasks) => (
          <Page7TaskCard
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))}
      </SortableContext>

      {/* ~ footer */}
      <Button
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusCircleOutlined />
        ADD_TASK
      </Button>
    </div>
  );
}
