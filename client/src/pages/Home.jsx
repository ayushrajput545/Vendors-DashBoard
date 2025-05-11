import React from 'react'
import NavBar from '../components/NavBar'
import loginimg from '../assets/login.webp'
import { FcGoogle } from "react-icons/fc";
import {useGoogleLogin} from '@react-oauth/google'
import { useNavigate } from 'react-router-dom';
import { googleAuth } from '../services/api';

const Home = () => {


  const navigate = useNavigate()

    const responseGoogle = async (authResult)=>{
        try{

            if(authResult['code']){
                const result = await googleAuth(authResult['code'])

                const {name , email , image} = result.data.user;
                const token = result.data.token;
                const obj = {email , name , image , token}
                localStorage.setItem('user' , JSON.stringify(obj))
                navigate('/dashboard')
                // console.log(result)
            }
            // console.log(authResult)

        }
        catch(err){
            console.log("Error while login with google: " , err)
        }

    }

    const googleLogin = useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
        flow:'auth-code' 
    })


  return (
    <div className='w-11/12 mx-auto'>
  

      <div className='flex justify-between items-center  min-h-[500px] mx-auto w-11/12 mt-28'>

        <button onClick={googleLogin} className='bg-slate-800 md:w-2/6 justify-center flex items-center gap-3 mx-auto border border-slate-500 m-3 px-3 py-2 rounded-lg  text-white cursor-pointer hover:scale-90 transition-all duration-300'>
          <FcGoogle />
           <p>Sign in with Google</p>
        </button>
        <img src={loginimg} alt="" className='rounded-lg shadow-md lg:block hidden' />

      </div>
    </div>
  )
}

export default Home