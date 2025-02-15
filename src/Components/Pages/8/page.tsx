// #region ~ hlop
// ___ import
// #region ~ import
// ~ comps
import TasksBackBtn from "../../Shared/tasksBackBtn.tsx";

// ~ styles
import "./reset.css";
import "./style.css";
import "./slider.css";

import React, { useState } from "react";

// ~comps
import Header from "../../Shared/page8/header.tsx";
import Article from "../../Shared/page8/article.tsx";
import ProcessStep from "../../Shared/page8/processStep.tsx";
import TeamItem from "../../Shared/page8/teamItem.tsx";
import Slider from "../../Shared/page8/slider.tsx";

// ~ assets
import { Check, MoveUpRight } from "lucide-react";

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
// - contacts
import __contactJpg from "../../Shared/page8/images/__contact.png";
// - teamItem
import __teamItem1 from "../../Shared/page8/images/__teamItem1.png";
import __teamItem2 from "../../Shared/page8/images/__teamItem2.png";
import __teamItem3 from "../../Shared/page8/images/__teamItem3.png";
import __teamItem4 from "../../Shared/page8/images/__teamItem4.png";
import __teamItem5 from "../../Shared/page8/images/__teamItem5.png";
import __teamItem6 from "../../Shared/page8/images/__teamItem6.png";
// - bg
import __formBg from "../../Shared/page8/images/__bg.png";
import Footer from "../../Shared/page8/footer.tsx";

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
// ~ слайды слайдера
const sliderData = [
  {
    id: 0,
    description:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence",
    name: "John Smith",
    job: "Marketing Director at XYZ Corp",
  },
  {
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae iste magnam exercitationem, cupiditate ad repudiandae reiciendis inventore ea commodi eos ipsum consequatur rerum hic voluptas maiores dicta quam eaque",
    name: "Jane Doe",
    job: "Director of Operations",
  },
  {
    id: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    name: "Michael Brown",
    job: "Senior SEO Specialist",
  },
  {
    id: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae iste magnam exercitationem",
    name: "Emily Johnson",
    job: "PPC Manager",
  },
];
// #endregion

