// #region ~ hlop
// ___ import
// #region ~ import
// ~
import { useEffect } from "react";
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
import ViewCodeStructure from "../../Feature/ViewCodeStructure/ViewCodeStructure";

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
// ~ redux
import { useAppSelector } from "../../Pages/10/src/Redux/hooks";

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
  // Переопределим данные в карточке, что бы управлять и наличием заголовка, если данных не будет
  let __reviewCardsData = reviewCardsData;

  // _ __Meta__
  useEffect(() => {
    // title
    document.title = "SHOP.CO - FIND CLOTHES THAT MATCHES YOUR STYLE!";

    const metaTag = document.getElementById("meta");

    if (metaTag) {
      metaTag.setAttribute(
        "content",
        "Find clothes that match your unique style! Explore our trendy collection to discover the perfect outfits for any occasion. Shop now for fashion that fits YOU."
      );
    }
  }, []);

  // ___ return
  // #region ~ return
  return (
    <div className="test10__wrapper --whiteBg">
      <Provider store={store}>
        {/* speshial */}
        <TasksBackBtn />
        <ViewCodeStructure />

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

        {__reviewCardsData.length !== 0 && (
          <TitleRow title={"OUR HAPPY CUSTOMERS"} />
        )}
        <Suspense fallback={"...loading"}>
          <LazyCustomSlider slides={__reviewCardsData} />
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
