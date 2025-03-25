import { MoveRight } from "lucide-react";

interface Props {
  name: string;
}
export default function MenuPoint(props: Props) {
  const { name } = props;
  return (
    <div>
      <MoveRight />
      {name}
    </div>
  );
}
