import React from 'react'
import { Link, useLocation,useNavigate } from 'react-router-dom'

function Create() {
  return (
    <div>
        <Link to='/purchasenext'  className='w-full justify-end flex'>
            <button className='h-fit border rounded-full mr-4 w-fit p-2 text-sm bg-green-400 text-white'>Create Purchase Order</button>
        </Link>
    </div>
  )
}

export default Create