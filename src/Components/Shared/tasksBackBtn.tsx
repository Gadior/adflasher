import React, { useState, useEffect } from "react";
import { Button, Space, Tag, Divider, Typography, Flex } from "antd";
import { Link } from "react-router";
const { Title, Text } = Typography;

export default function TasksBackBtn(props: any) {
  return (
    <Link to="/">
      <Button className="backBtn" type="primary">
        ← ВЕРНУТЬСЯ
      </Button>
    </Link>
  );
}
