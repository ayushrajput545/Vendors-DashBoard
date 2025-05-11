import React from 'react'
import { useNavigate } from 'react-router-dom'
import ConfirmationModal from './ConfirmationModal'
import { useState } from 'react'
import toast from 'react-hot-toast'

const NavBar = () => {
  const navigate= useNavigate()
  const[confirmationModal , setConfirmationModal] = useState(null)

  function logoutHandler(){
     setConfirmationModal({
      text1:" Are you sure ?",
      text2:"Log Out your account ?",
      btn1Text:"Logout",
      btn2Text:"Cancel",
      btn1Handler:()=>{
        localStorage.removeItem("user")
        setConfirmationModal(null)
        navigate('/')
        toast.success("Logged out")
      },
      btn2Handler:()=>setConfirmationModal(null)
     })
  }
  return (
    <div className='md:w-11/12 w-full mx-auto mt-5 flex justify-between items-center'>
        <h1 className='text-white md:text-4xl m-3 text-2xl font-bold'>Vendor <span className='text-[#27AE60]'>Dashboard</span></h1>
        {
          localStorage.getItem("user") && (
            <div className='flex'>

              <button onClick={()=>navigate('/dashboard')} className='bg-slate-800  border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>DashBoard</button>
              <button onClick={logoutHandler} className='bg-slate-800   border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>Logout</button>
            </div>

          )
        }

        {
          confirmationModal && (
            <ConfirmationModal confirmationModal={confirmationModal}/>
          )
        }
    </div>
  )
}

export default NavBar