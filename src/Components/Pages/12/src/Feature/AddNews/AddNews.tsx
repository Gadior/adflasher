// #region ~ hlop
// ___ import
// #region ~ import
import { Input, Button } from "antd";
// ~ style
import * as css from "./style.module.scss";
// ~ redux
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  setTitleFormData,
  setDescFormData,
  setNewsList,
  setEditingID,
} from "../../Redux/__slice/data";
import { useState } from "react";
import { NewsCard__int } from "../../types/types";
const { TextArea } = Input;

// #endregion ~ import

// ___ component
// #region ~ component
export default function AddNews() {
  // _ __HOOKS__
  // #region
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.data.formData);
  const editingId = useAppSelector((state) => state.data.editingId);
  const newsList = useAppSelector((state) => state.data.newsList);
  const [showMsg, setShowMsg] = useState<boolean>(false);
  // #endregion

  // _ __sendData__
  // #region
  // --- Валидация
  const validateField = (): Boolean => {
    let newErrors: Record<string, boolean> = {
      title: !formData.title.toString().trim(),
      description: !formData.description.toString().trim(),
    };

    setErrors(newErrors);
    setTimeout(() => setErrors({}), 500);
    return !Object.values(newErrors).includes(true);
  };

  // --- Сохранить данные
  const sendData = (e: React.FormEvent) => {
    e.preventDefault();

    // ~ Валидируем надписи в полях
    if (!validateField()) {
      return;
    }

    // ~ если мы редактируем новость
    let newsListData = [];
    if (editingId) {
      newsListData = newsList.map((item: NewsCard__int) => {
        return item.id === editingId ? { ...item, ...formData } : item;
      });
    } else {
      // ~ если это новая новость
      const newCard = {
        id: Date.now().toString(),
        ...formData,
      };
      newsListData = [newCard, ...newsList];
      dispatch(setNewsList({ list: newsListData }));
    }

    // Чистка формы
    dispatch(setTitleFormData({ title: "" }));
    dispatch(setDescFormData({ description: "" }));

    setShowMsg(true);
    setTimeout(() => {
      setShowMsg(false);
    }, 2000);
  };
  // #endregion

  // _ __editData__
  // #region
  const editData = (e: React.FormEvent) => {
    e.preventDefault();

    // ~ Валидируем надписи в полях
    if (!validateField()) {
      return;
    }

    let newsListData = [];

    newsListData = newsList.map((item: NewsCard__int) => {
      return item.id === editingId ? { ...item, ...formData } : item;
    });
    dispatch(setNewsList({ list: newsListData }));
    dispatch(setTitleFormData({ title: "" }));
    dispatch(setDescFormData({ description: "" }));
    dispatch(setEditingID({ id: null }));
  };
  // #endregion

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.title}>
          <h3>Добавление новостей: </h3>
          {showMsg && <h3>добавлена</h3>}
        </div>
        <Input
          className={errors.title ? css.error : ""}
          value={formData.title}
          placeholder="Введите название заголовка"
          type={"text"}
          maxLength={100}
          showCount={true}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(setTitleFormData({ title: value }));
          }}
        />
        <TextArea
          className={errors.description ? css.error : ""}
          value={formData.description}
          placeholder="Введите описание новости"
          rows={7}
          onChange={(e) => {
            const value = e.target.value;
            dispatch(setDescFormData({ description: value }));
          }}
        />
        {editingId === null ? (
          <Button
            type="primary"
            onClick={(e) => {
              sendData(e);
            }}
          >
            Добавить
          </Button>
        ) : (
          <Button
            type="primary"
            danger
            onClick={(e) => {
              editData(e);
            }}
          >
            Редактировать
          </Button>
        )}
      </div>
    </div>
  );
}
// #endregion ~ component
// #endregion ~ hlop
