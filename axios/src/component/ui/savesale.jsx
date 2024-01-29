import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'

function Savesale() {
  return (
    <Link to='/salespgtwo' className='h-fit w-full flex justify-end '>
        <button className='h-fit w-fit rounded-full mr-10 bg-green-800 text-white font-medium p-4'>Save Sales Order</button>
    </Link>
  )
}

export default Savesale