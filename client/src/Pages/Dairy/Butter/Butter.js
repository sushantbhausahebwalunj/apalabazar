import React from 'react'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'
import './Butter.css'

import logo from './veg-logo.svg'


import borgescanolaoil from '../Butter/borges-canola-oil-img.webp'
import groundnutoil from '../Butter/groundnut-oil-img.webp'
import lightoliveoil from '../Butter/light-olive-oil-img.webp'
import nakshatraoil from '../Butter/nakshatra-pooja-oil-img.webp'
import vegetableoil from '../Butter/refined-vegetable-oil-img.webp'
import sesameoil from '../Butter/sesame-oil-img.webp'
import soyabeanoil from '../Butter/soyabean-flaxseeds-oil-img.webp'
import sundropoil from '../Butter/sundrop-lite-cooking-oil-img.webp'
import sunfloweroil from '../Butter/sunflower-cooking-oil-img.webp'
import coconutoil from '../Butter/unrefined-cold-pressed-virgin-coconut-oil-img.webp'


export function Butter() {

const CookingOilData = [

  {
    productname:"Canola Oil" ,
    productimg: borgescanolaoil ,
    productprice:"₹620" ,
    aplabazarprice:"₹359",
    offprice:"₹42",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Groundnut Oil-Argemone Oil Free" ,
    productimg: groundnutoil ,
    productprice:"₹700" ,
    aplabazarprice:"₹685",
    offprice:"₹15",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Light Olive Oil-Frying & Grilling" ,
    productimg: lightoliveoil ,
    productprice:"₹920" ,
    aplabazarprice:"₹563",
    offprice:"₹39",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Nakshatra Pooja oil" ,
    productimg: nakshatraoil ,
    productprice:"₹105" ,
    aplabazarprice:"₹86",
    offprice:"₹18",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Refined Vegetable Oil" ,
    productimg: vegetableoil ,
    productprice:"₹180" ,
    aplabazarprice:"₹130",
    offprice:"₹50",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Sesame Oil" ,
    productimg: sesameoil ,
    productprice:"₹625" ,
    aplabazarprice:"₹625",
    // offprice:"₹19",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: soyabeanoil ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Sundrop Lite-Cooking Oil" ,
    productimg: sundropoil ,
    productprice:"₹190" ,
    aplabazarprice:"₹185",
    offprice:"₹5",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:" Sunflower Cooking Oil" ,
    productimg: sunfloweroil ,
    productprice:"₹450" ,
    aplabazarprice:"₹324",
    offprice:"₹28",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:" Unrefined  Coconut Oil-Naturally" ,
    productimg: coconutoil ,
    productprice:"₹699" ,
    aplabazarprice:"₹524",
    offprice:"₹25",
    quantity:"1 L",
    logo : logo,
  },

 

];
return(
<>
<div className='cookingoilcards flex flex-wrap '>
{
  
  CookingOilData.map(
    (data) => {
    
  return (

    
     <ProductCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  
  )
}

  )
}
</div>
</>
    
  )
}

