import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'

function Next({links}) {
  const navigate=useNavigate();
  return (
    <div>
         <div>
        <div className='w-full justify-end flex'>
            <button onClick={()=>{
            navigate(links)
            }} className='h-fit border rounded-full mr-4 w-32 p-2 text-sm bg-green-400 text-white'>Next</button>
        </div>
    </div>
    </div>
  )
}

export default Next