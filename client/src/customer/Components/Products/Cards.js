import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../../../Redux/Cart/cartSlice';

const productCardClasses = "bg-white flex-col flex rounded-lg p-1 lg:p-4 mb-3 mt-5 lg:mx-4 border h-fit border-gray-500 lg:w-60 h-fit transition-transform duration-300 hover:scale-105";
const imageClasses = "w-full object-contain mb-2 h-28";
const buttonClass = (enabled) =>
  enabled
    ? "bg-blue-500 text-white lg:text-lg text-md py-1 px-2 rounded-lg lg:w-full w-30 my-1"
    : "bg-gray-400 text-gray-200 w-full py-2 rounded-lg cursor-not-allowed";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToCartStatus, addToCartError } = useSelector((state) => state.cart);

  const handleAddToCart = async () => {
    const id = product._id;
    const resultAction = await dispatch(addToCart(id));
    if (addToCart.rejected.match(resultAction) && resultAction.payload && resultAction.payload.isUnauthorized) {
      navigate('/login');
    }
  };
  return (
    <div className={productCardClasses}>
      <div className="h-1/2">
        <Link to={`/product/${product._id}`}>
          <img
            className={imageClasses}
            src={product.imageUrl}
            alt="Product Image"
          />
          <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            {product.title}
          </h3>
        </Link>
      </div>
      <div className="h-1/2">
        <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
          <div className='text-center'>
           <p> MRP </p><span className="line-through">{product.price}</span>{" "}
           
          </div>
          <div className='text-center'>
            <p>Aapla Bajar price{" "}</p>
            <span className="font-semibold">{product.discountedPrice}</span>
          </div>
        </div>
        <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
          {product.discountedPrice}% off
        </div>
        <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb2">
          {product.quantity > 0 ? 'Available' : 'Not Available'}
        </div>
        <div className="flex justify-center">
          <button
            className={buttonClass(product.quantity > 1)}
            disabled={product.quantity < 1}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
