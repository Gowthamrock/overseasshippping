import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/overseas-logo-white2.png";
const Footer = () => {
  const [yearRange, setYearRange] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const previousYear = currentYear - 1;
    setYearRange(`${previousYear} - ${currentYear}`);
  }, []);

  return (
    <footer>
      <div className="container-lxf">
        <section className="widget-j97">
          <div className="wid-xjd autoshiping-logo-style">
            <p>
              <Link to="/home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img src={logo} alt="Company Logo" />
              </Link>
            </p>
            <span className="lin-344"></span>
            <p>Auto Shipping and International Shipping Experts</p>
          </div>
        </section>

        <section className="widget-j97">
          <div className="wid-xjd">
            <h4>Address</h4>
            <span className="lin-344"></span>
            <p>7020 Quad Ave, Rosedale, MD 21237, USA</p>
            <p>Working Hours: 9.00 AM - 5.00 PM ET (Mon-Fri)</p>
            <p>Contact Phone: 703-348-9916</p>
          </div>
        </section>

        <section className="widget-j97">
          <div className="wid-xjd">
            <h4>Quick Links</h4>
            <span className="lin-344"></span>
            <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <p>Services</p>
            </Link>
            <Link to="/about-us" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <p>About Us</p>
            </Link>
            <Link to="/info-center/terms" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <p>Info Center</p>
            </Link>
          </div>
        </section>

        <div className="copyRights">
          <h5 className="copyRights-style">
            © {yearRange} Overseas Shipping Inc - All Rights Reserved
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  
