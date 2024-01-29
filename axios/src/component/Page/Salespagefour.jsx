import React from 'react'
import Purchasesecondpage from './Purchasesecondpage'
import Next from '../ui/Next'
// import { useNavigate } from 'react-router-dom';

function Salespagefour() {
  return (
    <div>
        <Purchasesecondpage/>
        <Next links={'/salespgfive'}/>
    </div>
  )
}

export default Salespagefour