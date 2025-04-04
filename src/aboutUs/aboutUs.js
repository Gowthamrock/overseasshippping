import React, { useState, useRef, useEffect } from "react";
import "./aboutus.css";
import logo from "../assets/overseas-logo-white2.png";
import Header from "../header/header";
import { Link } from "react-router-dom";
import Application from "../accordion/accordion";
import bannerData from "../data/data.json";
import Modal from "../modal/modal";
import pdf from "../assets/Overseas.pdf";
import aboutusIntro from "../assets/about-us (1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Zoom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactGA from "react-ga";

function Aboutus() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  const [slidesCount, setSlidesCount] = useState(
    window.innerWidth <= 980 ? 20 : 10
  );

  let slide = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      changeSlide(false);
      setSlidesCount(window.innerWidth <= 980 ? 20 : 10);
    };

    handleResize();
    changeSlide(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const maxLeft = (slidesCount - 1) * 100 * -1;

  let current = 0;

  function changeSlide(next = true) {
    if (next) {
      current = current > maxLeft ? current - 100 : maxLeft;
    } else {
      current = current < 0 ? current + 100 : 0;
    }

    if (slide.current) {
      slide.current.style.left = current + "%";
    }
  }

  const ourVisionText =
    "Be a reliable global customer-centric logistics provider, delivering reliability, economy, time and high customer satisfaction.";

  const ourMissionText =
    "Align with distinguished road, sea and air cargo carriers to ship all types of goods, safely across the globe.";

  const ourValueText =
    "Customer satisfaction is central to our business. We go above and beyond to ensure nothing is left to chance or quality. Which is why we pride on customer partnership. When they win, we feel delighted.";
  const ourVissionText =
    "our most advanced logistic solution yet. It incorporates all eServices into one portal, giving you maximum support at every stage of your supply chain. From tracking and scheduling to booking and reporting, eSchenker has your logistics covered.";
  const [selectTitle, setSelectedTitle] = useState("ourApproach");
  const [tabSelectedText, settabSelectedText] = useState(ourVisionText);
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick = () => {
    window.open(pdf, "_blank");
  };
  ReactGA.event({
    category: "User",
    action: "Form is Submitted",
  });
  const navigate = useNavigate();
  const scrollBottom = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const onTabSelect = (tab) => {
    if (tab === 1) {
      settabSelectedText(ourVisionText);
      setSelectedTitle("ourApproach");
    } else if (tab === 2) {
      settabSelectedText(ourMissionText);
      setSelectedTitle("ourGoal");
    } else if (tab === 3) {
      settabSelectedText(ourValueText);
      setSelectedTitle("ourMission");
    } else if (tab === 4) {
      settabSelectedText(ourVissionText);
      setSelectedTitle("ourVission");
    }
  };
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      background: "linear-gradient(to right bottom, #ffb629, #ffda56)",
    },
  }));
  return (
    <div className="aboutUs">
      <Header></Header>
      <div className="single-slide-container1">
        <div className="slide w-full">
          <div
            className="aboutusbanner-image"
            alt="international forwarding"
          ></div>

          <div className="title-c6g slideText3">
            <div className="subtitle-wrap-dark">
              <div className="subtitle-border"></div>
              <p className="subtitle-dark">
                {bannerData.services.banners[5].subtitle}
              </p>
            </div>

            <h1 className="page-title">
              {bannerData.services.banners[5].pageTitle}
            </h1>
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <div className="card-header">
        <h2 className="section2">
          Your Gateway to Seamless <br></br> Global Shipping !
        </h2>
        <h3 className="subsection1">
          From Auto Transport to Container Shipping, <br></br> count on us for
          hassle-free, reliable,and <br></br> competitive International Shipping
          Services.
        </h3>
      </div>
      <Container>
        <Row xs={12} md={12} lg={12} xl={12} xll={12}>
          <Col xs={12} md={6} lg={6} xl={6} xll={6}>
            <div className="width-coloum overImgContainer">
              <img src={aboutusIntro} className="aboutus-image-style"></img>
            </div>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6} xll={6}>
            {" "}
            <div className="width-coloum overTextContainer">
              <div className="subtitle">
                <span className="titleText">About Us</span>
              </div>{" "}
              <br></br>
              <p className="description1">
                For cars, homes, or goods, rely on us. A licensed NVOCC based in
                Rosedale, MD, USA, we ensure hassle-free international shipping
                by Air, Sea & Land.
              </p>
              <p className="description1">
                Specializing in Auto Shipping (Container and RORO), Container
                Shipping for Household and Export Goods, plnus services like
                Warehousing, Crossdocking, and Project Logistics. Enjoy safe
                packing, top-notch service, and competitive rates.
              </p>
              <p className="description1">
                Globally positioned, we track, document, and respond
                efficiently. Stress-free international shipping, just a call
                away !
              </p>
              <br></br>
              <div className="tabContainer">
                <div className="tabHeader flex">
                  <button
                    className={
                      "btn " + (selectTitle == "ourApproach" ? "active" : "")
                    }
                    onClick={() => onTabSelect(1)}
                  >
                    Vision
                  </button>
                  <button
                    className={
                      "btn " + (selectTitle == "ourGoal" ? "active" : "")
                    }
                    onClick={() => onTabSelect(2)}
                  >
                    Mission
                  </button>
                  <button
                    className={
                      "btn " + (selectTitle == "ourMission" ? "active" : "")
                    }
                    onClick={() => onTabSelect(3)}
                  >
                    Values
                  </button>
                </div>
                <div className="tabContent">
                  <div className="ourApproachTab">
                    <p>{tabSelectedText}</p>
                    <button
                      className="btn learnMore"
                      onClick={() => navigate("/services")}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="containerImage"></div>
      <div className="grid-4i5">
        <div className="whyContainer">
          <div id="w-n-9o5">
            <div className="subtitle-wrap">
              <p className="subcontenttitle">Why Choose Us</p>
              <div className="subtitle-border"></div>
            </div>
            <h2 className="section-rx5 section-header">
              Your Trusted Automobile Shipping/International Trade Shipping
              Partner
            </h2>

            <div className="about-points-3yd">
              <Application></Application>
            </div>
          </div>
        </div>
      </div>
      <div className="section-kt1">
        <div className="container-rwt overflow-wxy container-kvh">
          <div>
            <div className="subtitle-a6c">
              <p className="subtitle-qto">Testimonials</p>
              <div className="subtitle-aqf"></div>
            </div>
            <h2 className="section-bjn"></h2>
          </div>

          <div className="carousel">
            <div
              className="slides  testimonial-slide"
              ref={slide}
              style={{ left: 0, transition: "left 0.5s ease" }}
            >
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Mohammed Shaharani</h3>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    Working with Overseas Shipping was great! We didn&apos;t
                    have a lot of furniture but did have many boxes and some
                    fragile items. Overseas Shipping managed to keep all our
                    stuff from breaking or scratching by packing it the right
                    way and were working efficiently the whole time.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Hisham Majeed
                        </h3>
                        <p className="author-j5t style-7p6Sv" id="style-7p6Sv">
                          Jeddah, Saudi Arabia
                        </p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    Excellent experience, from beginning to end. Pricing was
                    reasonable and well-explained when I first contacted them.
                    The team was responsive by email and phone before my move
                    and was proactive. On the day of the move, my three-man team
                    showed up on time, were friendly and knowledgeable.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3"> David</h3>
                        <p className="author-j5t">Tema, Ghana</p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    Overseas Shipping handled the shipment of my car
                    professionally from the show room in USA to Tema. They
                    cleared all custom papers too.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Jim Wise
                        </h3>
                        <p className="author-j5t style-7p6Sv" id="style-7p6Sv">
                          Germany
                        </p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    My vehicle arrived on time with no damage and on time.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Ali Wahdan</h3>
                        <p className="author-j5t">Algeria</p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    Excellent Service. The representatives were kind,
                    informative and courteous. My vehicle got to the destination
                    in a timely fashion and in one piece. I would recommend
                    highly to anyone that is looking to ship their vehicle.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Timmy Smith
                        </h3>
                        <p className="author-j5t style-7p6Sv" id="style-7p6Sv">
                          UK
                        </p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    I got my car in London. Everything went smooth. No scratches
                    or dents. I actually went shopping around, but these guys
                    were the cheapest and seemed to be the most reliable. I only
                    had to communication with them a couple times through the
                    process to know the approximate shipping date.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Abdulrahman Alsaleh</h3>
                        <p className="author-j5t">England</p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    Excellent and fast service, documented procedures, express
                    delivery, I recommend dealing with them.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Nancy White
                        </h3>
                        <p className="author-j5t style-7p6Sv" id="style-7p6Sv">
                          Houston, TX
                        </p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    My experience with Overseas Shipping was nothing but
                    positive… The service I received was exemplary… very
                    personal and put me at great ease that my vehicle would
                    arrive safely and promptly to its destination. I recommend
                    you to all my friends looking to ship their cars. You are
                    simply the best.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Hope4life</h3>
                        <p className="author-j5t">Tema, Ghana</p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    The entire process of booking transportation with them was
                    easy from start to finish. Everything was done right on
                    schedule and the cost was quite reasonable given the
                    distance. I’ll definitely recommend this company.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Charles Chinka
                        </h3>
                        <p className="author-j5t style-7p6Sv" id="style-7p6Sv">
                          Nigeria
                        </p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    Found this company online and decided to hire them to move
                    my car for me based on the really good customer service I
                    got, plus the price was right in my budget. No complaints at
                    all, everything was on time and under budget.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Sales Adam</h3>
                        <p className="author-j5t">Nigeria</p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    An excellent company and more than wonderful treatment by
                    workers and affordable prices for everyone. I wish them
                    success and more prosperity (I was pleased to deal with them
                    and God willing, they will continue with them).
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Jonathan Paradis
                        </h3>
                        <p
                          className="author-j5t style-7p6Sv"
                          id="style-7p6Sv"
                        ></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    Esta muy cómodo y bonito para todo
                  </p>
                </div>
              </div>

              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Jessy Cruz</h3>
                        <p className="author-j5t"></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">Good and fast service.</p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Adnan Laswad
                        </h3>
                        <p
                          className="author-j5t style-7p6Sv"
                          id="style-7p6Sv"
                        ></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    Fast shipping, honest customer service . I really recommend
                    it for anyone who want to ship overseas.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Ron Absher</h3>
                        <p className="author-j5t"></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    Overseas Shipping is a first-rate company, friendly and easy
                    to deal with.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Zain H
                        </h3>
                        <p
                          className="author-j5t style-7p6Sv"
                          id="style-7p6Sv"
                        ></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    An amazing experience shipping my 40-foot container.
                    Excellent service and workers. Very fast shipping as well.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3">Howard Carter</h3>
                        <p className="author-j5t"></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    The service was great. Highly recommend!
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          Mustafa Mabruk
                        </h3>
                        <p
                          className="author-j5t style-7p6Sv"
                          id="style-7p6Sv"
                        ></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    Great service! Nice people to deal with, especially Aziz &
                    Ahmed.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-YArlP" id="style-YArlP">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      {/* <div className="image-2v9">
                          <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c8cd4a23ecaaff91a4396c_author-image-1.jpg" width="91" className="image-jlk"></img>
                        </div> */}
                      <div>
                        <h3 className="author-jl3">Rima Hossain</h3>
                        <p className="author-j5t"></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="person_detail">
                    Excellent service and friendly staff. Shipped a container
                    from USA to Saudi Arabia. Still deliver on time with no
                    damages.
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="card-aqx style-WGtil" id="style-WGtil">
                  <div className="testimonial-top-ni8">
                    <div className="testimonial-author-8jm">
                      <div>
                        <h3 className="author-jl3 style-LC6Og" id="style-LC6Og">
                          David Ahinful
                        </h3>
                        <p
                          className="author-j5t style-7p6Sv"
                          id="style-7p6Sv"
                        ></p>
                      </div>
                    </div>
                    <div className="icon-ehy yellow-ovm">
                      <img src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63c90552ec00415c71ab3b34_quote-icon.svg"></img>
                    </div>
                  </div>
                  <p className="style-aXEXt" id="style-aXEXt">
                    This is the best place for shipping I have observed I
                    recommend you guys to ship with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carouselArrow flex justify-center">
            <div
              className="row-va2 slide-hi8 style-KTGA2"
              id="style-KTGA2"
              onClick={() => changeSlide(false)}
            >
              <div className="hid-fp1 slide-8tf"></div>
              <img
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a690a1a014a5b94ceef00a_testimonial-left-arrow.png"
                className="style-vnoDw"
                id="style-vnoDw"
              ></img>
            </div>
            <div
              className="row-v6h slide-y5b style-iXr2r"
              id="style-iXr2r"
              onClick={() => changeSlide(true)}
            >
              <div className="hid-fp1 slide-l4v"></div>
              <img
                src="https://assets.website-files.com/63a43a1633ad3e2a969a6958/63a68e3c0aa24416f9724b30_testimonial-right-arrow.png"
                className="style-xOlIt"
                id="style-xOlIt"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="row-gfz row-a78 row-2o3 vc_-xwe2">
        <div className="wrapper-5b2">
          <div className="column-691 container-ccd2 col-lc6 ">
            <div className="column-q7i">
              <div>
                <div className="row-gfz row-a78 row-2o3 vc_-wcs">
                  <div className="wrapper-5b2">
                    <div className="column-691 container-ccd col-ljo">
                      <div className="column-q7i">
                        <div>
                          <h3 className="style-hAiIr" id="style-hAiIr">
                            For safe, reliable, and hassle-free international
                            shipping services ?
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="column-691 container-ccd col-vex">
                      <div className="column-q7i">
                        <div>
                          <div className="container-w3w btn-nwx">
                            <Link
                              to="#"
                              className="vc_-p58 btn-k2a btn-vz9 btn-gak btn-mdo btn-qkd"
                              onClick={handleModal}
                            >
                              Book your shipment
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
      <footer>
        <div className="container-lxf">
          <section className="widget-j97">
            <div className="wid-xjd autoshiping-logo-style">
              <div>
                <p>
                  <Link to="/home" className="" onClick={() => scrollBottom()}>
                    <img src={logo}></img>
                  </Link>
                </p>
                <span className="lin-344"></span>
                <p>Auto Shipping and International Shipping Experts</p>
              </div>
              <BootstrapTooltip
                title={
                  <h6 style={{ color: "black", marginTop: "5px" }}>
                    Click Here
                  </h6>
                }
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                slotProps={{
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                        {
                          marginTop: "5px",
                          marginLeft: "220px",
                        },
                    },
                  },
                }}
              >
                <img className="certificate-style" onClick={handleClick}></img>
              </BootstrapTooltip>
            </div>
          </section>
          <section className="widget-j97">
            <div className="wid-xjd">
              <h4>Address</h4>
              <span className="lin-344"></span>
              <div>
                <p>Head Office:</p>
                <p> 7020 Quad Ave. </p>

                <p>Rosedale, MD. 21237</p>
                <p>USA</p>
                <p>Working Hours: 9.00 AM to 5.00 PM ET</p>
                <p>Monday to Friday</p>
                <p>Saturday and Sunday Closed</p>
                <p>Contact Phone No. 703-348-9916</p>
              </div>
            </div>
          </section>
          <section className="widget-j97">
            <div className="wid-xjd">
              <h4>Quick Links</h4>
              <span className="lin-344"></span>
              <div>
                <Link
                  to="/services"
                  className=""
                  onClick={() => scrollBottom()}
                >
                  <p>Services</p>
                </Link>
                <Link
                  to="/about-us"
                  className=""
                  onClick={() => scrollBottom()}
                >
                  <p>About Us</p>
                </Link>
                <Link
                  to="/info-center/terms"
                  className=""
                  onClick={() => scrollBottom()}
                >
                  <p>Info Center</p>
                </Link>
              </div>
            </div>
          </section>
          <section className="widget-j97">
            <div className="wid-xjde contact-style">
              <Link
                to="/contact-us"
                className=""
                onClick={() => scrollBottom()}
              >
                <h4>Contact Us</h4>
              </Link>
              <span className="lin-3441"></span>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.7444294108345!2d-76.52127449999999!3d39.3048152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803fcf859da91%3A0x9ccf6c95e63addfe!2sOverseas%20Shipping%20Inc!5e1!3m2!1sen!2sin!4v1704432785775!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <BootstrapTooltip
              title={
                <h6 style={{ color: "black", marginTop: "5px" }}>
                  Return To Top
                </h6>
              }
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              slotProps={{
                popper: {
                  sx: {
                    [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: "20px",
                        marginLeft: "220px",
                      },
                  },
                },
              }}
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                style={{
                  fontSize: "12px",
                  marginTop: "20px",
                  color: "white",
                  marginLeft: "10%",
                }}
                className="arrow-style1"
                onClick={() => scrollBottom()}
              />{" "}
            </BootstrapTooltip>
          </section>
        </div>
        <div className="copyRights">
          <h5 className="copyRights-style">
            ©2024 Overseas Shipping Inc - All Rights Reserved
          </h5>
        </div>
      </footer>
    </div>
  );
}

export default Aboutus;
