import React, { useState } from 'react'
import { addVendor, updateVendor } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getVendorById } from '../services/api';

const AddVendor = () => {

    const [vendorData, setVendorData] = useState({
        name:"",
        accNo:"",
        bankName:"",
        addressL1:"",
        addressL2:"",
        city:"",
        country:"",
        zip:""
    })
    const {id} = useParams()
    const isEditMode = Boolean(id);

    const navigate = useNavigate()

    useEffect(()=>{
        if(isEditMode){
         const fetchVendor = async () => {
            try {
                const data = await getVendorById(id);  
                setVendorData({
                name: data.name,
                accNo: data.Account,  
                bankName: data.bankName,
                addressL1: data.addressL1,
                addressL2: data.addressL2,
                city: data.city,
                country: data.country,
                zip: data.zip
                });
            } catch (err) {
                console.error("Failed to fetch vendor", err);
            }
            
             
        }
        fetchVendor();
        }
    },[id])


    function changeHandler(e){
        const {name , value} = e.target;

        setVendorData((prev)=>({
            ...prev,
            [name]:value
        }))
    }


    async function submitHandler(e){
        e.preventDefault();
        try{

            if(isEditMode){
                await updateVendor(id,vendorData)
                navigate('/vendors')
            }
            else{
                await addVendor(vendorData)
                navigate('/dashboard')
            }
            setVendorData({
                name:"",
                accNo:"",
                bankName:"",
                addressL1:"",
                addressL2:"",
                city:"",
                country:"",
                zip:""
            })
            // navigate('/dashboard')
            
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className='w-11/12 mt-15'>
        <form onSubmit={submitHandler} className='text-white w-11/12 md:w-1/2 mx-auto flex flex-col gap-5 '>
            <div>
                <label htmlFor="name" className='text-sm'>Vendor Name<sup className='text-pink-500'>*</sup></label>
                <input name='name' value={vendorData.name} onChange={changeHandler} required id='name' type="text" placeholder='Enter vendor name...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
            </div>

            <div>
                <label htmlFor="accNo" className='text-sm'>Bank Account No<sup className='text-pink-500'>*</sup></label>
                <input name='accNo' value={vendorData.accNo} onChange={changeHandler} required id='accNo' type="number" placeholder='Enter Bank Account no...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
            </div>

            <div>
                <label htmlFor="bankName" className='text-sm'>Bank Name<sup className='text-pink-500'>*</sup></label>
                <input name='bankName' value={vendorData.bankName} onChange={changeHandler} required id='bankName' type="text" placeholder='Enter Bank name...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
            </div>

            <div className='flex md:flex-row flex-col justify-between gap-3'>
                <div>
                    <label htmlFor="addressL1" className='text-sm'>Address Line 1</label>
                    <input name='addressL1' value={vendorData.addressL1} onChange={changeHandler} id='addressL1' type="text" placeholder='Enter address...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
                </div>

                <div>
                    <label htmlFor="addressL2" className='text-sm'>Address Line 2<sup className='text-pink-500'>*</sup></label>
                    <input name='addressL2' value={vendorData.addressL2} onChange={changeHandler} required id='addressL2' type="text" placeholder='Enter address...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
                </div>
            </div>

            <div>
                <label htmlFor="city" className='text-sm'>City</label>
                <input name='city' value={vendorData.city} onChange={changeHandler} id='city' type="text" placeholder='Enter city name...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
            </div>


            <div className='flex justify-between md:flex-row flex-col gap-3'>
                <div>
                    <label htmlFor="country" className='text-sm'>Country</label>
                    <input name='country' value={vendorData.country} onChange={changeHandler} id='country' type="text" placeholder='Enter country...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
                </div>

                <div>
                    <label htmlFor="zip" className='text-sm'>Zip Code</label>
                    <input name='zip' value={vendorData.zip} onChange={changeHandler} id='zip' type="number" placeholder='Enter zip code...' className='w-full bg-slate-700 p-3 rounded-lg outline-none shadow-sm shadow-slate-500' />
                </div>
            </div>

            <button type='submit' className='bg-slate-800 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>
                {
                    isEditMode ? "Update Vendor":"Add Vendor"    
                }
            </button>
                    
        </form>
    </div>
  )
}

export default AddVendor