import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.min.css";
import "./slider.css";
import bannerData from "../data/data.json";
import { Link } from "react-router-dom";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      fade: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
    };

    return (
      <div className="sliderContainer">
        <Slider {...settings}>
          <div className="slide w-full slider-image1">
            <div className="title-c7g slideText2">
              <div className="subtitle-wrap-dark">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark">
                  {bannerData.services.banners[0].subtitle}
                </p>
              </div>

              <h1 className="page-title1">
                {bannerData.services.banners[0].pageTitle}
              </h1>
              <h4 className="subpage-title">
                {bannerData.services.banners[0].description}
              </h4>
              {/* <p className="text-white">{bannerData.services.banners[0].description}</p> */}
              <div className="mg-top-teb">
                <Link to="/about-us" className="overlay-2vg block-q99 overlay">
                  <div>{bannerData.services.banners[0].buttonText}</div>
                </Link>
                {/* <a href="/aboutUs" className="overlay-2vg block-q99 overlay">
                  <div>{bannerData.services.banners[0].buttonText}</div>
                </a> */}
              </div>
            </div>
          </div>
          <div className="slide w-full slider-image2">
            <div className="title-c8g  slideText1">
              <div className="subtitle-wrap-dark">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark ">
                  {bannerData.services.banners[1].subtitle}
                </p>
              </div>

              <h1 className="page-title">
                {bannerData.services.banners[1].pageTitle}
              </h1>
              <h4 className="subpage-title">
                {bannerData.services.banners[0].description}
              </h4>
              {/* <p className="text-white">{bannerData.services.banners[1].description}</p> */}
              <div className="mg-top-teb">
                <Link
                  to="/services/auto"
                  className="overlay-2vg block-q99 overlay1"
                >
                  <div>{bannerData.services.banners[1].buttonText}</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="slide w-full slider-image3">
            <div className="title-c8g slideText1">
              <div className="subtitle-wrap-dark">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark">
                  {bannerData.services.banners[2].subtitle}
                </p>
              </div>

              <h1 className="page-title">
                {bannerData.services.banners[2].pageTitle}
              </h1>
              <h4 className="subpage-title">
                {bannerData.services.banners[0].description}
              </h4>
              {/* <p className="text-white">{bannerData.services.banners[2].description}</p> */}
              <div className="mg-top-teb">
                <Link
                  to="/services/household"
                  className="overlay-2vg block-q99 overlay1"
                >
                  <div>{bannerData.services.banners[1].buttonText}</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="slide w-full slider-image4">
            <div className="title-c7g slideText2">
              <div className="subtitle-wrap-dark">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark">
                  {bannerData.services.banners[3].subtitle}
                </p>
              </div>

              <h1 className="page-title">
                {bannerData.services.banners[3].pageTitle}
              </h1>
              <h4 className="subpage-title">
                {bannerData.services.banners[0].description}
              </h4>
              {/* <p className="text-white">{bannerData.services.banners[3].description}</p> */}
              <div className="mg-top-teb">
                <Link
                  to="/services/international"
                  className="overlay-2vg block-q99 overlay3"
                >
                  <div>{bannerData.services.banners[3].buttonText}</div>
                </Link>

                {/* <a href="/services" className="overlay-2vg block-q99 overlay3">
                  <div>{bannerData.services.banners[3].buttonText}</div>
                </a> */}
              </div>
            </div>
          </div>
          <div className="slide w-full slider-image5">
            <div className="title-c8g slideText1">
              <div className="subtitle-wrap-dark">
                <div className="subtitle-border"></div>
                <p className="subtitle-dark">
                  {bannerData.services.banners[4].subtitle}
                </p>
              </div>

              <h1 className="page-title">
                {bannerData.services.banners[4].pageTitle}
              </h1>
              <h4 className="subpage-title">
                {bannerData.services.banners[0].description}
              </h4>
              {/* <p className="text-white">{bannerData.services.banners[4].description}</p> */}
              <div className="mg-top-teb">
                <Link
                  to="/services/warehouse"
                  className="overlay-2vg block-q99 overlay4"
                >
                  <div>{bannerData.services.banners[4].buttonText}</div>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
