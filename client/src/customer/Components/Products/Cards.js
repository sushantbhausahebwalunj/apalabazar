
import React from 'react';
import { useCartContext } from '../../../Usecontext/cartContext';
import { Link } from 'react-router-dom';
const productCardClasses = 'bg-white rounded-lg p-1 sm:p-4 flex-shrink-0 mb-3 mt-5 mx-2 sm:mx-4 w-20 h-[180px] border border-gray-300 sm:w-60 sm:h-[320px] transition-transform duration-300 hover:scale-105';
const imageClasses = 'w-full h-[60px] object-contain mb-2 sm:h-32';
const buttonClasses = 'bg-green-500 text-white text-4xs py-2 px-2 rounded-lg w-full sm:text-xs';
// const productCardClasses = 'product-card bg-white rounded-lg p-4 w-64 flex-shrink-0 content-center mt-5';
// const imageClasses = 'w-full h-40 object-contain mb-4 img';
// const buttonClasses = 'bg-green-500 text-white text-sm py-2 px-4 rounded-lg w-full';
// const ProductCard = ({ product }) => {
//     const {addTocart}= useCartContext();
//     return (
//       <div className={productCardClasses}>
//    <Link to={product.url}>
//         <img className={imageClasses} src={product.image} alt="Product Image" />
//         <h3 className="text-sm font-medium mb-2">{product.name}</h3>
//         <div className='flex justify-between'>
//         <div className="text-xs text-zinc-500 mb-1">
//           MRP <span className="line-through">{product.mrp}</span> <span className="font-semibold">{product.price}</span>
//         </div>
//         <div className="text-xs text-zinc-500 mb-1">
//           DMart <span className="font-semibold">{product.price}</span>
//         </div>
//         </div>
// <div className='flex justify-between items-center'>
//         <div className="text-xs text-zinc-500 mb-2">{product.weight}</div>
//         <div className="text-green-400 border border-green-500 bg-green-100 font-semibold mb-2 px-3 py-2 rounded-xl ">₹{product.discount} OFF</div>
//         </div>
//         </Link>
//         <div className='flex justify-center'>
//         <button className={buttonClasses} onClick={()=>{addTocart(product)}}>ADD TO CART</button>
//         </div>
//       </div>
//     );
//   };
  const ProductCard = ({ product }) => {
    const { addTocart } = useCartContext();
    return (
      <div className={productCardClasses}>
        <Link to={`/product/${product.id}`}>
          <img className={imageClasses} src={product.image} alt="Product Image" />
          <h3 className="text-xs sm:text-sm font-medium mb-1 sm:mb-2">{product.name}</h3>
        </Link>
        <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">
          <div>
            MRP <span className="line-through">{product.mrp}</span> <span className="font-semibold">{product.price}</span>
          </div>
          <div>
            DMart <span className="font-semibold">{product.price}</span>
          </div>
        </div>
        <div className="text-green-600 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">{product.discount}</div>
        <div className="text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-2">{product.weight}</div>
        <div className="flex justify-center">
          <button className={buttonClasses} onClick={() => addTocart(product)}>
            ADD TO CART
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;