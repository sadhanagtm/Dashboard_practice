import React from 'react'

function Added(){
  // const [Index, setIndex] = useState(0);

  // setIndex(Form);
}





function Viewer(){
  // setIndex()
}


function Form() {
  return (
    <div className='flex items-center flex-col gap-6 p-4'>
      <div className='flex flex-row text-white gap-3'>
        <button onClick={()=>{
    Added()
    }}className='bg-green-900 solid-black h-fit w-fit p-4'>Add</button>
        <button onClick={()=>{
    Viewer()
    }} className='bg-red-900 solid-black h-fit w-fit p-4'>View</button>
      </div>
      <div className='h-fit bg-blue-300 w-fit flex flex-col border-solid gap-4 border p-6'>
        <label>Name</label>
        <input type='text' className=" h-6 w-4/10"/>
        <label htmlFor='image'>Image</label>
        <input id="image" type='file'className=" h-6 w-4/10 hidden" />
        <input type='submit' className='bg-blue-500 text-white border bottom-1 rounded-xl'/>
      </div>
      <div className='grid border border-black border-spacing-1 grid-cols-4 solid-black'>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'>S.N.</div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'>Name</div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'>Image</div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'>Action</div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
        <div className='border border-gray-600 h-7 w-15 p-2 items-center flex'></div>
      </div>

    </div>
  )
}

export default Form;