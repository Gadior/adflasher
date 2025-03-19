import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Data {
  id: number;
  description: string;
  name: string;
  job: string;
}

interface Props {
  data: Data[];
}

export default function Slider(props: Props) {
  // ___ Props
  // #region
  const { data } = props;
  // #endregion

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Отступ между слайдами
        slidesPerView={3} // Количество видимых слайдов
        centeredSlides={true} // Центрирование активного слайда
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }} // Стрелки управления
        breakpoints={{
          300: {
            slidesPerView: 1, // На экранах больше 640px видно 1.5 слайда
          },
          700: {
            slidesPerView: 2, // На экранах больше 768px видно 2.5 слайда
          },
          1000: {
            slidesPerView: 3, // На экранах больше 1024px видно 3 слайда
          },
        }}
      >
        {data.map((slide: Data) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content__wrapper">
              <div className="slide-content">
                <p>{slide.description}</p>
              </div>
              <div className="content__wrapper__title">
                <h3>{slide.name}</h3>
                <p>{slide.job}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные стрелки управления */}
      <div className="swiper-next">
        <ChevronRight />
      </div>
      <div className="swiper-prev">
        <ChevronLeft />
      </div>
    </div>
  );
}
