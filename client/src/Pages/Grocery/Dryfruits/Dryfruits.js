import React, { useEffect, useState } from 'react';

import logo from './veg-logo.svg';

import pumpkinseed from '../Dryfruits/green-pumpkin-seeds-img.webp';
import liondates from '../Dryfruits/lion-dates-img.webp';
import kismis from '../Dryfruits/organic-kismis-img.webp';
import pista from '../Dryfruits/pista-kernel-img.webp';
import raisinkishmish from '../Dryfruits/raisinskishmish-black-with-seeds-img.webp';
import sabja from '../Dryfruits/seeds-sabja-img.webp';
import walnutakhrot from '../Dryfruits/walnutakhrot-kernels-chile-img.webp';
import watermelonseed from '../Dryfruits/watermelontarbuj-seeds-img.webp';
import { ProductCard } from '../../../customer/Components/Product/ProductCard/ProductCard';

export function Dryfruits({showall, activeSubTab, setActiveTab }) {
 
  const DryfruitsData = [
    {
      productname: "Green Pumpkin Seeds",
      productimg: pumpkinseed,
      productprice: "₹50",
      aplabazarprice: "₹49",
      offprice: "₹1",
      quantity: "50 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Chana Dal"
    },
    {
      productname: "Dates/Kharjura",
      productimg: liondates,
      productprice: "₹185",
      aplabazarprice: "₹180",
      offprice: "₹5",
      quantity: "500 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Dates"
    },
    {
      productname: "Organic kismis/Raisins",
      productimg: kismis,
      productprice: "₹599",
      aplabazarprice: "₹493",
      offprice: "₹18",
      quantity: "1 kg",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Raisins"
    },
    {
      productname: "Pista Magaj-Plain Kernel ",
      productimg: pista,
      productprice: "₹300",
      aplabazarprice: "₹226",
      offprice: "₹25",
      quantity: "100 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Pista"
    },
    {
      productname: "Black Raisins",
      productimg: raisinkishmish,
      productprice: "₹120",
      aplabazarprice: "₹93",
      offprice: "₹23",
      quantity: "200 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Raisins"
    },
    {
      productname: "Sabja",
      productimg: sabja,
      productprice: "₹180",
      aplabazarprice: "₹130",
      offprice: "₹50",
      quantity: "100 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Walnuts"
    },
    {
      productname: "Walnut/Akhrot",
      productimg: walnutakhrot,
      productprice: "₹1000",
      aplabazarprice: "₹774",
      offprice: "₹23",
      quantity: "500 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Walnuts"
    },
    {
      productname: "Watermelon Seeds/Kallangadi Bija",
      productimg: watermelonseed,
      productprice: "₹80",
      aplabazarprice: "₹53",
      offprice: "₹34",
      quantity: "50 g",
      logo: logo,
      catogery: "Dry Fruits",
      subCatogery: "Walnuts"
    }
  ];


  return (
    <div className='flex flex-wrap w-full'>
      {
        DryfruitsData.map((data, index) => {
         
          if (data.subCatogery === activeSubTab) {
            return (
              <ProductCard
                key={index}
                productname={data.productname}
                productimg={data.productimg}
                productprice={data.productprice}
                aplabazarprice={data.aplabazarprice}
                offprice={data.offprice}
                quantity={data.quantity}
                logo={data.logo}
              />
            )
          } else if(showall){
            return (
              <ProductCard
                key={index}
                productname={data.productname}
                productimg={data.productimg}
                productprice={data.productprice}
                aplabazarprice={data.aplabazarprice}
                offprice={data.offprice}
                quantity={data.quantity}
                logo={data.logo}
              />
            )
          }else {
            return null;
          }
        })
      }
    </div>
  );
}
