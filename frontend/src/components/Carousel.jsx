"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const Carousel = () => {
  var settings = {
    dots: true,
    speed: 650,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "190px",
    infinite: false,
  };
  return (
    <div className="w-[75%] slider-container pl-24 max-md:w-[95%] max-md:p-4 max-md:pl-6">
      <Slider {...settings}>
        <div className="h-[582px] relative">
          <img
            src="/Rectangle 24.png"
            alt=""
            className="w-full h-full object-contain"
          />
          <div className="absolute w-52 h-32 bottom-6 left-16 bg-white bg-opacity-70 flex flex-col items-center justify-center max-md:w-44 max-md:h-24 max-md:left-4">
            <p className="font-medium text-[#616161] max-md:text-sm">
              01 -- Bedroom
            </p>
            <span className="font-semibold text-[28px] text-[#3a3a3a] max-md:text-2xl">
              Inner Peace
            </span>
          </div>
        </div>
        <div className="h-[582px] relative">
          <img
            src="/Rectangle 25.png"
            alt=""
            className="w-full h-full object-contain"
          />
          <div className="absolute w-52 h-32 bottom-6 left-16 bg-white bg-opacity-70 flex flex-col items-center justify-center max-md:w-44 max-md:h-24 max-md:left-4">
            <p className="font-medium text-[#616161] max-md:text-sm">
              02 -- Bedroom
            </p>
            <span className="font-semibold text-[28px] text-[#3a3a3a] max-md:text-2xl">
              Minimalistic
            </span>
          </div>
        </div>
        <div className="h-[582px] relative">
          <img
            src="/pexels-maksgelatin-4352247.jpg"
            alt=""
            className="w-full h-full object-contain"
          />
          <div className="absolute w-52 h-32 bottom-6 left-16 bg-white bg-opacity-70 flex flex-col items-center justify-center max-md:w-44 max-md:h-24 max-md:left-4">
            <p className="font-medium text-[#616161] max-md:text-sm">
              03 -- Living Room
            </p>
            <span className="font-semibold text-[28px] text-[#3a3a3a] max-md:text-xl">
              Classy Modern
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
