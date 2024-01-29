import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { MdEdit } from 'react-icons/md'
function Status() {
  return (
    <div>
      <div className='flex justify-between flex-row gap-4 p-4 items-center'>
        <div className='flex flex-row gap-4'>
          <div className='text-blue-500'> Status</div>
          <div><button className='h-8 w-fit p-4 text-white bg-blue-500 border rounded-full flex items-center'>Draft</button></div>
        </div>
        <div className='flex flex-row gap-6 items-center'>
        <div className='flex flex-row gap-2'>
          <div className='flex items-center'> <MdEdit /></div>
          <div>Edit Order</div>
        </div>
        <div className='flex flex-row gap-2 '>
          <div className='flex items-center'><RxCross1 /></div>
          <div>Cancel Order</div>
        </div>
        <div>
          <button className='h-8 w-fit p-4 bg-green-400 flex items-center border rounded-full text-white'>Send for Approval</button>
        </div>
      </div>
      </div>
    </div>
    
  )
}

export default Status