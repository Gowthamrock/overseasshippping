import Header from "../header/header";
import logo from "../assets/overseas-logo-white2.png";
import pdf from "./../assets/Overseas.pdf";
import React, { useState } from "react";
import "./contact.css";
import bannerData from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Zoom";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/dist/ReactToastify.css";
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
function Contactus() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const handleClick = () => {
    window.open(pdf, "_blank");
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

  // Function to check for restricted words
  // const containsRestrictedWords = (text) => {
  //   return restrictedKeywords.some((word) =>
  //     text.toLowerCase().includes(word.toLowerCase())
  //   );
  // };

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
    // if (yourMessage.trim().length === 0) {
    //   alert("Enter a message");
    //   setLoading(false);
    //   return;
    // }
    // if (containsRestrictedWords(yourMessage)) {
    //   setErrorMessage("Your message contains restricted words. Please remove them.");
    //   setLoading(false);
    //   return;
    // }
    // if (captchaInput !== captcha) {
    //   alert("CAPTCHA is incorrect, please try again.");
    //   setCaptcha(generateCaptcha());
    //   setCaptchaInput("");
    //   setLoading(false);
    //   return false;
    // }
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
    <>
      <div className="aboutUs">
        <Header></Header>
        {/* <SimpleSlider></SimpleSlider> */}
        <div className="single-slide-container">
          <div className="slide w-full">
            <div className="contactbanner-image" alt="contact-us"></div>
            <div className="title-c6g slideText3">
              <div className="subtitle-wrap-dark">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark">
                  {bannerData.services.glossary[2].subtitle}
                </p>
              </div>

              <h1 className="page-title">
                {bannerData.services.glossary[2].pageTitle}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="section-c2o">
        <div className="container-x1r container-j59">
          <div id="w-n-zfn">
            <div className="subtitle-jie">
              <p className="subtitle-oyf">Contact Us</p>
              <div className="subtitle-98z"></div>
            </div>
            <div className="row">
              <div className=" col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.269411070428!2d-76.5238494206666!3d39.30481623595699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c806ec368d85c9%3A0xb7c691848a7a9a89!2s7020%20Quad%20Ave%2C%20Rosedale%2C%20MD%2021237%2C%20USA!5e0!3m2!1sen!2sin!4v1698564459218!5m2!1sen!2sin"
                    width="550"
                    height="400"
                    loading="lazy"
                    className="map-container-2"
                  ></iframe>
                </div>
              </div>
              <div className=" col-xs-12 col-sm-12 col-md-12  col-lg-6">
                <div id="w-n-zl8">
                  <div className="div-lfm">
                    <div
                      id="ema-sqn"
                      className="div-ji6 style-ibo21 contact-form"
                    >
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
                          <PhoneInput
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
                        placeholder="Your Message"
                        className="text-g88 input-crn"
                        value={yourMessage}
                        onChange={(e) => handleInputChange(e.target.value)}
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
                          <div className="recaptcha-style">
                            <ReCAPTCHA
                              sitekey={key}
                              ref={recaptchaRef}
                              onExpired={() => {
                                recaptchaRef.current.reset();
                              }}
                              onChange={onChange}
                              value={captchaInput}
                            />
                            {/* {captcha} */}
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
                      <input
                        type="submit"
                        value="Submit"
                        className="button-jio button-pys"
                        onClick={() => {
                          submitForm();
                        }}
                      ></input>
                      {loading && (
                        <Spinner
                          animation="border"
                          variant="info"
                          className="spinners-style"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <Link className="/contact-us" onClick={() => scrollBottom()}>
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
            ©2025 Overseas Shipping Inc - All Rights Reserved
          </h5>
        </div>
      </footer>
    </>
  );
}

export default Contactus;
