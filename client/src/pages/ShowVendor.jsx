import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { deleteVendor, fetchVendors } from '../services/api'
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import ConfirmationModal from '../components/ConfirmationModal';
import { useNavigate } from 'react-router-dom';

const ShowVendor = () => {

    const [vendors , setVendors] = useState([])
    const [page , setPage] = useState(1)
    const [totalPages , setTotalPages] = useState(1)
    const[confirmationModal , setConfirmationModal] = useState(null)
    const navigate = useNavigate()

   useEffect(()=>{
      fetchVendors(page , setVendors ,setTotalPages)
   },[page])

   async function handleDelete(vendorId){
    setConfirmationModal({
        text1:"Delete Vendor ?",
        text2:"Are you sure ?",
        btn1Text:"Delete",
        btn2Text:"Cancel",
        btn1Handler:async()=> {
            await deleteVendor(vendorId)
            await fetchVendors(page , setVendors ,setTotalPages)
            setConfirmationModal(null)
        },
        btn2Handler:()=>setConfirmationModal(null)
    })   
   }

   if(totalPages===0){
    return(
        <div className='text-white w-full h-[500px] flex flex-col gap-5 justify-center items-center'>
            <p className='text-slate-400 text-3xl font-bold'>List is Empty</p>
            <button onClick={()=>navigate('/add-vendor')} className='bg-slate-800 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>Add Vendor</button>
        </div>
    )
   }


  return (
    <div className='w-11/12 mx-auto mt-15'>

        <h2 className='text-2xl font-bold mb-4 text-white w-full text-center'>Vendors List</h2>

        <table className='w-full table-auto border border-collapse border-gray-400'>
            <thead>
                <tr className='bg-gray-200'>
                    <th className='border p-2'>Name</th>
                    <th className='border p-2'>Account No</th>
                    <th className='border p-2'>Bank Name</th>
                    <th className='border p-2 hidden md:block'>Address</th>
                    <th className='border p-2'>Actions</th>
                </tr>
            </thead>

            <tbody>
                {
                    vendors.map((vendor,i)=>(
                        <tr className='text-white' key={vendor._id}>
                           <td className='border p-2 py-10'>{vendor.name}</td>
                           <td className='border p-2 py-10'>{vendor.Account}</td>
                           <td className='border p-2 py-10'>{vendor.bankName}</td>
                           <td className='border p-2 hidden md:table-cell py-10 max-w-xs break-words'>{vendor.addressL1} , {vendor.addressL2}, {vendor.zip} , {vendor.country}</td>
                           <td className='border p-2 py-10  flex md:flex-row flex-col items-center justify-center'>
                             <button onClick={() => window.location.href = `/edit-vendor/${vendor._id}`} className='bg-slate-800 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>
                                <p>Edit</p>
                                {/* <FaEdit fontSize={35}/> */}
                             </button>
                             <button onClick={() => handleDelete(vendor._id)} className='bg-red-400 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>
                                <p>Delete</p>
                                {/* <MdOutlineDeleteForever className='text-5xl text-red-500'/> */}
                             </button>
                           </td>
                        </tr>
                    ))
                }
            </tbody>

        </table>

        {/* Pagination Control */}
        <div className='mt-4 flex items-center justify-center gap-4 mb-8'>
            <button disabled={page===1} onClick={()=>setPage((prev)=>prev-1)}
                className='bg-slate-800 disabled:opacity-50 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>
                <FaArrowLeftLong />
                <p>Prev</p>
            </button>

             <span className='text-white font-semibold'>Page {page} of {totalPages}</span>

            <button disabled={page===totalPages} onClick={() => setPage((prev) => prev + 1)}
                className='bg-slate-800 disabled:opacity-50 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>
                <p>Next</p>
                <FaArrowRightLong />
            </button>

        </div>

        {
            confirmationModal &&(
                <ConfirmationModal confirmationModal={confirmationModal}/>
            )
        }
        
    </div>
  )
}

export default ShowVendor