import React from 'react'
import NavBar from '../components/NavBar'
import { IoMdAddCircle } from "react-icons/io";
import { FaHandPointRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();
  return (
    <div className='w-full min-h-screen'>
     

        <div className='w-1/2 mx-auto justify-evenly h-[700px] p-5 gap-4 items-center flex flex-col md:flex-row text-white'>

            <div onClick={()=>navigate('/add-vendor')} className='bg-slate-600 w-[225px] h-[150px] flex items-center justify-center rounded-lg shadow-md shadow-slate-400 cursor-pointer hover:scale-90 transition-all duration-300'>
                <p className='text-center flex flex-col items-center gap-3'>
                    <span className='text-2xl font-semibold'>Add Vendor</span>
                    <IoMdAddCircle fontSize={25}/>
                </p>
            </div>

            <div onClick={()=>navigate('/vendors')} className='bg-slate-600 w-[225px]  h-[150px] flex items-center justify-center rounded-lg shadow-md shadow-slate-400 cursor-pointer hover:scale-90 transition-all duration-300'>
                <p className='text-center flex flex-col items-center gap-3'> 
                    <span className='text-2xl font-semibold'>Show Vendors</span>
                     <FaHandPointRight fontSize={25}/>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard