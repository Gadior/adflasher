// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import { H4 } from "../../Shared";
import { Rate } from "antd";
// #endregion ~ __IMPORT__

interface Props {
  id: number;
  sourceImage: string;
  name: string;
  alt: string;
  price: number;
  oldPrice?: number;
  percent?: number;
}

// #region ~ __COMPONENT__
export default function ProductCard(props: Props) {
  const { sourceImage, name, alt, price, oldPrice, percent } = props;
  return (
    <div className={css.card}>
      <img src={sourceImage} alt={alt} />
      <div className={css.info}>
        <H4 title={name} />
        <Rate />
        <div className={css.price}>
          <div className={css.current}>$ {price.toLocaleString()}</div>
          {oldPrice && (
            <div className={css.old}>$ {oldPrice.toLocaleString()}</div>
          )}
          {percent && (
            <div className={css.percent}>$ {percent.toLocaleString()}</div>
          )}
        </div>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
