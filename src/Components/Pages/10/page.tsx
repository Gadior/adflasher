// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { Divider } from "antd";

// ~ comps
import { AuthPromo, CustomSlider, Subscribe } from "./src/Feature";
import {
  Header,
  ProductsList,
  MainBanner,
  PartnersRow,
  TitleRow,
  FashionGrid,
} from "./src/Widjet";

// ~ styles
import "./style.scss";

// ~ redux
import { Provider } from "react-redux";
import store from "./src/Redux/store";

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
      <Provider store={store}>
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

        <TitleRow title={"OUR HAPPY CUSTOMERS"} />
        <CustomSlider slides={reviewCardsData} />

        <Subscribe />
      </Provider>
    </div>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
