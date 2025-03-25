// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
// ~ redux
import { useAppSelector } from "../../../../Pages/10/src/Redux/hooks";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function StructurePanel() {
  return (
    <div className={css.panelWrapper}>
      <div className={css.leftMenu}></div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
