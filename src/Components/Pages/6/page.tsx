// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
import { throttle } from "lodash";

// ~ styles
import "./page.css";
import React, { useState, useEffect } from "react";
import { Flex, Typography } from "antd";

const { Title } = Typography;

// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region
  const [numbers, setNumbers] = useState<number[]>([0]);
  const [snake, setSnake] = useState<number[]>([]);
  const [curentBTCPrice, setCurentBTCPrice] = useState<number>(0);
  const [flagReq, setFlagReq] = useState<boolean>(true);

  // #endregion

  // ___ websocet
  // #region
  useEffect(() => {
    // Создаем WebSocket-соединение
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/btcusdt@trade"
    );
    // ~ подписка
    socket.onmessage = (event) => {
      handleMessage(JSON.parse(event.data));
    };

    /*
    socket.onopen = () => {
      // ~ открыть
    };
    socket.onclose = () => {
      // ~ закрытие
    };
    socket.onerror = (error) => {
      // ~ ошибка
    };
    */

    // ~ обработка
    const handleMessage = throttle((message: any) => {
      if (flagReq) {
        setFlagReq(false);
        const newNumber = message;
        addNumberIfUnique(newNumber.p);
        setCurentBTCPrice(newNumber.p);
      }
      setTimeout(() => setFlagReq(true), 1000);
    }, 1000); // Разрешаем только 1 сообщение в секунду

    // ~ размонтирование
    return () => {
      // Закрываем соединение
    };
  }, []);
  // #endregion

  // ___ формирование списка змейки
  // #region
  const addNumberIfUnique = (newNumber: number): number[] => {
    let differences: number[] = [];

    setNumbers((prevNumbers) => {
      if (
        prevNumbers.length === 0 ||
        prevNumbers[prevNumbers.length - 1] !== newNumber
      ) {
        const updatedNumbers = [...prevNumbers, newNumber];

        // Вычисляем разницу и сохраняем её в массив
        if (prevNumbers.length > 0) {
          differences = [
            ...differences,
            newNumber - prevNumbers[prevNumbers.length - 1],
          ];
        }

        return updatedNumbers.length > 10
          ? updatedNumbers.slice(1)
          : updatedNumbers;
      }
      return prevNumbers;
    });

    return differences; // Возвращаем массив разниц
  };

  // ~ При изменении вычисление хвоста змеи
  useEffect(() => {
    let __sn = snake;
    let __length =
      (numbers[numbers.length - 1] - numbers[numbers.length - 2]) * 100;
    // ~ если не сущестует
    if (isNaN(__length) || __length === undefined) {
      __length = 0;
    }
    __sn = [...__sn, __length];

    if (__sn.length > 25) {
      __sn = __sn.slice(1);
    }
    setSnake(__sn);
  }, [numbers]);

  // ~ component ячейки хвоста
  const TailBlock = (props: any) => {
    return (
      <div
        className="test6-container-block"
        style={{
          maxWidth: Math.abs(props.tail),
          background: props.tail < 0 ? "#cc3366" : "#8ccc99",
        }}
      >
        {props.tail.toFixed(2)}
      </div>
    );
  };

  // ~ component головы змеи
  const SnakeHead = () => {
    return (
      <Flex
        className="test6-container-block-head"
        justify="center"
        align="center"
      >
        <Flex
          className="test6-container-block-eye"
          justify="center"
          align="center"
        >
          0
        </Flex>
        <Flex
          className="test6-container-block-mouth"
          justify="center"
          align="center"
        >
          0
        </Flex>
        <Flex
          className="test6-container-block-click"
          justify="center"
          align="center"
        >
          0
        </Flex>
      </Flex>
    );
  };
  // #endregion

  // ___ return
  // #region ~ return
  return (
    <>
      <Flex
        vertical={true}
        className="test6-container"
        justify="start"
        wrap={true}
      >
        {/* info */}
        <Title level={3}>Змейка BTC</Title>
        <p>
          Мне захотелось понять, как работают WebSocket, и я решил создать нечто
          простое, но интересное — всем известную "змейку". <br />
          Идея проста: змейка состоит из ячеек хвоста, каждая из которых
          отображает разницу между текущим и предыдущим значением. Если хвост
          красный, значит, разница отрицательная, а если зелёный —
          положительная. Короткий хвост символизирует тишину на рынке, а длинные
          ячейки означают активные события и движения. <br />
          Эта задача не преследует практическую цель, она служит скорее
          экспериментом для того, чтобы лучше понять поведение WebSocket в
          реальных условиях.
        </p>
        <Flex
          className="test6-container-block-price"
          justify="center"
          align="center"
        >
          BTC Price: {curentBTCPrice}
        </Flex>

        {/* Snake */}
        <div className="test6-container-block-body">
          {snake.map((tail: any) => (
            <TailBlock tail={tail} />
          ))}
          <SnakeHead />
        </div>
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
