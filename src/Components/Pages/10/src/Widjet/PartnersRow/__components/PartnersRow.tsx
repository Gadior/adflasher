// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ assets
// партнеры
import __part1 from "../../../Shared/assets/__part1.svg";
import __part2 from "../../../Shared/assets/__part2.svg";
import __part3 from "../../../Shared/assets/__part3.svg";
import __part4 from "../../../Shared/assets/__part4.svg";
import __part5 from "../../../Shared/assets/__part5.svg";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function PartnersRow() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <img
          src={__part1}
          alt="versace"
          loading="lazy"
          height={33}
          width={"100%"}
        />
        <img
          src={__part2}
          alt="zara"
          loading="lazy"
          height={33}
          width={"100%"}
        />
        <img
          src={__part3}
          alt="gucci"
          loading="lazy"
          height={33}
          width={"100%"}
        />
        <img
          src={__part4}
          alt="prada"
          loading="lazy"
          height={33}
          width={"100%"}
        />
        <img
          src={__part5}
          alt="calvin klein"
          loading="lazy"
          height={33}
          width={"100%"}
        />
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
