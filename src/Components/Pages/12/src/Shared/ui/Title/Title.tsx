// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
// #endregion ~ __IMPORT__
interface Props {
  title: string;
}
// #region ~ __COMPONENT__
export default function Title(props: Props) {
  const { title } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
