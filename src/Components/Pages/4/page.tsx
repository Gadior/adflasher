// #region ~ hlop
// TODO: произвести чистку

// ___ import
// #region ~ import
// ~ comps
import ClickLike from "../../Widjet/clickLike.tsx";
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";

// redux
import { useAppDispatch, useAppSelector } from "../../Feature/redux/hooks.tsx";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../Feature/redux/slices/counterSlice.tsx";

// ~ styles
import "./reset.css";
import "./page.css";

import React, { useState, useEffect } from "react";
import { Flex } from "antd";
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region ~ state
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  // ___ cookies load
  // #region
  useEffect(() => {}, []);
  // #endregion

  // #endregion ~ state

  // ___ return
  // #region ~ return
  return (
    <Flex>
      <ClickLike />
      <TasksBackBtn />
    </Flex>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
