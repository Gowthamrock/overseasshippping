import React from "react";
import "./faq.css";
import esIcon from "../assets/efficient-shipping.svg";
import shIcon from "../assets/shipping-network.svg";
import cwIcon from "../assets/cutting-edge-warehousing.svg";
import chIcon from "../assets/cargo-handling.svg";
import cpIcon from "../assets/competitive-pricing.svg";
import ccIcon from "../assets/custom-clearance.svg";
import rtIcon from "../assets/reliable-tracking.svg";

class Accordion extends React.Component {
  render() {
    const {
      title,
      expand,
      onClick,
      description,
      description1,
      description2,
      description3,
      description4,
      description5,
      description6,
    } = this.props;

    return (
      <>
        <div>
          <dt
            className={expand ? "title is-expanded" : "title"}
            onClick={onClick}
          >
            <div className="px-2 titleText">{title}</div>
          </dt>
          <dd
            className={expand ? "content is-expanded" : "content"}
            onClick={onClick}
          >
            <p>{description}</p>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <p>{description4}</p>
            <p>{description5}</p>
            <p>{description6}</p>
          </dd>
        </div>
      </>
    );
  }
}

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      block3: false,
    };
    this.state = {
      sblock1: false,
      sblock2: false,
      sblock3: false,
      sblock4: false,
      sblock5: false,
    };
  }

  toggle = (index) => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  };

  toggle1 = (index) => () => {
    this.setState({ [`sblock${index}`]: !this.state[`sblock${index}`] });
  };

  toggleExpand =
    (expand = false) =>
    () => {
      this.setState({
        block1: expand,
        block2: expand,
        block3: expand,
      });
    };

  render() {
    const accordionList = [
      {
        title: "What is Required to Ship My Car or Vehicle Overseas?",
        iconImg: esIcon,
        description:
          "Whether your vehicle goes by RORO or in a container, you will need:",
        description1:
          "1.	The original Certificate of Title of your vehicle and two notarized title copies.",
        description2:
          " 2.	Bill of Sale or notarized Bill of Sale (varies by port of origin).",
        description3:
          " 3.	Original Certificate of Origin for brand-new vehicles.",
        description4: "4.	Shipper Export Declaration. ",
        description5: " 5.	Declaration of Dangerous Goods.",
        description6: " 6.	Copy of your US Passport.  ",
      },
      {
        title: "What is RORO, and Can I Ship Personal Belongings with It?",
        iconImg: shIcon,
        description:
          "RORO stands for Roll On and Roll Off, where your vehicle is driven onto the vessel. Please note, personal belongings cannot be loaded into the car.",
      },
      {
        title: "What Are the Standard Shipping Container Sizes?",
        iconImg: cwIcon,
        description:
          "Shipping containers come in standard sizes of 20 feet and 40 feet in length, with some destinations offering 45HC containers.",
      },
      {
        title: "What is Required to Ship My Car in a Container? ",
        iconImg: chIcon,
        description:
          "For documentation requirements, refer to Question 1. For further details, visit https://siteexample.com.",
      },
      {
        title: "What Payment Methods Do You Accept?",
        iconImg: cpIcon,
        description:
          "We prefer bank deposits, Zelle, and checks. Credit card payments are accepted, with credit card fees applied.",
      },
    ];
    const accordionList1 = [
      {
        title: "How Long Will My Shipment Take to Arrive? ",
        iconImg: ccIcon,
        description:
          "Shipping times can vary, with some lines taking nearly 3 months to reach their destination. We offer a tracking service from the moment your goods leave the port, allowing you to monitor your shipment throughout its journey.",
      },
      {
        title: "When Should I Make Payment for My Shipment?",
        iconImg: rtIcon,
        description:
          "Typically, we require a 50% down payment before sending trucks to your location or loading in our warehouse, with the remainder due when it sails.",
      },
      {
        title:
          "How Frequently Do Ships Sail, and How Far in Advance Should I Book?",
        iconImg: cpIcon,
        description:
          "Most destinations have weekly sailings, but some ships fill up quickly. To secure your booking, we recommend providing two weeks advance notice.",
      },
      {
        title: "Does My Shipment Include Insurance? ",
        iconImg: ccIcon,
        description:
          "Insurance is optional and is charged separately upon your request.",
      },
      {
        title: "Can I Change the Consignee Information After the Ship Sails?",
        iconImg: rtIcon,
        description:
          "Yes, changes are possible, but many shipping lines charge a correction fee. If the shipment has already arrived at the destination, corrections must be made through the port of discharge.",
      },
    ];

    return (
      <div className="container flex ">
        <div className="row" >
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
        <dl className="accordion accordion-style1">
          <div></div>
          {accordionList.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              iconImg={item.iconImg}
              description={item.description}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
              description4={item.description4}
              description5={item.description5}
              description6={item.description6}
              onClick={this.toggle(index + 1)}
              expand={this.state[`block${index + 1}`]}
            />
          ))}
        </dl>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
        <dl className="accordion accordion-style1">
          {accordionList1.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              iconImg={item.iconImg}
              description={item.description}
              onClick={this.toggle1(index + 1)}
              expand={this.state[`sblock${index + 1}`]}
            />
          ))}
        </dl>
        </div>
        </div>
       
        

        
      </div>
    );
  }
}

export default FAQ;
