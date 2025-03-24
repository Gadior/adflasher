// #region
// #region __IMPORT
// ~
// ~ styles
import * as css from "./style.module.scss";
// #endregion __IMPORT

// #region __COMPONENT__
export default function SuspenseLoader() {
  return (
    <div className={css.wrapper}>
      <div className={css.text}>Загрузка...</div>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
