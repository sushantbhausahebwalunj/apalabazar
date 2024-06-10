
import Navbar from "../customer/Components/Navbar/Navbar.js";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../customer/Components/footer/Footer';
import Slider from "react-slick";
import ProductComponent from '../customer/Components/Adverties/Adverties.js';
import FrozenSnacks from '../customer/Components/Products/Product.js'
import PopularBrand from '../customer/Components/Brand/Popularbrand.js'
import './HomePage.css'
import TrendingProducts from "../customer/Components/Adverties/Tranding.js";
function HomePage() {
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

      <div className="w-[95vw] ml-5 mt-2 bottom-0 radius" >
        <Slider {...settings} className="radius">
          <div className="w-full radius">
            <a href="./product/1 radius">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="./skin_care.jpg"
                  className=" object-fill h-[60vh] w-full radius"
                 
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/2 radius" >
              <div className="flex items-center  justify-end bg-opacity-50 rounded radius w-full">
                <img
                  src="./chocolates.jpg"
                  className=" object-fill h-[60vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="./dailyneeds.jpg"
                  className=" object-fill h-[60vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius  w-full">
                <img
                  src="./snacks.jpg"
                  className=" object-fill h-[60vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
      
        </Slider>
      </div>
      <TrendingProducts/>
        <ProductComponent />
        <FrozenSnacks/>
    <PopularBrand/>
    
      <Footer/>
    </div>
  );
}

export default HomePage;
