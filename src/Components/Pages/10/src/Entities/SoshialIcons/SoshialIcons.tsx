// #region
// #region __IMPORT
// ~
// ~ styles
import * as css from "./style.module.scss";
// ~ assets
import __facebook from "../../Shared/assets/__facebook.svg";
import __twitter from "../../Shared/assets/__twitter.svg";
import __instagramm from "../../Shared/assets/__instagramm.svg";
import { Link } from "react-router-dom";

// #endregion __IMPORT

// #region __COMPONENT__
export default function SoshialIcons() {
  return (
    <div className={css.container}>
      <Link to="#">
        <img src={__facebook} alt="FACEBOOK" />
      </Link>
      <Link to="#">
        <img src={__twitter} alt="TWITTER" />
      </Link>
      <Link to="#">
        <img src={__instagramm} alt="INSTAGRAMM" />
      </Link>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
