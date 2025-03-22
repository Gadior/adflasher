import * as css from "./style.module.scss";

interface Props {
  title: string;
}

export default function Title(props: Props) {
  const { title } = props;
  return <h2 className={css.h2}>{title}</h2>;
}
