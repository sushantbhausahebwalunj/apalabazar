import React from 'react';
import './Product.css';

const productCardClasses = 'product-card bg-white rounded-lg p-4 w-64 flex-shrink-0 content-center mt-5';
const imageClasses = 'w-full h-40 object-contain mb-4';
const buttonClasses = 'bg-green-500 text-white text-sm py-2 px-4 rounded-lg w-50';

const ProductCard = ({ product }) => {
  return (
    <div className={productCardClasses}>
      <img className={imageClasses} src={product.image} alt="Product Image" />
      <h3 className="text-sm font-medium mb-2">{product.name}</h3>
      <div className="text-xs text-zinc-500 mb-1">
        MRP <span className="line-through">{product.mrp}</span> <span className="font-semibold">{product.price}</span>
      </div>
      <div className="text-xs text-zinc-500 mb-1">
        DMart <span className="font-semibold">{product.price}</span>
      </div>
      <div className="text-green-600 font-semibold mb-2">{product.discount}</div>
      <div className="text-xs text-zinc-500 mb-2">{product.weight}</div>
      <div className='flex justify-center'>
      <button className={buttonClasses}>ADD TO CART</button>
      </div>
    </div>
  );
};

const FrozenSnacks = () => {
  const products = [
    {
      name: "Veg Sticks : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)"
    },
    {
      name: "Godrej Yummiez Crispy: 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxqQP88PG8-c_q5LSeb1FnwKi1B0GdmCf21ykBGCBjp2dvdM31",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)"
    },
    {
      name: "McCain Potato : 320 gms",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT87LMHWHcQaSOTU6pUiTsMyfr9qEWi1LZ2v2rctWvEPK7mpnkl",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)"
    },
    {
      name: "Godrej Sticks : 320 gms",
      image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuBKAW_uvGz3F2y2eJGWwsMuXDcT6w0b8z0_dUgc8MvE5xFtHo",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)"
    },
    {
      name: "Godrej Yummiez Crispy Veg Sticks : 320 gms",
      image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F1%2F_%2F1_28.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)"
    },
    {
      name: "Godrej Yummiez Crispy Veg Sticks : 320 gms",
      image: "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fs%2Ffsrvgpvbt430_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "₹140",
      price: "₹92",
      discount: "₹48 OFF",
      weight: "320 gm (₹0.29 / 1 gm)"
    }
  ];

  return (
    <div className="bg-purple-100 p-4 mt-12 mb-12 mx-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Frozen Snacks</h2>
      <div className="flex overflow-x-auto space-x-4 py-5 scroll">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FrozenSnacks;

