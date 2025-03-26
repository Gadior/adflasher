// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
import { Menu, X } from "lucide-react";
// ~ comps
import MenuPoint from "../MenuPoint/MenuPoint";
import ChapterInfo from "../ChapterInfo/ChapterInfo";
import { useState } from "react";
// ~ comps
// #endregion ~ __IMPORT__

interface Data {
  id: number;
  name: string;
}
interface Props {
  __data: Data[];
}
// #region ~ __COMPONENT__
export default function StructurePanel(props: Props) {
  // _ __HOOKS__
  // #redion __HOOKS__
  const { __data } = props;
  // --- открытие меню
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // --- стиль для открытия меню
  const [styleMenu, setStyleMenu] = useState<React.CSSProperties>();
  // #endredion __HOOKS__

  // _ Подключение и отключение стиля для показа меню
  // #redion
  const handleMenuClick = () => {
    if (!styleMenu) {
      setStyleMenu({
        display: "flex",
        // Можно добавить другие стили при необходимости
      });
      setIsMenuOpen(true);
    } else {
      setStyleMenu(undefined);
      setIsMenuOpen(false);
    }
  };
  // #endredion

  return (
    <div className={css.panelWrapper}>
      {!isMenuOpen ? (
        <div className={`${css.menu} ${css.show}`} onClick={handleMenuClick}>
          <Menu />
        </div>
      ) : (
        <div className={`${css.menu} ${css.show}`} onClick={handleMenuClick}>
          <X />
        </div>
      )}

      <div className={`${css.leftMenu}`} style={styleMenu}>
        {__data.map((item: any) => (
          <MenuPoint name={item.name} key={item.id} id={item.id} />
        ))}
      </div>
      <ChapterInfo __data={__data} />
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
