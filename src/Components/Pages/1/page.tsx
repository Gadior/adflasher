// #region ~ hlop

// ___ import
// #region ~ import
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
import React, { useState, useEffect, useRef } from "react";

// ~ days
import dayjs from "dayjs";

import "dayjs/locale/ru"; // Подключаем русскую локализацию для вывода месяца и дня недели

// ~ interface
import { int_tickets, Item, Flags } from "./interface.tsx";
// ~ jsonData
import json from "./src/tickets.json";
// ~ assets
import __logo from "./src/images/__logo.png";
import __plane from "./src/images/__plane.png";
import __arrow from "./src/images/__arrow.jpg";
// ~ styles
import "./reset.css";
import "./page.css";
// #endregion ~ import

// ___ component
// #region ~ component
export default function MainPage() {
  // ~ локализатор days
  dayjs.locale("ru");

  // ___ states/data
  // #region ~ states/data
  // ~ ссылки для установления состояния фокуса
  const buttonRef__rubble = useRef<HTMLButtonElement>(null);
  const buttonRef__usd = useRef<HTMLButtonElement>(null);
  const buttonRef__euro = useRef<HTMLButtonElement>(null);
  // ~ ticketsData
  const [ticketsData, setTicketsData] = useState<int_tickets[]>();
  // ~ backup
  const [ticketsData__backUp, setTicketsData__backUp] =
    useState<int_tickets[]>();
  useEffect(() => {
    // какая то имитация подключения к api
    // ...
    setTicketsData([]);
    setTicketsData__backUp(json["tickets"]);
  }, []);
  //   console.log(ticketsData);

  // #region ~ checkBoxes
  // ~ выделить все чек бокс
  const [allSelected, setAllSelected] = useState(false);
  // ~ общий хук для всех чекбоксов
  const [checkboxes, setCheckboxes] = useState({
    all: false,
    none: false,
    one: false,
    two: false,
    three: false,
  });
  // ~ управление чекбоксами
  const handleCheckboxChange = (name: string) => {
    checkFocus();
    let __check = checkboxes;
    if (name === "all") {
      const newState = !checkboxes.all;
      setAllSelected(newState);
      __check = {
        all: newState,
        none: newState,
        one: newState,
        two: newState,
        three: newState,
      };
      setCheckboxes(__check);
    } else {
      __check = { ...__check, [name]: !__check[name] };
      setCheckboxes(__check);
    }
    if (ticketsData !== undefined) {
      const filteredData: int_tickets[] = filterByFlags(
        ticketsData__backUp,
        __check
      );
      setTicketsData(filteredData);
    }
  };
  // ~ фильтрация
  const filterByFlags = (arr: any, flags: Flags) => {
    if (flags.all && flags.none && flags.one && flags.two && flags.three) {
      // Если флаг all true, возвращаем весь массив
      return arr;
    }

    // Применяем фильтрацию по флагам none, one, two и three
    const filteredArray = arr.filter((item) => {
      if (flags.none && item.stops === 0) return true;
      if (flags.one && item.stops === 1) return true;
      if (flags.two && item.stops === 2) return true;
      if (flags.three && item.stops === 3) return true;
      return false;
    });

    return filteredArray;
  };
  // #endregion ~ checkBoxes

  // #region ~ форматер даты
  const formattedDate = (date: string) => {
    const formattedDate = dayjs(date, "DD.MM.YY").format("DD MMMM YYYY, ddd");
    // const uper = day.replace(/(\b\w)/g, (match) => match.toUpperCase());
    const capitalizedFormattedDate = formattedDate.replace(
      /(\b[a-zа-я])/gi,
      (match) => match.toUpperCase()
    );
    return capitalizedFormattedDate;
  };
  // #endregion ~ форматер даты

  // #region ~ управление currency
  const [currencyName, setCurrencyName] = useState<string>("rubble");
  const [currencySymbol, setCurrencySymbol] = useState<string>("₽");
  const [currencyPrice, setCurrencyPrice] = useState<number>(1);

  useEffect(() => {
    currencyName === "rubble" && setCurrencySymbol("₽");
    currencyName === "rubble" && setCurrencyPrice(1);

    currencyName === "usd" && setCurrencySymbol("$");
    currencyName === "usd" && setCurrencyPrice(50);

    currencyName === "euro" && setCurrencySymbol("€");
    currencyName === "euro" && setCurrencyPrice(55);

    checkFocus();
  }, [currencyName]);

  const checkFocus = () => {
    buttonRef__rubble.current != null &&
      currencyName === "rubble" &&
      buttonRef__rubble.current.focus();
    buttonRef__usd.current != null &&
      currencyName === "usd" &&
      buttonRef__usd.current.focus();
    buttonRef__euro.current != null &&
      currencyName === "euro" &&
      buttonRef__euro.current.focus();
  };
  // #endregion ~ управление currency
  // #endregion ~ states/data

  // ___ return
  // #region ~ return
  return (
    <div className="test1_nonstyle">
      <div className="test1_containerWrapper">
        <div className="test1_containerWrapper-container">
          {/* Header Block */}
          <header className="test1_header">
            <img src={__plane} alt="Logo" className="test1_logo" />
          </header>

          <div className="test1_wrapper">
            {/* Sidebar Menu */}
            <aside className="test1_menu">
              <div className="test1_menu-item">
                <h3 className="test1_h3">ВАЛЮТА</h3>
                <div className="test1_buttons-row">
                  <button
                    className={
                      currencyName === "rubble"
                        ? "button__focus"
                        : "button__unfocus"
                    }
                    ref={buttonRef__rubble}
                    onClick={() => {
                      setCurrencyName("rubble");
                    }}
                  >
                    RUB
                  </button>
                  <button
                    className={
                      currencyName === "usd"
                        ? "button__focus"
                        : "button__unfocus"
                    }
                    ref={buttonRef__usd}
                    onClick={() => {
                      setCurrencyName("usd");
                    }}
                  >
                    USD
                  </button>
                  <button
                    className={
                      currencyName === "euro"
                        ? "button__focus"
                        : "button__unfocus"
                    }
                    ref={buttonRef__euro}
                    onClick={() => {
                      setCurrencyName("euro");
                    }}
                  >
                    EUR
                  </button>
                </div>
              </div>

              <div className="test1_menu-item">
                <h3 className="test1_h3">КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
                <div className="test1_checkboxes">
                  <label>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={() => handleCheckboxChange("all")}
                    />
                    Все
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkboxes.none}
                      onChange={() => handleCheckboxChange("none")}
                    />
                    Без пересадок
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkboxes.one}
                      onChange={() => handleCheckboxChange("one")}
                    />
                    1 пересадка
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkboxes.two}
                      onChange={() => handleCheckboxChange("two")}
                    />
                    2 пересадки
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={checkboxes.three}
                      onChange={() => handleCheckboxChange("three")}
                    />
                    3 пересадки
                  </label>
                </div>
              </div>
            </aside>

            {/* Cards Section */}
            {ticketsData !== undefined && (
              <main className="test1_cards">
                {Object.keys(ticketsData).map((index, item: number) => (
                  <div className="test1_card" key={index}>
                    <div className="test1_card-left">
                      <img
                        src={__logo}
                        alt="Logo"
                        className="test1_card-logo"
                      />
                      <button className="test1_buy-button" onClick={() => {}}>
                        <p>Купить</p>
                        <p>
                          за{" "}
                          {(ticketsData[item].price / currencyPrice).toFixed(0)}{" "}
                          {currencySymbol}
                        </p>
                      </button>
                    </div>
                    <div className="test1_divider" />
                    <div className="test1_card-rightSide">
                      <div className="test1_card-info">
                        <p className="test1_card-info-time">
                          {ticketsData[item].departure_time}
                        </p>
                        <p className="test1_card-info-way">
                          {ticketsData[item].origin},{" "}
                          {ticketsData[item].origin_name}
                        </p>
                        <p className="test1_card-info-date">
                          {formattedDate(ticketsData[item].departure_date)}
                        </p>
                      </div>
                      <div className="test1_card-transfer">
                        <p className="test1_card-transfer-count">
                          {ticketsData[item].stops} пересадка
                        </p>
                        <div>
                          <img src={__arrow} alt="arrow" />
                        </div>
                      </div>
                      <div className="test1_card-info">
                        <p className="test1_card-info-time">
                          {ticketsData[item].arrival_time}
                        </p>
                        <p className="test1_card-info-way">
                          {ticketsData[item].destination},{" "}
                          {ticketsData[item].destination_name}
                        </p>
                        <p className="test1_card-info-date">
                          {formattedDate(ticketsData[item].arrival_date)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </main>
            )}
          </div>
        </div>
      </div>
      <TasksBackBtn />
    </div>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
