// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { Divider } from "antd";

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
import { cardsTop } from "./src/Data/topSelling";
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

      <Divider />

      <TitleRow title={"TOP SELLING"} />
      <ProductsList cards={cardsTop} />

      <Divider />
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
