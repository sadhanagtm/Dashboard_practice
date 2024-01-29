import React from 'react'
import Sidebar from '../../component/Navigation/Sidebar'
import Toolbar from '../../component/Navigation/Toolbar'
// import Inventory from '../../component/Page/inventory'
import Home from '../../component/Page/home'
import { useLocation } from 'react-router-dom'

function Layout({ children }) {
  const location = useLocation()
  return (
    <div className='grid grid-cols-12  h-screen w-screen overflow-scroll  relative'>
      <div className={`col-span-2 ${location.pathname === '/login' ? "hidden" : ""} sticky top-0 left-0 z-50`}>
        <Sidebar />
      </div>
      <div className={`col-span-10 relative`}>
        <div className={`${location.pathname === '/login' ? "hidden" : ""}`}> <Toolbar /></div>
        
        <div className='w-full px-4 py-6  bg-gray-300'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout