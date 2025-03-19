// #region ~ hlop
// ___ import
// #region ~ import
import React from "react";
import { Button, Flex } from "antd";
import { HeartOutlined } from "@ant-design/icons";
// ~ redux
import { useAppDispatch } from "../../../../../Feature/redux/hooks";
import { addHeart } from "../../../../../Feature/redux/slices/task4__hearts";
// ~ style
// #endregion ~ import

// ___ component
// #region ~ component
export default function ClickHeart() {
  // ___ states
  // #region ~ state
  const dispatch = useAppDispatch();
  // #endregion ~ state

  // ___ return
  // #region ~ return
  return (
    <Flex vertical={true}>
      <Button
        style={{ margin: 0, padding: 0 }}
        type="link"
        onClick={() => {
          dispatch(addHeart());
        }}
      >
        <HeartOutlined style={{ fontSize: 26 }} />
      </Button>
    </Flex>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
