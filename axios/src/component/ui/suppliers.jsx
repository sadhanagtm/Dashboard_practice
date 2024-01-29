import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import {AiOutlineArrowRight} from 'react-icons/ai'
function Suppliers() {
  return (
    <div className='h-fit w-full bg-gray-200 p-1 mb-2 '>
    <div className='flex flex-row gap-4  text-lg'>
    <div className='font-bold'> Suppliers</div>
    <div className='flex items-center'>
      <IoIosArrowForward />
    </div>
    <div className='font-bold'>Wells & Wade</div>
  </div>
  <div className='flex flex-row text-lg bg-gray-200 justify-between font-semibold m-8'>
<div>About Suppliers</div>
<div>Recent Details</div>
<div className='text-green-600 flex flex-row items-center gap-2 '>More Deals <span><AiOutlineArrowRight/></span></div>
</div>
  </div>
  )
}

export default Suppliers