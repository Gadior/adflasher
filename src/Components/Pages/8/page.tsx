// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";

// ~ styles
import "./reset.css";
import "./page.css";

import React, { useState, useEffect } from "react";

// ~comps
import Header from "../../Shared/page8/header.tsx";
import Article from "../../Shared/page8/article.tsx";
import { Flex, Typography } from "antd";
import { Menu, X } from "lucide-react";
import { Button } from "antd";

// ~ assets
import __bannerJpg from "../../Shared/page8/images/__mainjpg.jpg";
// - партнеры
import __parnterJpg_1 from "../../Shared/page8/images/__partner.jpg";
import __parnterJpg_2 from "../../Shared/page8/images/__partner1.jpg";
import __parnterJpg_3 from "../../Shared/page8/images/__partner2.jpg";
import __parnterJpg_4 from "../../Shared/page8/images/__partner3.jpg";
import __parnterJpg_5 from "../../Shared/page8/images/__partner4.jpg";
import __parnterJpg_6 from "../../Shared/page8/images/__partner5.jpg";
// - карточки
import __card1 from "../../Shared/page8/images/__card1.png";
import __card2 from "../../Shared/page8/images/__card2.png";
import __card3 from "../../Shared/page8/images/__card3.png";
import __card4 from "../../Shared/page8/images/__card4.png";
import __card5 from "../../Shared/page8/images/__card5.png";
import __card6 from "../../Shared/page8/images/__card6.png";

// #endregion ~ import

// ___ const
// #region
// ~ списов партеров
const partnersList = [
  { name: __parnterJpg_1, title: "Amazon logotype" },
  { name: __parnterJpg_2, title: "Dribble logotype" },
  { name: __parnterJpg_3, title: "Hubspot logotype" },
  { name: __parnterJpg_4, title: "Notion logotype" },
  { name: __parnterJpg_5, title: "Netflix logotype" },
  { name: __parnterJpg_6, title: "Zoom logotype" },
];
// #endregion

// ___ component
// #region ~ component
export default function Page() {
  // ___ state
  // #region

  // #endregion

  // ___ return
  // #region ~ return

  return (
    <div className="test8__wrapper">
      <div className="test8__container">
        <Header />
      </div>

      {/* BANNER */}
      <section className="test8__banner">
        <div className="test8__banner--web">
          <div className="test8__banner--left">
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div className="">Book a consultation</div>
          </div>
          <div className="test8__banner--right">
            <img
              src={__bannerJpg}
              alt="Navigating the digital landscape for success"
            />
          </div>
        </div>

        <div className="test8__banner--mobile">
          <div className="test8__banner--left">
            <h1>Navigating the digital landscape for success</h1>
            <img
              src={__bannerJpg}
              alt="Navigating the digital landscape for success"
            />
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div className="">Book a consultation</div>
          </div>
        </div>
      </section>

      {/* Parters */}
      <section className="test8__parters">
        <div className="test8__partners__wrapper">
          {partnersList.map((partner) => (
            <img
              src={partner.name}
              alt={partner.title}
              key={Date.now() - Math.floor(Math.random() * 1000)}
            />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="test8__service">
        <div className="test8__service__wrapper">
          <h2>Services</h2>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="test8__article">
        <div className="test8__article__wrapper">
          <Article
            cardType="white"
            text={["Search engine", "optimization"]}
            url="#"
            image={__card1}
            imageTitle="Search engine optimization"
          />
          <Article
            cardType="green"
            text={["Pay-per-click", "advertising"]}
            url="#"
            image={__card2}
            imageTitle="Pay-per-click advertising"
          />
          <Article
            cardType="dark"
            text={["Social Media", "Marketing"]}
            url="#"
            image={__card3}
            imageTitle="Social Media Marketing"
          />
          <Article
            cardType="white"
            text={["Email", "Marketing"]}
            url="#"
            image={__card4}
            imageTitle="Email Marketing"
          />
          <Article
            cardType="green"
            text={["Content", "Creation"]}
            url="#"
            image={__card5}
            imageTitle="Content Creation"
          />
          <Article
            cardType="dark"
            text={["Analytics and", "Tracking"]}
            url="#"
            image={__card6}
            imageTitle="Analytics and Tracking"
          />
        </div>
      </section>

      <TasksBackBtn />
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #region ~ hlop
