// #region
// #region __IMPORT
// ~

// ~ compos
// ~ styles
import * as css from "./styles.module.scss";

// ~ assets
import __card1 from "./assets/__card1.svg";
import __card2 from "./assets/__card2.svg";
import __card3 from "./assets/__card3.svg";
import __card4 from "./assets/__card4.svg";
import __card5 from "./assets/__card5.svg";

// #endregion __IMPORT

// #region __COMPONENT__
export default function Rights() {
  return (
    <div className={css.wrapper}>
      <div className={css.rights}>Shop.co © 2000-2023, All Rights Reserved</div>
      <div className={css.cards}>
        <img src={__card1} alt="VISA" loading="lazy" width={66} height={49} />
        <img
          src={__card2}
          alt="MASTERCARD"
          loading="lazy"
          width={66}
          height={49}
        />
        <img src={__card3} alt="PAYPAL" loading="lazy" width={66} height={49} />
        <img
          src={__card4}
          alt="APPLE PAY"
          loading="lazy"
          width={66}
          height={49}
        />
        <img
          src={__card5}
          alt="GOOGLE PAY"
          loading="lazy"
          width={66}
          height={49}
        />
      </div>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
