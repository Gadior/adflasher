// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { Rate, Divider } from "antd";

// ~ comps
import { AuthPromo } from "./src/Feature/Auth";
import { Header } from "./src/Widjet";
import { MainBanner } from "./src/Widjet";
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
  // ___ return
  // #region ~ return
  return (
    <div className="test10__wrapper --whiteBg">
      {/* speshial */}
      <TasksBackBtn />

      {/* blocks */}
      <AuthPromo />
      <Header />
      <MainBanner />

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
      {/* <div className="test10__section --mt60">
        <div className="test10--title">
          <h2>NEW ARRIVALS</h2>
        </div>
      </div> */}

      {/* cards arrivles  */}
      {/* <div className="test10__section --mt60">
        <div className="test10--wrapper">
          <div className="test10--cardsAr">
            <div className="__card">
              <img src={__ar1} alt="" />
              <div className="__info">
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 120</div>
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
      </div> */}

      {/* cards arrivles  */}
      {/* <div className="test10__section">
        <div className="--w1240 --mt60">
          <Divider />
        </div>
      </div> */}

      {/* title new arrivles */}
      {/* <div className="test10__section --mt60">
        <div className="test10--title">
          <h2>NEW ARRIVALS</h2>
        </div>
      </div> */}

      {/* cards top selling  */}
      {/* <div className="test10__section --mt60">
        <div className="test10--wrapper">
          <div className="test10--cardsAr">
            <div className="__card">
              <img src={__ar1} alt="" />
              <div className="__info">
                <h4>T-SHIRT WITH TAPE DETAILS</h4>
                <Rate />
                <div className="__price">
                  <div className="__current">$ 120</div>
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
      </div>*/}
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
