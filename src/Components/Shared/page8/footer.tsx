import React from "react";
import { int_header, menuItems } from "./interface";
// ~ assets
import __logo_w from "./images/__logo__white.png";
import __ss1 from "./images/__ss1.png";
import __ss2 from "./images/__ss2.png";
import __ss3 from "./images/__ss3.png";

export default function Footer() {
  return (
    <div className="tes8__footer__wrapper">
      {/* 1 */}
      <div className="footer__header">
        <div className="footer__header__logo">
          <img src={__logo_w} alt="Positivus" height={29} width={"auto"} />
        </div>
        <div className="test8__header__right footer__header__menu">
          {menuItems.map((item: int_header) => (
            <a
              href={`#${item.ancor}`}
              key={Date.now() - Math.floor(Math.random() * 1000)}
              className={
                item.name === "About us" ? "test8__menuItem--active" : ""
              }
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="footer__header__ss">
          <img src={__ss1} alt="linkIN" width={30} height={"auto"} />
          <img src={__ss2} alt="faso" width={30} height={"auto"} />
          <img src={__ss3} alt="twit" width={30} height={"auto"} />
        </div>
      </div>

      {/* 2 */}
      <div className="footer__contact  __whiteColor">
        <div className="footer__contact__left">
          <h3>Contact us:</h3>
          <p>Email: info@positivus.com</p>
          <p>
            Phone: <a href="tel:555-567-8901">555-567-8901</a>
          </p>
          <p>Address: 1234 Main St Moonstone City, Stardust State 12345</p>
        </div>
        <div className="footer__contact__right">
          <input type="text" placeholder="Email" />
          <button>Subscribe to news</button>
        </div>
      </div>
    </div>
  );
}
