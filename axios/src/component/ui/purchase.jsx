import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

function Purchase() {
  return (
    <div className='flex flex-row gap-4'>
      <div className='font-bold'> Purchase Orders</div>
      <div className='flex items-center'>
        <IoIosArrowForward />
      </div>
      <div className='font-bold'>New Purchased Order #2384</div>
    </div>
  )
}

export default Purchase;