<<<<<<< HEAD
import Navbar from "../Components/Navbar";
import ProductComponent from "../Components/Adverties";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import FrozenSnacks from "../Components/Product";
import PopularBrand from "../Components/Popularbrand";

=======
import React from 'react'
import Navbar from '../customer/Components/Navbar/Navbar';
import Footer from '../customer/Components/footer/Footer';
>>>>>>> c0563fb00bc4ef67a762975059cd707a192ebc35

function HomePage() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div>
      <Navbar />

      <div className="w-[95vw] ml-5">
        
        <Slider {...settings} className="m-0">
          <div className="w-full">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full">
                <img
                  src="./skin_care.jpg"
                  className=" object-fill h-[60vh] w-full"
                ></img>
              </div>
            </a>
          </div>
          <div>
            <a href="./product/2">
              <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full">
                <img
                  src="./chocolates.jpg"
                  className=" object-fill h-[60vh] w-full"
                ></img>
              </div>
            </a>
          </div>
          <div>
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full">
                <img
                  src="./dailyneeds.jpg"
                  className=" object-fill h-[60vh] w-full"
                ></img>
              </div>
            </a>
          </div>
          <div>
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full">
                <img
                  src="./snacks.jpg"
                  className=" object-fill h-[60vh] w-full"
                ></img>
              </div>
            </a>
          </div>
          <div>
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full">
                <img
                  src="./snacks.jpg"
                  className=" object-fill h-[60vh] w-full"
                ></img>
              </div>
            </a>
          </div>
          <div>
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-black bg-opacity-50 rounded  w-full">
                <img
                  src="./snacks.jpg"
                  className=" object-fill h-[60vh] w-full"
                ></img>
              </div>
            </a>
          </div>
        </Slider>
      </div>

        <ProductComponent />
        <FrozenSnacks/>
    <PopularBrand/>
      
    </div>
<<<<<<< HEAD
  );
=======
    
    </div>
  )
>>>>>>> c0563fb00bc4ef67a762975059cd707a192ebc35
}

export default HomePage;
