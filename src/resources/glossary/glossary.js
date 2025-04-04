import React from "react";
import Header from "../../header/header";
import logo from "../../assets/overseas-logo-white2.png";
// import SimpleSlider from "../../banner/slider";
import "./glossary.css";
import Tabs from "../../common/tabs";
import { Link } from "react-router-dom";
import pdf from "../../assets/Overseas.pdf";
import data from "../../data/data.json";
import bannerData from "../../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Zoom";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Glossary() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  // const bannerData = data.services.glossary;

  const scrollBottom = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleClick = () => {
    window.open(pdf, "_blank");
  };
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
  return (
    <div className="aboutUs">
      <Header></Header>
      {/* <SimpleSlider></SimpleSlider> */}
      <div className="single-slide-container1">
        <div className="slide w-full">
          <div className="glossarybanner-image" alt="shipping-terms"></div>

          <div className="title-c6g slideText3">
            <div className="subtitle-wrap-dark">
              <div className="subtitle-border"></div>
              <p className="subtitle-dark">
                {bannerData.services.glossary[0].subtitle}
              </p>
            </div>

            <h1 className="page-title">
              {bannerData.services.glossary[0].pageTitle}
            </h1>
          </div>
        </div>
      </div>

      <Tabs data={data.glossary}></Tabs>
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
              {/* <div>
                <p>
                  Vision & Mission
                </p>
                <p>
                  Why Us
                </p>
                <p>
                  Testimonials
                </p>
                <p>
                  Careers
                </p>
              </div> */}
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

export default Glossary;
