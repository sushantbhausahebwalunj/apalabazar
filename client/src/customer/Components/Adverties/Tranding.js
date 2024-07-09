import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../Redux/Product/productSlice';
import { useCartContext } from '../../../Usecontext/cartContext';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Trending.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const productCardClasses = 'bg-white rounded-lg p-1 sm:p-4 flex-shrink-0 mb-3 mt-5 mx-2 sm:mx-4 w-20 h-[180px] border border-gray-300 sm:w-60 sm:h-[320px] transition-transform duration-300 hover:scale-105';
const imageClasses = 'w-full h-[60%] object-contain mb-2 sm:h-32';
const buttonClasses = 'bg-green-500 text-white text-4xs py-2 px-2 rounded-lg w-full sm:text-xs';

const ProductCard = ({ product }) => {
  const { addTocart } = useCartContext();
  return (
    <div className={productCardClasses}>
      <Link to={`/product/${product._id}`}>
        <img className={imageClasses} src={product.imageUrl} alt="Product Image" />
        <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">{product.title}</h3>
      </Link>
      <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
        <div>
          MRP <span className="line-through">{product.price}</span> <span className="font-semibold">{product.discountedPrice}</span>
        </div>
        <div>
          Sale <span className="font-semibold">{product.discountedPrice}</span>
        </div>
      </div>
      <div className="text-green-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">{product.discountPercent}% off</div>
      <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">{product.quantity} available</div>
      <div className="flex justify-center">
        <button className={buttonClasses} onClick={() => addTocart(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const CustomPrevArrow = ({ onClick }) => (
  <button
    className='rounded-md px-4 py-8 absolute left-[-15px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 hover:bg-blue-400 transition-colors duration-300 ease-in-out'
    onClick={onClick}
    style={{ display: "block" }}
  >
    &lt;
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className='bg-gray-200 hover:bg-blue-400 transition-colors duration-300 ease-in-out rounded-md px-4 py-8 absolute right-[-15px] top-1/2 transform -translate-y-1/2 z-10'
    onClick={onClick}
    style={{ display: "block" }}
  >
    &gt;
  </button>
);

const Trending = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    dispatch(fetchProducts());
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: isMobile ? 1 : 5,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  if (isMobile) {
    return null; // Or use an empty div: <div></div>
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error fetching products</div>;
  }

  return (
    <div>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Slider>
    </div>
  );
};

export default Trending;
