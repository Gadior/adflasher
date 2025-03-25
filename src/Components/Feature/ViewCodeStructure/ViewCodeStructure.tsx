// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import ViewStructureBtn from "./__components/ViewStructureBtn/ViewStructureBtn";
import CloseViewStructureBtn from "./__components/CloseViewStructureBtn/CloseViewStructureBtn";
import StructurePanel from "./__components/StructurePanel/StructurePanel";

// ~ redux
import { useAppSelector } from "../../Pages/10/src/Redux/hooks";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function ViewCodeStructure() {
  // _ __HOOKS__
  // #redion __HOOKS__
  const isView: boolean = useAppSelector((state) => state.dataCntl10.isView);
  // #endredion __HOOKS__

  return (
    <div className={css.wrapper}>
      {!isView && <ViewStructureBtn />}
      {isView && <StructurePanel />}
      {isView && <CloseViewStructureBtn />}
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
