
// import React from 'react';
// import { useCartContext } from '../../../Usecontext/cartContext';
// import { Link } from 'react-router-dom';
// const productCardClasses ="bg-white flex-col flex rounded-lg p-1 lg:p-4 mb-3 mt-5 lg:mx-4 border h-fit border-gray-300 lg:w-60 h-fit transition-transform duration-300 hover:scale-105";
// const imageClasses = "w-full object-contain mb-2 h-32";
// const buttonClasses ="bg-blue-500 text-white lg:text-lg text-md py-2 px-2 rounded-lg lg:w-full w-30 my-3";

//   const ProductCard = ({ product }) => {
//     //console.log(product)
//     const { addTocart } = useCartContext();
//     return (
//       <div className={productCardClasses}>
//       <div className="h-1/2">
//         <Link to={`/product/${product._id}`}>
//           <img
//             className={imageClasses}
//             src={product.imageUrl||product.imageUrls[0]}
//             alt="Product Image"
//           />
//           <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">
//             {product.title}
//           </h3>
//         </Link>
//       </div>
//       <div className="h-1/2">
//         <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
//           <div>
//             MRP <span className="line-through">{product.price}</span>{" "}
//             <span className="font-semibold">{product.discountedPrice}</span>
//           </div>
//           <div>
//             Apala bajar Sale{" "}
//             <span className="font-semibold">{product.discountedPrice}</span>
//           </div>
//         </div>
//         <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
//           {product.discountPercent}% off
//         </div>
//         <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
//           {product.quantity} available
//         </div>
//         <div className="flex justify-center">
//           <button className={buttonClasses} onClick={() => addTocart(product)}>
//             ADD TO CART
//           </button>
//         </div>
//       </div>
//     </div>
//     );
//   };
  
//   export default ProductCard;

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../Redux/Cart/cartSlice';

const productCardClasses = "bg-white flex-col flex rounded-lg p-1 lg:p-4 mb-3 mt-5 lg:mx-4 border h-fit border-gray-300 lg:w-60 h-fit transition-transform duration-300 hover:scale-105";
const imageClasses = "w-full object-contain mb-2 h-32";
const buttonClasses = "bg-blue-500 text-white lg:text-lg text-md py-2 px-2 rounded-lg lg:w-full w-30 my-3";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // console.log(product);
    const id = product._id
    dispatch(addToCart(id));
  };

  return (
    <div className={productCardClasses}>
      <div className="h-1/2">
        <Link to={`/product/${product._id}`}>
          <img
            className={imageClasses}
            src={product.imageUrl || product.imageUrls[0]}
            alt="Product Image"
          />
          <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            {product.title}
          </h3>
        </Link>
      </div>
      <div className="h-1/2">
        <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
          <div>
            MRP <span className="line-through">{product.price}</span>{" "}
            <span className="font-semibold">{product.discountedPrice}</span>
          </div>
          <div>
            Apala bajar Sale{" "}
            <span className="font-semibold">{product.discountedPrice}</span>
          </div>
        </div>
        <div className="text-blue-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
          {product.discountPercent}% off
        </div>
        <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
          {product.quantity} available
        </div>
        <div className="flex justify-center">
          <button className={buttonClasses} onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
