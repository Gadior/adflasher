// ~ components
import CardDescription from "../Shared/cardDescription.tsx";
import CardTitle from "../Shared/cardTitle.tsx";

import React from "react";
import { Flex, Button, Space, Tag } from "antd";
import { Link } from "react-router-dom";
import { FieldTimeOutlined } from "@ant-design/icons";

export default function CardFeat(props: any) {
  // ~ список тагов
  const tagsData = props.tags;
  // ~ для главного экрана отключаем кнопку
  let blockBtn: boolean = false;
  props.cardName === "main" ? (blockBtn = true) : (blockBtn = false);
  return (
    <Flex vertical={true} className="container-card">
      <Space>
        <Flex>
          <FieldTimeOutlined
            style={{
              background: "#ffffff",
              padding: "10px",
              borderRadius: "10px",
              paddingLeft: "12px",
              backgroundColor: "#ececec",
              marginRight: "12px",
            }}
          />
          <Space style={{ padding: "0px", margin: "0px", marginRight: "25px" }}>
            {props.time} часа
          </Space>
        </Flex>
        <CardTitle title={props.title} />
      </Space>
      <CardDescription description={props.description} />
      <Flex>
        <Link to={props.openExample} style={{ width: "100%" }}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            href={props.href}
            disabled={blockBtn ? true : false}
            // onClick={() => {
            //   props.openExample(props.cardName);
            // }}
          >
            Смотреть пример
          </Button>
        </Link>
      </Flex>
      <Space>
        {tagsData &&
          tagsData.map((tag: any) => <Tag color={"gold"}>{tag}</Tag>)}
      </Space>
    </Flex>
  );
}
