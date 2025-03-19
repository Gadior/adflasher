// #region ~ hlop

// ___ import
// #region
import React, { useEffect, useState } from "react";
import { Flex } from "antd";
// ~ style
import "./tab2_page5.css";
// ~ redux
import { useAppSelector } from "../../../../../Feature/redux/hooks";
// #endregion

export default function Tab2Page5() {
  // ___ redux in data
  // #region
  const allmainData = useAppSelector((state) => state.page5_dataCntl.data);
  // #endregion

  // ___ state
  // #region
  // ~ Получить количество группу
  const [getGroupLength, setGetGroupLength] = useState(allmainData.length);
  useEffect(() => {
    setGetGroupLength(allmainData.length);
  }, [allmainData]);
  // ~ Получить количество записей в списке группы
  const getRecodsLength = (data: any): number => {
    return data.reduce((sum: any, row: any) => sum + row.sallary, 0);
  };
  // #endregion

  // ___ return
  // #region
  return (
    <Flex gap={10} vertical={true}>
      <Flex>Групп создано: {getGroupLength}</Flex>
      {getGroupLength > 0 && (
        <Flex vertical={true} gap={10} className="tab2-page5-info">
          {allmainData.map((item: any) => (
            <Flex vertical={true} className="tab2-page5-info-group">
              <Flex className="tab2-page5-info-group-_bold">
                <b>Группа: {item.id}</b>
              </Flex>
              <Flex gap={5}>
                Сумма затрат в группе:{" "}
                <b> {getRecodsLength(item.data).toLocaleString()} ₽</b>
              </Flex>
              <Flex gap={5}>Всего записей в группе: {item.data.length}</Flex>
            </Flex>
          ))}
        </Flex>
      )}
    </Flex>
  );
  // #endregion
}

// #endregion ~ hlop
