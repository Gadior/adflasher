// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import { Title } from "../../Shared";
// #endregion ~ __IMPORT__
interface Card {
  src: string;
  name: string;
}
interface Props {
  fashionImages: Card[];
}

// #region ~ __COMPONENT__
export default function FashionGrid(props: Props) {
  const { fashionImages } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.titleRow}>
          <Title title={"BROWSE BY DRESS STYLE"} />
        </div>
        <div className={css.fashion_1}>
          <div>
            <img
              src={fashionImages[0].src}
              alt={fashionImages[0].name}
              loading="lazy"
            />
            <div>{fashionImages[0].name}</div>
          </div>
          <div>
            <img
              src={fashionImages[1].src}
              alt={fashionImages[1].name}
              loading="lazy"
            />
            <div>{fashionImages[1].name}</div>
          </div>
        </div>

        <div className={css.fashion_2}>
          <div>
            <img
              src={fashionImages[2].src}
              alt={fashionImages[2].name}
              loading="lazy"
            />
            <div>{fashionImages[2].name}</div>
          </div>
          <div>
            <img
              src={fashionImages[3].src}
              alt={fashionImages[3].name}
              loading="lazy"
            />
            <div>{fashionImages[3].name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
