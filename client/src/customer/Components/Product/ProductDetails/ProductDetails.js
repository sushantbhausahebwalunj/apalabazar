import React, { useEffect, useMemo, useState } from 'react'
import image from "../../../../Pages/Grocery/Dryfruits/lion-dates-img.webp"
import Slider from 'react-slick'
import { useLocation } from 'react-router-dom';
import {FrozenData} from '../../../../Pages/FrozenFood/constant';
import Navbar from '../../Navbar/Navbar';

function ProductDetails() {
  const pathname = useLocation();
  const [tab,setTab] = useState("Description");
  const [productData,setProductData] = useState({
    productTitle:"",
    url:"",
    mrp:"",
    price:"",
    saveupto:"",
    productImg:[],
    description:"",

  })


    useEffect(() => {
      window.scroll(0,0)
      FrozenData.map((item) => {
      console.log(item)
      if(item.url === pathname.pathname){
          setProductData({...item})
      }
    })
    },[])

  

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(productData.description)
  return (
    <>
    <Navbar/>
    <div className='flex flex-col items-center justify-center  mt-12'>

        <div className='flex'>
          <div className='w-[299px]   mx-12 '>
            <Slider {...settings}>
              {productData.productImg.map((image,i) => {
                return <div>
                  <img src={image} key={i} className='w-96' alt={productData.productTitle}/>
                </div>
              })}
          
          </Slider>
          </div>
  
     <div className='w-80'>
        <h2 className='font-semibold text-xl'>{productData.productTitle}</h2>
       <div className='rounded-lg p-2 border my-2 border-black'>

        <p className='my-1'>Variant</p>
        <button className='p-1 bg-green-100 rounded-full w-24 my-2 text-green-700 border border-green-700'>{productData.productWeight}</button>
      </div>
      <hr className='my-6'/>
      <div className='flex gap-8'>
        <div className='flex gap-2 text-gray-400'><p>MRP</p> <span className='line-through '>{productData.mrp}</span></div> <div>Price <span className='font-bold'>{productData.price}</span></div>
      </div>

      <div className='flex justify-between my-6 rounded-md'>
        <button className='bg-green-100 text-green-600 p-2 rounded-md'>Save {productData.saveupto}</button>
        <button className='bg-green-600 text-white p-2 rounded-md'>Add to Cart</button>
      </div>
      <hr className='my-6'/>

     </div>
        </div>
     <nav className='flex justify-start items-center gap-12 mt-12 '>

        <ul onClick={() => setTab("Description")} className={`cursor-pointer transition-all ${tab === "Description"?'bg-green-300 rounded-full p-2':''}`}>Description</ul>
        <ul onClick={() => setTab("Country of Origin")} className={`cursor-pointer transition-all ${tab === "Country of Origin"?'bg-green-300 rounded-full p-2':''}`}>Country of Origin</ul>
        <ul onClick={() => setTab("Disclaimer")} className={`cursor-pointer transition-all ${tab === "Disclaimer"?'bg-green-300 rounded-full p-2':''}`}>Disclaimer</ul>

     </nav>
    {tab === "Description" && <textarea rows={productData.description.length > 900? 40:20} readOnly={true} className='h-fit text-lg outline-none mx-auto mt-12 w-full lg:w-[70vw] '>{productData.description}
     </textarea>}

{tab === "Disclaimer" && <p className='mt-12 lg:w-[70vw] w-full'>While we work to ensure that the product information is correct, actual product packaging and material may contain more or different information from what is given here. Please read the product labels, description, directions, warning and other information that comes with the actual product before use.</p>}
{tab === "Country of Origin" && <p className='mt-12'>India</p>}
    </div></>
  )
}

export default ProductDetails
