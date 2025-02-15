import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Отступ между слайдами
        slidesPerView={1.5} // Количество видимых слайдов
        centeredSlides={true} // Центрирование активного слайда
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} // Стрелки управления
        pagination={{ clickable: true }} // Пагинация
        breakpoints={{
          640: {
            slidesPerView: 1.5, // На экранах больше 640px видно 1.5 слайда
          },
          768: {
            slidesPerView: 2.5, // На экранах больше 768px видно 2.5 слайда
          },
          1024: {
            slidesPerView: 3, // На экранах больше 1024px видно 3 слайда
          },
        }}
      >
        {[1, 2, 3, 4, 5].map((slide) => (
          <SwiperSlide key={slide}>
            <div className="slide-content">
              <h3>Слайд {slide}</h3>
              <p>Это содержимое слайда {slide}.</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Кастомные стрелки управления */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
}
