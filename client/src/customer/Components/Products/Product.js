import React from "react";
import ProductCard from "./Cards";

const FrozenSnacks = () => {
  const products = [
    {
      id: 1,
      name: "Veg Sticks : 320 gms",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMgDfLC7IUaSpSahcTId7yQxQ0eL7sC17bvgUiG8vlYfmQ22VU",
      mrp: "140",
      price: 90,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 2,
      name: "Godrej Yummiez Crispy: 320 gms",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxqQP88PG8-c_q5LSeb1FnwKi1B0GdmCf21ykBGCBjp2dvdM31",
      mrp: "140",
      price: 35,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 3,
      name: "McCain Potato : 320 gms",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT87LMHWHcQaSOTU6pUiTsMyfr9qEWi1LZ2v2rctWvEPK7mpnkl",
      mrp: "140",
      price: 34,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 4,
      name: "Godrej Sticks : 320 gms",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSuBKAW_uvGz3F2y2eJGWwsMuXDcT6w0b8z0_dUgc8MvE5xFtHo",
      mrp: "140",
      price: 87,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 5,
      name: "Godrej Yummiez Crispy Veg Sticks : 320 gms",
      image:
        "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2F1%2F_%2F1_28.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "140",
      price: 64,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
    {
      id: 6,
      name: "Godrej Yummiez Crispy Veg Sticks : 320 gms",
      image:
        "https://www.itcstore.in/_next/image?url=https%3A%2F%2Fadmin.itcstore.in%2Fmedia%2Fcatalog%2Fproduct%2Ff%2Fs%2Ffsrvgpvbt430_1.png%3Foptimize%3Dmedium%26fit%3Dbounds%26height%3D%26width%3D%26height%3D200%26width%3D200&w=1920&q=75",
      mrp: "140",
      price: 643,
      discount: "48 ",
      weight: "320 gm (0.29 / 1 gm)",
      url: `/product/${"Mccain Smiles".replace(/ /g, "-").toLowerCase()}`,
    },
  ];

  return (
    <div className="bg-purple-100 p-4 mt-12 mb-12 mx-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Frozen Snacks</h2>
      <div className="flex overflow-x-auto space-x-8 p-5 scroll">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FrozenSnacks;
