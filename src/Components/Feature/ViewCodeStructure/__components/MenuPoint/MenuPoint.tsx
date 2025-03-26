import { MoveRight } from "lucide-react";
// ~ redux
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../Pages/10/src/Redux/hooks";
import { pointChecked } from "../../../../Pages/10/src/Redux/__slice/dataCntl";

interface Props {
  id: number;
  name: string;
}
export default function MenuPoint(props: Props) {
  const { name, id } = props;
  const dispatch = useAppDispatch();
  const pointCheckedData = useAppSelector(
    (state) => state.dataCntl10.pointCheckedData
  );

  const changePoint = (point: number) => {
    dispatch(pointChecked({ point: point }));
  };

  return (
    <div
      onClick={() => {
        if (pointCheckedData === id) {
          return;
        }

        changePoint(id);
      }}
    >
      <MoveRight />
      {name}
    </div>
  );
}
