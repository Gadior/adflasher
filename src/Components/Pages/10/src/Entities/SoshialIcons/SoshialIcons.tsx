// #region
// #region __IMPORT
// ~
// ~ styles
import * as css from "./style.module.scss";
// ~ assets
import __facebook from "../../Shared/assets/__facebook.svg";
import __twitter from "../../Shared/assets/__twitter.svg";
import __instagramm from "../../Shared/assets/__instagramm.svg";

// #endregion __IMPORT

// #region __COMPONENT__
export default function SoshialIcons() {
  return (
    <div className={css.container}>
      <a href="#">
        <img
          src={__facebook}
          alt="FACEBOOK"
          loading="lazy"
          width={28}
          height={28}
        />
      </a>
      <a href="#">
        <img
          src={__twitter}
          alt="TWITTER"
          loading="lazy"
          width={28}
          height={28}
        />
      </a>
      <a href="#">
        <img
          src={__instagramm}
          alt="INSTAGRAMM"
          loading="lazy"
          width={28}
          height={28}
        />
      </a>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
