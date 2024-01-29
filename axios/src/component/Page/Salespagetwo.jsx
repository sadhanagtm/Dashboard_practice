import React from 'react'
import Purchasesecondpage from './Purchasesecondpage'
import Next from '../ui/Next'

function Salespagetwo() {
  return (
    <div className='flex flex-col gap-3'>
    <Purchasesecondpage/>
    <Next links={'/salespagethree'} />
    </div>
  )
}

export default Salespagetwo