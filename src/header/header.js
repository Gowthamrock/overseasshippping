import logo from "../assets/overseas-logo-white2.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "../modal/modal";
import "./header.css";
import loginicon from "../assets/login-white.png";
import loginicon1 from "../assets/login-blue.png";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";
// import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'

function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSubmenu1, setShowServicemenu] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleModal = () => {
  //   setShowModal(true);
  // };

  const scrollBottom = () => {
    window.scrollTo({ top: 1650, behavior: "smooth" });
  };
  const handleSubMenuEnter = () => {
    setShowSubmenu(true);
  };

  const handleSubMenuLeave = () => {
    setShowSubmenu(false);
  };

  const handleServiceMenuEnter = () => {
    setShowServicemenu(true);
  };

  const handleServiceMenuLeave = () => {
    setShowServicemenu(false);
  };
  const navigate = useNavigate();

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
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="nav-tce nav-8kl">
      <div className="container-8dw py-2">
        <Link to="/home" className="block-7lq">
          <img src={logo}></img>
        </Link>

        {isMobileView && (
          <button className="mobile-toggler" onClick={toggleMobileMenu}>
            <FontAwesomeIcon
              icon={isMobileMenuOpen ? faTimes : faBars}
              style={{ fontSize: "30px" }}
              className="toggler-style"
            />
          </button>
        )}
        <nav className={`menu-ezq menu-gre header-style-left `}>
          <Link to="/home" className="link-lkj nav-link-syc">
            <h3 className="header-style">Home</h3>
          </Link>
          <div className="menu-o2n"></div>
          <a
            className="link-lkj nav-link-syc"
            onMouseEnter={handleServiceMenuEnter}
            onMouseLeave={handleServiceMenuLeave}
          >
            <h3 className="header-style" onClick={() => navigate("/services")}>
              Services
            </h3>

            <ol className={"subMenu" + (showSubmenu1 ? " show" : "")}>
              <Link
                to="/services/auto"
                className="link-lkj nav-link-syc"
                onClick={() => scrollBottom()}
              >
                Auto Shipping
              </Link>
              <Link
                to="/services/international"
                className="link-lkj nav-link-syc"
                onClick={() => scrollBottom()}
              >
                International Shipping
              </Link>
              <Link
                to="/services/household"
                className="link-lkj nav-link-syc"
                onClick={() => scrollBottom()}
              >
                Household Shipping
              </Link>
              <Link
                to="/services/warehouse"
                className="link-lkj nav-link-syc"
                onClick={() => scrollBottom()}
              >
                Warehousing and Crossdocking
              </Link>
            </ol>
          </a>

          <div className="menu-o2n"></div>
          <Link to="/about-us" className="link-lkj nav-link-syc">
            {" "}
            <h3 className="header-style">About Us</h3>
          </Link>
          <div className="menu-o2n"></div>
          <a
            className="link-lkj nav-link-syc"
            onMouseEnter={handleSubMenuEnter}
            onMouseLeave={handleSubMenuLeave}
          >
            <h3 className="header-style">Info Center</h3>
            <ol className={"submenu" + (showSubmenu ? " show" : "")}>
              <Link to="/info-center/terms" className="link-lkj nav-link-syc">
                Terms
              </Link>
              <Link to="/info-center/links" className="link-lkj nav-link-syc">
                Useful Links
              </Link>
            </ol>
          </a>

          <div className="menu-o2n"></div>
          <Link to="/contact-us" className="link-lkj nav-link-syc">
            <h3 className="header-style">Contact</h3>
          </Link>
          <div className="menu-o2n"></div>
          {/* <div className="label-container">
            <BootstrapTooltip
              title={<h6 style={{ color: "white" }}>Customer Login</h6>}
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <img src={loginicon} className="login-style"></img>
            </BootstrapTooltip>
          </div> */}

          <div className="icon-container">
            <BootstrapTooltip
              title={
                <h6 style={{ color: "black", marginTop: "5px" }}>
                  Customer Login
                </h6>
              }
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <a href="https://ovsapp.infoxsystem.com/tms/web/custlogin.aspx">
                {" "}
                <img src={loginicon} className="login-style"></img>
                <img src={loginicon1} className="login-style"></img>
              </a>
            </BootstrapTooltip>
          </div>
        </nav>
        <div className="button-zoo">
          {/* <span onClick={handleModal} className="button-8qm button-b4n">
            Request Quote
          </span> */}

          {/* <Tooltip title="Customer Login"  placement="bottom">
          <FontAwesomeIcon icon={faArrowRightToBracket} className="login-style" />
          </Tooltip> */}
        </div>

        {/* <div>
       
        </div> */}
      </div>
      {isMobileView && (
        <div
          className={`container-8dw py-2 ${
            !isMobileMenuOpen ? "toggler-hidden" : ""
          }`}
        >
          <nav
            className={`menu-ezq menu-gre header-style-left ${
              isMobileMenuOpen ? "mobile-menu-visible" : "toggler-hidden"
            }`}
          >
            <Link to="/home" className="link-lkj nav-link-syc">
              <h3 className="dropdown-text">Home</h3>
            </Link>
            <div className="menu-o2n"></div>
            <Dropdown className="link-lkj nav-link-syc dropdown-padding">
              <Dropdown.Toggle className="header-style">
                <Link to="/services" className="dropdown-text">
                  Services
                </Link>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "none", border: "none" }}>
                <Dropdown.Item className="dropdown-style">
                  <Link
                    to="/services/auto"
                    className="link-lkj nav-link-syc"
                    onClick={() => scrollBottom()}
                  >
                    Auto Shipping
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className=" dropdown-style">
                  <Link
                    to="/services/international"
                    className="link-lkj nav-link-syc"
                    onClick={() => scrollBottom()}
                  >
                    International Shipping
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className=" dropdown-style">
                  <Link
                    to="/services/household"
                    className="link-lkj nav-link-syc"
                    onClick={() => scrollBottom()}
                  >
                    Household Shipping
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className=" dropdown-style">
                  <Link
                    to="/services/warehouse"
                    className="link-lkj nav-link-syc"
                    onClick={() => scrollBottom()}
                  >
                    Warehousing and Crossdocking
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="menu-o2n"></div>
            <Link to="/about-us" className="link-lkj nav-link-syc">
              {" "}
              <h3 className="dropdown-text">About Us</h3>
            </Link>
            <div className="menu-o2n"></div>
            <Dropdown className="link-lkj nav-link-syc dropdown-padding">
              <Dropdown.Toggle className="header-style">
                <Link to="/info-center/terms" className="dropdown-text">
                  Info Center
                </Link>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ background: "none", border: "none" }}>
                <Dropdown.Item className=" dropdown-style">
                  <Link
                    to="/info-center/terms"
                    className="link-lkj nav-link-syc"
                  >
                    Terms
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item className=" dropdown-style">
                  <Link
                    to="/info-center/links"
                    className="link-lkj nav-link-syc"
                  >
                    Useful Links
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="menu-o2n"></div>
            <Link to="/contact-us" className="link-lkj nav-link-syc">
              <h3 className="dropdown-text">Contact</h3>
            </Link>
            <div className="menu-o2n"></div>
            <a
              href="https://ovsapp.infoxsystem.com/tms/web/custlogin.aspx"
              className="link-lkj nav-link-syc"
            >
              {" "}
              <h3 className="dropdown-text">Customer Login</h3>
            </a>

            {/* <div className="label-container">
            <BootstrapTooltip
              title={<h6 style={{ color: "white" }}>Customer Login</h6>}
              placement="bottom"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <img src={loginicon} className="login-style"></img>
            </BootstrapTooltip>
          </div> */}
          </nav>
        </div>
      )}
      {/* <div className="">
        <div className="sticky-icon">
          <a href="https://www.instagram.com/?hl=en" className="Instagram">
            {" "}
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />{" "}
            &nbsp;Instagram{" "}
          </a>
          <a href="https://www.facebook.com/" className="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />{" "}
            &nbsp;Facebook{" "}
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=7550350987"
            className="Whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />{" "}
            Whatsapp{" "}
          </a>
          <a href="https://in.linkedin.com/" className="Linkedin">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />{" "}
            &nbsp;Linkedin{" "}
          </a>
          <a href="https://twitter.com/login" className="Twitter">
            <FontAwesomeIcon icon={faXTwitter} className="social-icon" />{" "}
            &nbsp;Twitter{" "}
          </a>
        </div>
      </div> */}
      <div id="fixed-social">
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=17039286787"
            className="fixed-whatspp"
          >
            {" "}
            <FontAwesomeIcon icon={faWhatsapp} className="icons-style" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/overseasshippinginc?mibextid=ZbWKwL"
            className="fixed-facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="icons-style" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://x.com/Shipwithoversea?t=ei6U2yGsqk2jcP639hl_mg&s=08
"
            className="fixed-xtwitter"
          >
            {" "}
            <FontAwesomeIcon icon={faXTwitter} className="icons-style" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/overseasshipping?igsh=MXYwNnVkNHQ1cnNldQ=="
            className="fixed-instagram"
          >
            {" "}
            <FontAwesomeIcon icon={faInstagram} className="icons-style" />{" "}
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/overseas-shipping-71267bb7"
            className="fixed-linkedin"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} className="icons-style" />
          </a>
        </div>
      </div>

      {showModal && <Modal setShowModal={setShowModal}></Modal>}
    </div>
  );
}

export default Header;
