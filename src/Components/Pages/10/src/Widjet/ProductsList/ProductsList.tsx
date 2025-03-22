// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import { ProductCard } from "../../Entities";
// ~ assets
import __ar1 from "../../Shared/assets/__ar1.jpg";
// ~ interface
import { Card } from "./interface";
// #endregion ~ __IMPORT__

interface Props {
  cards: Card[];
}

// #region ~ __COMPONENT__
export default function ProductsList(props: Props) {
  const { cards } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <div className={css.cardsList}>
          {cards.map((item: Card) => (
            <ProductCard
              id={item.id}
              sourceImage={item.sourceImage}
              alt={item.alt}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              percent={item.percent}
            />
          ))}
        </div>

        <button className={css.viewAll}>View all</button>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
