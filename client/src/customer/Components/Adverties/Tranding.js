import React from 'react';
import { useCartContext } from '../../../Usecontext/cartContext';
import { Link } from 'react-router-dom';


const productCardClasses = 'bg-white rounded-lg p-4 flex-shrink-0 mt-5 w-40 h-[250px] border border-gray-200 sm:w-72 sm:h-[380px] transition-transform duration-300 hover:transform hover:scale-105 ';
const imageClasses = 'w-full h-[70px] object-contain mb-2 sm:h-40';
const buttonClasses = 'bg-green-500 text-white text-xxs py-1 px-3 rounded-lg w-full sm:text-sm';










const ProductCard = ({ product }) => {
  const { addTocart } = useCartContext();
  return (
    <div className={productCardClasses}>
      <Link to={product.url}>
        <img className={imageClasses} src={product.image} alt="Product Image" />
        <h3 className="text-sm sm:text-xxxs font-medium mb-1 sm:mb-3 ">{product.name}</h3>
      </Link>
      <div className="flex justify-between text-xs sm:text-sm text-zinc-500 mb-1 sm:mb-3 ">
        <div>
          MRP <span className="line-through">{product.mrp}</span> <span className="font-semibold">{product.price}</span>
        </div>
        <div>
          DMart <span className="font-semibold">{product.price}</span>
        </div>
      </div>
      <div className="text-green-600 text-sm sm:text-xxxs font-semibold mb-1 sm:mb-3 ">{product.discount}</div>
      <div className="text-xs text-sm sm:text-xxs text-zinc-500 mb-1 sm:mb-3 ">{product.weight}</div>
      <div className="flex text-sm sm:text-xxxs justify-center">
        <button className={buttonClasses} onClick={() => addTocart(product)}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

const TrendingProducts = () => {
  const products = [
    {
      id: 10,
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 11,
      name: "Godrej Yummiez Crispy: 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxqQP88PG8-c_q5LSeb1FnwKi1B0GdmCf21ykBGCBjp2dvdM31",
      mrp: "140",
      price: 43,
      discount: "48",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez Crispy".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 12,
      name: "McCain Potato : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT87LMHWHcQaSOTU6pUiTsMyfr9qEWi1LZ2v2rctWvEPK7mpnkl",
      mrp: "140",
      price: 23,
      discount: "48",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"McCain Potato".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 13,
      name: "Godrej Sticks : 320 gms",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuBKAW_uvGz3F2y2eJGWwsMuXDcT6w0b8z0_dUgc8MvE5xFtHo",
      mrp: "140",
      price: 45,
      discount: "48",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 20,
      name: "Godrej Yummiez",
      image: "https://cdn.dmart.in/images/products/AUG120004098xx25AUG21_5_B.jpg",
      mrp: "₹99",
      price: "₹70",
      discount: "₹20 OFF",
      weight: "400 gm",
      url: `/product/${"Godrej Yummiez American Sweet Corn".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 19,
      name: "Godrej Yummiez",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxqQP88PG8-c_q5LSeb1FnwKi1B0GdmCf21ykBGCBjp2dvdM31",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez Crispy Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 18,
      name: "Lay's India's  ",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT87LMHWHcQaSOTU6pUiTsMyfr9qEWi1LZ2v2rctWvEPK7mpnkl",
      mrp: "₹30",
      price: "₹25",
      discount: "₹5 OFF",
      weight: "73 gm (₹0.29 / 1 gm)",
      url: `/product/${"Lay's India's Magic Masala Potato Chips".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 17,
      name: "Mccain Smiles",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuBKAW_uvGz3F2y2eJGWwsMuXDcT6w0b8z0_dUgc8MvE5xFtHo",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 14,
      name: "Godrej Yummiez Crispy Veg",
      image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F1%2F_%2F1_28.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "140",
      price: 92,
      discount: "48",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez Crispy Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 15,
      name: "Godrej Yummiez Crispy Veg ",
      image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fs%2Ffsrvgpvbt430_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "140",
      price: 40,
      discount: "48",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez Crispy Veg Sticks".replace(/ /g, "-").toLowerCase()}`,
    },
    
    // Add other products here
  ];

  return (
    <div className="bg-gray-200 px-6 py-8 mt-12 mb-4 mx-6 rounded-md">
      <h2 className="text-xl sm:text-2xl font-semibold">Trending Products</h2>
      <div className="flex overflow-x-auto sm:space-x-8 space-x-1 p-5 ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
