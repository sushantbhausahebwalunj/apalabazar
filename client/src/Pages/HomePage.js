
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
  },[])

  return (
    <div className="overflow-hidden">
     {viewport ? <MobNavbar/> :  <Navbar number={12} />}

      <div className="w-[95vw] mx-auto overflow-hidden ml-5 mt-2 bottom-0 radius" >
        <Slider {...settings} className="radius ">
          <div className="w-full radius ">
            <a href="./product/1 radius">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="./skin_care.jpg"
                  className=" object-fill h-[20vh] lg:h-[60vh] w-full radius px-4"
                 
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius ">
            <a href="./product/2 radius" >
              <div className="flex items-center  justify-end bg-opacity-50 rounded radius w-full">
                <img
                  src="./chocolates.jpg"
                  className=" object-fill h-[20vh] lg:h-[60vh] w-full radius px-4"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="./dailyneeds.jpg"
                  className=" object-fill h-[20vh] lg:h-[60vh] w-full radius px-4"
                ></img>
              </div>
            </a>
          </div>
          <div className="w-full radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius  w-full">
                <img
                  src="./snacks.jpg"
                  className=" object-fill h-[20vh] lg:h-[60vh] w-full radius px-4"
                ></img>
              </div>
            </a>
          </div>
      
        </Slider>
      </div>
      <HomePageAdvertisement/>
      <TrendingProducts/>
        <ProductComponent />
        <FrozenSnacks/>
        
    <div className="w-[85vw] mx-auto mt-2 border-0 radius" >
        <Slider {...settings} className="radius">
          <div className="radius">
            <a href="./product/1 radius">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FF_4500-x-1125_paneer.jpg%3Fwidth%3D1024&w=1920&q=75"
                  className=" object-fill h-[30vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
          <div className="radius">
            <a href="./product/2 radius" >
              <div className="flex items-center  justify-end bg-opacity-50 rounded radius w-full">
                <img
                  src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FEngage_Travel_Pack_Desktop_.jpg%3Fwidth%3D1024&w=1920&q=75"
                  className=" object-fill h-[30vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
          <div className="radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius w-full">
                <img
                  src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2FBanner_8_Desktop_.jpg%3Fwidth%3D1024&w=1920&q=75"
                  className=" object-fill h-[30vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
          <div className="radius">
            <a href="./product/1">
              <div className="flex items-center  justify-end bg-opacity-50 radius  w-full">
                <img
                  src="https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fboolfly%2Fbanner%2Fbanner.jpg%3Fwidth%3D1024&w=1920&q=75"
                  className=" object-fill h-[30vh] w-full radius"
                ></img>
              </div>
            </a>
          </div>
      
        </Slider>
      </div>
    <PopularBrand/>
    <Maylike/>

      <Footer/>
    </div>
  );
}

export default HomePage;
