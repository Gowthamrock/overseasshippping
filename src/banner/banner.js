import React, { useRef } from "react";
import "./banner.css";
import bannerImage from "../assets/Home-Slide1.jpg";
import bannerImage1 from "../assets/home-slide2.jpg";
import bannerImage2 from "../assets/home-slide3.jpg";
import bannerImage3 from "../assets/home-slide4.jpg";
import bannerImage4 from "../assets/home-slide5.jpg";

function Banner() {
  let slider = useRef(0);
  const bgImages = [
    {
      image: bannerImage,
      subtitle: "Logistics  Supply Chain Solutions",
      pageTitle: "Safest Logistics Solutions Provider With Integrity",
      description:
        "We are a leading provider of less-than-truckload freight transportation with the world-className network, technology and service our customers need at all the time.",
      buttonText: "Explore More",
    },
    {
      image: bannerImage1,
      subtitle: "Logistics  Supply Chain Solutions",
      pageTitle: "Safest Logistics Solutions Provider With Integrity",
      description:
        "We are a leading provider of less-than-truckload freight transportation with the world-className network, technology and service our customers need at all the time.",
      buttonText: "Explore More",
    },
    {
      image: bannerImage2,
      subtitle: "Logistics  Supply Chain Solutions",
      pageTitle: "Safest Logistics Solutions Provider With Integrity",
      description:
        "We are a leading provider of less-than-truckload freight transportation with the world-className network, technology and service our customers need at all the time.",
      buttonText: "Explore More",
    },
    {
      image: bannerImage3,
      subtitle: "Logistics  Supply Chain Solutions",
      pageTitle: "Safest Logistics Solutions Provider With Integrity",
      description:
        "We are a leading provider of less-than-truckload freight transportation with the world-className network, technology and service our customers need at all the time.",
      buttonText: "Explore More",
    },
    {
      image: bannerImage4,
      subtitle: "Logistics  Supply Chain Solutions",
      pageTitle: "Safest Logistics Solutions Provider With Integrity",
      description:
        "We are a leading provider of less-than-truckload freight transportation with the world-className network, technology and service our customers need at all the time.",
      buttonText: "Explore More",
    },
  ];

  const bannerslides = bgImages.map((images, index) => {
    return (
      <div
        className="slide w-full"
        key={index}
        style={{ backgroundImage: `url(${images.image})` }}
      >
        <div className="title-c6g slideText">
          <div className="subtitle-wrap-dark">
            <div className="subtitle-border"></div>
            <p className="subtitle-dark">{images.subtitle}</p>
          </div>

          <h1 className="page-title">{images.pageTitle}</h1>
          <p className="text-white">{images.description}</p>
          <div className="mg-top-teb">
            <a href="/about-us" className="overlay-2vg block-q99">
              <div>{images.buttonText}</div>
            </a>
          </div>
        </div>
      </div>
    );
  });

  const slidesCount = 5;
  const maxLeft = (slidesCount - 1) * 100 * -1;

  let current = 0;

  function changeSlide(next = true) {
    if (next) {
      current += current > maxLeft ? -100 : current * -1;
    } else {
      current = current < 0 ? current + 80 : maxLeft;
    }
    

    slider.current.style.left = current + "%";
  }
  // changeSlide();
  // setTimeout(() =>{
  //     changeSlide();
  // },500)

  return (
    <div className="bannerCarousel">
      <div
        className="slides"
        ref={slider}
        style={{ left: 0 }}
        onClick={changeSlide}
      >
        {bannerslides}
      </div>
    </div>
  );
}

export default Banner;
