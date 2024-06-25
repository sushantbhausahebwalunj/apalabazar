
import Navbar from "../customer/Components/Navbar/Navbar.js";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../customer/Components/footer/Footer';
import Slider from "react-slick";
import ProductComponent from '../customer/Components/Adverties/Adverties.js';
import FrozenSnacks from '../customer/Components/Products/Product.js'
import PopularBrand from '../customer/Components/Brand/Popularbrand.js'
import './HomePage.css'
import TrendingProducts from "../customer/Components/Adverties/Tranding.js";
import HomePageAdvertisement from "../customer/Components/HomePageAdvertisement/HomePageAdvertisement.js";
import Maylike from "../customer/Components/Adverties/Maylike.js";
import MobNavbar from "../customer/Components/Navbar/MobileNavbar.js";

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
  const [viewport,setViewport] = useState(false);
  useEffect(() => {
    if(window.innerWidth < 620){
      setViewport(true)
    }else{
      setViewport(false)
    }
  })

  return (
    <div className="overflow-hidden">
     {viewport ? <MobNavbar/> :  <Navbar number={12} />}

      <div className="w-[99.6vw] mx-auto overflow-hidden mt-2 bottom-0 radius" >
        <Slider {...settings} className="radius ">
          <div className="w-full radius ">
            <a href="./product/1 radius">
              <div className="flex items-center justify-center bg-opacity-50 radius w-full">
                <img
                  src="./skin_care.jpg"
                  className=" object-fill h-[20vh] lg:h-[65vh] w-full radius px-4"
                 
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius ">
            <a href="./product/2 radius" >
              <div className="flex items-center  justify-end bg-opacity-50 rounded radius w-full">
                <img
                  src="./chocolates.jpg"
                  className=" object-fill h-[20vh] lg:h-[65vh] w-full radius px-4"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="./dailyneeds.jpg"
                  className=" object-fill h-[20vh] lg:h-[65vh] w-full radius px-4"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius  w-full">
                <img
                  src="./snacks.jpg"
                  className=" object-fill h-[20vh] lg:h-[65vh] w-full radius px-4"
                ></img>
              </div>
            </a>
          </div>
      
        </Slider>
      </div>

      <TrendingProducts/>
        <ProductComponent />
        <HomePageAdvertisement/>
        <FrozenSnacks/>
       
   
    <Maylike/>
    <PopularBrand/>

      <Footer/>
    </div>
  );
}

export default HomePage;
