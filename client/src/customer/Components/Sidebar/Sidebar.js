// import React from 'react'
// import { Link } from 'react-router-dom'

// function SideBar({sidebarDairy,title,setActiveTab}) {
//   return (
//     <div className='min-h-screen  p-3  w-52 '>
//         <h2 className=''>{title}</h2>
//          <div className='ml-4 mt-3 text-sm space-y-3'>
//             {sidebarDairy.map((item) => {
//                 return <Link to='/grocery' onClick={() => {
//                   setActiveTab(item)
//                 }} className='flex flex-col transition-all py-1 pl-3  hover:bg-green-200/90'>
//                     {item}
//                 </Link>
//             })}
//          </div>
//     </div>
//   )
// }

// export default SideBar		




import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SideBar({ sidebarDairy, title, setActiveTab,activeTab }) {
  const location = useLocation();
  const [click,setClick] = useState(false);
  const sub = ["hello","world","nikhil"]
  return (
    <div className='min-h-screen p-3 w-52'>
      <h2 className=''>{title}</h2>
      <div className='ml-4 mt-3 text-sm space-y-3'>
        {sidebarDairy.map((item) => (
          <Link
            to={location.pathname}
            onClick={() => {
              setActiveTab(item)
              setClick(!click)
            }}
            className='flex flex-col transition-all py-1 pl-3 hover:bg-green-200/90'
            key={item}
          >
            {item}
            {activeTab === "All Grocery"?"": activeTab === item ? <div className='bg-green-200 pl-6'>{sub.map((item) => <Link to={"/"}><br/>{item}</Link>) }</div>:""}
            
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
