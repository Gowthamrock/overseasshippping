import React from "react";
import "./servicemodal.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ReactGA from "react-ga";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "react-bootstrap/Spinner";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const recaptchaRef = React.createRef();

import Multiselect from "multiselect-react-dropdown";
function validatePhoneNumber(contactPhone) {
  const numericPhoneNumber = contactPhone.replace(/\D/g, "");

  if (!/^\d{5,15}$/.test(numericPhoneNumber)) {
    return false;
  }
  return true;
}
function Modal({ setShowModal }) {
  const closeModal = () => {
    setShowModal(false);
  };
  const [enterYourName, setEnterYourName] = useState("");
  const [enterYourCompanyName, setEnterYourCompanyName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [originPort, setOriginPort] = useState("");
  const [destinationPort, setDestinationPort] = useState("");
  // const [captcha, setCaptcha] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState(true);
  const [yourMessage, setYourMessage] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [loading, setLoading] = useState(false);
  const key = "6LecAaEpAAAAAM-pliHwoexDQ3-f728DegZ-iO8h";

  // Options for the Multiselect component
  const options = [
    { cat: "Group 1", key: "Auto Shipping" },
    { cat: "Group 1", key: "International Trade Shipping" },
    { cat: "Group 1", key: "Household Shipping" },
    { cat: "Group 2", key: "Warehousing and Crossdocking" },
    { cat: "Group 2", key: "Others" },
  ];
  const handleSelectionChange = (selectedItems) => {
    setSelectedValues(selectedItems);
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

    if (enterYourName.length == 0) {
      alert("Enter Your Name ");
      setLoading(false);
      return;
    }

    if (enterYourCompanyName.length == 0) {
      alert("Enter Your Company Name");
      setLoading(false);
      return;
    }

    if (!validatePhoneNumber(contactPhone)) {
      alert("Enter a valid phone number");
      setLoading(false);
      return;
    }
    if (!emailPattern.test(enterEmail)) {
      alert("Enter a valid email address");
      setLoading(false);
      return;
    }

    if (originPort.length == 0) {
      alert("Enter Your Origin Port");
      setLoading(false);
      return;
    }
    if (destinationPort.length == 0) {
      alert("Enter Your Destination Port");
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
      enterYourName: enterYourName,
      enterYourCompanyName: enterYourCompanyName,
      contactPhone: contactPhone,
      enterEmail: enterEmail,
      originPort: originPort,
      destinationPort: destinationPort,
      yourMessage: yourMessage,
      selectedValues: selectedValues,
    };

    try {
      const response = await fetch(
        "https://nodejs.overseasshippinginc.com/send-modal-email",
        {
          method: "POST",

          body: JSON.stringify(formData), // Send formData directly without wrapping it
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Clear form fields after successful submission
        setEnterYourName("");
        setEnterYourCompanyName("");
        setContactPhone("");
        setOriginPort("");
        setDestinationPort("");
        setYourMessage("");
        setErrorMessage("");
        setSelectedValues("");
        setEnterEmail("");
        // setCaptcha(generateCaptcha());
        setCaptchaInput(false);
        recaptchaRef.current.reset();
        setSelectedValues("");
        setShowModal(false);
        setLoading(false);
        toast.success("Form submitted successfully!");
      } else {
        console.error("Failed to submit form");
        toast.error("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }

    return true;
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
    <div className="modalContainer">
      <div className="Overlay" onClick={closeModal}></div>
      <div className="Containerservice p-8">
        <button
          onClick={closeModal}
          className="close"
          style={{ position: "absolute", top: "15px", right: "17px" }}
        >
          <FontAwesomeIcon icon={faTimes} className="closeicon-style" />
        </button>
        <div className="card-header">
          <h3 style={{ color: "white", textAlign: "center" }}>
            Book Your Shipment
          </h3>
        </div>
        <div className="flex flex-col w-1/2 gap-4 pb-4">
          <div className="flex justify-between">
            <div className="row">
              <div className="col-sm-12"></div>
            </div>

            {/* <div className="row">
              <div className="col-sm-6">
                <input
                  type={"text"}
                  className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                  placeholder={"Origin Port"}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type={"text"}
                  className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                  placeholder={"Destination Port"}
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="font-semibold capitalize text-base">
              Enter Your Name
            </label>
            <br></br>
            <br></br>
            <input
              type={"text"}
              className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60 "
              placeholder={"Enter Your Name*"}
              style={{ background: "#d7d5d5" }}
              value={enterYourName}
              onChange={(e) => setEnterYourName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="font-semibold capitalize text-base modelTop-2">
              Enter Your Company Name
            </label>
            <br></br>
            <br></br>
            <input
              type={"text"}
              className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
              placeholder={"Enter Your Company Name*"}
              style={{ background: "#d7d5d5" }}
              value={enterYourCompanyName}
              onChange={(e) => setEnterYourCompanyName(e.target.value)}
            />
          </div>
        </div>
        {/* <div className="flex flex-col w-1/2 gap-2 pb-4">
            <div className="flex justify-between">
              <label className="font-semibold capitalize text-base">
                Company Name
              </label>
            </div>
            <div className="col-sm-12 col-md-6">
              
            </div>
          </div> */}
        <div className="flex flex-col w-1/2 gap-2 pb-4">
          <div className="flex justify-between"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="font-semibold capitalize text-base">
              Contact Phone
            </label>
            <br></br>
            <br></br>
            <div className="custom-container phone-input-container ">
              <PhoneInput
                value={contactPhone}
                inputClass="border-style"
                placeholder={"Enter Your Phone Number*"}
                country={"us"}
                onChange={(value) => setContactPhone(value)}
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
          <div className="col-md-6">
            <label className="font-semibold capitalize text-base modelTop-2">
              Email
            </label>
            <br></br>
            <br></br>
            <input
              type={"email"}
              autoComplete="off"
              className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
              placeholder={"Enter your Email*"}
              style={{ background: "#d7d5d5" }}
              value={enterEmail}
              onChange={(e) => setEnterEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-2 pb-4">
          <div className="flex justify-between"></div>
        </div>
        <div className="flex flex-col w-1/2 gap-2 pb-4">
          <div className="flex justify-between">
            <label className="font-semibold capitalize text-base modal-input-style">
              Choose Your Service
            </label>
          </div>
          <Multiselect
            options={options}
            displayValue="key"
            onKeyPressFn={function noRefCheck() {}}
            onSelect={handleSelectionChange}
            onRemove={handleSelectionChange}
            onSearch={function noRefCheck() {}}
            selectionLimit={5}
            value={selectedValues}
            placeholder="Select Your Service"
          />
        </div>
        <div className="flex flex-col w-1/2 gap-4 pb-4">
          <div className="flex justify-between">
            <div className="row">
              <div className="col-sm-12">
                <label className="font-semibold capitalize text-base modal-input-style2">
                  Enter Origin and Destination Port Information below
                </label>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-sm-6">
                <input
                  type={"text"}
                  className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                  placeholder={"Origin Port"}
                />
              </div>
              <div className="col-sm-6">
                <input
                  type={"text"}
                  className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                  placeholder={"Destination Port"}
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input
              type={"text"}
              className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60 "
              placeholder={"Origin Port*"}
              style={{ background: "#d7d5d5" }}
              value={originPort}
              onChange={(e) => setOriginPort(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <input
              type={"text"}
              className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60 modelTop"
              placeholder={"Destination Port*"}
              style={{ background: "#d7d5d5" }}
              value={destinationPort}
              onChange={(e) => setDestinationPort(e.target.value)}
            />
          </div>
        </div>
        <br></br>
        <div className="flex flex-col w-1/2 gap-2 pb-4">
          <div className="flex justify-between">
            <label className="font-semibold capitalize text-base"></label>
          </div>
          <textarea
            value={yourMessage}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Your Message"
            className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60 textmessage-style"
          >
            <p>
              {countWords(yourMessage)}/{maxWords} words
            </p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </textarea>
          {/* <input
            type={"text"}
            className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60 textmessage-style"
            placeholder={"Your Message"}
            style={{ background: "#d7d5d5" }}
            value={yourMessage}
            onChange={(e) => setYourMessage(e.target.value)}
          /> */}
        </div>
        <div className="flex flex-col w-1/2 gap-2 pb-4">
          <div className="flex justify-between">
            <label className="font-semibold capitalize text-base capha-padding-style ">
              Capcha
            </label>
          </div>
          <div className="modalcaptcha-style">
            {/* {captcha} */}
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
          {/* <input
            type="text"
            className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
            placeholder="Enter the Characters*"
            style={{ background: "#d7d5d5" }}
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
          /> */}
        </div>
        {/* <a href="mailto:guss@overseasshippinginc.com?Subject=Some%20subject"> */}
        <input
          type="submit"
          value="Submit"
          className="button-jios button-py"
          onClick={() => {
            submitForm();
          }}
        ></input>{" "}
        {loading && (
          <Spinner
            animation="border"
            variant="info"
            className="spinners-style"
          />
        )}
        {/* </a> */}
      </div>
    </div>
  );
}

Modal.propTypes = {
  setShowModal: Boolean,
};

export default Modal;
