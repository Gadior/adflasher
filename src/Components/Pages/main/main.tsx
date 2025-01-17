// #region ~ hlop
// ~style
import "./main.css";
import "./modal.css";
import "./media.css";
// ~ __data
import json from "../../Data/jsonData.json";
// ~ interfasce
import { int_mainData } from "./interface";

// ~ components
import CardFeat from "../../Feature/cardFeat.tsx";
import SearchTag from "../../Shared/searchTag.tsx";

// ___ import
// #region
import React, { useState, useEffect } from "react";
import { Button, Space, Tag, Divider, Typography, Flex } from "antd";
const { Title, Text } = Typography;

// #endregion

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
    setMainData(__data);
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
    <Space direction={"vertical"} className="container">
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
          wrap={true}
          style={{
            whiteSpace: "wrap",
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        >
          <u>Нажми</u> на tag и включиться сортировка:
        </p>
      </Space>

      <Divider style={{ margin: 0 }}></Divider>

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
              <SearchTag tagValue={tag} selectTag={selectTag} />
            ))}
        </Space>
      </Space>
      <Divider style={{ margin: 0 }}></Divider>

      {/* Тело  */}
      <p>Примеры:</p>

      {mainData !== undefined &&
        mainData.map((item: int_mainData) => (
          <CardFeat
            key={item}
            title={item.title}
            description={item.description}
            href={item.href}
            cardName={item.cardName}
            tags={item.tags}
            time={item.time}
            // update
            openExample={item.cardName}
          />
        ))}

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
                  <Text className="modal-window-container-body-skills__font">
                    <b>status</b>: "в поиске" | "фриланс",
                    <br />
                    <b>salaryPrice</b>: "от 150 000 ₽",
                    <br />
                    <b>workFromHome</b>: true | null,
                    <br />
                    <b>skills</b>:
                    <br />[{"{"}
                    <br />
                    <div className="modal-window-container-body-skills">
                      <b>frontEnd</b>: "React + TypeScript + css + atnd +
                      map/filter/functions/useState/UseEffect/components",
                      <br />
                      <b>backEnd</b>: "python (example -
                      https://bannersbox.ru/)",
                      <br />
                      <b>design</b>: "figma, photoshop, aftereffect, animateCC",
                      <br />
                      <b>soft</b>: "коммуникация, позитив",
                      <br />
                      <b>contact</b>: https://career.habr.com/tartos | ТГ
                      @viktor_molokhov,
                      <br />
                      {"}"}],
                    </div>
                    <b>]</b>
                  </Text>
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
    </Space>
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
    setMainData(__data);
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
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
