import React from "react";
import './whyus.css';
import plane from "../assets/plane.jpg";
import esIcon from '../assets/efficient-shipping.svg';
import shIcon from '../assets/shipping-network.svg';
import cwIcon from '../assets/cutting-edge-warehousing.svg';
import chIcon from '../assets/cargo-handling.svg';
import cpIcon from '../assets/competitive-pricing.svg';
import ccIcon from '../assets/custom-clearance.svg';
import paneIcon from '../assets/icon-plane.svg';

function Whyus() {

    return (
        <>
            <div className='leftContainer w-1/2'>
                <img className='whyImg' src={plane} ></img>
                <div className='left-container-text flex'>
                    <div className='icon-container'>
                        <img src={paneIcon}></img>
                    </div>
                    <div className='text-container-icon'>
                        Moving your products across world
                    </div>
                </div>
            </div>
            <div className='rightContainer w-1/2'>
                <div className="subtitle">
                    <span className="titleText">Why Choose Us</span>
                </div>
                <h2 className="section-rx5">
                    Frequently Asked Questions
                </h2>
                <p className="pb-4">
                    Logistics is a distinguished supply chain management firm which provides comprehensive solutions for warehousing, transportation and a host of logistics services.
                </p>
                <div className="why-text flex pt-4">
                    <div className="why-text-left w-1/2">
                        <div className="list-o6k style-Fhg5H pb-4" id="style-Fhg5H">
                            <div className="icon-qg7">
                                <img src={esIcon}></img>
                            </div>
                            <h3 className="about-ywj">
                                Safe Package
                            </h3>
                        </div>
                        <div className="list-o6k style-Fhg5H  pb-4" id="style-Fhg5H">
                            <div className="icon-qg7">
                                <img src={shIcon}></img>
                            </div>
                            <h3 className="about-ywj">
                                Global Tracking
                            </h3>
                        </div>
                        <div className="list-o6k style-Fhg5H  pb-4" id="style-Fhg5H">
                            <div className="icon-qg7">
                                <img src={cwIcon}></img>
                            </div>
                            <h3 className="about-ywj">
                                In Time Delivery
                            </h3>
                        </div>
                    </div>
                    <div className="why-text-right w-1/2">
                        <div className="list-o6k style-Fhg5H  pb-4" id="style-Fhg5H">
                            <div className="icon-qg7">
                                <img src={chIcon}></img>
                            </div>
                            <h3 className="about-ywj">
                                Ship Everywere
                            </h3>
                        </div>
                        <div className="list-o6k style-Fhg5H  pb-4" id="style-Fhg5H">
                            <div className="icon-qg7">
                                <img src={cpIcon}></img>
                            </div>
                            <h3 className="about-ywj">
                                24/7 Support
                            </h3>
                        </div>
                        <div className="list-o6k style-Fhg5H  pb-4" id="style-Fhg5H">
                            <div className="icon-qg7">
                                <img src={ccIcon}></img>
                            </div>
                            <h3 className="about-ywj">
                                Transparent Pricing
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Whyus;