// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import MenuPoint from "../MenuPoint/MenuPoint";
import ChapterInfo from "../ChapterInfo/ChapterInfo";
// ~ comps
// #endregion ~ __IMPORT__

const __data = [
  { id: 0, name: "Main" },
  { id: 1, name: "Структура" },
  { id: 2, name: "Redux" },
  { id: 3, name: "Тестирование" },
  { id: 4, name: "Webpack" },
  { id: 5, name: "Custom slider" },
  { id: 6, name: "Webpack testid cleaner" },
];

// #region ~ __COMPONENT__
export default function StructurePanel() {
  return (
    <div className={css.panelWrapper}>
      <div className={css.leftMenu}>
        {__data.map((item: any) => (
          <MenuPoint name={item.name} key={item.id} />
        ))}
      </div>
      <ChapterInfo />
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
