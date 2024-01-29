import React from 'react'
import {MdColorize} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'
import {FaEdit} from 'react-icons/fa' 
import { useNavigate, Link} from 'react-router-dom';


function Suppliesone() {
  return (
    <div>

<Link to='/purchaseFirst'>
         <div className='w-full flex gap-3 p-3 bg-blue-100 flex-col h-24 '>
                <div classname='text-lg font-semibold'> Supply Order</div>
                <div className='flex  gap-8 flex-row'>
                    <div className='flex gap-2'>
                    <div className='flex items-center'><MdColorize/></div>
                        <div>Filter</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center'><GrAdd/></div>
                        <Link to='/supplyform'>New items</Link>
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
            
            <tr className='flex flex-row border-none items-center w-full justify-between'>
               
                <th className=' border-gray-500 h-12 w-32 '>Supplier</th>
                <th className=' border-gray-500 h-12 w-32 '>Supplier Rating</th>
                <th className=' border-gray-500 h-12 w-32 '>Created by </th>
                <th className=' border-gray-500 h-12 w-32 '>Created at</th>
                <th className=' border-gray-500 h-12 w-32 '>Amount</th>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                
               <Link to='/supply'> <td className=' border-gray-500 h-12 w-32 '>Wells & Wade</td>
               </Link>
                <td className=' border-gray-500 h-12 w-32 '>4.75</td>
                <td className=' border-gray-500 h-12 w-32 '>Michael Ripley</td>
                <td className=' border-gray-500 h-12 w-32 '>08/18/2021, 1:08PM</td>
                <td className=' border-gray-500 h-12 w-32 '>$175,975.00</td>
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                
                <td className=' border-gray-500 h-10 w-32'>Gibson Wood</td>
                <td className=' border-gray-500 h-10 w-32'>4.75</td>
                <td className=' border-gray-500 h-10 w-32'>Allen Jones</td>
                <td className=' border-gray-500 h-10 w-32'>08/18/2021, 1:08PM</td>
                <td className=' border-gray-500 h-10 w-32'>$40,228.00</td>
                
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                <td className=' border-gray-500 h-10 w-32'>Timber Smart</td>
                <td className=' border-gray-500 h-10 w-32'>2.48</td>
                <td className=' border-gray-500 h-10 w-32'>Jose Mendz</td>
                <td className=' border-gray-500 h-10 w-32'>08/18/2021, 2:11 pm</td>
                <td className=' border-gray-500 h-10 w-32'>$16.99</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
               
                <td className=' border-gray-500 h-10 w-32'>Pillar Engineered</td>
                <td className=' border-gray-500 h-10 w-32'>9.95</td>
                <td className=' border-gray-500 h-10 w-32'>Tito Cubero</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021, 5:08pm</td>
                <td className=' border-gray-500 h-10 w-32'>$38.75</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
               
                <td className=' border-gray-500 h-10 w-32'>Bastion Wood</td>
                <td className=' border-gray-500 h-10 w-32'>6.99</td>
                <td className=' border-gray-500 h-10 w-32'>Trisha Boone</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021 3:54pm</td>
                <td className=' border-gray-500 h-10 w-32'>$79.55</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                
                <td className=' border-gray-500 h-10 w-32'>Wells & Wood</td>
                <td className=' border-gray-500 h-10 w-32'>5.99</td>
                <td className=' border-gray-500 h-10 w-32'>Michael Ripley</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021 3:13pm</td>
                <td className=' border-gray-500 h-10 w-32'>$36.95</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                <td className=' border-gray-500 h-10 w-32'>Woodscape</td>
                <td className=' border-gray-500 h-10 w-32'>5.99</td>
                <td className=' border-gray-500 h-10 w-32'>Allen Jones</td>
                <td className=' border-gray-500 h-10 w-32'>08/17/2021 1:06 pm</td>
                <td className=' border-gray-500 h-10 w-32'>$21.45</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                <td className=' border-gray-500 h-10 w-32'>Wells & Wade</td>
                <td className=' border-gray-500 h-10 w-32'>8.99</td>
                <td className=' border-gray-500 h-10 w-32'>Michael Ripley</td>
                <td className=' border-gray-500 h-10 w-32'>08/16/2021 3:32pm</td>
                <td className=' border-gray-500 h-10 w-32'>$13.55</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                <td className=' border-gray-500 h-10 w-32'>Woodeniax</td>
                <td className=' border-gray-500 h-10 w-32'>11.95</td>
                <td className=' border-gray-500 h-10 w-32'>Trisha Boone</td>
                <td className=' border-gray-500 h-10 w-32'>08/16/2021 11:13 am</td>
                <td className=' border-gray-500 h-10 w-32'>$16.99</td>
               
            </tr>
            <tr className='flex flex-row items-center  w-full justify-between'>
                <td className=' border-gray-500 h-10 w-32'>Woodeniax</td>
                <td className=' border-gray-500 h-10 w-32'>2.45</td>
                <td className=' border-gray-500 h-10 w-32'>Trisha Boone</td>
                <td className=' border-gray-500 h-10 w-32'>08/16/2021 10:12 am</td>
                <td className=' border-gray-500 h-10 w-32'>$917</td>
                
            </tr>
           
        </table> 
    </Link>
    </div>
  )
}

export default Suppliesone