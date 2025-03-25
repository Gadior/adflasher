// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
// #endregion ~ __IMPORT__

import _1 from "../../../../Pages/10/src/Shared/assets/__ar1.jpg";
import _2 from "../../../../Pages/10/src/Shared/assets/__ar2.jpg";
import _3 from "../../../../Pages/10/src/Shared/assets/__ar3.jpg";
import _4 from "../../../../Pages/10/src/Shared/assets/__ar4.jpg";

import CustomSlider from "../../../../Pages/10/src/Feature/CustomSlider/CustomSlider";

// Прикидка data-index
const __data: any = {
  id: 0,
  name: "Main",
  description: "asdasdasda",
  content: [{ title: "", descripton: "", slides: [_1, _2, _3, _4] }],
};

// #region ~ __COMPONENT__
export default function ChapterInfo() {
  return (
    <div className={css.chapterWrapper}>
      <h2>{__data.name}</h2>
      <p>{__data.description}</p>

      {/* {__data.content.map((item: any) => (
        <CustomSlider slides={item.slides} isPic={true} />
      ))} */}
    </div>
  );
}
