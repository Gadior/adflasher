// #region
// #region __IMPORT
// ~
import { Provider } from "react-redux";
import store from "../../Redux/store";
// ~ compos
import WebMenu from "./__components/WebMenu/WebMenu";
import ModileMenu from "./__components/MobileMenu/ModileMenu";
import BurgerClickView from "./__components/BurgerClickView/BurgerClickView";
// ~ styles
import * as css from "./styles/styles.module.scss";

// #endregion __IMPORT

// #region __COMPONENT__
export default function Header() {
  return (
    <header className={css.wrapper}>
      <Provider store={store}>
        <BurgerClickView />
        <WebMenu />
        <ModileMenu />
      </Provider>
    </header>
  );
}
// #endregion __COMPONENT__
// #endregion
