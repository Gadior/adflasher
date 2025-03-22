// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// ~ comps
import { ProductCard } from "../../Entities";
// ~ interface
import { Card } from "./interface";
import "./c_slider.css";
// #endregion ~ __IMPORT__

interface Props {
  cards: Card[];
}

// #region ~ __COMPONENT__
export default function ProductsList(props: Props) {
  const { cards } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {/* if web */}
        <div className={css.cardsList}>
          {cards.map((item: Card) => (
            <ProductCard
              key={item.id}
              id={item.id}
              sourceImage={item.sourceImage}
              alt={item.alt}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              percent={item.percent}
            />
          ))}
        </div>

        {/* if mobile */}
        <div className={css.cardsListModile}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
              type: "bullets",
            }}
            modules={[Pagination]}
            className={css.swiper}
          >
            {cards.map((item: Card) => (
              <SwiperSlide className="swiperSlide" key={item.id}>
                <ProductCard
                  key={item.id}
                  id={item.id}
                  sourceImage={item.sourceImage}
                  alt={item.alt}
                  name={item.name}
                  price={item.price}
                  oldPrice={item.oldPrice}
                  percent={item.percent}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className={css.viewAll}>View all</button>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
