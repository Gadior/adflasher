import React, { useState, useEffect } from "react";
import { Button, Space, Tag, Divider, Typography, Flex } from "antd";
const { Title, Text } = Typography;

export default function TasksBackBtn(props: any) {
  return (
    <Button
      className="backBtn"
      type="primary"
      onClick={() => {
        props.openExample("main");
      }}
    >
      ← ВЕРНУТЬСЯ
    </Button>
  );
}
