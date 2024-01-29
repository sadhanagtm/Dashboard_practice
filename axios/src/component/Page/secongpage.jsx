import React from 'react'
import { BsBuildingsFill } from 'react-icons/bs'
import AuthContextApi, {AuthContext} from '../../Hoc/contextapi.jsx/Auth'

function Secongpage() {
    return (        <AuthContextApi>
        <AuthContext>
            {(context)=>{
                console.log(context)
                return(
        <div className=' border-4 shadow-2xl shadow-gray-500 rounded-2xl h-fit bg-red-400 w-full'>
            <div className='  grid grid-cols-2 p-4'>

                <div className=' h-fit p-6'>

                    <div className='flex  border h-fit w-3/4 rounded-r-full bg-mainColor p-4 text-white flex-row'>
                        <div className='flex items-center'> <BsBuildingsFill className='h-14  w-20' /></div>
                        <div className='flex flex-col'>
                            <div className='font-bold'>Engineered</div>
                            <div className='font-semibold'>Wood</div>
                            <div>Dirstribution</div>
                        </div>

                    </div>
                    <div className='flex flex-col mt-8 justify-start '>
                        <div className='font-bold'>Ohio, Columbia, 5303 fisher Rd </div>
                        <div className='font-semibold'>614-435-2489</div>

                    </div>
                </div>
                <div className='h-64'>
                    <div className=' flex flex-col gap-6 text-right'>
                    <div className='text-5xl font-bold '> PURCHASED ORDER</div>
                    <div className='flex text-right gap-3 flex-row'>
                        <div className='flex flex-row text-right text-blue-500 gap-3'>Created on Date:</div>
                        <div> 08/18/2021, 1:08 PM</div>
                    </div>
                    <div className='flex flex-row gap-3'>
                        <div className='text-blue-500'>Preferred Shopping  Date:</div>
                        <div> 08/25/2021, 2:00 PM</div>
                    </div>

                    </div>
                </div>
                <div className='h-64 flex gap-3 flex-col'>
                    <div className='h-10 flex items-center w-5/6 border-2 px-8 border-gray-300 text-ml-4'> To</div>
                    <div className='flex flex-row gap-4'>
                        <div className='text-blue-500 '> Company:</div>
                        <div> Wells & Wade</div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='text-blue-500 '> Address:</div>
                        <div> Ohio, Delaware, 435 Park Ave</div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='text-blue-500 '> Phone:</div>
                        <div> 614-435-2489</div>
                    </div></div>
                <div className='h-64  flex flex-col gap-3'>
                    <div className='h-10 flex items-center px-8 w-5/6 border-2 border-gray-300'>Ship To</div>
                    <div className='flex flex-row gap-4'>
                        <div className='text-blue-500 '> Company:</div>
                        <div> Engineered Wood Distribution</div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='text-blue-500 '> Address:</div>
                        <div> Ohio, Delaware, 435 Park Ave</div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='text-blue-500 '> Phone:</div>
                        <div> 614-205-9702</div>
                    </div></div>
            </div>
        </div>
                )
    }}
</AuthContext>
    </AuthContextApi>
    )
}

export default Secongpage