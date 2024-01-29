import React from 'react'
import {MdColorize} from 'react-icons/md'
import {GrAdd} from 'react-icons/gr'
import {FaEdit} from 'react-icons/fa'
function Invent() {
    return (
        <div className=' w-full'>
            <div className='w-full felx gap-6 p-6 flex-col h-24 '>
                <div classname='text-red-300 text-2xl'> Inventory</div>
                <div className='flex  gap-8 flex-row'>
                    <div className='flex gap-2'>
                    <div className='flex items-center'><MdColorize/></div>
                        <div>Filter</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center'><GrAdd/></div>
                        <div>New items</div>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-center'><FaEdit/></div>
                        <div>Edit</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invent;