// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function ReviewSlider() {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            el: ".swiper-pagination-1",
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="swiperSlide">1</SwiperSlide>
          <SwiperSlide className="swiperSlide">2</SwiperSlide>
          <SwiperSlide className="swiperSlide">3</SwiperSlide>
          <SwiperSlide className="swiperSlide">4</SwiperSlide>
          <SwiperSlide className="swiperSlide">5</SwiperSlide>
          <div className="swiper-pagination-1">1231231</div>
        </Swiper>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
