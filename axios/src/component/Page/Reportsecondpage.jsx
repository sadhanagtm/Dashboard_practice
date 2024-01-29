import React from 'react'
import Reportui from '../ui/reportui'
import Inventory from './inventory'
import Footer from '../ui/footer'

function Reportsecondpage() {
  return (
    <div className='flex flex-col gap-3'>
        <Reportui/>
        <Inventory/>
        <Footer/>
    </div>
  )
}

export default Reportsecondpage