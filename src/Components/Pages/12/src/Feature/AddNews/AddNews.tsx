// #region ~ hlop
// ___ import
// #region ~ import
import { Input, Button } from "antd";
const { TextArea } = Input;
// ~ style
import * as css from "./style.module.scss";
// #endregion ~ import

// ___ component
// #region ~ component
export default function AddNews() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h3>Добавление новостей:</h3>
        <Input
          placeholder="Введите название заголовка"
          type={"text"}
          maxLength={100}
          showCount={true}
        />
        <TextArea placeholder="Введите описание новости" rows={7} />
        <Button type="primary">Добавить</Button>
      </div>
    </div>
  );
}
// #endregion ~ component
// #endregion ~ hlop
