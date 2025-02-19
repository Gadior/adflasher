// #region ~ hlop
// ___ import
// #region
// ~style
import "./main.css";
import "./modal.css";
import "./media.css";
// ~ __data
import json from "../../Data/jsonData.json";
// ~ interface
import { int_mainData } from "./interface";
// ~ cardImgList
import { imgList } from "./cardImgList";

// ~ components
import CardFeat from "../../Feature/cardFeat";
import SearchTag from "../../Shared/searchTag";

import React, { useState, useEffect } from "react";
import { Button, Space, Tag, Typography, Flex } from "antd";
const { Title, Text } = Typography;

// #endregion
// test test

// ___ component
// #region ~ component
export default function Main() {
  // ___ управление главной страницей
  // #region
  // ~ хранение списка всех тагов из всех карточек
  const [tagsList, setTagsList] = useState<string[]>();
  // ~ флаг для очистки тагов
  const [cleanTags, setCleanTags] = useState<boolean>(false);
  // ~ общие данные
  const [mainData, setMainData] = useState<int_mainData[]>();

  useEffect(() => {
    let __data: any = json;
    // ~ Уникальный лист тагов
    setTagsList(uniqueTags(__data));
    // ~ сохранение данных
    setMainData(reverseArray(__data));
  }, []);

  // #endregion

  // ___ Сортировка списка по названию тага
  // #region ~ Сортировка списка по названию тага
  const filterDataByTagName = (__data: any, keyword: string) => {
    return __data.filter((item: any) => item.tags.includes(keyword));
  };
  // #endregion ~ Сортировка списка по названию тага

  // ___ Управление модальным окном
  // #region
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // #endregion

  // ___ return
  // #region ~ return if "main"
  return (
    <Flex vertical={true} className="container">
      <Flex style={{ width: "100%" }} justify={"space-between"} align="center">
        <Title level={2}>Примеры</Title>
        <Space style={{ paddingBottom: "10px", cursor: "pointer" }}>
          <Button
            className="container-info"
            type="link"
            onClick={() => {
              openModal();
            }}
          >
            <u>info</u>
          </Button>
        </Space>
      </Flex>

      <Space
        direction={"vertical"}
        style={{
          width: "100%",
          whiteSpace: "wrap",
          wordWrap: "break-word",
          overflowWrap: "break-word",
        }}
      >
        <p
          style={{
            whiteSpace: "wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <u>Нажми</u> на tag и включиться сортировка:
        </p>
      </Space>

      {/*Таги*/}
      <Space>
        {/* Очистка */}
        {cleanTags && (
          <Space className="container-tags__red">
            <Button
              type="link"
              onClick={() => {
                cleanTagList();
              }}
            >
              <Tag color={"default"}>Очистить</Tag>
            </Button>
          </Space>
        )}
        {/* Таги */}
        <Space className="container-tags">
          {tagsList &&
            tagsList.map((tag: any) => (
              <SearchTag
                tagValue={tag}
                selectTag={selectTag}
                key={Date.now() - Math.floor(Math.random() * 1000)}
              />
            ))}
        </Space>
      </Space>

      {/* Тело  */}
      <p>Примеры:</p>

      {mainData !== undefined && (
        <div className="container-cards">
          {mainData.map((item: int_mainData) => (
            <CardFeat
              key={Date.now() - Math.floor(Math.random() * 1000)}
              title={item.title}
              description={item.description}
              imgSrc={imgList[item.imgSrc]}
              href={item.href}
              cardName={item.cardName}
              tags={item.tags}
              time={item.time}
              // update
              openExample={item.cardName}
            />
          ))}
        </div>
      )}

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-window">
            <Flex
              className="modal-window-container"
              vertical={true}
              justify="space-between"
              align="flex-start"
            >
              <Title level={2}>info: [</Title>
              <Flex
                vertical={true}
                className="modal-window-container-body"
                align="flex-start"
              >
                <div className="modal-window-container-body-skills">
                  <Flex gap={10}>status: "в поиске" | "фриланс",</Flex>
                  <Flex gap={10}>salaryPrice: "от ? ₽",</Flex>
                  <Flex gap={10}>workFromHome: true | null,</Flex>
                  <Flex gap={10}>skills:</Flex>[{"{"}
                  <div className="modal-window-container-body-skills__list">
                    <Flex wrap={true}>
                      Репозиторий: "https://git.bb-media.ru/Tartos/tuts.git",
                    </Flex>
                    <Flex wrap={true}>
                      frontEnd: React, TypeScript, Redux, html/css, atnd, map,
                      filter, functions, useState, UseEffect, components,
                    </Flex>
                    <Flex wrap={true}>
                      backEnd: python example href=
                      <a className="info__link" href="https://bannersbox.ru/" target="__blank">
                        bannersbox.ru
                      </a>
                    </Flex>
                    <Flex wrap={true}>
                      uniti: C# ~ example href=
                      <a
                      className="info__link"
                        href="https://disk.yandex.ru/i/lhKnMERhcYXY_Q"
                        target="__blank"
                      >
                        game
                      </a>
                    </Flex>
                    <Flex wrap={true}>
                      design: "figma, photoshop, aftereffect, animateCC",
                    </Flex>
                    <Flex wrap={true}>soft: "коммуникация, позитив",</Flex>
                    <Flex wrap={true} gap={5}>
                      contact:
                      <a
                        href=" https://career.habr.com/tartos"
                        target="__blank"
                        className="info__link"
                      >
                        habr
                      </a>{" "}
                      |{" "}
                      <a
                      className="info__link"
                        href="https://spb.hh.ru/resume/34de443cff018bae240039ed1f6e7036576436"
                        target="__blank"
                      >
                        hh
                      </a>{" "}
                      | <a href="mailto:adflasher@mail.ru" className="info__link">adflasher@mail.ru</a>
                    </Flex>
                    {"}"}],
                  </div>
                  ]
                </div>
                <Text style={{ fontSize: 16 }}></Text>
              </Flex>
              <Flex style={{ width: "100%" }} justify={"flex-end"}>
                <Button type="default" onClick={closeModal}>
                  Выйти
                </Button>
              </Flex>
            </Flex>
          </div>
        </div>
      )}
    </Flex>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // ~ Передает в списко селектор Тагов значение только одного выбранного тага (из компоненты)
  function selectTag(tagName: string) {
    setTagsList([tagName]);
    setMainData(filterDataByTagName(mainData, tagName));
    setCleanTags(true);
  }
  // ~ возвращаем полный список тагов
  function cleanTagList() {
    let __data: any = json;
    setTagsList(uniqueTags(json));
    setMainData(reverseArray(__data));
    setCleanTags(false);
  }

  // ___ Уникальный список
  // #region ~ Уникальный список
  function uniqueTags(__data: any) {
    return Array.from(
      new Set(Object.keys(__data).flatMap((item: any) => __data[item].tags))
    );
  }
  // #endregion ~ Уникальный список

  // #region ~ перемешиваем списко объектов
  function reverseArray<T>(array: T[]): T[] {
    return [...array].reverse(); // Создаём копию массива и переворачиваем её
  }
  // #endregion ~ перемешиваем списко объектов
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
