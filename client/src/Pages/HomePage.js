// import Navbar from "../customer/Components/Navbar/Navbar.js";
// import React, { useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Footer from '../customer/Components/footer/Footer';
// import Slider from "react-slick";
// import ProductComponent from '../customer/Components/Adverties/Adverties.js';
// import FrozenSnacks from '../customer/Components/Products/Product.js';
// import GadgetSection from '../customer/Components/Products/GadgetSection.js';
// import PopularBrand from '../customer/Components/Brand/Popularbrand.js';
// import './HomePage.css';

// import TrendingProducts from "../customer/Components/Adverties/Tranding.js";
// import HomePageAdvertisement from "../customer/Components/HomePageAdvertisement/HomePageAdvertisement.js";
// import Maylike from "../customer/Components/Adverties/Maylike.js";

// function HomePage() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 630);
//   const [viewport, setViewport] = useState(window.innerWidth < 620);

//   useEffect(() => {
//     const handleResize = () => {
//       const isMobileView = window.innerWidth < 620;
//       setIsMobile(isMobileView);
//       setViewport(isMobileView);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Set initial state

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="overflow-hidden bg-gray-100">
//       <Navbar />
//       <div className="w-[95vw] mx-auto overflow-hidden mt-5 rounded-md">
//         <Slider {...settings} className="rounded-md">
//           <div className="w-full rounded-md">
//             <a href="./product/1" className="rounded-md">
//               <div className="flex items-center justify-center bg-opacity-50 rounded-md h-1/2 w-full">
//                 <img
//                   src="./skin_care.jpg"
//                   className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
//                   alt="Skin Care"
//                 />
//               </div>
//             </a>
//           </div>
//           <div className="w-full rounded-md">
//             <a href="./product/2" className="rounded-md">
//               <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
//                 <img
//                   src="./chocolates.jpg"
//                   className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
//                   alt="Chocolates"
//                 />
//               </div>
//             </a>
//           </div>
//           <div className="w-full rounded-md">
//             <a href="./product/1" className="rounded-md">
//               <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
//                 <img
//                   src="./dailyneeds.jpg"
//                   className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
//                   alt="Daily Needs"
//                 />
//               </div>
//             </a>
//           </div>
//           <div className="w-full rounded-md">
//             <a href="./product/1" className="rounded-md">
//               <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
//                 <img
//                   src="./snacks.jpg"
//                   className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
//                   alt="Snacks"
//                 />
//               </div>
//             </a>
//           </div>
//         </Slider>
//       </div>

//       {!isMobile && (
//         <div className="relative bg-white px-5 py-16 mt-5 mx-6 mb-5 rounded-lg">
//           <h2 className="text-lg sm:text-2xl mb-3 font-semibold">Trending Products</h2>
//           <TrendingProducts />
//         </div>
//       )}
//       <GadgetSection />
//       {!isMobile && (
//         <div className="relative bg-white px-5 py-16 mt-5 mx-6 mb-5 rounded-lg">
//           <h2 className="text-lg sm:text-2xl mb-3 font-semibold">Frozen Snacks</h2>
//           <TrendingProducts/>
//         </div>
//       )}
//       <ProductComponent />
//       <HomePageAdvertisement />
//       <Maylike />
//       <PopularBrand />
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;
import Navbar from "../customer/Components/Navbar/Navbar.js";
import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../customer/Components/footer/Footer';
import Slider from "react-slick";
import ProductComponent from '../customer/Components/Adverties/Adverties.js';
import FrozenSnacks from '../customer/Components/Products/Product.js';
import GadgetSection from '../customer/Components/Products/GadgetSection.js';
// import GadgetSection from '../customer/Components/Product/Products/GadgetSection.js';
import PopularBrand from '../customer/Components/Brand/Popularbrand.js';
import './HomePage.css';

import TrendingProducts from "../customer/Components/Adverties/Tranding.js";
import HomePageAdvertisement from "../customer/Components/HomePageAdvertisement/HomePageAdvertisement.js";
import Maylike from "../customer/Components/Adverties/Maylike.js";

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvertisements } from "../Redux/Advertisements/advertisementSlice.js";
import { Link } from "react-router-dom";


function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 630);
  const [viewport, setViewport] = useState(window.innerWidth < 620);

  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 620;
      setIsMobile(isMobileView);
      setViewport(isMobileView);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const dispatch = useDispatch();
  const { advertisements, status : adsstatus } = useSelector((state) => state.advertisements || {});

  useEffect(() => {
    dispatch(fetchAdvertisements());
  }, [dispatch]);
  if (adsstatus === 'succeeded'){
    console.log("PUBLISHED ADVERTISEMENTS first element product brand: ", advertisements[0]);
  }
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // const prodID = advertisements[4].product._id;

  return (
    <div className="overflow-hidden bg-gray-100">
      <Navbar />
      <div className="w-[95vw] mx-auto overflow-hidden mt-5 rounded-md">
        <Slider {...settings} className="rounded-md">
        {adsstatus === "succeeded" && (
            advertisements.length > 0 ? (
                advertisements
                    .filter(publishedAdvertisement => publishedAdvertisement.section === "Section 0")
                    .map(publishedAdvertisement => (
                      // <Link to={`/product/${prodID}`}>
                        <div className="w-full rounded-md" key={publishedAdvertisement.id}>
                            {/* <a href="./product/${advertisement.product._id}" className="rounded-md"> */}
                                <div className="flex items-center justify-center bg-opacity-50 rounded-md h-1/2 w-full">
                                    <img
                                    
                                        src={publishedAdvertisement.imageUrl}
                                        className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                                        alt="Skin Care"
                                    />
                                </div>
                                {/* </Link> */}
                        </div>
                      // </Link>
                    ))
            ) : (
                  
              <>
              <div className="w-full rounded-md">
                <a href="./product/2" className="rounded-md">
                  <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                    <img
                      src="./chocolates.jpg"
                      className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                      alt="Chocolates"
                    />
                  </div>
                </a>
              </div>
              <div className="w-full rounded-md">
                <a href="./product/1" className="rounded-md">
                  <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                    <img
                      src="./dailyneeds.jpg"
                      className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                      alt="Daily Needs"
                    />
                  </div>
                </a>
              </div>
              <div className="w-full rounded-md">
                <a href="./product/1" className="rounded-md">
                  <div className="flex items-center justify-center bg-opacity-50 rounded-md w-full">
                    <img
                      src="./snacks.jpg"
                      className="object-cover h-[20vh] lg:h-[45vh] w-full rounded-md"
                      alt="Snacks"
                    />
                  </div>
                </a>
              </div> 
              </>
            )
          )} 
        </Slider>
      </div>

      {!isMobile && (
        <div className="relative bg-white px-5 py-16 mt-5 mx-6 mb-5 rounded-lg">
          <h2 className="text-lg sm:text-2xl mb-3 font-semibold">Daily Essentials</h2>
          <TrendingProducts />
        </div>
      )}
      <GadgetSection advertisements={advertisements} status={adsstatus} />
      {!isMobile && (
        <div className="relative bg-white px-5 py-16 mt-5 mx-6 mb-5 rounded-lg">
          <h2 className="text-lg sm:text-2xl mb-3 font-semibold">Frozen Snacks</h2>
          <TrendingProducts/>
        </div>
      )}
      <ProductComponent advertisements={advertisements} status={adsstatus} />
      <HomePageAdvertisement advertisements={advertisements} status={adsstatus} />
      <Maylike />
      <PopularBrand />
      <Footer />
    </div>
  );
}

export default HomePage;
