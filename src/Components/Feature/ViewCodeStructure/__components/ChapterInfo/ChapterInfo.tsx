// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ redux
// ~ redux
import { useAppSelector } from "../../../../Pages/10/src/Redux/hooks";
// #endregion ~ __IMPORT__

import CustomSlider from "../../../../Pages/10/src/Feature/CustomSlider/CustomSlider";

// #region ~ __COMPONENT__
export default function ChapterInfo(props: any) {
  const { __data } = props;

  // --- выбранный слайд
  const pointCheckedData = useAppSelector(
    (state) => state.dataCntl10.pointCheckedData
  );
  // --- данные под номером выбранного слайда
  const chapterData = __data[pointCheckedData];

  return (
    <div className={css.chapterWrapper}>
      <h2>{chapterData.name}</h2>
      <p>{chapterData.description}</p>
      <div className={css.chapterInfo}>
        {chapterData.content.map((item: any) => (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <CustomSlider
              key={item.id}
              slides={[]}
              theme={"dark"}
              isPicSlide={true}
              picSlides={item.slides}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
