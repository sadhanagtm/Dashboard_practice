import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Purchasrform() {
  return (
    <div className='flex items-center justify-center px-4 py-2 h-full w-full'>
        <div className='flex flex-col  h-fit w-full  items-center justify-center'>
            <div className='  text-md font-bold text-gray-200 bg-gray-500 p-5'>Purchase Order Form</div>
            <div className='grid grid-cols-2 gap-6 w-full'>
            <input type='text' placeholder='Enter Order No.' className=' border-2 h-fit w-full py-1 text-sm p-1 bg-gray-200 text-white'/>
            <input type='text' placeholder='Enter Supplier Name' className=' border-2 h-fit py-1 text-sm bg-gray-200 w-64 '/>
            <input type='text' placeholder='Enter Rating' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            <input type='text' placeholder='Created by' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            <input type='text' placeholder='Created at' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            <input type='text' placeholder='Amount' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Purchasrform