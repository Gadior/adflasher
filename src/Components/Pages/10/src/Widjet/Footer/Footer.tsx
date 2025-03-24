// #region
// #region __IMPORT
// ~
// ~ styles
import * as css from "./styles.module.scss";
// ~ compos
import { Divider } from "antd";
import Rights from "./__components/Rights/Rights";
import FooterMenu from "./__components/FooterMenu/FooterMenu";

// #endregion __IMPORT

// #region __COMPONENT__
export default function Footer() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <FooterMenu />
        <Divider />
        <Rights />
      </div>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
