interface Props {
  title: string;
}

export default function Title(props: Props) {
  const { title } = props;
  return <h2>{title}</h2>;
}
