// #region
// #region ~ __IMPORT__
// ~
import { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import { ReviewCard } from "../../Entities/";

// #endregion ~ __IMPORT__
interface Card {
  id: number;
  name: string;
  description: string;
  rate: number;
}
interface Props {
  slides: Card[] | string[];
  theme?: string;
  isPicSlide?: boolean;
  picSlides?: string[];
}
// #region ~ __COMPONENT__
export default function CustomSlider(props: Props) {
  let { slides, theme, isPicSlide, picSlides } = props;
  if (picSlides) {
    slides = picSlides;
  }

  // _ __HOOKS__
  // #region
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Меняем тему для темного фона. Стрелки делаем белыми
  let arrowsStyle = "";
  let arrowsBlockStyle = "";
  if (theme === "dark") {
    arrowsStyle += ` ${css.white}`;
    arrowsBlockStyle += ` ${css.blockLeft}`;
  }

  // #endregion

  // _ ___SLIDER__
  // #region
  // --- next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // --- prev slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  // #endregion

  if (slides.length === 0) {
    return;
  }

  return (
    <div className={css.wrapper} data-testid="CustomSlider">
      <div className={css.container}>
        {slides.length > 0 ? (
          <div className={css.slider}>
            <div className={`${css.arrows} ${arrowsBlockStyle}`}>
              <button
                onClick={prevSlide}
                className={`${css.sliderButton} ${css.left} ${arrowsStyle}`}
                data-testid={"slider-next"}
              >
                <MoveLeft />
              </button>
              <button
                onClick={nextSlide}
                className={`${css.sliderButton} ${css.right}  ${arrowsStyle}`}
                data-testid={"slider-prev"}
              >
                <MoveRight />
              </button>
            </div>

            <div className={css.slidesContainer}>
              {/* ! */}
              {slides.map((slide: any, index) => {
                const slidePosition =
                  (index - currentSlide + slides.length) % slides.length;
                let slideClass = css.slide;

                if (slidePosition === 0) {
                  slideClass += ` ${css.active}`;
                } else if (slidePosition === 1) {
                  slideClass += ` ${css.neighbor}`;
                } else if (slidePosition === slides.length - 1) {
                  slideClass += ` ${css.neighborLeft}`;
                } else {
                  slideClass += ` ${css.hidden}`;
                }

                return (
                  <div
                    key={index}
                    className={slideClass}
                    data-testid={`slide-${index}`}
                    data-position={
                      slidePosition === 0
                        ? "active"
                        : slidePosition === 1
                        ? "neighbor"
                        : "hidden"
                    }
                  >
                    {isPicSlide && (
                      <img src={slide} className={css.picSlide} alt="#" />
                    )}
                    {!isPicSlide && <ReviewCard slide={slide} />}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
