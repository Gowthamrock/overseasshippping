import React from "react";
import "./whychoose.css";
import esIcon from "../assets/efficient-shipping.svg";
import shIcon from "../assets/shipping-network.svg";
import cwIcon from "../assets/cutting-edge-warehousing.svg";
import chIcon from "../assets/cargo-handling.svg";
import cpIcon from "../assets/competitive-pricing.svg";
import ccIcon from "../assets/custom-clearance.svg";
import rtIcon from "../assets/reliable-tracking.svg";

class Whychoose extends React.Component {
  render() {
    const { title, expand, onClick, description, iconImg } = this.props;

    return (
      <div>
        <dt
          className={expand ? "title is-expanded" : "title"}
          onClick={onClick}
        >
          <div className="accordionIcon flex">
            <img src={iconImg}></img>
          </div>
          <div className="px-2 titleText">{title}</div>
        </dt>
        <dd
          className={expand ? "content is-expanded" : "content"}
          onClick={onClick}
        >
          <p>{description}</p>
        </dd>
      </div>
    );
  }
}
class Accordiontext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      block3: false,
    };
  }

  toggle = (index) => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
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
        title: " DEPENDABLE AND EFFICIENT SHIPPING",
        iconImg: esIcon,
        description:
          "Our commitment to reliable and efficient shipping extends from the USA to destinations in the Middle East, Africa, and beyond. We provide top-tier services to ensure the safe delivery of your goods to your chosen port.",
      },
      {
        title: "EXTENSIVE REACH AND SHIPPING NETWORK ",
        iconImg: shIcon,
        description:
          "Whether your cargo is bound for any port in the Middle East or Africa, you can trust our expansive network of shipping lines to deliver your consignments promptly to their intended destinations.",
      },
      {
        title: "CUTTING-EDGE WAREHOUSING ",
        iconImg: cwIcon,
        description:
          "Step into the Warehouse of Tomorrow - its not just a storage facility; its a state-of-the-art, futuristic hub designed to ensure the utmost care for your cargo. We safeguard your shipments until they embark on their safe journey to their next destination.",
      },
      {
        title: "VERSATILE CARGO HANDLING ",
        iconImg: chIcon,
        description:
          "From small parcels to heavy, complex loads and even project cargo, we possess the expertise and equipment needed to handle your shipments with precision and finesse.",
      },
      {
        title: "COMPETITIVE PRICING",
        iconImg: cpIcon,
        description:
          "Our pricing options are designed to be highly competitive, making shipping through our services an affordable choice for our valued clients.",
      },
      {
        title: "EFFORTLESS CUSTOMS CLEARANCE ",
        iconImg: ccIcon,
        description:
          "Our dedicated team of specialists is well-versed in handling smooth and hassle-free customs clearances. They are highly trained and knowledgeable in shipping procedures and regulations.",
      },
      {
        title: "RELIABLE TRACKING & 24/7 CUSTOMER SUPPORT ",
        iconImg: rtIcon,
        description:
          "Our commitment to your peace of mind extends beyond the shipping process. We offer 24/7 customer support to assist you, and our online shipment tracker empowers you to monitor your cargo shipments in real time. Your satisfaction is our priority, every step of the way.",
      },
    ];

    return (
      <div className="container">
        {/* <h1>React Accordion</h1>
        <button type="button" className="btn" onClick={this.toggleExpand(true)}>Expand All</button>
        <button type="button" className="btn" onClick={this.toggleExpand()}>Collapse All</button> */}

        <dl className="accordion">
          {accordionList.map((item, index) => (
            <Whychoose
              key={index}
              title={item.title}
              iconImg={item.iconImg}
              description={item.description}
              onClick={this.toggle(index + 1)}
              expand={this.state[`block${index + 1}`]}
            />
          ))}
        </dl>
      </div>
    );
  }
}

export default Accordiontext;
