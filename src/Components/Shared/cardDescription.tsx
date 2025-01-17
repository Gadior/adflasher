import React from "react";
import { Typography, Flex } from "antd";
const { Text } = Typography;

export default function CardDescription(props: any) {
  return (
    <Flex className="container-card__description">
      <Text>
        <div
          dangerouslySetInnerHTML={{ __html: props.description }}
          style={{ whiteSpace: "pre-wrap" }}
        ></div>
      </Text>
    </Flex>
  );
}
