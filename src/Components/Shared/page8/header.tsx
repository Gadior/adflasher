import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// ~ interface
import { int_header } from "./interface.tsx";
// ~ assets
import __logo from "./images/__logo.jpg";

// ___ const
// #region
const menuItems: int_header[] = [
  { name: "About us", url: "#" },
  { name: "Services", url: "#" },
  { name: "Use Cases", url: "#" },
  { name: "Pricing", url: "#" },
  { name: "Blog", url: "#" },
];
// #endregion

function Header() {
  // ___ states
  // #region
  // ~ Открыть
  const [isOpen, setIsOpen] = useState(false);
  // #endregion
  return (
    <header className="test8__header">
      <div className="test8__header__left">
        <img src={__logo} alt="Positivus" height={56} width={"auto"} />
      </div>
      <div className="--hidden test8__header__right">
        {/* map menu */}
        {menuItems.map((item: int_header) => (
          <nav
            key={Date.now() - Math.floor(Math.random() * 1000)}
            className={
              item.name === "About us" ? "test8__menuItem--active" : ""
            }
          >
            {item.name}
          </nav>
        ))}
        <button className="test8__header__right--req">Request a quote</button>
      </div>
      <Menu
        size={16}
        className="--vissible"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* мобильный вид */}
      {isOpen && (
        <div className="test8__mobMenu">
          <X
            size={16}
            className="--vissible test8__mobMenu--closeIcon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div className="test8__header__right test8__mobMenu__rows">
            {menuItems.map((item: int_header) => (
              <nav>{item.name}</nav>
            ))}
            <button className="test8__header__right--req">
              Request a quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
