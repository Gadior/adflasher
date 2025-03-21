// #region
// #region __IMPORT
// ~
// ~ compos
import WebMenu from "./__components/WebMenu/WebMenu";
import ModileMenu from "./__components/MobileMenu/ModileMenu";
// ~ styles
import * as css from "./styles/styles.module.scss";
// #endregion __IMPORT

// #region __COMPONENT__
export default function Header() {
  return (
    <header className={css.wrapper}>
      <WebMenu />
      <ModileMenu />
    </header>
  );
}
// #endregion __COMPONENT__
// #endregion
