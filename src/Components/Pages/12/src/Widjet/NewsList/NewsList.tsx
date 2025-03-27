// #region
// #region ~ __IMPORT__
// ~ style
import { NewsCard } from "../../Feature";
import * as css from "./style.module.scss";
// ~ types
import { NewsCard__int } from "../../types/types";
// ~ redux
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
// #endregion ~ __IMPORT__

interface Props {
  data: NewsCard__int[];
}

// #region ~ __COMPONENT__
export default function NewsList(props: Props) {
  // _ __HOOKS__
  // #region
  const dispatch = useAppDispatch();
  // ~ значение поискового поля
  const searchValue = useAppSelector((state) => state.data.searchValue);
  // #endregion

  // destruct
  const { data } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {data.map((card: NewsCard__int) => (
          <div key={card.id}>
            <NewsCard title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
