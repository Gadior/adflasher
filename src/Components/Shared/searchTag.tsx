import React from "react";
import { Button, Tag } from "antd";

export default function SearchTag(props: any) {
  return (
    <Button
      type="link"
      style={{ margin: 0, padding: 0 }}
      onClick={() => {
        props.selectTag(props.tagValue);
      }}
    >
      <Tag color={"green"} style={{ margin: 0 }}>
        {props.tagValue}
      </Tag>
    </Button>
  );
}
