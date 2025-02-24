// app
// ~ components
import CardDescription from "../Shared/cardDescription";
import CardTitle from "../Shared/cardTitle";

import React from "react";
import { Flex, Button, Space, Tag } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons";

export default function CardFeat(props: any) {
  const path = props.imgSrc;
  // ~ список тагов
  const tagsData = props.tags;
  // ~ для главного экрана отключаем кнопку
  let blockBtn: boolean = false;
  props.cardName === "main" ? (blockBtn = true) : (blockBtn = false);
  return (
    <Flex vertical={true} className="container-card">
      <Space className="container-card-title">
        <Flex className="container-card-title__block">
          <FieldTimeOutlined
            title="Время на задачу"
            style={{
              background: "#ffffff",
              padding: "10px",
              borderRadius: "10px",
              paddingLeft: "12px",
              backgroundColor: "#ececec",
              marginRight: "12px",
            }}
          />
          <Space
            style={{
              minWidth: "70px",
            }}
          >
            <div>{props.time}</div>
          </Space>
        </Flex>
        <CardTitle title={props.title} />
      </Space>
      {props.imgSrc && (
        <div className="container-card__picture">
          <img src={props.imgSrc}></img>
        </div>
      )}
      <CardDescription description={props.description} />
      <Flex>
        {/* <Link to={props.openExample} style={{ width: "100%" }}> */}
        <Button
          style={{ width: "100%" }}
          type="primary"
          href={props.openExample}
          disabled={blockBtn ? true : false}
        >
          Смотреть пример
        </Button>
        {/* </Link> */}
      </Flex>
      <Space className="container-card-tags">
        {tagsData &&
          tagsData.map((tag: any) => (
            <Tag
              color={"gold"}
              key={Date.now() - Math.floor(Math.random() * 1000)}
            >
              {tag}
            </Tag>
          ))}
      </Space>
    </Flex>
  );
}
