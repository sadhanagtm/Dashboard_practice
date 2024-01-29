import React from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { BsUpcScan } from 'react-icons/bs'
// import {GoPlusCircle } from 'react-icons/go'
import { useNavigate,Link } from 'react-router-dom';

function Salespagethree() {

  return (
    <div className='flex flex-col gap-3 bg-blue-50 p-4'>
      <div className='font-bold text-lg flex flex-row items-center gap-5'>
        <div>Sales Orders</div>
        <FaGreaterThan />
        <div>sales Order #4213</div>
        <FaGreaterThan />
        <div> New Package #6362</div>
      </div>
      <div className='flex flex-row gap-10 '>
        <div className='flex flex-col gap-3'>
          <div className='text-gray-400'>Package Slip #</div>
          <select className=' border-sky-300 text-sm bg-gray-200 rounded-full h-fit w-64 p-2'>
            <option> 4231</option>
          </select>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='text-gray-400'>Created at</div>
          <select className='border-3 border-gray-400 text-sm bg-gray-200 rounded-full h-fit w-64 p-2'>
            <option> 08/25/2021, 3:45 PM</option>
          </select>
        </div>
      </div>
      <div className='flex flex-row gap-8'>
        <div className='flex flex-row gap-2 items-center font-semibold'> <span><BsUpcScan /></span>Scan an item</div>
        <div className='flex flex-row gap-2 items-center font-semibold'>
          {/* <span><GoPlusCircle/></span> */}
          Add an item manually</div>

      </div>
      <div className='font-semibold text-lg '> Items Details</div>
      <div>
        <table className='text-sm  bg-blue-100  '>
          <tr className='flex flex-row border-none bg-blue-200 items-center'>
            <td className=' border-gray-500 flex items-center '>
            </td>
            <th className=' border-gray-500 h-12 w-32 p-2'>Photo</th>
            <th className=' border-gray-500 h-12 w-32 p-2'>Name</th>
            <th className=' border-gray-500 h-12 w-32 p-2'>SKU</th>
            <th className=' border-gray-500 h-12 w-32 p-2'>Price</th>
            <th className=' border-gray-500 h-12 w-32 p-2'>Quantity </th>
            <th className=' border-gray-500 h-12 w-32 p-2'>Units</th>
            <th className=' border-gray-500 h-12 w-32 p-2'>Amount</th>

          </tr>
          <tr className='flex flex-row items-center'>
            <td className=' flex items-center border-gray-500 h-12 w-32 justify-center '>
              <img src='https://images.unsplash.com/photo-1685362926801-d97120f56465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 ' />
            </td>
            <td className=' border-gray-500 h-12 w-32 flex items-center '>OSB Handi-Panel, 1/2*4*8</td>
            <td className=' border-gray-500 h-12 w-32 flex justify-center items-center '>184893</td>
            <td className=' border-gray-500 h-12 w-32 flex items-center justify-center'>$31.99</td>
            <td className=' border-gray-500 h-12 w-32 flex items-center justify-center'>240</td>
            <td className=' border-gray-500 h-12 w-32 flex items-center justify-center'>Sheets</td>
            <td className=' border-gray-500 h-12 w-32 flex items-center justify-center'>$8,868.00</td>
          </tr>
          <tr className='flex flex-row '>
            <td className=' flex items-center border-gray-500 h-12 w-32 justify-center '>
              <img src='https://images.unsplash.com/photo-1685384355807-e859d0994457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 ' />
            </td>
            <td className=' border-gray-500 h-10 w-32 flex justify-center items-center'>I-Joist 90 Series, 3-1/2"*14"*20'</td>
            <td className=' border-gray-500 h-10 w-32 flex justify-center items-center'>363933</td>
            <td className=' border-gray-500 h-10 w-32 flex justify-center items-center'>$27.45</td>
            <td className=' border-gray-500 h-10 w-32 flex justify-center items-center'>44</td>
            <td className=' border-gray-500 h-10 w-32 flex justify-center items-center'>Pieces</td>
            <td className=' border-gray-500 h-10 w-32 flex justify-center items-center'>$3,500.20</td>
          </tr>
          <tr className='flex flex-row items-center'>
            <td className=' flex items-center border-gray-500 h-10 w-32 justify-center'>
              <img src='https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 ' />
            </td>
            <td className=' border-gray-500 h-10 w-32 flex items-center justify-center'>Primed MDF Board</td>
            <td className=' border-gray-500 h-10 w-32 flex items-center justify-center'>504685</td>
            <td className=' border-gray-500 h-10 w-32 flex items-center justify-center'>$21.99</td>
            <td className=' border-gray-500 h-10 w-32 flex items-center justify-center'>440</td>
            <td className=' border-gray-500 h-10 w-32 flex items-center justify-center'>Sheets</td>
            <td className=' border-gray-500 h-10 w-32 flex items-center justify-center'>$248.00</td>
          </tr>
        </table>
      </div>
      <div className='w-full justify-end flex'>
        <Link to='/salespgfour'><button className='h-fit border rounded-full mr-4 w-32 p-2 text-sm bg-green-400 text-white'>Save package slip</button>
        </Link>
      </div>
    </div>


  )
}

export default Salespagethree