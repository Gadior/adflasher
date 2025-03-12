// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn";

import React, { useState } from "react";
import {
  CircleUserRound,
  Search,
  ShoppingCart,
  X,
  Menu,
  CircleX,
} from "lucide-react";

// ~ data
import { menuItems } from "./data";
// ~ assets
import __logo from "../../Shared/page10/images/__logo.svg";
import __bannerImage from "../../Shared/page10/images/__bannerImage1.jpg";
// ~ styles
import "./style.scss";

import DropdownMenu from "../../Shared/page10/dropdownMenu";
// #endregion ~ import

// ___ component Page
// #region ~ component
export default function Page(props: any) {
  // ___ state
  // #region
  // ~ показывать полоску "подписаться?"
  const [isSing, setIsSing] = useState<boolean>(true);
  // ~ Включение полоски "Поиска"
  const [isSearch, setIsSearch] = useState<boolean>(false);
  // ~ мобильное меню
  const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false);
  // #endregion

  // ___ return
  // #region ~ return
  return (
    <div className="test10__wrapper --whiteBg">
      <TasksBackBtn />

      {/* mobile menu */}
      {isMobileMenu && (
        <div className="test10--mobileMenu">
          <button
            onClick={() => {
              setIsMobileMenu(false);
            }}
          >
            <X className="test10--sing__close" />
          </button>
        </div>
      )}

      {/* sing */}
      {isSing && (
        <div className="test10__section --blackBg">
          <div className={`test10--sing ${isSing ? "" : "close"} --w1240`}>
            <span>
              Sign up and get 20% off to your first order.{" "}
              <button className="test10--sign__link">Sign Up Now</button>
            </span>
            <button
              onClick={() => {
                setIsSing(false);
              }}
            >
              <X className="test10--sing__close" />
            </button>
          </div>
        </div>
      )}

      {/* test10__header */}
      <div className="test10__section --whiteBg">
        {/* web */}
        <header className="test10--header --w1240">
          {isSearch ? (
            <div className="header__search__mobile --width">
              <input placeholder="Search for products..." />
              <span className="icon">
                <Search />
              </span>
              <span
                className="iconDel"
                onClick={() => {
                  setIsSearch(false);
                }}
              >
                <CircleX />
              </span>
            </div>
          ) : (
            <>
              <div className="test10--header__left">
                <button
                  onClick={() => {
                    setIsMobileMenu(true);
                  }}
                >
                  <Menu />
                </button>
                <img src={__logo} alt="shop.co" />
              </div>

              <div className="test10--header__menu">
                <DropdownMenu title="Shop" items={menuItems.shop} />
                <DropdownMenu title="On Sale" items={menuItems.on_Sale} />
                <DropdownMenu
                  title="New Arivvles"
                  items={menuItems.new_Arivvles}
                />
                <DropdownMenu title="Brands" items={menuItems.brands} />
              </div>

              <div className="test10--header__search">
                <input placeholder="Product name..." />
                <span className="icon">
                  <Search />
                </span>
              </div>

              <div className="test10--header__right">
                <button
                  className="right--hidden"
                  onClick={() => {
                    setIsSearch(true);
                  }}
                >
                  <Search />
                </button>
                <button>
                  <ShoppingCart />
                </button>
                <button>
                  <CircleUserRound />
                </button>
              </div>
            </>
          )}
        </header>
      </div>

      {/* banner */}
      <div className="test10__section --greyBg">
        <div className="test10--banner --w1240">
          <img src={__bannerImage}></img>
          <div className="__leftSide">
            <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="__btnWrapper">
              <button className="__mainBtn --blackBg --whiteColor">
                Shop Now
              </button>
            </div>
            <div className="__cards">
              <div className="__card">
                <h3>200+</h3>
                <div>International Brands</div>
              </div>
              <div className="__card">
                <h3>2 000+</h3>
                <div>High-Quality Products</div>
              </div>
              <div className="__card">
                <h3>30 000+</h3>
                <div>Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logos */}
      <div className="test10__section --blackBg">sdfsdfs</div>
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
