// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";

import { Divider } from "antd";

// ~ comps
import { AuthPromo, LazyCustomSlider, Subscribe } from "./src/Feature";
import {
  Header,
  LazyProductsList,
  MainBanner,
  PartnersRow,
  TitleRow,
  FashionGrid,
  LazyFooter,
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
import { Suspense } from "react";
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

        <Suspense fallback={"...loading"}>
          <LazyProductsList cards={cards} />
        </Suspense>

        <Divider />

        <TitleRow title={"TOP SELLING"} />
        <LazyProductsList cards={cardsTop} />

        <FashionGrid fashionImages={fashionImages} />

        <TitleRow title={"OUR HAPPY CUSTOMERS"} />

        <Suspense fallback={"...loading"}>
          <LazyCustomSlider slides={reviewCardsData} />
        </Suspense>

        <Subscribe />

        <Suspense fallback={"...loading"}>
          <LazyFooter />
        </Suspense>
      </Provider>
    </div>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
