// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { Divider } from "antd";

// ~ comps
import { AuthPromo, CustomSlider } from "./src/Feature";
import {
  Header,
  ProductsList,
  MainBanner,
  PartnersRow,
  TitleRow,
  FashionGrid,
  ReviewSlider,
} from "./src/Widjet";

// ~ styles
import "./style.scss";

// #endregion ~ import

// #region ~ __DATA__
// _ __DATA__ -TEMP
import { cards } from "./src/Data/newArrivlesData";
import { cardsTop } from "./src/Data/topSelling";
import { fashionImages } from "./src/Data/fashion";
import { reviewCardsData } from "./src/Data/reviewCards";
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

      <FashionGrid fashionImages={fashionImages} />

      <CustomSlider slides={reviewCardsData} />
    </div>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
