import React from 'react'
import AuthContextApi, { AuthContext } from '../../Hoc/contextapi.jsx/Auth'
import Savesale from '../ui/savesale'
import { Link, useLocation,useNavigate } from 'react-router-dom'

function Salesorder() {
  return (
    <AuthContextApi>
      <AuthContext>
        {(context) => {
          console.log(context)
          return (
            <div>
              <div>
                <table className='text-sm w-full bg-red-500  '>
                <thead className='bg-green-500'>
                <tr className=' border-none bg-blue-200'>
                    <th className=' border-gray-500 flex items-center '>
                    </th>
                    <th align='left' className=' border-gray-500 p-2'>Photo</th>
                    <th className=' border-gray-500  p-2'>Name</th>
                    <th className=' border-gray-500  p-2'>SKU</th>
                    <th className=' border-gray-500  p-2'>Price</th>
                    <th className=' border-gray-500  p-2'>Quantity </th>
                    <th className=' border-gray-500  p-2'>Units</th>
                    <th className=' border-gray-500  p-2'>Amount</th>
                  </tr>
                </thead>
                <tbody>
                <tr className=''>
                <td><input type='checkbox' /></td>
                    <td  >
                      <img className='h-12 w-12' src='https://images.unsplash.com/photo-1685362926801-d97120f56465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 ' />
                    </td>
                    <td className=' border-gray-500  '>OSB Handi-Panel, 1/2*4*8</td>
                    <td className=' border-gray-500  '>184893</td>
                    <td className=' border-gray-500  '>$31.99</td>
                    <td className=' border-gray-500  '>240</td>
                    <td className=' border-gray-500  '>Sheets</td>
                    <td className=' border-gray-500  '>$8,868.00</td>
                  </tr>
                 
                </tbody>
              
                </table>
              </div>
              <div className='p-8 text-xl font-bold flex justify-end'> Order Total $17,946.00</div>
              <div className='text-lg font-bold '> Order Details</div>
              <div className='flex flex-col gap-4 p-4'>
                <label className=' text-blue-700 font-medium'>Warehouse</label>
                <div className='flex flex-row gap-3 items-center'>
                  <select className='border-2 text-sm border-gray-300 w-1/3 rounded-full h-fit p-2'>
                    <option>Ohio,Columbia,5302 Fisher Rd</option>
                    <option>Ohio,Columbia,5302 Fisher </option>
                    <option>Ohio,Columbia,5302 </option>
                  </select>
                  <input type='checkbox' />
                  <label className='font-bold'>Create a drop Shipping</label>
                </div>
                <div className='flex flex-row gap-8'>
                  <div className='flex flex-col'>
                    <label className=' text-blue-700 font-medium'> Sales Order #</label>
                    <select className='border-2 border-gray-300 w-48 rounded-full h-fit p-2'>
                      <option> 4213</option>
                    </select>
                  </div>
                  <div className='flex flex-col'>
                    <label className=' text-blue-700 font-medium'> Responsive Salesperson</label>
                    <select className='border-2 border-gray-300 w-48 rounded-full h-fit p-2'>
                      <option> Monique</option>
                    </select>
                  </div>
                </div>
                <div className='flex flex-row gap-8'>
                  <div className='flex flex-col'>
                    <label className=' text-blue-700 font-medium'>Customer</label>
                    <select className='border-2 border-gray-300 w-56 rounded-full h-fit p-2'>
                      <option> Reliable Construction</option>
                    </select>
                  </div>
                  <div className='flex flex-col'>
                    <label className=' text-blue-700 font-medium'> Contact Person</label>
                    <select className='border-2 border-gray-300 w-48 rounded-full h-fit p-2'>
                      <option>Nikia Roth</option>
                    </select>
                  </div>
                </div>
                <label className=' text-blue-700 font-medium'>Shipping Address</label>
                <div className='flex flex-row'>
                  <select className='border-2 border-gray-300 w-1/2 rounded-full h-fit p-2'>
                    <option>Ohio,Columbia,5302 Fisher Rd</option>
                    <option>Ohio,Columbia,5302 Fisher </option>
                    <option>Ohio,Columbia,5302 </option>
                  </select>
            
                </div>
                <label className=' text-blue-700 font-medium'>Billing Address</label>
                <div className='flex flex-row'>
                  <select className='border-2 border-gray-300 w-1/4 rounded-full h-fit p-2'>
                    <option>Ohio,Columbia,5302 Fisher Rd</option>
                    <option>Ohio,Columbia,5302 Fisher </option>
                    <option>Ohio,Columbia,5302 </option>
                  </select>
                </div>
                <label className=' text-blue-700 font-medium'>Shipping Method</label>
                <div className='flex flex-row'>
                  <select className='border-2 border-gray-300 w-1/2 rounded-full h-fit p-2'>
                    <option>Ohio,Columbia,5302 Fisher Rd</option>
                    <option>Ohio,Columbia,5302 Fisher </option>
                    <option>Ohio,Columbia,5302 </option>
                  </select>
                 
                </div>
                <label className=' text-blue-700 font-medium' >Prefered Shipping Date</label>
                <div className='flex flex-row'>
                  <select className='border-2 border-gray-300 w-1/2 rounded-full h-fit p-2'>
                    <option>Ohio,Columbia,5302 Fisher Rd</option>
                    <option>Ohio,Columbia,5302 Fisher </option>
                    <option>Ohio,Columbia,5302 </option>
                  </select>
                </div>
                <label className=' text-blue-700 font-medium'>Payment Terms</label>
                <div className='flex flex-row'>
                  <select className='border-2 border-gray-300 w-1/2 rounded-full h-fit p-2'>
                    <option>Ohio,Columbia,5302 Fisher Rd</option>
                    <option>Ohio,Columbia,5302 Fisher </option>
                    <option>Ohio,Columbia,5302 </option>
                  </select>
                 
                </div>
              </div>
              <Savesale/>
            </div>
          )
        }}
      </AuthContext>
    </AuthContextApi>
  )
}

export default Salesorder