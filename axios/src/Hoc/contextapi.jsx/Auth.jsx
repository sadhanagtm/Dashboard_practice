import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export const AuthContext=createContext();

function AuthContextApi({children}) {
    const [first,setfirst]=useState('hhhh')
    const navigation=useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigation('/login')
        }
    }, [localStorage])
  return (
    <AuthContext.Provider value={{first}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextApi