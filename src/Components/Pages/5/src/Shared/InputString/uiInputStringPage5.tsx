// ___ import
// #region ~ import
// ~style
import { Input } from "antd";

// ~ redux
import { useAppDispatch } from "../../../../../Feature/redux/hooks";
import { editItemString } from "../../../../../Feature/redux/slices/page5/dataCntl";
// #endregion ~ import

export default function UiInputStringPage5(props: any) {
  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();
  // #endregion
  return (
    <Input
      placeholder={props.placeholder}
      showCount={true}
      maxLength={props.inpLength}
      value={props.name}
      onChange={(e) => {
        dispatch(
          editItemString({
            id: props.id,
            name: e.target.value,
            type: props.type,
            curInd: props.blockId,
          })
        );
      }}
    ></Input>
  );
}
