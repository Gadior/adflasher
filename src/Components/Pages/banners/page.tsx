// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/ui/tasksBackBtn/tasksBackBtn";
// ~ styles
import "./style.scss";

import React, { useState, useEffect } from "react";
import { Input, Typography, Button, Divider, Flex } from "antd";
const { Title } = Typography;
// #endregion ~ import

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region ~ state
  // #endregion ~ state

  const [htmlContent1, setHtmlContent1] = useState<string>("");
  const [htmlContent2, setHtmlContent2] = useState<string>("");
  const [htmlContent3, setHtmlContent3] = useState<string>("");
  const [htmlContent4, setHtmlContent4] = useState<string>("");
  const [htmlContent5, setHtmlContent5] = useState<string>("");

  useEffect(() => {
    // 1
    fetch("/files/1/index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.text();
      })
      .then((data) => {
        setHtmlContent1(data);
      })
      .catch((error) => console.error("Error loading HTML:", error));

    // 2
    fetch("/files/2/index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.text();
      })
      .then((data) => {
        setHtmlContent2(data);
      })
      .catch((error) => console.error("Error loading HTML:", error));

    // 3
    fetch("/files/3/index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.text();
      })
      .then((data) => {
        setHtmlContent3(data);
      })
      .catch((error) => console.error("Error loading HTML:", error));

    // 4
    fetch("/files/4/index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.text();
      })
      .then((data) => {
        setHtmlContent4(data);
      })
      .catch((error) => console.error("Error loading HTML:", error));

    // 5
    fetch("/files/5/index.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("File not found");
        }
        return response.text();
      })
      .then((data) => {
        setHtmlContent5(data);
      })
      .catch((error) => console.error("Error loading HTML:", error));
  }, []);

  // ___ return
  // #region ~ return
  return (
    <div className="banners">
      <TasksBackBtn />
      <div className="banners--user">
        <Title level={3}>Основные:</Title>
        <p>
          - <b>Adobe Animate CC</b> Классическая анимация, любая вложенность
          movieclip, растяжки, расхлопы, любые ТТ, строго PixelPerfect макеты
        </p>
        <p>
          - <b>Google Web Design</b> Анимация, любые ТТ
        </p>
        <Divider />
        <Title level={3}>Дополнительные:</Title>
        <p>- Figma. На уровне компонент</p>
        <p>- Photoshop. На уровне артбордов, ретуши</p>
        <p>- Illustrator. На уровне подготовки полиграфических материалов</p>
        <p>
          - Adobe AfterEffect. Быстрая сборка и верстка макетов под размещение
          на digital щитах.{" "}
        </p>
        <Divider />
        <Title level={3}>Special:</Title>
        <p>
          - Perfect понимание ТТ для анимированных баннеров. Собственный сервис
          проверки баннеров{" "}
          <a href="http://bannersbox.ru" target="_blank">
            bannersbox.ru
          </a>
        </p>
        <Divider />
        <Title level={3}>О себе:</Title>
        <p>- Усидчив</p>
        <p>- Стрессоустойчив</p>
        <p>
          -{" "}
          <a
            href="https://spb.hh.ru/resume/d6c2e5e7ff0e8200390039ed1f333254625343"
            target="_blank"
          >
            Резюме на HH.ru
          </a>
        </p>
        <Divider />
        <Title level={3}>Портфель:</Title>
      </div>
      <div className="bannerWrapper">
        {htmlContent1 && (
          <>
            <iframe
              src="/files/1/index.html"
              // srcDoc={htmlContent1}
              title="Embedded Content"
              width="300px"
              height="600px"
              style={{ border: "none" }}
            />
          </>
        )}

        {htmlContent2 && (
          <>
            <iframe
              // src={htmlContent2}
              src="/files/2/index.html"
              title="Embedded Content"
              width="300px"
              height="600px"
              style={{ border: "none" }}
            />
          </>
        )}

        {htmlContent3 && (
          <>
            <iframe
              // src={htmlContent3}
              src="/files/3/index.html"
              title="Embedded Content"
              width="300px"
              height="600px"
              style={{ border: "none" }}
            />
          </>
        )}

        {htmlContent4 && (
          <>
            <iframe
              // src={htmlContent4}
              src="/files/4/index.html"
              title="Embedded Content"
              width="300px"
              height="600px"
              style={{ border: "none" }}
            />
          </>
        )}

        {htmlContent5 && (
          <>
            <iframe
              // src={htmlContent5}
              src="/files/5/index.html"
              title="Embedded Content"
              width="300px"
              height="600px"
              style={{ border: "none" }}
            />
          </>
        )}
      </div>
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
