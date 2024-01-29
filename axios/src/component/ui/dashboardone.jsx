import React from 'react'

function Dashboardone() {
  return (
    <div className='flex flex-row gap-5 items-center justify-start'>
        <div className='border-2 border-gray-400 rounded-full w-64 text-center p-1 '> Choose a warehouse</div>
        <select className='border-2 border-gray-400 rounded-full w-1/2 p-1'>
        <option>Warehouse A, Ohio, Columbia,5303 fisher Rd </option>
        </select>
        
    </div>
  )
}

export default Dashboardone