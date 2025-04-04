import React from "react";
import "./intro.css";
import BigImg from "../assets/home-intro1.jpg";
// import SmallImg from "../assets/why-us-home-small.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
function Intro() {
  return (
    <>
    <div className="card-header">
    <h2 className="home-intro">
        Specialist in Auto Shipping and Container Shipping
      </h2>
    </div>
      

      <div className="grid grid-flow-col auto-cols-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className="videoContainer">
                <div id="w-n-p7g" className="image-cc8">
                  <img
                    src={BigImg}
                    id="style-o6Wrx"
                    className="style-o6Wrx"
                  ></img>
                  {/* <div className="image-94a">
              <img
                src={SmallImg}
                width="463"
                id="style-WFfVQ"
                className="style-WFfVQ"
              ></img>
            </div> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="introContainer ">
                {/* <p>For shipping cars, moving homes, or exporting goods, you will need international shipping. It involves high costs, detailed documentation, insurance, and reliable freight forwarding services. Talk to Overseas Shipping Inc, a licensed NVOCC, headquartered in Baltimore, USA. Enjoy hassle-free international shipping through Air, Sea & Land across the world.</p>
            <p>
            We specialize in Automobile Shipping through Container and RORO vessels. Besides, we offer Container Shipping services for Household Goods and Export Goods. Leverage our experience for Warehousing, and Crossdocking, Pack and Move, and Project Logistics.
            </p> */}
                <p>
                  For car shipping, home relocation, or global trade, trust
                  Overseas Shipping Inc. Based in Rosedale, MD, USA, we are a US
                  licensed NVOCC dedicated to providing hassle-free services.
                  From documentation and expert packing to reliable
                  transportation, we ensure a stress-free shipping experience
                  for cargos of any size.
                  <br></br><br></br>
                  Our promise extends across Air Cargo, Ocean Container
                  Shipping, and Inland Freight services. With robust
                  partnerships with trusted multimodal transport providers, we
                  ensure secure, dependable, and timely deliveries to
                  destinations worldwide. Offering cost-effective solutions, we
                  specialize in hassle-free ocean and land shipping to the
                  Middle East, Africa, and beyond.
                </p>
               
          
                <button className="learnBtn">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
