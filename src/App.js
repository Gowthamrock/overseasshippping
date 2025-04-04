import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Aboutus from "./aboutUs/aboutUs";
import Services from "./services/services";
import Glossary from "./resources/glossary/glossary";
import Links from "./resources/links/links";
import Contactus from "./contactUs/contactus";
import Test from "./test";
import {} from "react";
import ReactGA from "react-ga";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TRACKING_ID = "G-VB274L754K";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <ToastContainer autoClose={1000} position="top-center" />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route key="all" path="/services" element={<Services />} />
        <Route key="auto" path="/services/auto" element={<Services />} />
        <Route
          key="international"
          path="/services/international"
          element={<Services />}
        />
        <Route path="/services/household" element={<Services />} />
        <Route path="/services/warehouse" element={<Services />} />
        <Route path="/info-center/terms" element={<Glossary />} />
        <Route path="/info-center/links" element={<Links />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
