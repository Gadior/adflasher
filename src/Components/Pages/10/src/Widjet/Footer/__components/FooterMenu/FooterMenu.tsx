// #region
// #region __IMPORT
// ~
// ~ styles
import * as css from "./styles.module.scss";
// ~ comps
import { SoshialIcons } from "../../../../Entities";
// ~ assets
import __logo from "../../../../Shared/assets/__logo.svg";

// #endregion __IMPORT

// #region __COMPONENT__
export default function FooterMenu() {
  return (
    <div className={css.wrapper}>
      <div className={css.info}>
        <img src={__logo} alt="SHOP.CO" loading="lazy" />
        <p>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <SoshialIcons />
      </div>
      <div className={css.menuAll}>
        <div className={css.menuBlock}>
          <h5>Company</h5>
          <button>About</button>
          <button>Features</button>
          <button>Works</button>
          <button>Career</button>
        </div>
        <div className={css.menuBlock}>
          <h5>Help</h5>
          <button>Customer Support</button>
          <button>Delivery Details</button>
          <button>Terms & Conditions</button>
          <button>Privacy Policy</button>
        </div>
        <div className={css.menuBlock}>
          <h5>FAQ</h5>
          <button>Account</button>
          <button>Manage Deliveries</button>
          <button>Orders</button>
          <button>Payments</button>
        </div>
        <div className={css.menuBlock}>
          <h5>Resources</h5>
          <button>Free eBooks</button>
          <button>Development Tutorial</button>
          <button>How to - Blog</button>
          <button>Youtube Playlist</button>
        </div>
      </div>
    </div>
  );
}
// #endregion __COMPONENT__
// #endregion
