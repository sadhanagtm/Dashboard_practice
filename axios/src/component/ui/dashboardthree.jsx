import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
function Dashboardthree() {
  return (
    <div>
        <div className='grid grid-cols-2 mt-8 h-10 w-full gap-10'>
<div className=' flex flex-row items-center justify-between'> 
<div className='font-bold'>Top Selling Items</div>
<div className='flex flex-row text-green-600 items-center gap-2'> More items <span><AiOutlineArrowRight/></span></div>
</div>
<div className='flex flex-row items-center justify-between'>
<div className='font-bold'>High Demand is Expected</div>
<div className='flex flex-row  text-green-600 items-center gap-2'> More items <span><AiOutlineArrowRight/></span></div>
</div>
</div>
    </div>
  )
}

export default Dashboardthree