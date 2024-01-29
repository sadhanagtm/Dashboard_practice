import React from 'react'
import {SlCalender} from 'react-icons/sl'
function Reportui() {
  return (
    <div className='flex flex-col gap-3'>
<div className='font-semibold text-lg '>Reports</div>
<div className='flex flex-row gap-5 text-sm items-center' > 
<div> Start Date:</div>
<div className='flex flex-row items-center gap-2'> 08/01/2021  <span className='text-green-500'> <SlCalender/></span></div>
<div> End Date:</div>
<div className='flex flex-row items-center gap-2'> 08/31/2021 <span className='text-green-500'> <SlCalender/></span></div>
</div>
    </div>
  )
}

export default Reportui;