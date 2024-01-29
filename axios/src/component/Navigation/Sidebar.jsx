import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { MdOutlineInventory2 } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import { BiBorderOuter } from 'react-icons/bi'
import { BsClipboard2Heart } from 'react-icons/bs'
import { VscGraph } from 'react-icons/vsc'
import {FaWarehouse} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import { Link, useLocation,useNavigate } from 'react-router-dom'


// import 
function Sidebar() {
    const location=useLocation()
    console.log(location)
     const navigate=useNavigate();
    return (
        <div className='fit-content sticky top-0 left-0 w-full z-50'>
            <div className='h-screen  w-full px-3 py-2 gap-4 text-white flex flex-col  bg-mainColor'>
                <div className='flex gap-8  flex-row '></div>

                <div className='h-fit w-fit bg-red-500 flex items-center'>
                    <img src='https://images.unsplash.com/photo-1570882280426-df8ac5ccd672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBuZyUyMGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' className='h-16 flex items-center w-32'/>
                </div>

        <Link to={'/'} className={`flex gap-4 px-2 py-1 flex-row ${location.pathname==='/'?"bg-gray-300 text-mainColor":'bg-transparent first-line:hover:h-5'}  `}>
                    <div className='flex items-center' ><MdDashboard /></div>
                    <div>Dashboard</div>
                </Link>

                <Link to='/inventory' className='flex gap-4 flex-row '>
                    <div className='flex items-center' ><MdOutlineInventory2 /></div>
                    <div>Inventory</div>
                </Link>
                <Link to='/purchaseFirst' className='flex gap-4 flex-row '>
                    <div className='flex items-center' ><BsBuilding /></div>
                    <div>Purchase Orders</div>
                </Link>
                <Link to='/suppliess' className={`flex gap-4 flex-row ${location.pathname==='suppliess'?"bg-gray-300":'bg-transparent first-line:hover:h-5'} `}>
                    <div className='flex items-center' ><FaTruck /></div>
                    <div>Suppliers</div>
                </Link>
                <div onClick={()=>{ 
                    navigate('/sales')
                }}
                 className='flex gap-4 flex-row '>
                    <div className='flex items-center' ><BiBorderOuter /></div>
                    <div>Sales Orders</div>
                </div>
                <Link to='/customer' className='flex gap-4 flex-row '>
                    <div className='flex items-center' ><BsClipboard2Heart /></div>
                    <div>Customers</div>
                </Link>
                <Link to='/report' className='flex gap-4 flex-row '>
                    <div className='flex items-center'><VscGraph /></div>
                    <div>Reports</div>
                </Link>
                <div className='flex  mt-10 gap-4 text-sm flex-row'>
                    <div><FaWarehouse/></div>

                    <div >
                        <div>
                            <select className='bg-transparent'>
                                <option> Warehouse A</option>
                                <option> Trial room</option>
                            </select>
                        </div>
                        <div className='w-28 h-fit'> OH,Columbia,5303 Fisher Rd</div>
                    </div>
                </div>
                <div className='flex gap-4 flex-row'>
                <div><FiSettings/></div>
                <div>Manage Warehouse</div>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar