import React from 'react'
import {MdColorize} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'
import {FaEdit} from 'react-icons/fa' 
import { useNavigate, Link} from 'react-router-dom';

function Purchasepageone() {
  return (
    <Link to='/purchaseFirst'>
         <div className='w-full flex gap-3 p-3 bg-blue-100 flex-col h-24 '>
                <div classname='text-lg font-semibold'> Purchase Order</div>
                <div className='flex  gap-8 flex-row'>
                    <div className='flex gap-2'>
                    <div className='flex items-center'><MdColorize/></div>
                        <div>Filter</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center'><GrAdd/></div>
                        <Link to='/newitem'>New items</Link>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center'><FaEdit/></div>
                        <div>Edit</div>
                    </div>
                </div>
            </div>
            <table className='text-sm w-full flex bg-gray-100 items-center flex-col gap-2 '>
            {/* <tr onClick={()=>{
                navigate(`/inventory/1231`) */}
            {/* }} */}
            
            <tr className='flex flex-row border-none items-center'>
                <td className=' border-gray-500 flex items-center h-12 w-32'>Order#
                </td>
                <td className=' border-gray-500 h-12 w-32 '>Supplier</td>
                <td className=' border-gray-500 h-12 w-32 '>Supplier Rating</td>
                <td className=' border-gray-500 h-12 w-32 '>Created by </td>
                <td className=' border-gray-500 h-12 w-32 '>Created at</td>
                <td className=' border-gray-500 h-12 w-32 '>Amount</td>
                <td className=' border-gray-500 h-12 w-32 '>Status</td>
               
            </tr>
            <tr className='flex flex-row items-center'>
                
                <td className=' border-gray-500 h-12 w-32 '>2660</td>
                <td className=' border-gray-500 h-12 w-32 '>Wells & Wade</td>
                <td className=' border-gray-500 h-12 w-32 '>4.75</td>
                <td className=' border-gray-500 h-12 w-32 '>Michael Ripley</td>
                <td className=' border-gray-500 h-12 w-32 '>08/18/2021, 1:08PM</td>
                <td className=' border-gray-500 h-12 w-32 '>$175,975.00</td>
                <td className=' border-gray-500 h-12 w-32 '>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-500'> Sent for approval</button></td>
            </tr>
            <tr className='flex flex-row items-center'>
                
                <td className=' border-gray-500 h-10 w-32'>2659</td>
                <td className=' border-gray-500 h-10 w-32'>Gibson Wood</td>
                <td className=' border-gray-500 h-10 w-32'>4.75</td>
                <td className=' border-gray-500 h-10 w-32'>Allen Jones</td>
                <td className=' border-gray-500 h-10 w-32'>08/18/2021, 1:08PM</td>
                <td className=' border-gray-500 h-10 w-32'>$40,228.00</td>
                <td className=' border-gray-500 h-10 w-32'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-500'> Order Processing</button>
                </td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' border-gray-500 h-10 w-32'>4685</td>
                <td className=' border-gray-500 h-10 w-32'>Timber Smart</td>
                <td className=' border-gray-500 h-10 w-32'>2.48</td>
                <td className=' border-gray-500 h-10 w-32'>Jose Mendz</td>
                <td className=' border-gray-500 h-10 w-32'>08/18/2021, 2:11 pm</td>
                <td className=' border-gray-500 h-10 w-32'>$16.99</td>
                <td className=' border-gray-500 h-10 w-32'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-500'> Order Processing</button>
                </td>
            </tr>
            <tr className='flex flex-row items-center'>
               
                <td className=' border-gray-500 h-10 w-32'>2363</td>
                <td className=' border-gray-500 h-10 w-32'>Pillar Engineered</td>
                <td className=' border-gray-500 h-10 w-32'>9.95</td>
                <td className=' border-gray-500 h-10 w-32'>Tito Cubero</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021, 5:08pm</td>
                <td className=' border-gray-500 h-10 w-32'>$38.75</td>
                <td className=' border-gray-500 h-10 w-fit'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-purple-500'> Awaiting Shipment</button>

                </td>
            </tr>
            <tr className='flex flex-row items-center'>
               
                <td className=' border-gray-500 h-10 w-32'>4859</td>
                <td className=' border-gray-500 h-10 w-32'>Bastion Wood</td>
                <td className=' border-gray-500 h-10 w-32'>6.99</td>
                <td className=' border-gray-500 h-10 w-32'>Trisha Boone</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021 3:54pm</td>
                <td className=' border-gray-500 h-10 w-32'>$79.55</td>
                <td className=' border-gray-500 h-10 w-fit'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-purple-500'> Awaiting Shipment</button>

                </td>
            </tr>
            <tr className='flex flex-row items-center'>
                
                <td className=' border-gray-500 h-10 w-32'>4574</td>
                <td className=' border-gray-500 h-10 w-32'>Wells & Wood</td>
                <td className=' border-gray-500 h-10 w-32'>5.99</td>
                <td className=' border-gray-500 h-10 w-32'>Michael Ripley</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021 3:13pm</td>
                <td className=' border-gray-500 h-10 w-32'>$36.95</td>
                <td className=' border-gray-500 h-10 w-32'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-600'>Received</button>

                </td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' border-gray-500 h-10 w-32'> 6483</td>
                <td className=' border-gray-500 h-10 w-32'>Woodscape</td>
                <td className=' border-gray-500 h-10 w-32'>5.99</td>
                <td className=' border-gray-500 h-10 w-32'>Allen Jones</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021 1:06 pm</td>
                <td className=' border-gray-500 h-10 w-32'>$21.45</td>
                <td className=' border-gray-500 h-10 w-32'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-600'>Received</button>

                </td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' border-gray-500 h-10 w-32'>3462</td>
                <td className=' border-gray-500 h-10 w-32'>Wells & Wade</td>
                <td className=' border-gray-500 h-10 w-32'>8.99</td>
                <td className=' border-gray-500 h-10 w-32'>Michael Ripley</td>
                <td className=' border-gray-500 h-10 w-32'>08/16/2021 3:32pm</td>
                <td className=' border-gray-500 h-10 w-32'>$13.55</td>
                <td className=' border-gray-500 h-10 w-32'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-600'> Received</button>

                </td>
            </tr>
            <tr className='flex flex-row items-center'>
                  <td className=' border-gray-500 h-10 w-32'>64824</td>
                <td className=' border-gray-500 h-10 w-32'>Woodeniax</td>
                <td className=' border-gray-500 h-10 w-32'>11.95</td>
                <td className=' border-gray-500 h-10 w-32'>Trisha Boone</td>
                <td className=' border-gray-500 h-10 w-32'>08/16/2021 11:13 am</td>
                <td className=' border-gray-500 h-10 w-32'>$16.99</td>
                <td className=' border-gray-500 h-10 w-32'>      
                          <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-600'>Received</button>
</td>
            </tr>
            <tr className='flex flex-row items-center'>
                   <td className=' border-gray-500 h-10 w-32'>3294</td>
                <td className=' border-gray-500 h-10 w-32'>Woodeniax</td>
                <td className=' border-gray-500 h-10 w-32'>2.45</td>
                <td className=' border-gray-500 h-10 w-32'>Trisha Boone</td>
                <td className=' border-gray-500 h-10 w-32'>08/16/2021 10:12 am</td>
                <td className=' border-gray-500 h-10 w-32'>$917</td>
                <td className=' border-gray-500 h-10 w-32'>
                <button className='border h-fit w-fit p-2 text-sm text-white rounded-full bg-green-600'> Received</button>

                </td>
            </tr>
           
        </table> 
    </Link>
  )
}

export default Purchasepageone