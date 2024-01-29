import React from 'react'

function Dashboardtwo() {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div className='font-bold'> Inventory Management KPIs</div>
                <select className='text-sm text-green-600'>
                    <option> Period: This week</option>
                </select>
            </div>
            <div className='grid grid-cols-4 gap-6  p-4'>
                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md '>
                    <div className='text-sm text-gray-400'> Inventory Turnover Ratio</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>1.2</div>
                </div>

                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'>
                    <div className='text-sm text-gray-400'> Average Inventory</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>$341,684</div>
                </div>
                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'>
                    <div className='text-sm text-gray-400'> Cost of Goods Sold</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>$412,343</div>
                </div>

                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md '>
                    <div className='text-sm text-gray-400'> Service Level</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>95.5%</div>
                </div>
                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'>
                    <div className='text-sm text-gray-400'>Days to Sell Inventory </div>
                    <div className='text-3xl font-semibold flex items-center justify center'>16.5</div>
                </div>
                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'>
                    <div className='text-sm text-gray-400'> Lead Time</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>14.2</div>
                </div>
                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'>
                    <div className='text-sm text-gray-400'> Perfect Order Rate</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>94.5%</div>
                </div>
                <div className='flex flex-col  bg-white items-center h-20 w-48 p-2 shadow-md'>
                    <div className='text-sm text-gray-400'> Rate of Return</div>
                    <div className='text-3xl font-semibold flex items-center justify center'>2.3%</div>
                </div>
            </div>
        </div>
    )
}

export default Dashboardtwo