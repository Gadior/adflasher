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
  slides: Card[];
}
// #region ~ __COMPONENT__
export default function CustomSlider(props: Props) {
  const { slides } = props;
  // _ __HOOKS__
  // #region
  const [currentSlide, setCurrentSlide] = useState<number>(0);
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

  return (
    <div className={css.wrapper} data-testid="CustomSlider">
      <div className={css.container}>
        <div className={css.slider}>
          <div className={css.arrows}>
            <button
              onClick={prevSlide}
              className={`${css.sliderButton} ${css.left}`}
              data-testid={"slider-next"}
            >
              <MoveLeft />
            </button>
            <button
              onClick={nextSlide}
              className={`${css.sliderButton} ${css.right}`}
              data-testid={"slider-prev"}
            >
              <MoveRight />
            </button>
          </div>
          <div className={css.slidesContainer}>
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
                  <ReviewCard slide={slide} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
