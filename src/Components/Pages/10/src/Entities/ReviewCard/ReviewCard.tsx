// #region
// #region ~ __IMPORT__
// ~
import { Star } from "lucide-react";
// ~ style
import * as css from "./style.module.scss";
// #endregion ~ __IMPORT__

interface Card {
  id: number;
  name: string;
  description: string;
  rate: number;
}
interface Props {
  slide: Card;
}
// #region ~ __COMPONENT__
export default function ReviewCard(props: Props) {
  const { slide } = props;
  return (
    <div className={css.container}>
      <div>
        {Array.from({ length: slide.rate }, (_, index) => (
          <Star fill="#FFC633" stroke="none" key={index} />
        ))}
      </div>
      <div className={css.name}>{slide.name}</div>
      <div className={css.description}>{slide.description}</div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
