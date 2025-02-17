// #region ~ hlop
// TODO: произвести чистку

// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
// ~ styles
import "./page.css";
import { toCookies, toCookies_obj } from "../../Feature/cookiesController.tsx";
// ~ interface
import Cookies from "universal-cookie";
// import Cookies from "js-cookie";

import React, { useState, useEffect } from "react";
import { Button, Typography, Flex, Tabs, Space, Checkbox, Divider } from "antd";
const { TabPane } = Tabs;
const { Title, Text } = Typography;
const cookies = new Cookies(null, { path: "/" });
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region ~ state
  // ~ кнопка подтверждения работы с cookies
  const [isCookieAccept, setIsCookieAccept] = useState<boolean>(false);
  // ~ состояние для табов
  const [activeTab, setActiveTab] = useState<string>("1");
  // ~ для групп boolean состояний
  const [filters, setFilters] = useState<any>({
    filter1: false,
    filter2: false,
  });

  // ___ cookies load
  // #region
  useEffect(() => {
    // ~ получить cookies
    const __tabs = cookies.get("activeTab");
    const __filters: object = cookies.get("filters");
    // ~ если они есть - сохранить в переменные
    if (__tabs) setActiveTab(__tabs.toString());
    if (__filters) setFilters(__filters);
  }, []);
  // #endregion

  // #endregion ~ state

  // ___ return
  // #region ~ return
  return (
    <>
      <Flex className="test3-container" vertical={true}>
        <p>
          Данная форма обрабатывает файлы Cookies. Если вы согласны на обработку
          Cookies файлов, то нажмите кнопку "Продолжить"
        </p>

        {!isCookieAccept && (
          <Button
            type="primary"
            onClick={() => {
              setIsCookieAccept(true);
            }}
          >
            Продолжить
          </Button>
        )}

        {/* Cookies block */}
        {isCookieAccept && (
          <>
            <Divider style={{ marginTop: 0 }} />
            <Title level={2}>Настрой интерфейс и обновите страницу</Title>
            <Tabs
              activeKey={activeTab}
              onChange={(value) => {
                setActiveTab(toCookies("activeTab", value));
              }}
            >
              <TabPane tab="Анализ" key="1">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores laborum repudiandae beatae assumenda tenetur fuga
                  libero explicabo atque recusandae, sint facilis quos, dolore
                  voluptatum quod, nobis commodi at quia a?
                </p>
              </TabPane>
              <TabPane tab="Результат" key="2">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores laborum repudiandae beatae assumenda tenetur fuga
                  libero!
                </p>
              </TabPane>
              <TabPane tab="Тест" key="3">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </TabPane>
            </Tabs>

            <Space direction="vertical" style={{ marginTop: 16 }}>
              <Checkbox
                checked={filters.filter1}
                onChange={(e) => {
                  setFilters(
                    toCookies_obj(
                      filters,
                      "filters",
                      "filter1",
                      e.target.checked
                    )
                  );
                }}
              >
                Фильтр 1
              </Checkbox>
              <Checkbox
                checked={filters.filter2}
                onChange={(e) => {
                  setFilters(
                    toCookies_obj(
                      filters,
                      "filters",
                      "filter2",
                      e.target.checked
                    )
                  );
                }}
              >
                Фильтр 2
              </Checkbox>
            </Space>
          </>
        )}
      </Flex>
      <TasksBackBtn />
    </>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
