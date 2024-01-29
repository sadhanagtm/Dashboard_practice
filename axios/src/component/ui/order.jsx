import React from 'react'

function Order() {
    return (
        <div>
        <div className='font-bold p-2 mt-6'> Order Details</div>
            <div>
        <table>

                <tr className='flex flex-row border-none '>
                    <td className=' border-gray-500 flex items-center'>
                    </td>
                    <th className='flex items-center justify-center border-gray-500 h-12 w-fit'>Photo</th>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Name</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>SKU</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Price </td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Units</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Quality</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Total</td>

                </tr>
                <tr className='flex flex-row text-sm border-none items-center'>
                    <td className=' border-gray-500 flex items-center '>
                    </td>
                    <th className='flex items-center justify-center border-gray-500 h-12 w-fit p-2'>
                        <img src="https://th.bing.com/th?id=OIP.LUoAEO6Qj9Ul0aHx3SAP9QHaHa&w=250&h=250&c=8&rs=1&qlt=30&o=6&pid=3.1&rm=2" className='h-8 w-12' />
                    </th>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>Glulam Beam, 5-1/4'x 13-3/4"x24'</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>184893</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>$31.99</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>FBM</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>5,500</td>
                    <td className='flex items-center justify-center border-gray-500 h-12 w-32 p-2'>$175,975.00</td>

                </tr>
                </table>
                <div className='flex justify-end mr-10 mt-2'>
                <div className='flex flex-col justify-end mr-10'>
                    <div>$175,975.00</div>
                    <div>$0.00</div>
                    <div className='text-lg font-bold'> Total  $175,975.00</div>
                   </div>
                </div>


            </div>
        </div>
    )
}

export default Order