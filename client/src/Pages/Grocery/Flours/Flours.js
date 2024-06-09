import React from 'react'

import logo from './veg-logo.svg'
import {ProductCard  } from '../../../customer/Components/Product/ProductCard/ProductCard'

import ashirvaadatta from '../Flours/aashirvaad-sugar-release-control-atta-img.webp'
import chanabesan from '../Flours/chana-dalfine-besan-img.webp'
import cornflour from '../Flours/corn-flour-starch-img.webp'
import attachakki from '../Flours/fortune-atta-chakki-fresh-img.webp'
import fortunemaida from '../Flours/fortune-maida-img.webp'
import bajraatta from '../Flours/organic-bajra-atta-img.webp'
import brownrice from '../Flours/organic-brown-rice-atta-img.webp'
import jowarflour from '../Flours/organic-jowar-flour-img.webp'
import maize from '../Flours/organic-maize-flourmakka-atta-img.webp'
import sattuatta from '../Flours/organic-sattu-atta-img.webp'
import soojirawa from '../Flours/organic-soojirawa-img.webp'
import brokenwheat from '../Flours/organic-wheat-broken-dhaliya-img.webp'
import readymixragi from '../Flours/ready-mix-ragi-idli-img.webp'
import riceflour from '../Flours/royal-rice-flour-img.webp'

export function Flours() {

const FloursData = [
  {
    productname:"Sugar Release Control Atta" ,
    productimg: ashirvaadatta ,
    productprice:"₹385" ,
    aplabazarprice:"₹338",
    offprice:"₹12",
    quantity:"5 kg",
    logo : logo,
  },


  {
    productname:"Fine Besan-100% Chana Dal" ,
    productimg: chanabesan ,
    productprice:"₹149" ,
    aplabazarprice:"₹111",
    offprice:"₹26",
    quantity:"1 kg",
    logo : logo,
  },


  {
    productname:"Corn Flour/Starch" ,
    productimg: cornflour ,
    productprice:"₹50" ,
    aplabazarprice:"₹41",
    offprice:"₹18",
    quantity:"500 g",
    logo : logo,
  },

  {
    productname:"Chakki Frersh Atta " ,
    productimg: attachakki,
    productprice:"₹85" ,
    aplabazarprice:"₹61",
    offprice:"₹27",
    quantity:"1 kg",
    logo : logo,
  },



  {
    productname:"Maida/Refine Flour" ,
    productimg: fortunemaida ,
    productprice:"₹50" ,
    aplabazarprice:"₹39",
    offprice:"₹9",
    quantity:"500 g",
    logo : logo,
  },


  {
    productname:"Organic-Bajra Atta" ,
    productimg: bajraatta ,
    productprice:"₹50" ,
    aplabazarprice:"₹40",
    offprice:"₹10",
    quantity:"500 g",
    logo : logo,
  },



  {
    productname:"Sesame Oil" ,
    productimg: brownrice ,
    productprice:"₹625" ,
    aplabazarprice:"₹625",
    offprice:"₹19",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: jowarflour ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

  
  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: maize,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: sattuatta ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },


  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: soojirawa ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },



  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: brokenwheat ,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: readymixragi,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

  {
    productname:"Total Balance Oil & Soyabean Oil" ,
    productimg: riceflour,
    productprice:"₹160" ,
    aplabazarprice:"₹139",
    offprice:"₹13",
    quantity:"1 L",
    logo : logo,
  },

];
return(

<div className='flex  flex-wrap w-full'>

{
  FloursData.map(
    (data) => {
    
  return (
    
     <ProductCard  productname={data.productname} productimg={data.productimg} productprice={data.productprice} aplabazarprice={data.aplabazarprice} offprice={data.offprice} quantity={data.quantity} logo={data.logo} />
  )
}
  )
}

</div>
    
  )
}

