// #region ~ hlop

// ___ import
// #region ~ import
// import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";
import React, { useState, useEffect } from "react";

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
import "./page.css";
// #endregion ~ import

// ___ component
// #region ~ component
export default function MainPage() {
  // ~ локализатор days
  dayjs.locale("ru");

  // ___ states/data
  // #region ~ states/data
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
      const filteredData = filterByFlags(ticketsData__backUp, __check);
      setTicketsData(filteredData);
    }
  };
  // ~ фильтрация
  const filterByFlags = (arr: Item[], flags: Flags): Item[] => {
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

  // ~ форматер даты
  const formattedDate = (date: string) => {
    const formattedDate = dayjs(date, "DD.MM.YY").format("DD MMMM YYYY, ddd");
    // const uper = day.replace(/(\b\w)/g, (match) => match.toUpperCase());
    const capitalizedFormattedDate = formattedDate.replace(
      /(\b[a-zа-я])/gi,
      (match) => match.toUpperCase()
    );
    return capitalizedFormattedDate;
  };

  // #endregion ~ states/data

  // ___ return
  // #region ~ return
  return (
    <div className="nonstyle">
      <div className="containerWrapper">
        <div className="container">
          {/* Header Block */}
          <header className="header">
            <img src={__plane} alt="Logo" className="logo" />
          </header>

          <div className="wrapper">
            {/* Sidebar Menu */}
            <aside className="menu">
              <div className="menu-item">
                <h3>ВАЛЮТА</h3>
                <div className="buttons-row">
                  <button>RUB</button>
                  <button>USD</button>
                  <button>EUR</button>
                </div>
              </div>

              <div className="menu-item">
                <h3>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
                <div className="checkboxes">
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
              <main className="cards">
                {Object.keys(ticketsData).map((index, item: number) => (
                  <div className="card" key={index}>
                    <div className="card-left">
                      <img src={__logo} alt="Logo" className="card-logo" />
                      <button className="buy-button">
                        <p>Купить</p>
                        <p>
                          за{" "}
                          {parseInt(ticketsData[item].price).toLocaleString()} ₽
                        </p>
                      </button>
                    </div>
                    <div className="divider" />
                    <div className="card-rightSide">
                      <div className="card-info">
                        <p className="card-info-time">
                          {ticketsData[item].departure_time}
                        </p>
                        <p className="card-info-way">
                          {ticketsData[item].origin},{" "}
                          {ticketsData[item].origin_name}
                        </p>
                        <p className="card-info-date">
                          {formattedDate(ticketsData[item].departure_date)}
                        </p>
                      </div>
                      <div className="card-transfer">
                        <p className="card-transfer-count">
                          {ticketsData[item].stops} пересадка
                        </p>
                        <div>
                          <img src={__arrow} alt="arrow" />
                        </div>
                      </div>
                      <div className="card-info">
                        <p className="card-info-time">
                          {ticketsData[item].arrival_time}
                        </p>
                        <p className="card-info-way">
                          {ticketsData[item].destination},{" "}
                          {ticketsData[item].destination_name}
                        </p>
                        <p className="card-info-date">
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
    </div>
  );
  // #endregion ~ return
}
// #endregion ~ component
// #endregion ~ hlop
