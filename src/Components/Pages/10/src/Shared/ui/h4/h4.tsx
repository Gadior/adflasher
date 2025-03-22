import * as css from "./style.module.scss";

interface Props {
  title: string;
}

export default function H4(props: Props) {
  const { title } = props;
  return <h4 className={css.h2}>{title}</h4>;
}
