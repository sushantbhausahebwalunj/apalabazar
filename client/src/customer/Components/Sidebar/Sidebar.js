import React from 'react'
import { Link } from 'react-router-dom'

function SideBar({sidebarDairy,title,setActiveTab}) {
  return (
    <div className='min-h-screen  p-3  w-52 '>
        <h2 className=''>{title}</h2>
         <div className='ml-4 mt-3 text-sm space-y-3'>
            {sidebarDairy.map((item) => {
                return <Link to='/grocery' onClick={() => {
                  setActiveTab(item)
                }} className='flex flex-col transition-all py-1 pl-3  hover:bg-green-200/90'>
                    {item}
                </Link>
            })}
         </div>
    </div>
  )
}

export default SideBar		