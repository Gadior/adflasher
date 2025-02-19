import React from "react";
import {  Flex } from "antd";

export default function CardTitle(props: any) {
  return (
    <Flex
      justify="flex-start"
      className="container-card__name"
      style={{ fontWeight: 600 }}
    >
      <p>{props.title}</p>
    </Flex>
  );
}
