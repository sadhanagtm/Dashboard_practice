import React from 'react'
import Status from '../ui/status'
import { IoIosArrowForward } from 'react-icons/io'
import Draftpurchase from '../ui/draftpurchase'
import Secongpage from './secongpage'
import Order from '../ui/order'
import { useNavigate } from 'react-router-dom';


function Salespagefive() {
    return (
        <div>

            <div className='flex flex-row gap-4'>
                <div className='font-bold'> Purchase Orders</div>
                <div className='flex items-center'>
                    <IoIosArrowForward />
                </div>
                <div className='font-bold'>New Purchased Order #2384</div>
                <div className='flex items-center'>
                    <IoIosArrowForward />
                </div>
                <div className='font-bold'>Shipment #2384</div>
            </div>
            <Status />
            <Draftpurchase />
            <div className='flex flex-row font-bold text-lg w-5/6 mb-20 justify-between'>
                <div>Real-time shipping</div>
                <div> Tracking Information</div>
            </div>
            <div className='grid grid-cols-2 h-68 w-5/6 justify-center gap-2'>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28265.880309098193!2d83.4633728!3d27.6791296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1686808898026!5m2!1sen!2snp" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className=' flex flex-col text-sm gap-4 p-2'>
                    <div className='flex flex-row '>
                        <div className='w-32'>Shipping Order:</div>
                        <div> #4758</div>
                    </div>
                   
                    <div className='flex flex-row '>
                        <div className='w-32'>Tracking Number:</div>
                        <div> 73295437676676</div>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <div className='w-32'>Shipping Method:</div>
                        <div> Private Fleet</div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-32'>Customer:</div>
                        <div> Reliable Construction</div>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <div className='w-32'>Shipping Address:</div>
                        <div> Ohio, Johnstorm, &9 Greenstick Way</div>
                    </div>
                    <div className='flex flex-row gap-5'> 
<div className='w-72'>Associated Package:</div>
<div> #4213</div>
</div>

                </div>
            </div>
            <Secongpage />
            <Order />
        </div>
    )
}

export default Salespagefive