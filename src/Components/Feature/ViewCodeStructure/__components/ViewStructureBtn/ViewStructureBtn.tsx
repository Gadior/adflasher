// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
import { Glasses } from "lucide-react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Pages/10/src/Redux/hooks";
import { changeView } from "../../../../Pages/10/src/Redux/__slice/dataCntl";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function ViewStructureBtn() {
  // _ __HOOKS__
  // #redion __HOOKS__
  const dispatch = useAppDispatch();
  // #endredion __HOOKS__

  return (
    <div className={css.struc}>
      <div className={css.icon}>
        <div
          className={css.glass}
          onClick={() => {
            dispatch(changeView({ flag: true }));
          }}
        >
          <Glasses />
        </div>
        CLICK TO VIEW STRUCTURE
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
