import React from 'react'
import Invent from '../ui/invent';
import Footer from '../ui/footer';
import AuthContextApi, {AuthContext} from '../../Hoc/contextapi.jsx/Auth'
// import Purchaseorder from '../ui/purchaseorder';
import { useNavigate } from 'react-router-dom';

function Inventory() {
    const navigate=useNavigate()
  return (
    <AuthContextApi>
<AuthContext>
    {(context)=>{
        console.log(context)
        return(

    <div className='flex flex-col  items-center'>
            <Invent/>

        <table className='text-sm w-full  '>
            <tr onClick={()=>{
                navigate(`/inventory/1231`)
            }}
             className='flex flex-row border-none bg-blue-200 items-center'>
                <td className=' border-gray-500 flex items-center h-12 w-28'>
                </td>
                <th className=' border-gray-500 h-12 w-28 p-2'>Name</th>
                <td className=' border-gray-500 h-12 w-28 p-2'>SKU</td>
                <td className=' border-gray-500 h-12 w-28 p-2'>Dimension </td>
                <td className=' border-gray-500 h-12 w-28 p-2'>Purchase Price </td>
                <td className=' border-gray-500 h-12 w-28 p-2'>Selling price</td>
                <td className=' border-gray-500 h-12 w-28 p-2'>On Hands</td>
                <td className=' border-gray-500 h-12 w-28 p-2'>Units</td>
                <td className=' border-gray-500 h-12 w-28 p-2'>Updated</td>
                
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-12 w-28 '>
                <img src='https://images.unsplash.com/photo-1685362926801-d97120f56465?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-12 w-28 '>Glulam Beam</td>
                <td className=' border-gray-500 h-12 w-28 '>184893</td>
                <td className=' border-gray-500 h-12 w-28 '>5-1/"x13-3/4"x42"'</td>
                <td className=' border-gray-500 h-12 w-28 '>$31.99</td>
                <td className=' border-gray-500 h-12 w-28 '>$37.99</td>
                <td className=' border-gray-500 h-12 w-28 '>11,638</td>
                <td className=' border-gray-500 h-12 w-28 '>FBM</td>
                <td className=' border-gray-500 h-12 w-28 '>08/18/2021, 3:48 pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='https://images.unsplash.com/photo-1685384355807-e859d0994457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>OSB Board Type 2</td>
                <td className=' border-gray-500 h-10 w-28'>363933</td>
                <td className=' border-gray-500 h-10 w-28'>7/16x4x10</td>
                <td className=' border-gray-500 h-10 w-28'>$27.45</td>
                <td className=' border-gray-500 h-10 w-28'>$36.55</td>
                <td className=' border-gray-500 h-10 w-28'>305</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/18/2021, 3:23 pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='https://images.unsplash.com/photo-1682685797229-b2930538da47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>Primed MDF Board</td>
                <td className=' border-gray-500 h-10 w-28'>504685</td>
                <td className=' border-gray-500 h-10 w-28'>1x4x7</td>
                <td className=' border-gray-500 h-10 w-28'>$16.99</td>
                <td className='  h-10 w-28'>$23.9</td>
                <td className=' border-gray-500 h-10 w-28'>248</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/18/2021, 2:11 pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'> 
                <img src='https://images.unsplash.com/photo-1685491107139-7d7f4f17b3eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/></td>
                <td className=' border-gray-500 h-10 w-28'>Sanded Plywood Board</td>
                <td className=' border-gray-500 h-10 w-28'>236386</td>
                <td className=' border-gray-500 h-10 w-28'>1/4x2x4</td>
                <td className=' border-gray-500 h-10 w-28'>$29.95</td>
                <td className=' border-gray-500 h-10 w-28'>$38.75</td>
                <td className=' border-gray-500 h-10 w-28'>322</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/17/2021, 5:08pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='https://images.unsplash.com/photo-1685394396539-258c33f2ae0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>I-Joist 90 Series</td>
                <td className=' border-gray-500 h-10 w-28'>485956</td>
                <td className=' border-gray-500 h-10 w-28'>3-1/2'x14"x20'</td>
                <td className=' border-gray-500 h-10 w-28'>$60.99</td>
                <td className=' border-gray-500 h-10 w-28'>$79.55</td>
                <td className=' border-gray-500 h-10 w-28'>201</td>
                <td className=' border-gray-500 h-10 w-28'>Pieces</td>
                <td className=' border-gray-500 h-10 w-28'>08/17/2021 3:54pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='https://images.unsplash.com/photo-1685399124857-ab2bc1053311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>OSB HandiPanel</td>
                <td className=' border-gray-500 h-10 w-28'>457446</td>
                <td className=' border-gray-500 h-10 w-28'>1/2x4x8</td>
                <td className=' border-gray-500 h-10 w-28'>$25.99</td>
                <td className=' border-gray-500 h-10 w-28'>$36.95</td>
                <td className=' border-gray-500 h-10 w-28'>190</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/17/2021 3:13pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='https://images.unsplash.com/photo-1682685797742-42c9987a2c34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>Prefrinished MDF Panel</td>
                <td className=' border-gray-500 h-10 w-28'> 648393</td>
                <td className=' border-gray-500 h-10 w-28'>1/2x4x8</td>
                <td className=' border-gray-500 h-10 w-28'>$15.99</td>
                <td className=' border-gray-500 h-10 w-28'>$21.45</td>
                <td className=' border-gray-500 h-10 w-28'>300</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/17/2021 1:06 pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'> 
                <img src='https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/></td>
                <td className=' border-gray-500 h-10 w-28'>Fire Retardant Interior</td>
                <td className=' border-gray-500 h-10 w-28'>346273</td>
                <td className=' border-gray-500 h-10 w-28'>1-1/2"x5-1/2x8"</td>
                <td className=' border-gray-500 h-10 w-28'>$8.99</td>
                <td className=' border-gray-500 h-10 w-28'>$13.55</td>
                <td className=' border-gray-500 h-10 w-28'>1,214</td>
                <td className=' border-gray-500 h-10 w-28'>FBM</td>
                <td className=' border-gray-500 h-10 w-28'>08/16/2021 3:32pm</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='image.png' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>Plywood Sheating</td>
                <td className=' border-gray-500 h-10 w-28'>648294</td>
                <td className=' border-gray-500 h-10 w-28'>313'x47-7/8'x95-7/8'</td>
                <td className=' border-gray-500 h-10 w-28'>$11.95</td>
                <td className=' border-gray-500 h-10 w-28'>$16.99</td>
                <td className=' border-gray-500 h-10 w-28'>196</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/16/2021 11:13 am</td>
            </tr>
            <tr className='flex flex-row items-center'>
                <td className=' flex items-center border-gray-500 h-10 w-28'>
                <img src='https://images.unsplash.com/photo-1685468413971-eb5a98d01f34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' className='border h-10 w-12 bg-red-400 '/>
                </td>
                <td className=' border-gray-500 h-10 w-28'>Laminated Strand Lumber</td>
                <td className=' border-gray-500 h-10 w-28'>329474</td>
                <td className=' border-gray-500 h-10 w-28'>$15.95</td>
                <td className=' border-gray-500 h-10 w-28'>$21.45</td>
                <td className=' border-gray-500 h-10 w-28'>917</td>
                <td className=' border-gray-500 h-10 w-28'>FBM</td>
                <td className=' border-gray-500 h-10 w-28'>Sheets</td>
                <td className=' border-gray-500 h-10 w-28'>08/16/2021 10:12 am</td>
            </tr>
           
        </table> 
        
        </div>
        )
    }}
</AuthContext>
    </AuthContextApi>
        )
        }
        export default Inventory;