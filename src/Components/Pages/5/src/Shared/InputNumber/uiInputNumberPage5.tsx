// ___ import
// #region ~ import
// ~style
import React from "react";
import { Input } from "antd";

// ~ redux
import { useAppDispatch } from "../../../../../Feature/redux/hooks";
import { editItemNumber } from "../../../../../Feature/redux/slices/page5/dataCntl";
// #endregion ~ import

export default function UiInputNumberPage5(props: any) {
  // ___ redux in data
  // #region
  const dispatch = useAppDispatch();
  // #endregion
  return (
    <Input
      type="number"
      placeholder={props.placeholder}
      showCount={true}
      maxLength={props.inpLength}
      value={props.name}
      onChange={(e) => {
        dispatch(
          editItemNumber({
            id: props.id,
            name: parseInt(e.target.value),
            curInd: props.blockId,
          })
        );
      }}
    ></Input>
  );
}
