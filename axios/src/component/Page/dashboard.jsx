import React from 'react'
import AuthContextApi, { AuthContext } from '../../Hoc/contextapi.jsx/Auth'
import Dashboardone from '../ui/dashboardone'
import Dashboardtwo from '../ui/dashboardtwo'
import Dashboardthree from '../ui/dashboardthree'
import {Doughnut} from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Dashboardfour from '../ui/dashboardfour'
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [2, 90, 3, 2, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



function Dashboard() {
  return (
    <AuthContextApi>
      <AuthContext>
        {(context) => {
          console.log(context)
          return (
            <div className='h-full w-full p-4 flex flex-col gap-3'>
              <Dashboardone/>
              <Dashboardtwo/>
              <div className='flex flex-row justify-between font-bold text-lg w-5/6 items-center  p-3 '> 
              <div>Sales Order</div>
              <div>Inventory</div>
              </div>
              <div className='flex flex-row gap-20 items-center justify-center' >  
             <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'><div className=' w-1/3 h-1/3 '>
              <Doughnut data={data}/>
              </div>
              </div> 
              <div className=' w-1/3 h-1/3'>
              <Doughnut data={data}/>
              </div>
              </div>
         
              <Dashboardthree/>
              <Dashboardfour/>
            </div>
          )
        }}
      </AuthContext>
    </AuthContextApi>

  )
}

export default Dashboard