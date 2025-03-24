// #region
// #region ~ __IMPORT__
// ~
import { useState } from "react";
// ~ style
import * as css from "./style.module.scss";
// ~ comps

// #region ~ __COMPONENT__
export default function Subscribe() {
  return (
    <div className={css.wrapper}>
      <div className={css.whiteBG}></div>
      <div className={css.greyBG}></div>
      <div className={css.subscribe}>
        <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        <div className={css.form}>
          <input placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
