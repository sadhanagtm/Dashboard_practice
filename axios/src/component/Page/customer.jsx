import React from 'react'
import AuthContextApi, {AuthContext} from '../../Hoc/contextapi.jsx/Auth'
import Salespagethree from './Salespagethree'
import Salespagefour from './Salespagefour'
import Salespagefive from './Salespagefive'
import Purchasepageone from './Purchasepageone'
import Purchasrform from './Purchasrform'
import Suppliesone from './suppliesone'
import Logincustomer from './logincustomer'

function Customer() {
  return (
    <AuthContextApi>
    <AuthContext>
        {(context)=>{
            console.log(context)
            return(
    <div>
    <Logincustomer/>
        {/* <Salespagethree/> */}
        {/* <Salespagefour/> */}
        {/* <Salespagefive/> */}
        {/* <Suppliesone/> */}
        {/* <Purchasrform/> */}
        <Purchasepageone/>

           </div>
            )
  }}
</AuthContext>
    </AuthContextApi>
  )
}

export default Customer