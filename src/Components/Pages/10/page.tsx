// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { Rate, Divider } from "antd";

// ~ comps
import { AuthPromo } from "./src/Feature/Auth";
import {
  Header,
  ProductsList,
  MainBanner,
  PartnersRow,
  TitleRow,
} from "./src/Widjet";

// ~ styles
import "./style.scss";

// #endregion ~ import

// #region ~ __DATA__
// _ __DATA__ -TEMP
import { cards } from "./src/Data/newArrivlesData";
// #endregion ~ __DATA__

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
      <PartnersRow />
      <TitleRow title={"NEW ARRIVALS"} />
      <ProductsList cards={cards} />

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
