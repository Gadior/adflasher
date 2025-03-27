// #region
// #region ~ __IMPORT__
// ~ style
import { NewsCard } from "../../Feature";
import * as css from "./style.module.scss";
// ~ comps
// #endregion ~ __IMPORT__

// #region ~ __COMPONENT__
export default function NewsList(props: any) {
  // destruct
  const { __data } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {__data.map((card: any) => (
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
