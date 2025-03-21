// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { useState } from "react";
import { Rate, Divider } from "antd";
import { X } from "lucide-react";

// ~ comps
import { AuthPromo } from "./src/Feature/Auth";
import { Header } from "./src/Widjet";
// ~ assets
import __bannerImage from "./src/Shared/assets/__bannerImage1.jpg";
// партнеры
import __part1 from "./src/Shared/assets/__part1.svg";
import __part2 from "./src/Shared/assets/__part2.svg";
import __part3 from "./src/Shared/assets/__part3.svg";
import __part4 from "./src/Shared/assets/__part4.svg";
import __part5 from "./src/Shared/assets/__part5.svg";
// карточки поступлений
import __ar1 from "./src/Shared/assets/__ar1.jpg";
import __ar2 from "./src/Shared/assets/__ar2.jpg";
import __ar3 from "./src/Shared/assets/__ar3.jpg";
import __ar4 from "./src/Shared/assets/__ar4.jpg";

// ~ styles
import "./style.scss";

// #endregion ~ import

// ___ component Page
// #region ~ component
export default function Page(props: any) {
  // ___ state
  // #region
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

      <AuthPromo />
      <Header />

      {/* banner */}
      <div className="test10__section --greyBg">
        <div className="test10--banner --w1240">
          <img
            src={__bannerImage}
            alt="FIND CLOTHES THAT MATCHES YOUR STYLE"
          ></img>
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

      {/* partners */}
      <div className="test10__section --blackBg">
        <div className="tes10--partners --w1240">
          <img src={__part1} alt="versace" />
          <img src={__part2} alt="zara" />
          <img src={__part3} alt="gucci" />
          <img src={__part4} alt="prada" />
          <img src={__part5} alt="calvin klein" />
        </div>
      </div>

      {/* title new arrivles */}
      <div className="test10__section --mt60">
        <div className="test10--title">
          <h2>NEW ARRIVALS</h2>
        </div>
      </div>

      {/* cards arrivles  */}
      <div className="test10__section --mt60">
        <div className="test10--wrapper">
          <div className="test10--cardsAr">
            <div className="__card">
              <img src={__ar1} alt="" />
              <div className="__info">
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 120</div>
                  {/* <div className="__old">$ 160</div>
                <div className="__percent">30%</div> */}
                </div>
              </div>
            </div>
            <div className="__card">
              <img src={__ar2} alt="" />
              <div className="__info">
                <h4>SKINNY FIT JEANS</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 240</div>
                  <div className="__old">$ 260</div>
                  <div className="__percent">20%</div>
                </div>
              </div>
            </div>
            <div className="__card">
              <img src={__ar3} alt="" />
              <div className="__info">
                <h4>CHECKERED SHIRT</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 180</div>
                  {/* <div className="__old">$ 160</div>
                <div className="__percent">30%</div> */}
                </div>
              </div>
            </div>
            <div className="__card">
              <img src={__ar4} alt="" />
              <div className="__info">
                <h4>SLEEVE STRIPED T-SHIRT</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 130</div>
                  <div className="__old">$ 160</div>
                  <div className="__percent">30%</div>
                </div>
              </div>
            </div>
          </div>
          <button className="__viewAll --mt60">View all</button>
        </div>
      </div>

      {/* cards arrivles  */}
      <div className="test10__section">
        <div className="--w1240 --mt60">
          <Divider />
        </div>
      </div>

      {/* title new arrivles */}
      <div className="test10__section --mt60">
        <div className="test10--title">
          <h2>NEW ARRIVALS</h2>
        </div>
      </div>

      {/* cards top selling  */}
      <div className="test10__section --mt60">
        <div className="test10--wrapper">
          <div className="test10--cardsAr">
            <div className="__card">
              <img src={__ar1} alt="" />
              <div className="__info">
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 120</div>
                  {/* <div className="__old">$ 160</div>
                <div className="__percent">30%</div> */}
                </div>
              </div>
            </div>
            <div className="__card">
              <img src={__ar2} alt="" />
              <div className="__info">
                <h4>SKINNY FIT JEANS</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 240</div>
                  <div className="__old">$ 260</div>
                  <div className="__percent">20%</div>
                </div>
              </div>
            </div>
            <div className="__card">
              <img src={__ar3} alt="" />
              <div className="__info">
                <h4>CHECKERED SHIRT</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 180</div>
                  {/* <div className="__old">$ 160</div>
                <div className="__percent">30%</div> */}
                </div>
              </div>
            </div>
            <div className="__card">
              <img src={__ar4} alt="" />
              <div className="__info">
                <h4>SLEEVE STRIPED T-SHIRT</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 130</div>
                  <div className="__old">$ 160</div>
                  <div className="__percent">30%</div>
                </div>
              </div>
            </div>
          </div>
          <button className="__viewAll --mt60">View all</button>
          {/* <button className={classes.button}>View all</button> */}
        </div>
      </div>
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
