import React from "react";
import { Typography, Flex } from "antd";
const { Text } = Typography;

export default function CardTitle(props: any) {
  return (
    <Flex className="container-card__name" style={{ fontWeight: 600 }}>
      <Text>{props.title}</Text>
    </Flex>
  );
}
