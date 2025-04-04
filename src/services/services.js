import React, { useEffect, useState } from "react";
import "./service.css";
import Header from "../header/header";
import logo from "../assets/overseas-logo-white2.png";

// import SimpleSlider from "../banner/slider";
import serviceIntro from "../assets/services-intro.jpg";
import Wheel from "../flipCard/flipCard";
import servicesCard from "../data/data.json";
import { Link } from "react-router-dom";
// import Whyus from "../whyus/whyus";
import Tabs from "../common/tabs";
import data from "../data/data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pdf from "../assets/Overseas.pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import bannerData from "../data/data.json";
import FAQ from "../faq/faq";
import SubTab from "../common/subTab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Zoom";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
function Services() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const hashname = window.location.hash;
  const pathname = hashname.split("#")[1];
  const autoShipping = data.services.autoShipping;
  const internationalShipping = data.services.internationalShipping;
  const houseHoldShipping = data.services.houseHoldShipping;
  const wareHousing = data.services.warehousing;
  const ourApproachText = "Looking to Ship Your Automobiles Overseas?";
  const ourGoalText = "Ocean Shipping Excellence: Sail with Confidence";

  const ourMissionText =
    "Looking for a reliable way to move your belongings overseas?";
  const ourVisionText = " Need Space Solutions for Export and Local Delivery?";
  const [tabSelectedText, settabSelectedText] = useState(
    pathname == "/services/auto"
      ? ourApproachText
      : pathname == "/services/international"
      ? ourGoalText
      : pathname == "/services/household"
      ? ourMissionText
      : pathname == "/services/warehouse"
      ? ourVisionText
      : ourApproachText
  );
  const [selectTitle, setSelectedTitle] = useState(
    pathname == "/services/auto"
      ? "ourApproach"
      : pathname == "/services/international"
      ? "ourGoal"
      : pathname == "/services/household"
      ? "ourMission"
      : pathname == "/services/warehouse"
      ? "ourVision"
      : "ourApproach"
  );
  const scrollBottom = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick = () => {
    window.open(pdf, "_blank");
  };
  ReactGA.event({
    category: "User Interaction",
    action: "Form is Submitted",
  });
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    // [`& .${tooltipClasses.arrow}`]: {
    //   color: theme.palette.common.black,
    // },
    [`& .${tooltipClasses.tooltip}`]: {
      background: "linear-gradient(to right bottom, #ffb629, #ffda56)",
    },
  }));
  // const autoShippingCTA =
  //   "Trust the experts for your Auto Shipping to the Middle East, Africa & Europe !";
  // const internationalShippingCTA =
  //   "Call us and get the Best Shipping Service and Price for your Export Cargo !";
  // const householdShippingCTA =
  //   "Need safe, reliable, and hassle-free International Shipping Services ?";
  // const warehouseShippingCTA =
  //   "Unlock Safe and Swift Warehousing and Crossdocking Services ?";

  useEffect(() => {
    // Your logic to fetch or update data based on the new URL
    const title =
      pathname == "/services/auto"
        ? "ourApproach"
        : pathname == "/services/international"
        ? "ourGoal"
        : pathname == "/services/household"
        ? "ourMission"
        : pathname == "/services/warehouse"
        ? "ourVision"
        : "ourApproach";
    const tab =
      pathname == "/services/auto"
        ? ourApproachText
        : pathname == "/services/international"
        ? ourGoalText
        : pathname == "/services/household"
        ? ourMissionText
        : pathname == "/services/warehouse"
        ? ourVisionText
        : ourApproachText;
    fetchData(title, tab, pathname);
  }, [pathname]);
  const top = window.innerWidth <= 768 ? 2650 : 1650;
  const fetchData = async (title, tab, pathname) => {
    setSelectedTitle(title);
    settabSelectedText(tab);
    if (pathname != "/services") {
      window.scrollTo({ top: top, behavior: "smooth" });
    }
  };
  // const [selectTitle, setSelectedTitle] = useState(
  //   pathname == "/services/auto"
  //     ? "ourApproach"
  //     : pathname == "/services/international"
  //     ? "ourGoal"
  //     : pathname == "/services/houseHold"
  //     ? "ourMission"
  //     : pathname == "/services/wareHouse"
  //     ? "ourVision"
  //     : "ourApproach"
  // );
  // const [tabSelectedText, settabSelectedText] = useState(
  //   pathname == "/services/auto"
  //     ? ourApproachText
  //     : pathname == "/services/international"
  //     ? ourGoalText
  //     : pathname == "/services/houseHold"
  //     ? ourMissionText
  //     : pathname == "/services/wareHouse"
  //     ? ourVisionText
  //     : ourApproachText
  // );
  const onTabSelect = (tab) => {
    if (tab === 1) {
      settabSelectedText(ourApproachText);
      setSelectedTitle("ourApproach");
    } else if (tab === 2) {
      settabSelectedText(ourGoalText);
      setSelectedTitle("ourGoal");
    } else if (tab === 3) {
      settabSelectedText(ourMissionText);
      setSelectedTitle("ourMission");
    } else if (tab === 4) {
      settabSelectedText(ourVisionText);
      setSelectedTitle("ourVision");
    }
  };

  return (
    <div className="aboutUs servicePage">
      <Header></Header>
      {/* <SimpleSlider></SimpleSlider> */}
      <div className="single-slide-container1">
        <div className="slide w-full">
          <div className="servicebanner-image" alt="shipping-services"></div>

          <div className="title-c6g slideText3">
            <div className="subtitle-wrap-dark">
              <div className="subtitle-border"></div>
              <p className="subtitle-dark">
                {bannerData.services.banners[6].subtitle}
              </p>
            </div>

            <h1 className="page-title">
              {bannerData.services.banners[6].pageTitle}
            </h1>
            {/* <p className="text-white">{bannerData.services.banners[0].description}</p> */}
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <div className="card-header">
        <h2 className="section2">
          Expert Overseas Shipping for<br></br>Cars, Homes, and Trade Cargo!
        </h2>
        <h3 className="subsection1">
          Delivering Worldwide: Middle East,<br></br> Africa, Europe Shipping
          Experts!
        </h3>
      </div>
      <Container>
        <Row xs={12} md={12} lg={12} xl={12} xll={12}>
          <Col xs={12} md={6} lg={6} xl={6} xll={6}>
            <div className="width-coloum overImgContainer">
              <img
                src={serviceIntro}
                className="image-style"
                alt="automobile-loading"
              ></img>
            </div>
          </Col>

          <Col xs={12} md={6} lg={6} xl={6} xll={6}>
            {" "}
            <div className="width-coloum overTextContainer">
              <div className="subtitle1">
                <span className="titleText1">Shipping Services</span>
              </div>{" "}
              <br></br>
              <p className="description1">
                At Overseas Shipping Inc, we specialize in seamless
                international shipping, offering expert packing and reliable
                transportation for cargos of any size. Based in Rosedale,
                Maryland, as a US licensed NVOCC, we ensure a stress-free
                shipping experience that delivers complete peace of mind.
              </p>
              <p className="description1">
                Our commitment to safety and efficiency extends across Air
                Cargo, Ocean Container Shipping, and Inland Freight services.
                With long-standing partnerships, we ensure secure, dependable,
                and on-time delivery of goods to desired destinations.
              </p>
              <p className="description1">
                Trust Overseas Shipping Inc for car shipping, home moves, or
                exports. With hassle-free international shipping via Air, Sea &
                Land, benefit from our specialization in Automobile Shipping,
                Container Shipping, and comprehensive services like Warehousing,
                Crossdocking, and Project Logistics. Stress-free shipping is
                just a conversation away!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <div className="servicesContianer justify-center pb-16">
        <div className="w-full servicesContainer mx-auto pt-4">
          <p className="text-white text-xl servicesTitle1 p-2">
            Smart Multimodal Shipping Solutions
          </p>
        </div>
        <div className="servicesContainer flex justify-center ">
          <div className="row padding-poster ">
            <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-4 ">
              <Wheel
                cardDetails={servicesCard?.services?.flipcardsservices[0]}
              ></Wheel>
            </div>
            <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-4 ">
              <Wheel
                cardDetails={servicesCard?.services?.flipcardsservices[1]}
              ></Wheel>
            </div>
            <div className=" col-xs-6 col-sm-6 col-md-6 col-lg-4 ">
              <Wheel
                cardDetails={servicesCard?.services?.flipcardsservices[2]}
              ></Wheel>
            </div>
          </div>
        </div>
      </div>
      <div className="tabContainer-common">
        <div className="tabContainer">
          <h2 className="section-rx6 tab-heading">
            Shipping Services For Every Need
          </h2>
          <div className="tabHeader row">
            <div className=" service-tab-style col-xs-6 col-sm-6 col-md-3 col-lg-3 colxl-3">
              <button
                className={
                  "tableh1-btn " +
                  (selectTitle == "ourApproach" ? "active" : "")
                }
                onClick={() => onTabSelect(1)}
              >
                {" "}
                Auto Moblie/RORO Shipping
              </button>
            </div>

            <div className=" service-tab-style col-xs-6 col-sm-6 col-md-3 col-lg-3 colxl-3">
              <button
                className={
                  "tableh1-btn   " + (selectTitle == "ourGoal" ? "active" : "")
                }
                onClick={() => onTabSelect(2)}
              >
                International Trade Shipping{" "}
              </button>
            </div>

            <div className=" service-tab-style col-xs-6 col-sm-6 col-md-3 col-lg-3 colxl-3">
              <button
                className={
                  "tableh1-btn  " +
                  (selectTitle == "ourMission" ? "active" : "")
                }
                onClick={() => onTabSelect(3)}
              >
                Household Cargo Shipping
              </button>
            </div>

            <div className=" service-tab-style col-xs-6 col-sm-6 col-md-3 col-lg-3 colxl-3">
              <button
                className={
                  "tableh1-btn  " + (selectTitle == "ourVision" ? "active" : "")
                }
                onClick={() => onTabSelect(4)}
              >
                Warehousing & Crossdocking
              </button>
            </div>
          </div>
          <div className="tabContent">
            <div className="ourApproachTab">
              <h2 className="tabheader-style">{tabSelectedText}</h2>
              {/* <button className="btn learnMore">Learn More</button> */}
              <Tabs
                data={
                  selectTitle == "ourApproach"
                    ? autoShipping
                    : selectTitle == "ourGoal"
                    ? internationalShipping
                    : selectTitle == "ourMission"
                    ? houseHoldShipping
                    : selectTitle == "ourVision"
                    ? wareHousing
                    : selectTitle
                }
                className="tab-container1"
              ></Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row-gfz row-a78 row-2o3 vc_-xwe">
        <div className="wrapper-5b2">
          <div className="column-691 container-ccd col-lc6">
            <div className="column-q7i">
              <div>
                <div className="row-gfz row-a78 row-2o3 vc_-wcs">
                  <div className="wrapper-5b2">
                    <div className="column-691 container-ccd col-ljo">
                      <div className="column-q7i">
                        <div>
                          <h3 className="style-hAiIr" id="style-hAiIr">
                            For Booking Your Auto Shipment
                          </h3>
                          <h3>
                            Call us at 703 348 9916 | Email to
                            sales@overseasshippinginc.com | Fill and submit the
                            form
                          </h3>
                          <p>Smooth Sailing with Overseas Shipping Inc!</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="servicesContianer justify-center pb-16">
        <div className="w-full servicesContainer mx-auto pt-4">
          <p className="text-white text-xl servicesTitle p-2">
            Smart Multimodal Shipping Solutions: Seamlessly Connecting Your
            Cargo Worldwide
          </p>
        </div>
        <div className="servicesContainer flex justify-center">
          <Wheel cardDetails={servicesCard?.services?.flipcards[0]}></Wheel>
          <Wheel cardDetails={servicesCard?.services?.flipcards[1]}></Wheel>
          <Wheel cardDetails={servicesCard?.services?.flipcards[2]}></Wheel>
          <Wheel cardDetails={servicesCard?.services?.flipcards[3]}></Wheel>
        </div>
      </div> */}
      {/* <div className="whyContainer flex">
        <Whyus></Whyus>
      </div> */}
      <div className="subtabContainer-common">
        <h3 className="section-rx7 tab-heading">Reach Overseas Destinations</h3>
        <div className="">
          <SubTab
            data={data.services.countrytab}
            className="tab-container1 container-background"
          ></SubTab>
        </div>
      </div>
      <div className="faqConatiner">
        <div className="subtitle2">
          <span className="titleText">Shipping FAQ&lsquo;s</span>
        </div>
        <h2 className="section-rx7">Your Journey to Hassle-Free Shipping</h2>
        <br></br>
        <FAQ></FAQ>
      </div>
      {/* <div className="row-gfz row-a78 row-2o3 vc_-xwe">
        <div className="wrapper-5b2">
          <div className="column-691 container-ccd col-lc6">
            <div className="column-q7i">
              <div>
                <div className="row-gfz row-a78 row-2o3 vc_-wcs">
                  <div className="wrapper-5b2">
                    <div className="column-691 container-ccd col-ljo">
                      <div className="column-q7i">
                        <div>
                          <h3 className="style-hAiIr" id="style-hAiIr">
                            {selectTitle == "ourApproach"
                              ? autoShippingCTA
                              : selectTitle == "ourGoal"
                              ? internationalShippingCTA
                              : selectTitle == "ourMission"
                              ? householdShippingCTA
                              : selectTitle == "ourVision"
                              ? warehouseShippingCTA
                              : selectTitle}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="column-691 container-ccd col-vex">
                      <div className="column-q7i">
                        <div>
                          <div className="container-w3w btn-nwx">
                            <a
                              className="vc_-p58 btn-k2a btn-vz9 btn-gak btn-mdo btn-qkd"
                              href="#"
                            >
                              Book your shipment
                            </a>
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
      </div> */}
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
                <img src=""></img>
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
              <h4>Quicklinks</h4>
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

export default Services;
