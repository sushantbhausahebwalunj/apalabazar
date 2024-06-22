import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCatog,setOpenCatog] = useState(null);
  const [subCatog,setsubCatog] = useState(false);

  const menuItems = [
    {name:'GROCERY',types:['Dals','Pulses','Dry Fruits','DMart Grocery','Cooking Oil','Ghee & Vanaspati','Flours & Grains','Flours & Grains']},
    {name:'DAIRY & BEVERAGES',types:['Beverages','Dairy']},
    {name:'PACKAGED FOOD',types:['Biscuits & Cookies','Snacks & Farsans','Breakfast Cereals','Chocolates & Candies','Ketchup & Sauce','Jams & Spreads','Pasta & Noodles','Ready To Cook','Sweets','Pickles','Health Food']},
    {name:'BEAUTY & COSMETICS',types:['Skin']},
    {name:'BABY & KIDS',types:['Diapering','Baby Care']},
    {name:'APPLIANCES',types:['Home Appliances']},
    {name:'PERSONAL CARE',types:['Skin Care','Face Care','Hair Care','Lip Care','Oral Care','Sanitary Napkins','Deos & Perfumes','Shaving Needs','Baby Care','Diapering','Health & Wellness','Personal Hygiene']},
   {name: 'SPECIALS',types:['Value Packs','Discover More']},
    {name:'FRUITS & VEGETABLES',types:['Frozen Vegetable']},
   {name: 'HOME & KITCHEN',types:['Detergent & Fabric Care','Cleaners','Utensil Cleaners','Freshener & Repellents','Disinfectants','Tissue Paper & Napkins','Pooja Needs','Home Utility']},
    {name:'HOME UTILITY & ORGANISERS',types:['Cleaning / Tools / Kits']},
   {name: 'SCHOOL SUPPLIES',types:['Stationery Sets']}
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className=" max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
       
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex gap-2 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
           <span className='capitalize'> apalabazar</span>
          </button>
          <div className='flex gap-6'>
        <SearchIcon/>
        <CartIcon/>
      </div>
        </div>
      </div>
      {isOpen && (
        <div className="px-2 pt-2 pb-4 ">
          <div className="text-sm font-medium text-gray-700 mb-2">Home & Living</div>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100"
              onClick={()=> {
                setOpenCatog(item.name)
                setsubCatog(!subCatog)
              }}
            >
              {subCatog ? openCatog === item.name ? <div className='flex justify-between font-bold'>{item.name}<DownArrow/></div>:<div className='flex justify-between font-bold'>{item.name}<RightArrow/></div>:<div className='flex justify-between font-bold'>{item.name}<RightArrow/></div>}
              {subCatog && item.types.map((cato) => {
                if(item.name === openCatog){
                    return <Link className='flex  mb-3 ml-3' to={"#"}>{cato}</Link>
                }else{
                    return null;
                }
              })}
            </Link>
          ))}
        </div>
      )}

      
    </nav>
  );
};

function DownArrow(){
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
}

function RightArrow(){
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
}

function SearchIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
}

function CartIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
}
export default Navbar;