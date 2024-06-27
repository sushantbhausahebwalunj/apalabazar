import React from "react";
import "../Products/Product.css";
import ProductCard from "../Products/Cards";
// import { useCartContext } from '../../../Usecontext/cartContext';
// import { Link } from 'react-router-dom';

// const productCardClasses = 'product-card bg-white rounded-lg p-4 w-64 flex-shrink-0 mt-5';
// const imageClasses = 'w-full h-40 object-contain mb-4 img';
// const buttonClasses = 'bg-green-500 text-white text-sm py-2 px-4 rounded-lg w-full';

// const ProductCard = ({ product }) => {
//   const {addTocart}= useCartContext();
//   return (
//     <div className={`${productCardClasses}`}>

//       <Link to={product.url}>
//          <img className={imageClasses} src={product.image} alt="Product Image" />
//       <h3 className="text-sm font-medium mb-2">{product.name}</h3>

//       <div className='flex space-x-20'>
//       <div className="text-xs text-zinc-500 mb-1">MRP <span className="line-through">{product.mrp}</span> <span className="font-semibold">{product.price}</span></div>
//       <div className="text-xs text-zinc-500 mb-1">DMart <span className="font-semibold">{product.price}</span></div>
//       </div>
//       <div className="text-green-600 font-semibold mb-2">{product.discount}</div>
//       <div className="text-xs text-zinc-500 mb-2">{product.weight}</div>
//       </Link>
//       <div className='flex justify-center'>

//       <button className={buttonClasses} onClick={()=>{addTocart(product)}}>ADD TO CART</button>
//       </div>
//     </div>
//   );
// };

const TrendingProducts = () => {
  const products = [
    {
      id: 10,
      name: " Veg Sticks : 320 gms",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 44,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez American Sweet Corn"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 11,
      name: "Godrej Yummiez Crispy: 320 gms",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxqQP88PG8-c_q5LSeb1FnwKi1B0GdmCf21ykBGCBjp2dvdM31",
      mrp: "140",
      price: 43,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez American Sweet Corn"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 12,
      name: "McCain Potato : 320 gms",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT87LMHWHcQaSOTU6pUiTsMyfr9qEWi1LZ2v2rctWvEPK7mpnkl",
      mrp: "140",
      price: 23,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez American Sweet Corn"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 13,
      name: "Godrej Sticks : 320 gms",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuBKAW_uvGz3F2y2eJGWwsMuXDcT6w0b8z0_dUgc8MvE5xFtHo",
      mrp: "140",
      price: 45,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez American Sweet Corn"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 20,
      name: " Godrej Yummiez American Sweet Corn",
      image:
        "https://cdn.dmart.in/images/products/AUG120004098xx25AUG21_5_B.jpg",
      mrp: "₹99",
      price: "₹70",
      discount: "20",
      weight: "400 gm ",
      url: `/product/${"Godrej Yummiez American Sweet Corn"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 19,
      name: "Godrej Yummiez Crispy Veg Sticks",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxqQP88PG8-c_q5LSeb1FnwKi1B0GdmCf21ykBGCBjp2dvdM31",
      mrp: "₹140",
      price: "₹92",
      discount: "48",
      weight: "320 gm (₹0.29 / 1 gm)",
      url: `/product/${"Godrej Yummiez Crispy Veg Sticks"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 18,
      name: "Lay's India's Magic Masala Potato Chips",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT87LMHWHcQaSOTU6pUiTsMyfr9qEWi1LZ2v2rctWvEPK7mpnkl",
      mrp: "₹30",
      price: "₹25",
      discount: "5",
      weight: "73 gm (₹0.29 / 1 gm)",
      url: `/product/${"Lay's India's Magic Masala Potato Chips"
        .replace(/ /g, "-")
        .toLowerCase()}`,
    },
    {
      id: 17,
      name: "Mccain Smiles",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuBKAW_uvGz3F2y2eJGWwsMuXDcT6w0b8z0_dUgc8MvE5xFtHo",
      mrp: "₹140",
      price: "₹92",
      discount: "48",
      weight: "320 gm (₹0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 14,
      name: "Godrej Yummiez Crispy Veg Sticks : 320 gms",
      image:
        "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F1%2F_%2F1_28.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "140",
      price: 92,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 15,
      name: "Godrej Yummiez Crispy Veg Sticks : 320 gms",
      image:
        "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fs%2Ffsrvgpvbt430_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "140",
      price: 40,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 16,
      name: "Godrej Yummiez Potato Cheese Bites",
      image:
        "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fs%2Ffsrvgpvbt430_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "₹245",
      price: 165,
      discount: "80",
      weight: "320 gm (₹0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    // Add other products here
  ];

  return (
    <div className="bg-purple-100  p-4 mt-12 mb-12 mx-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Tranding Products</h2>
      <div className="flex overflow-x-auto space-x-8 p-5 scroll  ">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
