// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./tabs.css";
import autoShipping from "../assets/tabs/auto-shiiping-what-we-ship.jpg";
import tabImage from "../assets/tabs/auto-shipping-overview.jpg";
import internationalShipping from "../assets/tabs/international-shipping-overview-new.jpg";
import internationalShipping1 from "../assets/tabs/international-what-we-ship.jpg";
import householdShipping from "../assets/tabs/hoousehold-overview (1).jpg";
import householdShipping1 from "../assets/tabs/hoousehold-what-we-ship (1).jpg";
import wareHousing from "../assets/tabs/warehousing-distribution1.jpg";
import crossDocking from "../assets/tabs/crossdocking.jpg";
import autoShippingIcon from "../assets/Auto Shipping Icons/best-auto-shipping-rates.png";
import autoShippingIcon1 from "../assets/Auto Shipping Icons/secure-trusted-auto-shipping.png";
import autoShippingIcon2 from "../assets/Auto Shipping Icons/track-auto-shipments.png";
import autoShippingIcon3 from "../assets/Auto Shipping Icons/experienced-staff.png";
import autoShippingIcon4 from "../assets/Auto Shipping Icons/efficient-service.png";
import autoShippingIcon5 from "../assets/Auto Shipping Icons/inventory-management.png";
import internationalShippingIcon from "../assets/International Shipping Icons/best-container-shipping-rates.png";
import internationalShippingIcon1 from "../assets/International Shipping Icons/professional-container-export-shipping.png";
import internationalShippingIcon2 from "../assets/International Shipping Icons/track-export-shipments.png";
import internationalShippingIcon3 from "../assets/International Shipping Icons/experienced-staff.png";
import internationalShippingIcon4 from "../assets/International Shipping Icons/efficient-service.png";
import householdShippingIcon from "../assets/Household Shipping Icons/best-household-shipping-rates.png";
import householdShippingIcon1 from "../assets/Household Shipping Icons/reliable-safe-household-shipping.png";
import householdShippingIcon2 from "../assets/Household Shipping Icons/track-household-shipments.png";
import householdShippingIcon3 from "../assets/Household Shipping Icons/experienced-staff.png";
import householdShippingIcon4 from "../assets/Household Shipping Icons/efficient-service.png";
import warehouseShippingIcon from "../assets/warehousing Icons/save-money-on-shipping.png";
import warehouseShippingIcon1 from "../assets/warehousing Icons/faster-deliveryies.png";
import warehouseShippingIcon2 from "../assets/warehousing Icons/handle-challenge.png";
import warehouseShippingIcon3 from "../assets/warehousing Icons/flexible-adaptable.png";
import crossdockingShippingIcon from "../assets/Crossdocking Icons/save-loading-time.png";
import crossdockingShippingIcon1 from "../assets/Crossdocking Icons/manage-overweight-trucks.png";
import crossdockingShippingIcon2 from "../assets/Crossdocking Icons/combine-shipment-delivery.png";
import crossdockingShippingIcon3 from "../assets/Crossdocking Icons/low-inventory-management.png";
import crossdockingShippingIcon4 from "../assets/Crossdocking Icons/reduce-infrastructure-costs.png";
import crossdockingShippingIcon5 from "../assets/Crossdocking Icons/minimize-damage-risks.png";
import crossdockingShippingIcon6 from "../assets/Crossdocking Icons/one-point-shipments.png";
import ourmottoIcon from "../assets/warehousing Icons/quality.png";
import ourmottoIcon1 from "../assets/warehousing Icons/efficiency.png";
import ourmottoIcon2 from "../assets/warehousing Icons/reliability.png";
import { Accordion, AccordionHeader } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "../servicemodal/servicemodal";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
function TabContent(props) {
  const { data } = props;
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {data?.length == 1 && (
        <div className="tab-description-container">
          {/* glossery */}

          <h2>{data[0].glossarytabTitle1}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents1}</p>
          <h2>{data[0].glossarytabTitle2}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents2}</p>
          <h2>{data[0].glossarytabTitle3}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents3}</p>
          <h2>{data[0].glossarytabTitle4}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents4}</p>
          <h2>{data[0].glossarytabTitle5}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents5}</p>
          <h2>{data[0].glossarytabTitle6}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents6}</p>
          <h2>{data[0].glossarytabTitle7}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents7}</p>
          <h2>{data[0].glossarytabTitle8}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents8}</p>
          <h2>{data[0].glossarytabTitle9}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents9}</p>
          <h2>{data[0].glossarytabTitle10}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents10}</p>
          <h2>{data[0].glossarytabTitle11}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents11}</p>
          <h2>{data[0].glossarytabTitle12}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents12}</p>
          <h2>{data[0].glossarytabTitle13}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents13}</p>
          <h2>{data[0].glossarytabTitle14}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents14}</p>
          <h2>{data[0].glossarytabTitle15}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents15}</p>
          <h2>{data[0].glossarytabTitle16}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents16}</p>
          <h2>{data[0].glossarytabTitle17}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents17}</p>
          <h2>{data[0].glossarytabTitle18}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents18}</p>
          <h2>{data[0].glossarytabTitle19}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents19}</p>
          <h2>{data[0].glossarytabTitle20}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents20}</p>
          <h2>{data[0].glossarytabTitle21}</h2>
          <p className={data[0].customClass}>{data[0].glossarytabContents21}</p>

          {/* services */}
          <h2>{data[0].tabTitle}</h2>
          <p className={data[0].customClass}>{data[0].tabContents}</p>
          <p>{data[0].tabdescription}</p>

          {data[0].bgImage && (
            <img
              className="img-modify"
              src={data[0].bgImage}
              alt="Background"
            />
          )}

          {data[0].tabClass1 && (
            <>
              <Accordion defaultActiveKey="0" className="accordion-style">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="Accordion-header">
                    Overview
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={tabImage}
                              className="image-style1"
                              alt="auto-shipping-services"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container">
                            {/* <h2 className="section-rx5">{data[0].tabClass1}</h2> */}
                            <p className="description3">
                              {data[0].tabClass1Description}
                            </p>
                            <p className="description4">
                              {data[0].tabClass0Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="Accordion-header">
                    What We Ship
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={autoShipping}
                              className="image-style1"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container1">
                            <h2 className="section-rx5"></h2>
                            <p className="description3">
                              {data[0].tabClass2Description}
                            </p>
                            <p className="description4">
                              {data[0].tabClass3Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="Accordion-header">
                    Steps to Ship
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion1Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion1Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion2Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion2Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion3Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion3Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion4Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion4Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion5Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion5Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion6Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion6Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion7Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion7Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="Accordion-header">
                    Ways to Ship
                  </Accordion.Header>
                  <Accordion.Body>
                    <Accordion defaultActiveKey="0" flush>
                      <h2 className="heading-style">
                        {data[0].accordionHeading}
                      </h2>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>RORO Shipping</Accordion.Header>
                        <Accordion.Body>
                          With RORO, simply drop off your vehicle at the nearest
                          RORO dock or request a pickup from your location.
                          We&#39;ll arrange a pickup truck to transport your
                          vehicle to the port. At the port, your vehicle is
                          driven onto a RORO ship. This vessel sails to the
                          destination port, where you or your representative can
                          collect it .To utilize RORO shipping, your vehicle
                          should be in good running condition for easy loading
                          and unloading at the destination. RORO is an ideal
                          choice for running vehicles, saving you loading costs
                          by allowing you to drive on and off the vessel at
                          journey&#39;s end. <br></br> RORO ships accommodate a
                          range of vehicles - Cars, Motorbikes, Motorhomes,
                          Buses, Heavy Vehicles, ATVs, etc.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          Shared Container Shipping
                        </Accordion.Header>
                        <Accordion.Body>
                          With Shared Container Shipping, multiple vehicles are
                          loaded into a container using forklifts until it
                          reaches full capacity. The departure date remains
                          flexible until the container is filled, and then
                          it&#39;s transported from the warehouse to the
                          shipping port. <br></br> This method offers
                          cost-sharing benefits for consignees and is a
                          cost-effective solution, especially when RORO
                          facilities aren&#39;t available at the destination
                          port.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Exclusive Container Shipping
                        </Accordion.Header>
                        <Accordion.Body>
                          In stark contrast to shared containers, an exclusive
                          container is dedicated to the cargo of a single
                          consignee, accommodating one or more vehicles or
                          personal belongings.<br></br> This option is
                          relatively more expensive, particularly when shipping
                          running vehicles. Both shared and exclusive container
                          methods are well-suited for transporting old or
                          damaged vehicles.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="Accordion-header">
                    Benefits
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={autoShippingIcon}
                                  className="img-style"
                                  alt="best-auto-shipping-rates"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Best AutoShipping Rates
                              </h1>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={autoShippingIcon1}
                                  className="img-style"
                                  alt="secure-trusted-auto-shipping"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Secure and trusted services
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={autoShippingIcon2}
                                  className="img-style"
                                  alt="track-auto-shipments"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Track auto shipments
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>{" "}
                        <br></br>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={autoShippingIcon3}
                                  className="img-style"
                                  alt="experienced-staff"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Experienced staff
                              </h1>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={autoShippingIcon4}
                                  className="img-style"
                                  alt="efficient-service"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Efficient service
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={autoShippingIcon5}
                                  className="img-style"
                                  alt="inventory-management"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Inventory Management
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>{" "}
                      </div>

                      <br></br>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="row-gfz row-a78 row-2o3 vc_-xwe">
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
                                    Auto Shipping experts to the Middle East,
                                    Africa & Europe!
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
            </>
          )}

          {data[0].tabClass7 && (
            <>
              <Accordion defaultActiveKey="0" className="accordion-style">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="Accordion-header">
                    Overview
                  </Accordion.Header>
                  <AccordionBody>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={internationalShipping}
                              className="image-style1"
                              alt="container-ship"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container">
                            <h2 className="section-rx5">{data[0].tabClass1}</h2>
                            <p className="description3">
                              {data[0].tabClass3Description}
                              <br></br> <br></br>
                              {data[0].tabClass0Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="Accordion-header">
                    What We Ship
                  </Accordion.Header>
                  <AccordionBody>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={internationalShipping1}
                              className="image-style1"
                              alt="goods-warehouse"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container1">
                            <h2 className="section-rx5">{data[0].tabClass1}</h2>
                            <p className="description3">
                              {data[0].tabClass4Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="Accordion-header">
                    Steps to Ship
                  </Accordion.Header>
                  <AccordionBody>
                    <Accordion defaultActiveKey="0">
                      <h2 className="heading-style">
                        {data[0].accordionHeading}
                      </h2>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion1Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion1Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion2Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion2Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion3Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion3Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion4Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion4Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion5Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion5Pargaraph}
                          <ol>
                            <li>{data[0].listHeading}</li>
                            <li>{data[0].list1Heading}</li>
                            <li>{data[0].list2Heading}</li>
                            <li>{data[0].list3Heading}</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion6Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          <h2
                            className="heading-style"
                            style={{ textAlign: "left" }}
                          >
                            {data[0].accordion1Heading}
                          </h2>

                          <ol>
                            <li>{data[0].list4Heading}</li>
                            <li>{data[0].list5Heading}</li>
                            <li>{data[0].list6Heading}</li>
                          </ol>
                          {data[0].accordion6Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion7Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion7Pargaraph} <br></br>
                          <br></br>
                          {data[0].accordion8Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="Accordion-header">
                    Ways to Ship
                  </Accordion.Header>
                  <AccordionBody>
                    <Accordion defaultActiveKey="0" flush>
                      <h2 className="heading-style">
                        {data[0].accordionHeading1}
                      </h2>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {data[0].accordion8Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion9Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          {data[0].accordion9Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion10Pargaraph} <br></br> <br></br>
                          {data[0].accordion11Pargaraph}
                          <br></br> <br></br>
                          {data[0].accordion12Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          {data[0].accordion10Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion13Pargaraph}
                          vehicles.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="Accordion-header">
                    Benefits
                  </Accordion.Header>
                  <AccordionBody>
                    <div className="container">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={internationalShippingIcon}
                                  className="img-style1"
                                  alt="best-container-shipping-rates"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Best shipping rates
                              </h1>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={internationalShippingIcon1}
                                  className="img-style1"
                                  alt="container-exports"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Professional export shipping
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={internationalShippingIcon2}
                                  className="img-style1"
                                  alt="track-exports"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Track export shipments
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>

                        <br></br>
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={internationalShippingIcon3}
                                  className="img-style1"
                                  alt="knowledgeable-staff"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Experienced staff
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>{" "}
                          &nbsp;
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={internationalShippingIcon4}
                                  className="img-style1"
                                  alt="efficient-services"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Efficient service
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
              <div className="row-gfz row-a78 row-2o3 vc_-xwe">
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
                                    Need safe, reliable, and hassle-free
                                    International Shipping?
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
            </>
          )}
          {data[0].tabClass12 && (
            <>
              <Accordion defaultActiveKey="0" className="accordion-style">
                <Accordion.Item eventKey="0">
                  <AccordionHeader className="Accordion-header">
                    Overview
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={householdShipping}
                              className="image-style1"
                              alt="household-shipping"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container">
                            {/* <h2 className="section-rx5">{data[0].tabHeader}</h2> */}
                            <p className="description3">
                              {data[0].tabClass3Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <AccordionHeader className="Accordion-header">
                    What We Ship
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={householdShipping1}
                              className="image-style1"
                              alt="household-goods-loading"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container1">
                            <h2 className="section-rx5">{data[0].tabClass2}</h2>
                            <p className="description3">
                              {data[0].tabClass4Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <AccordionHeader className="Accordion-header">
                    Steps to Ship
                  </AccordionHeader>
                  <AccordionBody>
                    <Accordion defaultActiveKey="0">
                      <h2 className="heading-style">
                        {data[0].accordionHeading}
                      </h2>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion1Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion1Pargaraph}
                          <ol>
                            <li>{data[0].listHeading}</li>
                            <li>{data[0].list1Heading}</li>
                            <li>{data[0].list2Heading}</li>
                          </ol>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion2Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion2Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion3Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion3Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion4Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion4Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion5Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion6Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion6Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion6Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion7Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion7Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion8Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion8Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion9Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion9Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion10Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion10Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <AccordionHeader className="Accordion-header">
                    Ways to Ship
                  </AccordionHeader>
                  <AccordionBody>
                    <Accordion defaultActiveKey="0" flush>
                      <h2 className="heading-style">
                        {data[0].accordionHeading1}
                      </h2>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          {data[0].accordion11Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion11Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          {data[0].accordion12Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion12Pargaraph} <br></br> <br></br>
                          {data[0].accordion13Pargaraph}
                          <br></br> <br></br>
                          {data[0].accordion14Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          {data[0].accordion11Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion15Pargaraph}
                          vehicles.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </AccordionBody>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <AccordionHeader className="Accordion-header">
                    Benefits
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="container">
                      <div className="card-body ">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card ">
                              <div className="text-center">
                                <img
                                  src={householdShippingIcon}
                                  className="img-style1"
                                  alt="household-shipping-rates"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Best shipping rates
                              </h1>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={householdShippingIcon1}
                                  className="img-style"
                                  alt="reliable-safe-household-shipping"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Reliable, household shipping
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={householdShippingIcon2}
                                  className="img-style1"
                                  alt="track-household-shipments"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Track household shipments
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>

                        <br></br>
                        <div className="row">
                          <div className="col-md-4 ">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={householdShippingIcon3}
                                  className="img-style1"
                                  alt="talented-staff"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Experienced staff
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>{" "}
                          &nbsp;
                          <div className="col-md-4 ">
                            <div className="card ">
                              <div className="text-center">
                                <img
                                  src={householdShippingIcon4}
                                  className="img-style1"
                                  alt="professional-service"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Efficient service
                                </h1>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>
                      </div>

                      <br></br>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
              <div className="row-gfz row-a78 row-2o3 vc_-xwe">
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
                                    Let&apos;s move your home abroad!
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
            </>
          )}

          {data[0].tabClass18 && (
            <>
              <Accordion defaultActiveKey="0" className="accordion-style">
                <Accordion.Item eventKey="0">
                  <AccordionHeader className="Accordion-header">
                    Warehousing / Distribution
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={wareHousing}
                              className="image-style1"
                              alt="warehousing-distribution"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container">
                            {/* <h2 className="section-rx5">{data[0].tabClass18}</h2> */}
                            <p className="description3">
                              {data[0].tabClass1Description}
                            </p>
                            <p className="description4">
                              {data[0].tabClass0Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container">
                      <h3 className="heading-style">{data[0].tabHeader1}</h3>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={ourmottoIcon}
                                  className="img-style"
                                  alt="quality"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Quality
                              </h1>
                              <p>
                                Maintain high quality in our work and service
                              </p>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={ourmottoIcon1}
                                  className="img-style"
                                  alt="efficiency"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Efficiency
                                </h1>
                                <p>
                                  Save time and money through experience/skills
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-4">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={ourmottoIcon2}
                                  className="img-style"
                                  alt="reliability"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Reliability
                                </h1>
                                <p>
                                  Deliver confidence and trust in customer
                                  service
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className="heading-style"
                      style={{ textAlign: "justify" }}
                    >
                      {data[0].accordionHeading}
                    </p>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion1Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion1Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion2Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion2Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion3Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion3Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion4Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion4Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion5Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion5Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion6Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion6Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion7Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion7Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion8Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion8Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="container">
                      <h3 className="heading-style">{data[0].tabHeader}</h3>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={warehouseShippingIcon}
                                  className="img-style"
                                  alt="save-money"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Save shipping costs
                              </h1>
                              <p>
                                Let our experts with years of experience in
                                freight forwarding help you optimize your costs.
                              </p>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={warehouseShippingIcon1}
                                  className="img-style"
                                  alt="faster-delivery"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Enjoy faster deliveries
                                </h1>
                                <p>
                                  Benefit from our strong relationships with
                                  carriers and logistics providers to ensure
                                  timely shipments.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={warehouseShippingIcon2}
                                  className="img-style"
                                  alt="handle-challenge"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Handle any challenge
                                </h1>
                                <p>
                                  Find cost-effective solutions for your complex
                                  or urgent warehousing needs.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={warehouseShippingIcon3}
                                  className="img-style"
                                  alt="flexible-adaptable"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Stay flexible adaptable
                                </h1>
                                <p>
                                  Change plans, schedules, and routes as needed
                                  to suit your business and market conditions.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>

                        {/* <div className="dotted-line"></div>
<div className="row">

&nbsp;

</div> */}
                      </div>

                      <br></br>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultActiveKey="0" className="accordion-style">
                <Accordion.Item eventKey="0">
                  <AccordionHeader className="Accordion-header">
                    Crossdocking Services
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="overview flex">
                      <div className="row">
                        <div className="col-sm-12 col-lg-6">
                          <div className=".image-style">
                            <img
                              src={crossDocking}
                              className="image-style1"
                              alt="crossdocking"
                            ></img>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                          <div className="text-container">
                            <p className="description3">
                              {data[0].tabClass2Description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p
                      className="heading-style"
                      style={{ textAlign: "justify" }}
                    >
                      {data[0].accordionHeading}
                    </p>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion1Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion1Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion2Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion2Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header className="Accordion-header">
                          {data[0].accordion3Header}
                        </Accordion.Header>
                        <Accordion.Body>
                          {data[0].accordion3Pargaraph}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="container">
                      <h3 className="heading-style">{data[0].tabHeader}</h3>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3 col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon}
                                  className="img-style"
                                  alt="save-loading-time"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Save Loading Time
                              </h1>
                              <p>
                                Acts as temporary storage for goods, ensuring
                                timely shipments when they arrive early or late.
                              </p>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon1}
                                  className="img-style"
                                  alt="manage-overweight-trucks"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Manage Truck Weight
                                </h1>
                                <p>
                                  Offloads or removes overweight items to meet
                                  weight compliance for trucks.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon2}
                                  className="img-style"
                                  alt="combine-shipment-delivery"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Combined Shipments
                                </h1>
                                <p>
                                  Merges goods from different vendors and
                                  locations into a single shipment for a
                                  consignee.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon3}
                                  className="img-style"
                                  alt="low-inventory-management"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Low Inventory Levels
                                </h1>
                                <p>
                                  Reduces costs by efficiently matching orders
                                  to destinations, minimizing large stocks.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>
                        <br></br>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon4}
                                  className="img-style"
                                  alt="reduce-infrastructure-costs"
                                ></img>
                              </div>
                              <h1 className="text-center subcontent-style">
                                Low Infrastructure Costs
                              </h1>
                              <p>
                                Eliminates the need for large warehouses,
                                providing flexibility in storage.
                              </p>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon5}
                                  className="img-style"
                                  alt="minimize-damage-risks"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  Minimize Damage Risks
                                </h1>
                                <p>
                                  Systematic handling of inbound and outbound
                                  goods in crossdocking minimize damages.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                          <div className="col-md-3">
                            <div className="card">
                              <div className="text-center">
                                <img
                                  src={crossdockingShippingIcon6}
                                  className="img-style"
                                  alt="one-point-shipments"
                                ></img>
                                &nbsp;
                                <h1 className="text-center subcontent-style">
                                  One-Point Shipments
                                </h1>
                                <p>
                                  Streamlines the process by routing everything
                                  through one company for both
                                  warehousing/distribution.
                                </p>
                              </div>
                            </div>
                            <br></br>
                          </div>
                        </div>

                        {/* <div className="dotted-line"></div>
                <div className="row">
                 
                  &nbsp;
                  
                </div> */}
                      </div>

                      <br></br>
                    </div>
                  </AccordionBody>
                </Accordion.Item>
              </Accordion>
              <div className="row-gfz row-a78 row-2o3 vc_-xwe">
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
                                    Unlock Safe and Swift Warehousing /
                                    Crossdocking Services?
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
            </>
          )}
        </div>
      )}
      {showModal && <Modal setShowModal={setShowModal}></Modal>}
    </>
  );
}

function Tabs(props) {
  const tabs = props.data.tabs;
  const tabHeader = props.data.tabHeader;
  const tabtext = props.data.tabContents;
  const [selectedTab, setselectedTab] = useState(0);
  const setSelected = (id) => {
    setselectedTab(id);
  };

  const tab = tabs.map((data, id) => {
    return (
      <span
        key={id}
        onClick={() => setSelected(id)}
        className={selectedTab == id ? "active" : ""}
      >
        {data}
      </span>
    );
  });

  return (
    <div className="tabContainer-common">
      <div
        className={
          tabHeader == "autoshipping"
            ? " tab-header1 autoshipping"
            : tabHeader == "internationalshipping"
            ? " tab-header1 internationalshipping"
            : tabHeader == "householdshipping"
            ? " tab-header1 householdshipping"
            : tabHeader == "warehousingshipping"
            ? " tab-header2 warehousingshipping"
            : "tab-header common"
        }
      >
        {tab}
      </div>
      <div className="tab-content">
        <TabContent data={tabtext[selectedTab]}></TabContent>
      </div>
    </div>
  );
}

export default Tabs;
