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

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Use useParams to get the product ID
  const { productDetails, status, error } = useSelector((state) => state.products);
  const { addTocart } = useCartContext();

  const [tab, setTab] = useState("Description");
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
    infinite: true,
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
      <div className='flex flex-col overflow-hidden items-center flex-nowrap justify-center mt-5 mb-8'>
        <div className='shadow-lg mt-5 bg-white w-full'>
          <div className='flex flex-col rounded-3xl mt-10 lg:flex-row items-center justify-center'>
            <div className='w-3/4 lg:w-[700px] lg:h-[600px] my-6 lg:my-0 mx-12'>
              <Slider {...settings}>
                <div className='w-full h-full'>
                  <img
                    src={productDetails?.imageUrl}
                    alt={productDetails?.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                {/* Add more slides here if needed */}
              </Slider>
            </div>
            <div className='lg:ml-5 flex flex-col w-full'>
              <div className='flex flex-col lg:flex-col lg:space-x-5 px-5 lg:px-0'>
                <div className='flex flex-col space-y-3 max-h-max'>
                  <h1 className='text-xl lg:text-3xl font-semibold'>
                    {productDetails?.title}
                  </h1>
                  <div className='flex items-center'>
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
                    <button
                      className={`py-2 px-4 text-lg font-medium ${tab === 'Reviews' ? 'border-b-2 border-blue-500' : ''}`}
                      onClick={() => setTab('Reviews')}
                    >
                      Reviews
                    </button>
                  </div>
                  <div className='mt-4 px-4'>
                    {tab === 'Description' ? (
                      <div dangerouslySetInnerHTML={{ __html: productDetails?.description }} />
                    ) : (
                      <div>No reviews yet</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
