import React from "react";
import { useAppSelector } from "../Feature/redux/hooks.tsx";
import { Flex } from "antd";

export default function HeartsCounter() {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        fontSize: 16,
      }}
    >
      {count}
    </Flex>
  );
}
