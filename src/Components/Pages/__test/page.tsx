// #region ~ hlop
// ___ import
// #region ~ import
import { delay } from "./src/Shared/help/delay";
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
// ~ styles
import "./style.scss";
// ~ interface

// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  delay(() => 50 + 50, 1000).then((res) => console.log(res));

  // ___ state
  // #region ~ state
  // #endregion ~ state

  // ___ return
  // #region ~ return
  return (
    <div className="testPage__wrapper">
      <TasksBackBtn />
      asdasda
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
