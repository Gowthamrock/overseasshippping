import React, { useState, useEffect } from "react";
import Modal from "./modal/modal";
import logo from "./assets/overseas-logo-white2.png";
import "./home.css";
import bannerData from "./data/data.json";
// import Intro from "./intro/intro";
import { Link } from "react-router-dom";
import Wheel from "./flipCard/flipCard";
import servicesCard from "./data/data.json";
import SimpleSlider from "./banner/slider";
import emailIcon from "./assets/email.svg";
import clockIcon from "./assets/clock.svg";
import mobileIcon from "./assets/mobile.svg";
import Header from "./header/header";
import Application from "./accordion/accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Zoom";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import pdf from "./assets/Overseas.pdf";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const recaptchaRef = React.createRef();

function validatePhoneNumber(phoneNumber) {
  const numericPhoneNumber = phoneNumber.replace(/\D/g, "");

  if (!/^\d{5,15}$/.test(numericPhoneNumber)) {
    return false;
  }
  return true;
}
function Home() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const state = {
    name: "React",
    showCookieBar: true,
  };

  const lang = localStorage.getItem("language");
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    window.open(pdf, "_blank");
  };

  const handleModal = () => {
    setShowModal(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [yourName, setYourName] = useState("");
  // const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState(true);
  const [yourEmail, setYourEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [loading, setLoading] = useState(false);
  const key = "6LecAaEpAAAAAM-pliHwoexDQ3-f728DegZ-iO8h";
  const scrollBottom = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [errorMessage, setErrorMessage] = useState({
    yourMessage: "",
  });

  const maxWords = 150;
  const restrictedKeywords = [
    "trucking",
    "LCL",
    "LTL",
    "dryVan",
    "Logistics",
    "hazmat",
    "FTL",
    "reeferVan",
    "websites",
    "webdesign",
  ];
  const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;
  const getWords = (text) => text.trim().split(/\s+/).filter(Boolean);
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
  const handleInputChange = (value) => {
    const words = countWords(value);

    if (words <= 36) {
      let restrictValue = getWords(value).toString().split(",");
      const hasMatch = restrictedKeywords.some((item1) =>
        restrictValue.some(
          (item2) => item1.toLowerCase() === item2.toLowerCase()
        )
      );
      if (hasMatch) {
        setYourMessage("");
        window.alert("Don't use this words");
      } else {
        setYourMessage(value);
      }
      // restrictValue.forEach((element) => {
      //   console.log(restrictedKeywords.filter((x)=>x.toLowerCase == (element.trim().toLowerCase)));
      //   restrictedKeywords.forEach((x)=>{
      //     if(x.toLowerCase==element.trim().toLowerCase){
      //       setYourMessage("");
      //       window.alert("Don't use this words");
      //     }else{
      //       setYourMessage(value);
      //     }
      //   })
      // });
    } else {
      window.alert("Maximum limit exists");
    }
  };
  async function submitForm() {
    setLoading(true);
    if (yourName.length == 0) {
      alert("Enter Your Name ");
      setLoading(false);
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert("Enter a valid phone number");
      setLoading(false);
      return;
    }
    if (!emailPattern.test(yourEmail)) {
      alert("Enter a valid email address");
      setLoading(false);
      return;
    }
    if (city.length == 0) {
      alert("Enter Your City");
      setLoading(false);
      return;
    }
    // if (captchaInput !== captcha) {
    //   alert("CAPTCHA is incorrect, please try again.");
    //   setCaptcha(generateCaptcha());
    //   setCaptchaInput("");
    //   setLoading(false);
    //   return false;
    // }
    if (!captchaInput) {
      alert("Please fill out the CAPTCHA");
      setLoading(false);
      return;
    }
    if (yourMessage.trim().length === 0) {
      alert("Enter a message");
      setLoading(false);
      return;
    }

    ReactGA.event({
      category: "User Interaction",
      action: "Form is Submitted",
    });

    const formData = {
      yourName: yourName,
      yourEmail: yourEmail,
      phoneNumber: phoneNumber,
      city: city,
      yourMessage: yourMessage,
    };

    try {
      const response = await fetch(
        "https://nodejs.overseasshippinginc.com/send-email",
        {
          method: "POST",

          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setYourName("");
        setYourEmail("");
        setPhoneNumber("");
        setYourMessage("");
        setErrorMessage("");
        setCity("");
        // setCaptcha(generateCaptcha());
        setCaptchaInput(false);
        recaptchaRef.current.reset();
        setLoading(false);
        toast.success("Form submitted successfully!");
      } else {
        console.error("Failed to submit form");
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  }
  // function generateCaptcha(length = 6) {
  //   const characters =
  //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //   let captcha = "";
  //   for (let i = 0; i < length; i++) {
  //     captcha += characters.charAt(
  //       Math.floor(Math.random() * characters.length)
  //     );
  //   }
  //   return captcha;
  // }
  function onChange() {
    setCaptchaInput(true);
  }
  return (
    <div className="App">
      <main>
        <Header></Header>

        <SimpleSlider></SimpleSlider>
        <div className="servicesContianer justify-center pb-16">
          <br></br>
          <div className="w-full servicesContainer mx-auto pt-4">
            <div className="subtitle-wrap-dark1">
              <div className="subtitle-border1"></div>
              <p className="subtitle-dark1">
                {bannerData.services.banners[6].subtitle}
              </p>
            </div>{" "}
            <br></br> <br></br>
            <p className="text-white text-xl servicesTitle p-2">
              Different Services To Match Every Shipping Need
            </p>
          </div>
          <div className="servicesContainer flex justify-center">
            <div className="row padding-poster">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <Wheel
                  cardDetails={servicesCard?.services?.flipcards[0]}
                ></Wheel>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <Wheel
                  cardDetails={servicesCard?.services?.flipcards[1]}
                ></Wheel>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <Wheel
                  cardDetails={servicesCard?.services?.flipcards[2]}
                ></Wheel>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3">
                <Wheel
                  cardDetails={servicesCard?.services?.flipcards[3]}
                ></Wheel>
              </div>
            </div>
          </div>
        </div>
        <div className="row-gfz row-a78 row-2o3 vc_-xwf2 homecta-style ">
          <div className="wrapper-5b3">
            <div className="column-692 container-ccd3 col-lc6">
              <div className="column-q7i">
                <div>
                  <div className="row-gfz row-a78 row-2o3 vc_-wcs">
                    <div className="wrapper-5b3">
                      <div className="column-692 container-ccd col-ljo">
                        <div className="column-q7i">
                          <div>
                            <h3 className="style-cta" id="style-cta">
                              Need safe, reliable, and hassle-free international
                              shipping services?
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
        <div className="containerImage"></div>

        <div className="grid-4i5">
          <div className="whyContainer">
            <div id="w-n-9o5">
              <div className="subtitle-wrap">
                <p className="subtitle">Why Choose Us</p>
                <div className="subtitle-border"></div>
              </div>
              <h2 className="section-rx5">
                Your Trusted Automobile Shipping/ International Shipping Partner
              </h2>

              <div className="about-points-3yd">
                <Application></Application>
              </div>
            </div>
            {}
          </div>
        </div>

        {/* testimonials */}

        {/* Contact us */}
        <div className="section-c2o">
          <div className="container-x1r container-j59">
            <div id="w-n-zfn">
              <div className="subtitle-jie">
                <p className="subtitle-oyf">Contact</p>
                <div className="subtitle-98z"></div>
              </div>
            </div>
            <div className="row">
              <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2 className="section-maq text-icp">
                  Connect with Overseas Shipping Inc.
                </h2>
                <p className="text-icp1">
                  Thank you for considering us, please complete this form, and
                  we will reach out soon to assist with your shipment plans.
                </p>
                <div className="link-td2 style-OFr8H" id="style-OFr8H">
                  <div className="header-wow">
                    <div className="header-en2">
                      <img src={emailIcon}></img>
                    </div>
                    <div>
                      <a href="mailto:guss@overseasshippinginc.com?Subject=Some%20subject">
                        <p className="header-cah">Email</p>
                      </a>

                      {/* <a
                        href="mailto:guss@overseasshippinginc.com"
                        className="header-cah hover-c9f"
                      >
                        guss@overseasshippinginc.com
                      </a> */}
                    </div>
                  </div>
                  <div className="header-wow">
                    <div className="header-en2">
                      <img src={mobileIcon}></img>
                    </div>
                    <div>
                      <p className="header-cah">Call Us</p>
                      <a
                        href="tel:(01)7033489916"
                        className="header-cah hover-c9f"
                      >
                        (01) 703 348 9916
                      </a>
                    </div>
                  </div>
                  <div className="header-wow">
                    <div className="header-en2">
                      <img src={clockIcon}></img>
                    </div>
                    <div>
                      <p className="header-cah">Mon - Fri</p>
                      <p className="header-cah">9.00 AM - 5.00 PM ET</p>
                      <p className="header-cah">Saturday and Sunday Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-xs-12 col-sm-12 col-md-6  col-lg-6">
                <div id="w-n-zl8" style={{ float: "right" }}>
                  <div className="div-lfm">
                    <div id="ema-sqn" className="div-ji6 style-ibo21">
                      <div className=" row ">
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <input
                            className="input-rbp input-crn"
                            placeholder="Your Name*"
                            id="nam-wij"
                            value={yourName}
                            onChange={(e) => setYourName(e.target.value)}
                          ></input>
                        </div>
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          {/* <FontAwesomeIcon icon={faFlag} /> */}
                          <PhoneInput
                            className="custom-container"
                            value={phoneNumber}
                            inputClass="border-style"
                            placeholder={"PhoneNumber*"}
                            country={"us"}
                            onChange={(value) => setPhoneNumber(value)}
                          >
                            <input
                            // regions={[
                            //   "america",
                            //   "europe",
                            //   "asia",
                            //   "oceania",
                            //   "africa",
                            //   "middle-east",
                            // ]}
                            />
                          </PhoneInput>
                        </div>
                      </div>
                      <div className=" row ">
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <input
                            className="input-rbp input-crn"
                            name="email"
                            autoComplete="off"
                            placeholder="Your Email*"
                            id="ema-5m6"
                            value={yourEmail}
                            onChange={(e) => setYourEmail(e.target.value)}
                          ></input>
                        </div>
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <input
                            className="input-rbp input-crn"
                            name="field-2"
                            placeholder="City*"
                            id="fie-iik"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <textarea
                        value={yourMessage}
                        onChange={(e) => handleInputChange(e.target.value)}
                        placeholder="Your Message"
                        className="text-g881 text-g882 input-crn1"
                      >
                        <p>
                          {countWords(yourMessage)}/{maxWords} words
                        </p>
                        {errorMessage && (
                          <p style={{ color: "red" }}>{errorMessage}</p>
                        )}
                      </textarea>
                      <div className=" row ">
                        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <div
                            className="recaptcha-style"

                            // onChange={(e) => setCaptcha(e.target.value)}
                          >
                            <ReCAPTCHA
                              sitekey={key}
                              ref={recaptchaRef}
                              onExpired={() => {
                                recaptchaRef.current.reset();
                              }}
                              onChange={onChange}
                              value={captchaInput}
                            />
                          </div>
                        </div>
                        {/* <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6">
                          <input
                            className="input-rbp input-crn"
                            name="field-2"
                            placeholder="Enter the Characters*"
                            id="fie-iik"
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                          ></input>
                        </div> */}
                      </div>
                      {/* <a href="mailto:guss@overseasshippinginc.com?Subject=Some%20subject"> */}
                      <input
                        type="submit"
                        value="Submit"
                        className="button-jio button-pys"
                        onClick={() => {
                          submitForm();
                        }}
                      ></input>{" "}
                      {loading && (
                        <Spinner
                          animation="border"
                          variant="info"
                          className="spinner-style"
                        />
                      )}
                      {/* </a> */}
                    </div>
                    {}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container-lxf">
          <section className="widget-j97">
            <div className="wid-xjd autoshiping-logo-style">
              <div>
                <p>
                  <Link to="/home" className="">
                    <img src={logo} onClick={() => scrollBottom()}></img>
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
                <p>Mon - Fri</p>
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
            <br></br>
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
                        marginTop: "5px",
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
                  marginTop: "5px",
                  color: "white",
                }}
                className="arrow-style"
                onClick={() => scrollBottom()}
              />{" "}
            </BootstrapTooltip>
            <span></span>
          </section>
        </div>
        <div></div>
        <div className="copyRights">
          <h5 className="copyRights-style">
            ©2024 Overseas Shipping Inc - All Rights Reserved
          </h5>
        </div>

        {/* <div className="copyright">
  <span>Copyright © yourwebsite {new Date().getFullYear()}</span>
 </div> */}
      </footer>

      <div>
        {state.showCookieBar && (
          <CookieConsent
            onAccept={(acceptedByScrolling) => {
              if (acceptedByScrolling) {
                alert("Not Intrested");
              } else {
                alert(
                  "We use cookies to analyze website traffic and performance; we never collect personal data."
                );
              }
            }}
            enableDeclineButton
            declineButtonText="Decline"
            onDecline={() => {
              alert(
                "No cookies, please. I prefer not to have them stored on my device."
              );
            }}
            setDeclineCookie={false}
            buttonText="Accept"
            cookieName="cookies"
            buttonWrapperClasses="my-cookie-buttons"
            declineButtonClasses="declaine-buttons"
            style={{
              // backgroundColor: "black",
              backgroundImage:
                "linear-gradient(to right, rgb(9, 18, 66) 0%, #5472d2 50%, #00c1cf 120%)",
            }}
            cookieValue={`${lang}`}
          >
            <span style={{ fontSize: "20px" }}>
              By clicking &quot;Accept All Cookies&quot; you consent to Overseas
              Shipping storing cookies on your device and disclosing information
              accordingly.{" "}
            </span>
          </CookieConsent>
        )}
      </div>

      {showModal && <Modal setShowModal={setShowModal}></Modal>}
    </div>
  );
}

export default Home;
