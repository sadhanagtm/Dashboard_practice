import React from 'react'

function Draftpurchase() {
  return (
    <div className='p-6'>
        <div className='w-full h-20 relative flex items-center'>
            <div className='h-1 rounded-full absolute top-0 left-0 w-full  border-2 bg-black border-black'>
            </div>
            <div className=' absolute -top-3 left-0 right-0 w-full flex justify-between'>
                <div className='border-4  border-gray-400 bg-white h-6 w-6 rounded-full'></div>
                <div className='border-4  border-gray-400 bg-white h-6 w-6 rounded-full'></div>
                <div className='border-4  border-gray-400 bg-white h-6 w-6 rounded-full'></div>
                <div className='border-4  border-gray-400 bg-white h-6 w-6 rounded-full'></div>
            </div>
        </div>
    </div>
  )
  }

export default Draftpurchase