// ___ component
// #region ~ component
export default function Page() {
  // ___ formData
  // #region
  // ~ radioBtn info
  const [radioBtn, setRadioBtn] = useState<number>(0);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  // ~ formData
  interface Data {
    name: string;
    email: string;
    msg: string;
  }
  const data = {
    name: "",
    email: "",
    msg: "",
  };
  const [formData, setFormData] = useState<Data>(data);
  // ~ validation
  const isEmpty = (): boolean => {
    // Валидация на обязательные (не пустые) поля
    let newErrors: Record<string, boolean> = {
      email: !formData.name.trim(),
      msg: !formData.msg.trim(),
    };
    setErrors(newErrors);

    setTimeout(() => setErrors({}), 500);
    return !Object.values(newErrors).includes(true);
  };

  const executeForm = () => {
    if (!isEmpty()) {
      return;
    } else {
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
      setFormData(data);
    }
  };
  // #endregion

  // ___ return
  // #region ~ return

  return (
    <div className="test8__wrapper">
      <TasksBackBtn />
      <div className="test8__section">
        <Header />
      </div>

      {/* BANNER */}
      <section className="test8__section">
        <div className="test8__banner__web --hidden">
          <div className="test8__banner__left">
            <h1>Navigating the digital landscape for success</h1>
            <p>
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div>Book a consultation</div>
          </div>
          <div className="test8__banner__right">
            <img
              src={__bannerJpg}
              alt="Navigating the digital landscape for success"
            />
          </div>
        </div>

        <div className="test8__banner__mobile">
          <div className="test8__banner__left">
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
      <section className="test8__section">
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
      <section className="test8__section">
        <div className="test8__service__wrapper">
          <h2>Services</h2>
          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="test8__section">
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

      {/* Contact */}
      <section className="test8__section">
        <div className="test8__contact__wrapper">
          <div className="test8__contact__wrapper__bg"></div>

          <div className="test8__banner__left ">
            <h2>Let’s make things happen</h2>
            <p>
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>
            <div>Get your free proposal</div>
          </div>
          <img src={__contactJpg} />
        </div>
      </section>

      {/* Case Studies */}
      <section className="test8__section">
        <div className="test8__service__wrapper">
          <h2>Case Studies</h2>
          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
      </section>

      {/* Case */}
      <section className="test8__section">
        <div className="case__wrapper">
          <div className="case__wrapper__row">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div>
              <div>
                <MoveUpRight />
              </div>
              <a href="#" className="case__wrapper--linkColor">
                learn more
              </a>
            </div>
          </div>
          <span></span>
          <div className="case__wrapper__row">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div>
              <div>
                <MoveUpRight />
              </div>
              <a href="#" className="case__wrapper--linkColor">
                learn more
              </a>
            </div>
          </div>
          <span></span>
          <div className="case__wrapper__row">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <div>
              <div>
                <MoveUpRight />
              </div>
              <a href="#" className="case__wrapper--linkColor">
                learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Working Process  */}
      <section className="test8__section">
        <div className="test8__service__wrapper">
          <h2>Our Working Process</h2>
          <p>Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="test8__section">
        <div className="test8__section--gap">
          <ProcessStep
            stepNum={"01"}
            stepTitle={"Consultation"}
            stepDescription={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <ProcessStep
            stepNum={"02"}
            stepTitle={"Research and Strategy Development"}
            stepDescription={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <ProcessStep
            stepNum={"03"}
            stepTitle={"Implementation"}
            stepDescription={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <ProcessStep
            stepNum={"04"}
            stepTitle={"Monitoring and Optimization"}
            stepDescription={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <ProcessStep
            stepNum={"05"}
            stepTitle={"Reporting and Communication"}
            stepDescription={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
          <ProcessStep
            stepNum={"06"}
            stepTitle={"Continual Improvement"}
            stepDescription={
              "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
            }
          />
        </div>
      </section>

      {/* Team  */}
      <section className="test8__section">
        <div className="test8__service__wrapper">
          <h2>Team</h2>
          <p>
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
      </section>

      {/* TeamBlock  */}
      <section className="test8__section">
        <div className="test8__teamBlock__wrapper">
          <TeamItem
            itemPic={__teamItem1}
            itemName={"John Smith"}
            itemJob={"CEO and Founder"}
            itemDescription={
              "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
            }
          />
          <TeamItem
            itemPic={__teamItem2}
            itemName={"Jane Doe"}
            itemJob={"Director of Operations"}
            itemDescription={
              "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
            }
          />
          <TeamItem
            itemPic={__teamItem3}
            itemName={"Michael Brown"}
            itemJob={"Senior SEO Specialist"}
            itemDescription={
              "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
            }
          />
          <TeamItem
            itemPic={__teamItem4}
            itemName={"Emily Johnson"}
            itemJob={"PPC Manager"}
            itemDescription={
              "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
            }
          />
          <TeamItem
            itemPic={__teamItem5}
            itemName={"Brian Williams"}
            itemJob={"Social Media Specialist"}
            itemDescription={
              "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
            }
          />
          <TeamItem
            itemPic={__teamItem6}
            itemName={"Sarah Kim"}
            itemJob={"Content Creator"}
            itemDescription={
              "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
            }
          />
        </div>
        <div className="test8__banner__left --fullWidthRightPos">
          <div>See all team</div>
        </div>
      </section>

      {/* Testimonials  */}
      <section className="test8__section">
        <div className="test8__service__wrapper">
          <h2>Testimonials</h2>
          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
            about Our Digital Marketing Services
          </p>
        </div>
      </section>

      {/* slider  */}
      <section className="test8__section">
        <div className="test8__slider__wrapper __darkTheme">
          <Slider data={sliderData} />
        </div>
      </section>

      {/* form  */}
      <section className="test8__section">
        <div className="test8__form__wrapper">
          <div className="form__wrapper__left">
            <div className="form__wrapper__left__row">
              <input
                type="radio"
                name="language"
                checked={radioBtn === 0 ? true : false}
                onClick={(e: any) => setRadioBtn(0)}
              />
              <span>Say Hi!</span>
              <input
                type="radio"
                name="language"
                checked={radioBtn === 1 ? true : false}
                onClick={(e: any) => setRadioBtn(1)}
              />
              <span>Get a Quote</span>
            </div>

            <div className="__form">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
              <span>Email*</span>
              <input
                type="text"
                placeholder="Enter Email"
                className={errors.email ? "--redMarker" : ""}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
              <span>Message*</span>
              <textarea
                placeholder="Enter message"
                className={errors.msg ? "--redMarker" : ""}
                value={formData.msg}
                onChange={(e) => {
                  setFormData({ ...formData, msg: e.target.value });
                }}
              />
              <button
                className="__whiteColor"
                onClick={() => {
                  executeForm();
                }}
              >
                Send Message
              </button>
              {isSaved && <div className="__darkColor">Данные сохранены!</div>}
            </div>
          </div>
          <img src={__formBg} className="form__wrapper__bg"></img>
        </div>
      </section>

      {/* footer  */}
      <footer className="test8__section">
        <Footer />
      </footer>
    </div>
  );
  // #endregion ~ return

  // ___ function
  // #region ~ function
  // #endregion ~ function
}
// #endregion ~ component
// #endregion ~ hlop
