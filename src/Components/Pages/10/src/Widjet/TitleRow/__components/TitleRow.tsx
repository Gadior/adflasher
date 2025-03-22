// #region
// #region ~ __IMPORT__
// ~ style
import * as css from "./style.module.scss";
// ~ comps
import { Title } from "../../../Shared";
// #endregion ~ __IMPORT__

interface Props {
  title: string;
}

// #region ~ __COMPONENT__
export default function TitleRow(props: Props) {
  const { title } = props;
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Title title={title} />
      </div>
    </div>
  );
}
// #endregion ~ __COMPONENT__
// #endregion
