
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBar({showall,setShowAll, sidebarDairy, title, setActiveTab,activeTab,setActiveSubTab }) {
  const location = useLocation();
  const [click,setClick] = useState(false);
  

  return (
    <div className='min-h-screen p-3 w-52'>
      <h2 className=''>{title}</h2>
      <div className='ml-4 border w-full mt-3 text-sm space-y-3'>
        {sidebarDairy.map((item) => (
          <div
            to={location.pathname}
            onClick={() => {
              setActiveTab(item.name)
              setShowAll(!showall)
              setClick(!click)
            }}
            className='flex flex-col transition-all py-1 px-2 hover:bg-green-200/90'
            key={item.name}
          >
            <h2 className={`${activeTab === item.name ? showall ? 'underline underline-offset-2':'':''}`}>{item.name}</h2>
            
            
            {activeTab === "All Grocery"?"": activeTab === item.name ? <div className='bg-green-200 pl-4 pr-3 transition-all  '>{item.subCatog.map((items,i) => {
              
                return <span key={i} onClick={() => setActiveSubTab(items)} className='flex font-normal capitalize my-3 hover:underline transition-all'>{items}</span>
             
            }) }</div>:""}
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
