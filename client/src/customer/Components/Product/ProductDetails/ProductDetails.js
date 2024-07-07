import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import MobNavbar from "../../Navbar/MobileNavbar";
import Footer from '../../footer/Footer';
import './slick.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../../Redux/Product/productSlice'; // Update the import path as needed
import { useCartContext } from '../../../../Usecontext/cartContext';
import { StarIcon } from '@heroicons/react/solid';
import Reviews from '../../ReviewProduct/RateProduct';

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Use useParams to get the product ID
  const { productDetails, status, error } = useSelector((state) => state.products);
  const { addTocart } = useCartContext();

  const [tab, setTab] = useState("Reviews");
  const [viewport, setViewport] = useState(window.innerWidth < 620);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProduct(id)); // Fetch product details based on ID
  }, [dispatch, id]);

  useEffect(() => {
    const handleResize = () => setViewport(window.innerWidth < 620);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className='lg:block'>
        {viewport ? <MobNavbar /> : <Navbar number={12} />}
      </div>
      <div className='flex flex-col overflow-hidden items-center flex-nowrap h-full justify-center mt-5 mb-8'>
        <div className='shadow-lg mt-5 bg-white w-full'>
          <div className='flex flex-col rounded-3xl mt-10 lg:flex-row '>
            <div className='w-3/4 lg:w-[700px] lg:max-h-max my-6 lg:my-0 mx-12'>
              <Slider {...settings}>
                <div className=' w-full h-full'>
                  <img
                    src={productDetails?.imageUrl}
                    alt={productDetails?.title}
                    className='w-full object-cover'
                  />
                </div>
                {/* Add more slides here if needed */}
              </Slider>
            </div>
            <div className='lg:ml-5 flex flex-col w-full'>
              <div className='flex flex-col lg:flex-col lg:space-x-5 px-5 lg:px-0 mb-5'>
                <div className='flex flex-col space-y-3 max-h-max mb-3'>
                  <h1 className='text-xl lg:text-3xl font-semibold mb-2'>
                    {productDetails?.title}
                  </h1>
                  <div className='flex items-center pb-6'>
                    <StarIcon className='h-6 w-6 text-yellow-500' />
                    <span className='text-yellow-500 ml-2'>
                      {productDetails?.numRatings || 3} Ratings
                    </span>
                  </div>
                  <h2 className='text-lg font-semibold'>
                    ₹{productDetails?.discountedPrice}
                    <span className='text-sm line-through ml-2'>
                      ₹{productDetails?.price}
                    </span>
                  </h2>
                  <div className='flex flex-row items-center'>
                    <button
                      className='bg-green-600 text-white px-4 py-2 rounded-lg'
                      onClick={() => addTocart(productDetails)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className='lg:mt-6 flex flex-col w-full'>
                  <div className='flex items-center border-b '>
                    <button
                      className={`py-2 px-4 text-lg font-medium ${tab === 'Description' ? 'border-b-2 border-blue-500' : ''}`}
                      onClick={() => setTab('Description')}
                    >
                      Description
                    </button>
                  </div>
                  <div className='mt-4 px-4'>
                  <div dangerouslySetInnerHTML={{ __html: productDetails?.description }} />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <nav className='flex justify-start items-center gap-12 select-none mt-12'>
          <ul onClick={() => setTab("Reviews")} className={`cursor-pointer  transition-all ${tab === "Review & Ratings" ? 'border-b-2 border-green-600 p-2' : ''}`}>Reviews & Ratings</ul>
          <ul onClick={() => setTab("Country of Origin")} className={`cursor-pointer transition-all ${tab === "Country of Origin" ? 'border-b-2 border-green-600 p-2' : ''}`}>Country of Origin</ul>
          <ul onClick={() => setTab("Disclaimer")} className={`cursor-pointer transition-all ${tab === "Disclaimer" ? 'border-b-2 border-green-600 p-2' : ''}`}>Disclaimer</ul>
        
        </nav>
        
        <div className='w-[80vw] mt-5  rounded-lg overflow-hidden p-6'>
          {tab === "Disclaimer" && <div class=" w-[80vw]  rounded-lg overflow-hidden p-6">
            <h2 class="text-2xl font-bold mb-4">Apala Bazaar Terms of Use</h2>
            <div class="text-gray-700">
              <p class="mb-4">This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p>

              <p class="mb-4">This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of www.flipkart.com website.</p>

              <p class="mb-4">The domain name www.flipkart.com (hereinafter referred to as "Website") is owned by Flipkart Internet Private Limited a company incorporated under the Companies Act, 1956 with its registered office at Vaishnavi Summit, Ground Floor, 7th Main, 80 feet Road, 3rd Block, Koramangala Industrial Layout, Next to Wipro office, Corporation Ward No. 68, Koramangala, Bangalore - 560 034, Karnataka, India (hereinafter referred to as "Flipkart").</p>

              <p class="mb-4">Your use of the Website and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Website including the applicable policies which are incorporated herein by way of reference. If You transact on the Website, You shall be subject to the policies that are applicable to the Website for such transaction. By mere use of the Website, You shall be contracting with Flipkart Internet Private Limited and these terms and conditions including the policies constitute Your binding obligations, with Flipkart.</p>

              <p class="mb-4">For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on the Website by providing Registration Data while registering on the Website as Registered User using the computer systems. Flipkart allows the User to surf the Website or making purchases without registering on the Website. The term "We", "Us", "Our" shall mean Flipkart Internet Private Limited.</p>

              <p class="mb-4">When You use any of the services provided by Us through the Website, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. It is Your responsibility to review these Terms of Use periodically for updates / changes. Your continued use of the Website following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Website.</p>

              <p class="mb-4 uppercase font-bold text-red-500">Accessing, browsing or otherwise using the site indicates your agreement to all the terms and conditions under these terms of use, so please read the terms of use carefully before proceeding. By impliedly or expressly accepting these terms of use, you also accept and agree to be bound by flipkart policies (including but not limited to privacy policy available on /s/privacypolicy) as amended from time to time.</p>

              <p class="mt-12 lg:w-[80vw] w-full text-gray-700">While we work to ensure that the product information is correct, actual product packaging and material may contain more or different information from what is given here. Please read the product labels, description, directions, warning and other information that comes with the actual product before use.</p>
            </div>
          </div>}
          {tab === "Country of Origin" && <div class="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden p-4">
            <p class="text-gray-700 flex items-center mb-2">
              <span class="ml-1 font-semibold">Made in India</span>
            </p>
            <p class="text-gray-700">
              <span class="font-semibold">Address:</span> 123 Main Street, Pune City, India 220223
            </p>
          </div>}
 
          {tab === "Reviews" && 
            
            <Reviews/>}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
