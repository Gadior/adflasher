// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
// ~ style
import * as css from "./style.module.scss";

// ~ redux
import { useAppDispatch, useAppSelector } from "./src/Redux/hooks";
import { setNewsList } from "./src/Redux/__slice/data";

// ~ comps
import { NewsList } from "./src/Widjet";
import { AddNews } from "./src/Feature";
import { Title } from "./src/Shared";

// ! Data
import { __data } from "./src/Data/data";
import { useEffect } from "react";

// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // _ __HOOKS__
  // #region
  const dispatch = useAppDispatch();
  const newsList = useAppSelector((state) => state.data.newsList);
  // #endregion

  // _ __LOGIC__
  // #region
  // --- Загрузка из локалки
  useEffect(() => {
    const getNews = localStorage.getItem("my_News");
    // если есть, то
    if (getNews) {
      try {
        dispatch(setNewsList({ list: JSON.parse(getNews) }));
      } catch (error) {
        console.error("Ошибка...", error);
      }
    }
  }, []);

  // --- Обновление списка в локалке
  useEffect(() => {
    localStorage.setItem("my_News", JSON.stringify(newsList));
  }, [newsList]);

  // #endregion
  // ___ return
  // #region ~ return
  return (
    // <Provider store={store}>
    <div className={css.wrapper}>
      <TasksBackBtn />
      <AddNews />
      <Title title={"Новости:"} />
      <NewsList data={newsList} />
    </div>
    // </Provider>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
