import React, { useState } from "react";
import Header from "../../header/header";
import logo from "../../assets/overseas-logo-white2.png";
// import SimpleSlider from "../../banner/slider";
import pdf from "../../assets/Overseas.pdf";
import "./links.css";
import { Link } from "react-router-dom";
import Modal from "../../modal/modal";
import bannerData from "../../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Zoom";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Links() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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
          <div className="linksbanner-image" alt="useful-shipping-links"></div>

          <div className="title-c6g slideText3">
            <div className="subtitle-wrap-dark">
              <div className="subtitle-border"></div>
              <p className="subtitle-dark">
                {bannerData.services.glossary[1].subtitle}
              </p>
            </div>

            <h1 className="page-title">
              {bannerData.services.glossary[1].pageTitle}
            </h1>
          </div>
        </div>
      </div>
      <br></br> <br></br>
      <div className="links-container ">
        <div className="card">
          <div className="row ">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 ">
              <div>
                <div className="portal-links">
                  <h3>Portals</h3>
                  <div className="dotted-line"></div>
                  <p>
                    <a
                      href="http://www.inttra.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inttra
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.freightnet.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Freight net
                    </a>
                  </p>
                  <br></br>

                  <h3>World Links</h3>
                  <div className="dotted-line1"></div>
                  <p>
                    <a
                      href="http://www.apecsec.org.sg/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Asia Pacific Economic Co-operation (APEC)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.wcoasiapacific.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Asia Pacific Region
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://adbindia.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Asian Development Bank (ADB)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://smoking.ecigsandcoupons.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Association of Southeast Asian Nations (ASEAN)
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.tiaca.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      International Air Cargo Association
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a href="http://www.imf.org/external/index.htm">
                      International Chamber of Commerce (ICC)
                    </a>
                  </p>
                  <p>
                    <a href="http://www.ilo.org/global/lang--en/index.htm">
                      International Labor Organization
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a href="http://www.iccwbo.org/">
                      International Monetary Fund (IMF)
                    </a>
                  </p>
                  <p>
                    <a href="https://www.immta.org/">
                      International Multimodal Transport Association
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a href="http://www.iso.org/iso/home.html">
                      International Organization for Standardization
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.itf.org.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Transport Workers Federation
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.oecd.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Organization for Economic Co-operation and Development
                      (OECD)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.opec.org/homepage/frame.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Organization of the Petroleum Exporting Companies (OPEC)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://unctad.org/en/Pages/Home.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UN Conference on Trade and Development
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.undp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UN Development Program
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.un.org/ecosocdev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      UN Economic and Social Council
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.uncitral.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      United Nations Commission on International Trade Law
                      (UNCIT)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://unctad.org/en/Pages/Home.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      United Nations Conference on Trade and Development
                      (UNCTAD)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.upu.int/en.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Universal Postal Union (UPU)
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.worldbank.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Bank
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.who.int/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Health Organization
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="https://www.wto.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Trade Organization
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 ">
              <div>
                <div className="portal-links  portal-padding ">
                  <h2>International Links</h2>
                  <div className="dotted-line2"></div>

                  <p>
                    <a
                      href="https://www.fidi.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Federation of International Moving Companies
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.iata.org/Pages/default.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Air Transport Association (IATA)
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.icao.int/Pages/default.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Civil Aviation Organization (ICAO)
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.iecc.ch/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Express Carriers Conference (IECC)
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://fiata.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Federation of Freight Forwarders
                      Associations
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.imo.org/en/Pages/Default.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Maritime Organization
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.iru.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      International Road Transport Union
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.wcoomd.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Customs Organisation
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.ports.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      World Ports
                    </a>
                    <br></br>
                    <br></br>
                  </p>
                  <h2>
                    News, Knowledge & Information on Shipping, Transportation
                    and Logistics
                  </h2>
                  <div className="dotted-line3"></div>

                  <p>
                    <a
                      href="http://www.joc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Journal of Commerce
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://wn.com/Maritime"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maritime.com latest news from WN network
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.lloydslist.com/ll/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lloyds List
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.lloydslist.com/ll/sector/containers/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Containerization International
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.americanshipper.com/Main/Home.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      American Shipper
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.lloydslist.com/ll/sector/containers/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Port and cargo industry intelligence
                    </a>
                    <br></br>
                    <br></br>
                  </p>
                  <h2>Dictionary of Shipping / Logistics Terms</h2>
                  <div className="dotted-line4"></div>

                  <p>
                    <a
                      href="http://www.logisticsworld.com/logistics/glossary.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ww virtual library – Logistics
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.maerskline.com/?page=brochure&amp;path=/glossary/a"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      English Shipping Glossary
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.canadiancontent.net/dir/Top/Reference/Dictionaries/By_Subject/Business/Logistics"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore Logistics
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4 ">
              <div>
                <div className="portal-links portal-padding">
                  <h2>Important Links</h2>
                  <div className="dotted-line5"></div>
                  <p>
                    <a
                      href="http://www.export.gov/error/error.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      HS/Schedule B Numbers
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.bis.doc.gov/index.php/enforcement"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Export Compliance and Enforcement
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.epls.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Excluded Parties List
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.etfinancial.com/export_glossary.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Export Glossary
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.projectstoday.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Projects Today
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.customs.ustreas.gov/xp/cgov/home.xml"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      US Customs
                    </a>
                  </p>
                  <p>
                    {" "}
                    <a
                      href="http://www.aphis.usda.gov/wps/portal/banner/help"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wood Packing Material
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.bis.doc.gov/index.php/policy-guidance/lists-of-parties-of-concern"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Denied Parties List
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.commerce.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      US Department of Commerce
                    </a>
                  </p>
                  <p>
                    <a
                      href="http://www.fibre2fashion.com/texterms/incoterms/incotermsglossary1.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Trade Terms
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <div className="portal-links"></div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <div className="portal-links"></div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <div className="portal-links"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-gfz row-a78 row-2o3 vc_-xwe2">
        <div className="wrapper-5b2">
          <div className="column-691 container-ccd2 col-lc6">
            <div className="column-q7i">
              <div>
                <div className="row-gfz row-a78 row-2o3 vc_-wcs">
                  <div className="wrapper-5b2">
                    <div className="column-691 container-ccd col-ljo">
                      <div className="column-q7i">
                        <div>
                          <h3 className="style-hAiIr" id="style-hAiIr">
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
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
      {/* <div className="cta-container-2">
        <h2 className="cta-header">For Booking Your Shipment</h2>
        <h2 className="cta-header-1">
          Call us at 703 348 9916 | Email to sales@overseasshippinginc.com |
          Fill and submit the form
        </h2>
        <p className="description">
          Smooth Sailing with Overseas Shipping Inc!
        </p>
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
                <a href="/about-us" className="" onClick={() => scrollBottom()}>
                  <p>About Us</p>
                </a>
                {/* <Link to="/about-us" className="" onClick={() => scrollBottom()}>
                  <p>About Us</p>
                </Link> */}
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

export default Links;
