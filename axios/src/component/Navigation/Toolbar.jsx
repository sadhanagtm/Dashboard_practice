import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { RiMessage2Fill } from 'react-icons/ri'
import { BsBellFill } from 'react-icons/bs'
function Toolbar() {
    return (
        <div className=' sticky top-0 left-0 w-full'>
            <div className='h-16 w-full p-4 justify-between  flex items-center bg-slate-400'>
                <div className='h-8 w-1/4 flex items-center  bg-white gap-4 rounded-md text-gray-500'>
                    <BsSearch />
                    <input type='text' placeholder='search...' className='h-full outline-none w-full bg-transparent' />
                </div>
                <div className='flex flex-row gap-4  items-center '> <RiMessage2Fill /> <BsBellFill />
                    <div>
                        <img src='https://th.bing.com/th/id/OIP.FV6T-fiN-jS1BUwGIZVOtgHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7https://th.bing.com/th/id/OIP.FV6T-fiN-jS1BUwGIZVOtgHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7'  className='h-8 w-8 border rounded-2xl'/>
                    </div>
                    <div className='flex flex-col'>
                        <div > Steve Johnson</div>
                        <div className='text-sm'>Inventory Manager</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;
