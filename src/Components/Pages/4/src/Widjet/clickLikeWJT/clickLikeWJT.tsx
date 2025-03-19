// #region ~ hlop
// ___ import
// #region ~ import
import React from "react";
import { Flex } from "antd";
// redux
import ClickHeart from "../../Feature/clickHeart/clickHeart";
import HeartsCounter from "../../Shared/ui/heartsCounter/heartsCounter";
// #endregion ~ import

// ___ component
// #region ~ component
export default function ClickLikeWJT() {
  // ___ return
  // #region ~ return
  return (
    <Flex
      className="widjet-container"
      justify="flex-start"
      align="center"
      wrap={true}
    >
      <ClickHeart />
      <HeartsCounter />
    </Flex>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
