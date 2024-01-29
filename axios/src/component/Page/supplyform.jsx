import React from 'react'
import { Link } from 'react-router-dom'

function Supplyform() {
  return (
    <Link to='/supplyform'>
         <div className='flex  justify-center bg-blue-200 h-screen w-full'>
        <div className='flex flex-col px-20  bg-blue-300 gap-5 border-2 mt-5 h-fit w-fit p-10 items-center justify-center'>
            <div className='  text-md font-bold text-blue-300 bg-blue-100 p-5'>Supply Form</div>
            <input type='text' placeholder='Enter Supply Name' className=' border-2 h-fit w-64 py-1 text-sm p-1 bg-gray-200 text-white'/>
            <input type='text' placeholder='Enter Adress' className=' border-2 h-fit py-1 text-sm bg-gray-200 w-64 '/>
            <input type='text' placeholder='Enter Phone No.' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            <input type='text' placeholder='Created by' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            <input type='text' placeholder='Created at' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
            <input type='text' placeholder='Amount' className=' border-2 h-fit w-64 bg-gray-200 text-sm p-1 text-white'/>
        </div>
    </div>
    </Link>
  )
}

export default Supplyform