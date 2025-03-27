// #region
// #region ~ __IMPORT__
import { Button } from "antd";
// ~ style
import * as css from "./style.module.scss";
// ~ types
import { NewsCard__int } from "../../types/types";
// ~ redux
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  setTitleFormData,
  setDescFormData,
  setEditingID,
  setNewsList,
} from "../../Redux/__slice/data";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function NewsCard(props: NewsCard__int) {
  // ~ Дестр-ция
  const { id, title, description } = props;

  // _ __HOOKS__
  // #region
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.data.formData);
  const editingId = useAppSelector((state) => state.data.editingId);
  const newsList = useAppSelector((state) => state.data.newsList);
  // #endregion

  // _ __EDIT BTN__
  // #region
  const editCard = () => {
    dispatch(setTitleFormData({ title: title }));
    dispatch(setDescFormData({ description: description }));
    dispatch(setEditingID({ id: id }));
  };
  // #endregion

  // _ __deleteData__
  // #region
  const deleteData = (e: React.FormEvent) => {
    e.preventDefault();

    if (window.confirm("Точно удалить?")) {
      let newsListData = [];
      newsListData = newsList.filter((item: NewsCard__int) => item.id != id);

      dispatch(setNewsList({ list: newsListData }));
    }
  };
  // #endregion

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={css.btnRow}>
          <Button
            className={css.btn}
            onClick={() => {
              editCard();
            }}
          >
            Редактировать
          </Button>
          <Button
            className={css.btn}
            danger={true}
            onClick={(e) => {
              deleteData(e);
            }}
          >
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
