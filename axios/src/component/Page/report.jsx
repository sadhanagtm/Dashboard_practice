import React from 'react'
import AuthContextApi, { AuthContext } from '../../Hoc/contextapi.jsx/Auth'
import Reportui from '../ui/reportui'
import { SlCalender } from 'react-icons/sl'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Next from '../ui/Next'
import { Link } from 'react-router-dom'
function Report() {
  return (
    <AuthContextApi>
      <AuthContext>
        {(context) => {
          console.log(context)
          return (
            <div>
              <Reportui />
              <div className='flex flex-col '>
                <div className='flex flex-row justify-between p-12'>
                  <div className='flex flex-row gap-8'>
                    <div className='flex flex-col '>
                      <Link to='/reportsec'> Inventory Turnover</Link>
                      <div> Ratio report</div>
                    </div>
                    <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                  </div>
                  <div>
                    <div className='flex flex-row gap-8'>
                      <div className='flex flex-col '>
                        <div> Inventory Holding</div>
                        <div> Cost areport</div>
                      </div>
                      <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row gap-8'>
                      <div className='flex flex-col '>
                        <div> Inventory on Hand</div>
                        <div> Report</div>
                      </div>
                      <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between p-12'>
                  <div className='flex flex-row gap-8'>
                    <div className='flex flex-col '>
                      <div>Average Days to</div>
                      <div>Sell Report</div>
                    </div>
                    <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                  </div>
                  <div>
                    <div className='flex flex-row gap-8'>
                      <div className='flex flex-col '>
                        <div> Read Time</div>
                        <div> Report</div>
                      </div>
                      <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row gap-8'>
                      <div className='flex flex-col '>
                        <div>Inventory Cycle</div>
                        <div> Count Report</div>
                      </div>
                      <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row justify-between p-12'>
                  <div className='flex flex-row gap-8'>
                    <div className='flex flex-col '>
                      <div> Inventory Turnover</div>
                      <div> Ratio report</div>
                    </div>
                    <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                  </div>
                  <div>
                    <div className='flex flex-row gap-8'>
                      <div className='flex flex-col '>
                        <div> Inventory Holding</div>
                        <div> Cost areport</div>
                      </div>
                      <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                    </div>
                  </div>
                  <div>
                    <div className='flex flex-row gap-8'>
                      <div className='flex flex-col '>
                        <div> Inventory on Hand</div>
                        <div> Report</div>
                      </div>
                      <div className='flex  items-center'> <AiOutlineArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>


              <div></div>
              <div></div>
              <Next links={'/nextreport'}/>
            </div>
          )
        }}
      </AuthContext>
    </AuthContextApi>
  )
}

export default Report