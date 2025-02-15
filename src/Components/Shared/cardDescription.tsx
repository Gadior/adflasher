import React from "react";
import { Typography, Flex } from "antd";
const { Text } = Typography;

export default function CardDescription(props: any) {
  const str = props.description.toString();
  return (
    <Flex className="container-card__description">
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: str }}
        style={{
          whiteSpace: "normal",
          wordWrap: "break-word",
          overflowWrap: "break-word",
          maxWidth: "100%",
        }}
      ></div>
    </Flex>
  );
}
