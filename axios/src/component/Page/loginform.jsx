import React, { useState } from 'react'
import {IoFingerPrintOutline} from 'react-icons/io5'
import {IoFingerPrint} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

function Loginform() {
  const [name, setname]= useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigate=useNavigate()
 const login=()=>{
localStorage.setItem('token',email)
navigate('/')
 }
  return (
    <div>
      <div className='h-fit w-fit p-4 gap-6 items-center flex flex-col bg-green-800'>
        <div className='h-24 w-24 text-white '>
          <IoFingerPrintOutline className='h-24 w-24'/>
        </div>
        <input onChange={(e)=>setname(e.target.value)} placeholder='Your name' className='h-10 w-2/3 flex text-lg  px-32 justify-center border-b-2  bg-green-800' />
        <input onChange={(e)=>setemail(e.target.value)} placeholder='E-mail address' className='h-10 w-2/3 flex text-lg  px-28 justify-center border-b-2  bg-green-800' />
        <input  onChange={(e)=>setemail(e.target.value)}placeholder='Password' className='h-10 w-2/3 flex text-lg  px-32 justify-center border-b-2  bg-green-800' />
        <button  onClick={()=>login()} className='border flex items-center justify-center text-lg  bg-white rounded-full h-8 w-64 p-4'  > Log in</button>
        <div className='w-3/4  flex items-center text-white'>
          By creating an account, you agree
          and accept our Terms ans Privacy Policy
        </div>
        <div className='flex items-center justify-center gap-4 flex-row  border-t-2 border-gray-400 p-4 w-full h-fit'>
        <div className='text-white'>Already have an account?
          <button> Log in </button>
          </div>
        </div>
        </div>
        </div>
        )
}

        export default Loginform