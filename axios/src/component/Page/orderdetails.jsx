import React from 'react'
import Purchaseorder from '../ui/Purchaseorder'
import Create from '../ui/create'
import Purchase from '../ui/purchase'
import Status from '../ui/status'
import Draftpurchase from '../ui/draftpurchase'
import Secongpage from './secongpage'
import Supply from './supply'
import AuthContextApi, { AuthContext } from '../../Hoc/contextapi.jsx/Auth'
import Order from '../ui/order'


function Orderdetails() {
  return (
    <AuthContextApi>
      <AuthContext>
        {(context) => {
          console.log(context)
          return (
            <div>
              <div>
                <Purchaseorder />
                <div className='text-sm p-4'>
                  <div className='font-bold'> Order Details</div>
                  <div className='flex flex-col  gap-4'>
                    <label className='text-gray-500 '> Supplier</label>
                    <select className=' border-2 border-gray-300 h-8 w-2/6 rounded-2xl px-3'>
                      <option>Wells Wade</option>
                      <option>well Wade</option>
                    </select>
                    <label className='text-gray-500 '> Billing Address</label>
                    <select className=' border-2 border-gray-300 h-8 w-2/6 rounded-2xl px-3'>
                      <option> Odo,Columbus, 5303 Fisher Rd</option>
                    </select>
                    <label className='text-gray-500 '> Shopping Address
                      <p className='text-black'>Choose a Warehouse</p>
                    </label>
                    <select className=' border-2 border-gray-300 h-8 w-2/6 rounded-2xl px-3'>
                      <option>Ohio,Columbia, 5303 Fisher Rd</option>
                    </select>
                    <label className='text-gray-500 '>Shipping Method</label>
                    <select className=' border-2 border-gray-300 h-8 w-2/6 rounded-2xl px-3'>
                      <option>Dedicated Carrier</option>
                    </select>
                    <label className='text-gray-500 '>Preferred Shipping Date</label>
                    <select className=' border-2 border-gray-300 h-8 w-2/6 rounded-2xl px-3'>
                      <option>08/25/2021, 2:00 PM</option>
                    </select>
                  </div>
                </div>
                <Create />
              </div>

              {/* <div>

                <Purchase />
                <Status />
                <Draftpurchase />
                <Secongpage />
                <Order />
              </div> */}
            </div>
          )
        }}
      </AuthContext>
    </AuthContextApi>


  )
}

export default Orderdetails