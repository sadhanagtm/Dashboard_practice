import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


function Footer() {
    return (
        <div className='flex w-full'>
            <div className='h-16 w-full flex gap-4 text-sm items-center flex-row bg-gray-300 justify-end p-6'>
                <Link to='/reportprev'> <button className='h-6 w-fit p-4 bg-blue-300 border rounded-2xl text-white flex items-center'> Prev </button>
                </Link>
                <div> Page 1 to 14</div>
                <Link to='/reportnexttwo'> <button className='h-6 w-fit p-4 bg-gray-800 text-white border rounded-2xl flex items-center'>Next</button>
            </Link>
            </div>


        </div>
    )
}

export default Footer;