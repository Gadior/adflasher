// #region
// #region ~ __IMPORT__
import { Button } from "antd";
// ~ style
import * as css from "./style.module.scss";
// ~ types
import { NewsCard__int } from "../../types/types";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function NewsCard(props: NewsCard__int) {
  // ~ Дестр-ция
  const { id, title, description } = props;

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={css.btnRow}>
          <Button className={css.btn}>Редактировать</Button>
          <Button className={css.btn} danger={true}>
            Удалить
          </Button>
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
