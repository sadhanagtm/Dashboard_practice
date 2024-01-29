import React from 'react'
import {Formik,Field,ErrorMessage,Form} from 'formik'
import * as yup from 'yup'

const scheama=yup.object().shape({
    Name:yup.string().required('enter your name'),
    email:yup.string().email('provide a valid ').required('Enter your name'),
    sku:yup.string().required('Enter your SKU '),
    dimension:yup.number().required('Enter Dimensions '),
    purchase:yup.number().required('Enter Purchase Price '),
    selling:yup.number().required('Enter Selling Price '),
    onhand:yup.number().required('Enter on-hand '),
    unit:yup.number().required('Enter Units '),
    update:yup.string().required('Enter Updates ')

})
function Newitems() {
    return (
        <div>
            <div className='h-fit w-fit p-4 flex items-center gap-4 flex-col bg-gray-200'>
                <div className='flex items-center font-bold text-gray-500 text-3xl'>
                    Fill the above information...
                </div>

                <Formik
                initialValues={{
                    Name:'',
                    email:'',
                    sku:'',
                    dimension:'',
                    purchase:'',
                    selling:'',
                    onhand:'',
                    units:'',
                    update:''
                }}
validationSchema={scheama}
                onSubmit={(values)=>{
                    console.log(values)
                }}
                >
                    {({handleSubmit})=>{
                        return <Form onSubmit={handleSubmit} className='grid gap-5'>
                        <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Name</label>
                    <Field type='text' name='Name' placeholder='Enter name' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage className='text-red-600 border-2 bg-white p-6 h-fit w-fit border-white' name='Name'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Email</label>
                    <Field type='text' name='email' placeholder='Enter your email' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='email'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> SKU</label>
                    <Field type='text' name='sku' placeholder='Enter your SKU' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='email'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Dimension</label>
                    <Field type='number' name='dimension' placeholder='name' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='dimension'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Purchasing Price</label>
                    <Field type='number' name='purchase' placeholder='Enter purchase price' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='purchase'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Selling Price</label>
                    <Field type='number' name='selling' placeholder='Enter selling price' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='selling'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> On Hand</label>
                    <Field type='text' name='onhand' placeholder='Enter on-hand' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='onhand'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Units</label>
                    <Field type='text' name='unit' placeholder='Enter units' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='unit'  component={'div'}/>
                </div>
                <div className='flex flex-row gap-4 '>
                    <label className='text-gray-400 flex items-center'> Updated</label>
                    <Field type='number' name='update' placeholder='Enter updated data' 
                    className='h-8 w-64 border border-sky-200 rounded-full' />
                    <ErrorMessage name='update'  component={'div'}/>
                </div>
                        </Form>
                    }}
                </Formik>
             
        <div className=''> <button className='h-10 w-32 border border-sky-200 bg-blue-400 rounded-full'>Submit</button></div>
            </div>
            </div>
            
            )
}

            export default Newitems