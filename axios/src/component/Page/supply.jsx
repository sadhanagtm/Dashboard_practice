import React from 'react'
import AuthContextApi, { AuthContext } from '../../Hoc/contextapi.jsx/Auth'
import Suppliers from '../ui/suppliers'
// import { IoIosArrowForward } from 'react-icons/io'
function Supply() {
    return(
        <AuthContextApi>
        <AuthContext>
            {(context)=>{
                console.log(context)
                return(
                <div>
                    <Suppliers/>

<div className='grid grid-cols-2 '>
    <div className='h-64 flex gap-3 flex-col'>
        <div className='h-10 flex items-center w-5/6 border-2 px-8 border-gray-300 text-ml-4'> Wells & Wade</div>
        <div className='flex flex-row gap-4'>
            <div className='text-blue-500 '> Address:</div>
            <div> Ohio, Delaware, 435 Park Ave</div>
        </div>
        <div className='flex flex-row gap-4'>
            <div className='text-blue-500 '> Phone:</div>
            <div> 614-435-2489</div>
        </div>
        <div className='flex flex-row gap-4'>
            <div className='text-blue-500 '> Contact person:</div>
            <div> Michael Ripley,Inventory Manager</div>
        </div>
        <div className='flex flex-row gap-4'>
            <div className='text-blue-500 '> Partner since:</div>
            <div>August 2017</div>
        </div>
    </div>
    <div className='h-64  flex flex-col gap-6 pr-3'>
        <div className='h-10 flex items-center px-8 justify-between w-5/6 border-2 border-gray-300'>
            <div>Order</div>
            <div>#Created at</div>
            <div>Amount</div>
        </div>
        <div className='flex flex-row justify-between gap-4'>
            <div className='text-blue-500 '> 2384</div>
            <div> 08/18/2021, 1:08PM</div>
            <div>$175,975.00</div>
        </div>
        <div className='flex flex-row justify-between gap-4'>
            <div className='text-blue-500 '>2341 </div>
            <div> 07/12/2021, 10:54 AM</div>
            <div>$74,340.00</div>

        </div>
        <div className='flex justify-between flex-row gap-4'>
            <div className='text-blue-500 '> 2304</div>
            <div> 06/04/2021, 4:35 PM</div>
            <div> $90,200.00</div>
        </div>
    </div>


</div>
<div className='text-xl font-semibold h-fit w-full bg-gray-200 p-3'>Supplies Evaluation</div>
<div className='h-fit w-full mt-5 bg-gray-200 flex flex-row justify-end gap-14 p-4 text-sm'>
    <div>1=Poor</div>
    <div>2=Fair</div>
    <div>3=Satisfactory</div>
    <div>4=Good</div>
    <div className='mr-10'>5=Excellent</div>
</div>
<div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Competency</div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div>
<div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Capacity</div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div> <div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Commitment</div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div> <div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Control</div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div>
<div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Cost </div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div>
<div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Consistency </div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div>
<div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Culture </div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div>
<div className='grid grid-cols-6 h-fit w-fit'>
    <div className='h-10 w-56 bg-red-300 '>Communication </div>
    <div className='h-10 w-12 '>c</div>
    <div className='h-10 w- 12'>a</div>
    <div className='h-10 w-12 '>s</div>
    <div className='h-10 w-12 '>d</div>
    <div className='h-10 w- 12'>q</div>
</div>
<div className='font-semibold p-4 text-sm bg-gray-300 mt-4' >Risk assessment: Low </div>
<div className='font-semibold p-4 text-lg bg-gray-300 mt-2' >Overall Rating:  4.87</div>
<div className='justify-end flex'> <button className='p-3 w-24  mr-20  mt-6 rounded-3xl border-1 bg-green-400'> Save</button>
</div>           
                </div>
                )
                
         }}
         </AuthContext>
             </AuthContextApi>
    )
}

export default Supply