import React from 'react'

function Logincustomer() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='text-lg text-gray-500 font-bold'> Customer Id</div>
        <div> <input className='bg-gray-200 text-white border-5 h-10 w-1/2 p-2 border-gray-400' placeholder='Enter your id'/></div>
        <div className='text-lg  text-gray-500 font-bold'> Customer Name</div>
        <div> <input className='bg-gray-200 text-white border-5 h-10 w-1/2 p-2 border-black' placeholder='Enter your Name'/></div>
        <div className='text-lg  text-gray-500 font-bold'> Customer Address</div>
        <div> <input className='bg-gray-200 text-white border-5 h-10 w-1/2 p-2 border-black' placeholder='Enter your Address'/></div>
        <div className='text-lg  text-gray-500 font-bold'> Customer Phone No.</div>
        <div> <input className='bg-gray-200 text-white border-5 h-10 w-1/2 p-2 border-black' placeholder='Enter your Phone No.'/></div>
    
    </div>
  )
}

export default Logincustomer