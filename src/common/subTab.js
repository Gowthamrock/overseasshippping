import React, { useState } from "react";
import "./subTab.css";
import "bootstrap/dist/css/bootstrap.min.css";
import middleeastflag from "../assets/Middle East/kuwait.jpg";
import middleeastflag1 from "../assets/Middle East/qatar.jpg";
import middleeastflag2 from "../assets/Middle East/saudi-arabia.jpg";
import middleeastflag4 from "../assets/Middle East/united-arab-emirates.jpg";
import middleeastflag5 from "../assets/Middle East/yemen.jpg";
import africaflag from "../assets/Africa/algeria.jpg";
import africaflag1 from "../assets/Africa/egypt.jpg";
import africaflag2 from "../assets/Africa/ghana.jpg";
import africaflag3 from "../assets/Africa/liberia.jpg";
import africaflag4 from "../assets/Africa/libya.jpg";
import africaflag5 from "../assets/Africa/morocco.jpg";
import africaflag6 from "../assets/Africa/nigeria.jpg";
import africaflag7 from "../assets/Africa/tanzania.jpg";
import africaflag8 from "../assets/Africa/tunisia.jpg";
import europeflag from "../assets/Europe/england.jpg";
import europeflag1 from "../assets/Europe/france.jpg";
import europeflag2 from "../assets/Europe/germany.jpg";
import europeflag3 from "../assets/Europe/greece.jpg";
import europeflag4 from "../assets/Europe/italy.jpg";
import europeflag5 from "../assets/Europe/turky.jpg";
import americaflag from "../assets/America/brazil.jpg";
import americaflag1 from "../assets/America/honduras.jpg";
import asiaflag from "../assets/Asia/india.jpg";
import asiaflag1 from "../assets/Asia/indonesia.jpg";
import asiaflag2 from "../assets/Asia/malaysia.jpg";
import asiaflag3 from "../assets/Asia/pakistan.jpg";

function TabContent(props) {
  const { data } = props;

  return (
    <>
      {data?.length == 1 && (
        <div className="tab-description-container">
          {data[0].subtabClass2 && (
            <div className="container">
              <br></br>
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img
                        src={middleeastflag}
                        className="countryimg-style"
                      ></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Kuwait</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img
                        src={middleeastflag1}
                        className="countryimg-style"
                      ></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Qatar</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img
                        src={middleeastflag2}
                        className="countryimg-style"
                      ></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Saudi-Arabia</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img
                        src={middleeastflag4}
                        className="countryimg-style"
                      ></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">UAE</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img
                        src={middleeastflag5}
                        className="countryimg-style"
                      ></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Yemen</h3>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
              {/* <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                      <div className="text-center">
                        <img
                          src={americaflag}
                          className="countryimg-style"
                        ></img>
                      </div>
                      <h1 className="text-center subcontent-style">Brazil</h1>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card">
                      <div className="text-center">
                        <img
                          src={americaflag1}
                          className="countryimg-style"
                        ></img>
                        &nbsp;
                        <h1 className="text-center subcontent-style">
                          honduras
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <br></br>{" "}
              </div> */}
            </div>
          )}
          {data[0].subtabClass3 && (
            <div className="container">
              <br></br>
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Algeria</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag1} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Egypt</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag2} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Ghana</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag3} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Liberia</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag4} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Libya</h3>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag5} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Morocco</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag6} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Nigeia</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag7} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Tanzania</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={africaflag8} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Tunisia</h3>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          )}
          {data[0].subtabClass4 && (
            <div className="container">
              <br></br>
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={europeflag} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">England</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={europeflag1} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">France</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={europeflag2} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Germany</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={europeflag3} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Greece</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={europeflag4} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Italy</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={europeflag5} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Turkey</h3>
                    </div>
                  </div>
                </div>

                <br></br>
              </div>
            </div>
          )}
          {data[0].subtabClass5 && (
            <div className="container">
              <br></br>
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 ">
                    <div className="card card-style">
                      <img src={americaflag} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Brazil</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img
                        src={americaflag1}
                        className="countryimg-style"
                      ></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Honduras</h3>
                    </div>
                  </div>
                </div>

                <br></br>
              </div>
            </div>
          )}
          {data[0].subtabClass6 && (
            <div className="container">
              <br></br>
              <div className="card-body">
                <div className="row">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={asiaflag} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">India</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={asiaflag1} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Indonesia</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={asiaflag2} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Malaysia</h3>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <div className="card card-style">
                      <img src={asiaflag3} className="countryimg-style"></img>
                    </div>
                    <div className="card-footer">
                      <h3 className="countryText-style">Pakistan</h3>
                    </div>
                  </div>
                </div>

                <br></br>
              </div>
            </div>
          )}
        </div>
      )}
      ;
    </>
  );
}
function SubTab(props) {
  const [selectedTab, setselectedTab] = useState(0);
  const tabs = props.data.tabs;
  const tabtext = props.data.subtabContents;

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
    <div className="">
      <div className="tab-header countryFlags">{tab}</div>
      <div className="tab-content">
        <TabContent data={tabtext[selectedTab]}></TabContent>
      </div>
    </div>
  );
}

export default SubTab;
