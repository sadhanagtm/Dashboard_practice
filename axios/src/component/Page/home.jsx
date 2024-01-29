import React from 'react'
import Purchaseorder from '../ui/Purchaseorder'
import Orderdetails from './orderdetails'
import Invent from '../ui/invent'
import Inventory from './inventory'
import Footer from '../ui/footer'
import Create from '../ui/create'
import Newitems from './Newitems'
import Loginform from './loginform'


function Home() {
  return (
    <div>
        {/* <Purchaseorder/> */}
{/* <Loginform/> */}
        <Invent/>
        <div>
        {/* <Orderdetails/>
        <Create/> */}
        <Inventory/>
        <Footer/>
        
        {/* <Newitems/> */}
        </div>
    </div>

  )
}

export default Home