import React, { useState, useEffect } from "react";
import { Cookingoil } from "./Cookingoil/Cookingoil";
import { Dryfruits } from "./Dryfruits/Dryfruits";
import { Flours } from "./Flours/Flours";
import { Masala } from "./Masala & Spices/Masala";
import { Pulses } from "./Pulses/Pulses";
import { SaltSugarJaggery } from "./Salt-Sugar-Jaggery/Salt-Sugar-Jaggery";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../Redux/Category/categoriesSlice";
import Navbar from "../../customer/Components/Navbar/Navbar";
import MobileNavbar from "../../customer/Components/Navbar/MobileNavbar";
import { fetchProducts } from "../../Redux/Product/productSlice";
import { useLocation } from 'react-router-dom';
import ProductCard  from "../../customer/Components/Products/Cards";

function SideBar({ showall,filteredProducts , setShowAll, sidebarDairy, title, setActiveTab, activeTab, setActiveSubTab }) {
  const location = useLocation();
  const [toggleBar, setToggleBar] = useState(true);

  return (
    <div className='max-h-screen sticky top-0 p-3 w-full lg:w-[12rem] '>
      <div onClick={() => setToggleBar(!toggleBar)} className='bg-white/70 h-16 ml-4 lg:ml-0 lg:w-56 backdrop-blur-lg flex gap-2 items-center scale-110'>
        <svg className='block md:block lg:hidden' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="21" x2="3" y1="6" y2="6" />
          <line x1="15" x2="3" y1="12" y2="12" />
          <line x1="17" x2="3" y1="18" y2="18" />
        </svg>
        <h2>{title}</h2>
      </div>
      <div className={`${toggleBar ? 'hidden' : ''} bg-white/70 backdrop-blur-lg lg:static lg:block ml-4 border lg:w-full mt-3 text-sm space-y-3`}>
        {sidebarDairy.map((item) => (
          <div
            onClick={(e) => {
              setActiveTab(item.name);
              filteredProducts(e,item.name)
              setShowAll(showall);
      
            }}
            className='flex flex-col transition-all py-1 px-2 hover:bg-green-200/90 cursor-pointer '
            key={item.name}
          >
            <h2 className={`${activeTab === item.name ? showall ? 'underline underline-offset-2 cursor-pointer' : '' : ''}`}>{item.name}</h2>
            {activeTab === item.name && (
              <div className='bg-green-200 pl-4 pr-3 transition-all'>
                {item.subCatog.map((items, i) => (
           <button key={i} onClick={(e) => {setActiveSubTab(items);
            filteredProducts(e,items)
                  }} className='flex font-normal capitalize my-3 hover:underline transition-all'>
                    {items} 
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Grocery() {
  const { main, sub } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories) || [];
  const status = useSelector((state) => state.categories.status);
  const [filteredProduct,setFilteredProduct]=useState([])
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
    }
  }, [status, dispatch]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [activeTab, setActiveTab] = useState("");
  const [activeSubTab, setActiveSubTab] = useState("");
  const [showall, setShowAll] = useState(true);

  const [viewport, setViewport] = useState(false);
  useEffect(() => {
    const updateViewport = () => {
      setViewport(window.innerWidth < 620);
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  const sidebarDairy = [];
  const parent = categories.find((e) => e._id === main);

  const { products, prodstatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (prodstatus === "loading") {
    return <div>Loading...</div>;
  }

  if (prodstatus === "failed") {
    return <div>Error fetching products</div>;
  }

  const filteredProducts = (e,cate)=>{

    if(cate){
      e.stopPropagation();
      console.log(cate)
      const filtered = products.filter((product) =>
       product?.category?.name?.toLowerCase().includes(cate.toLowerCase())
   
    )
      setFilteredProduct(filtered);
    }else if(sub){
      const filtered = products.filter((product) => product.category._id===sub)
      setFilteredProduct(filtered);
    }
  
  };

  
  if (parent) {
    const level1 = [parent];
    const level2 = level1.map((x) => categories.filter((e) => e.parentCategory && e.parentCategory._id === x._id));
    const level3 = level2[0] || [];
    level3.forEach((x) => {
      sidebarDairy.push({
        name: x.name,
        subCatog: categories.filter((e) => e.parentCategory && e.parentCategory._id === x._id).map((e) => e.name)
      });
    });
  }

  return (
    <div className="">
      {viewport ? <MobileNavbar /> : <Navbar number={12} />}
      <div className="flex flex-col lg:flex-row font-semibold">
        {parent && (
          <SideBar
            showall={showall}
            setShowAll={setShowAll}
            setActiveSubTab={setActiveSubTab}
            setActiveTab={setActiveTab}
            activeTab={activeTab}
            title={parent.name}
            sidebarDairy={sidebarDairy}
    
            key={"2"}
            filteredProducts ={filteredProducts }
          />
        )}
        <div className="overflow-hidden">
          {sidebarDairy.some((e)=>e.name.toLowerCase()==activeTab.toLowerCase() )&& 

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
              {filteredProduct.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
        
              }
      
          
          {/* {activeTab === "Dal" && (
            <Dryfruits showall={showall} activeSubTab={activeSubTab} setActiveTab={setActiveSubTab} />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default Grocery;
