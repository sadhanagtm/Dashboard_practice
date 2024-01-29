import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Purchaseorder() {
    const navigate=useNavigate()
    return (
        <div className='flex w-full h-auto gap-3 bg-gray-200  flex-col p-4'>
            <div className='flex flex-row gap-4'>
                <div className='font-bold'> Purchase Orders</div>
                <div className='flex items-center'>
                    <IoIosArrowForward />
                </div>
                <div className='font-bold'>New Purchased Order #2384</div>
            </div>
            <div className='text-xs text-blue-400'>
                The purchase order has been based on the previous order #2022 from 07/05/2021. You can edit it if change are require.
            </div>
            <div className='font-bold'> Items Details</div>

            <div>

                <tr onClick={()=>{
                    navigate(`/purchaseFirst/1231`)
                }} className='flex flex-row border-none bg-blue-200 items-center'>
                    <td className=' border-gray-500 flex items-center h-12 w-28'>
                    </td>
                    <th className='flex items-center justify-center border-gray-500 h-12 w-32'>Photo</th>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Name</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>SKU</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Price </td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Units</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Quality</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Total</td>

                </tr>
                <tr className='flex flex-row text-sm border-none bg-blue-200 items-center'>
                    <td className=' border-gray-500 flex items-center h-12 w-28'>
                    </td>
                    <th className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>
                        <img src="" className='h-12 w-15'/>
                    </th>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Glulam Beam, 5-1/4'x 13-3/4"x24'</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>184893</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>$31.99</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>FBM</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>5,500</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>$175,975.00</td>

                </tr>


            </div>
        </div>
    )
}

export default Purchaseorder