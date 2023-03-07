import React, { useState } from 'react'
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData,setformData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {name, email, password} = formData;
  // onChange function
  const onChange = (e) => {
    setformData((prevData) => ({
      ...prevData, [e.target.id]: e.target.value, 
    }))
  }
  return (
      <section>
        <h1 className='text-3xl text-center mt-6 font-bold'>
          Sign Up
        </h1>
        
        {/*  Parent Div */ }
        <div className='flex flex-wrap justify-center items-center px-6 py-12 max-w-7xl mx-auto'>
            <div className='md:w-[45%] lg:w-[48%] mb-12 md:mb-6 pl-5'>
              <img className='w-full rounded-2xl' src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80" alt="Key Image" />
            </div>

            <div className='w-full lg:ml-20 md:w-[45%] lg:w-[40%]'>
              <form>
                 <input type="text" className='w-full px-4 py-2 mb-4 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out delay-100' id='name' value={name} onChange={(e) => onChange(e)} placeholder="Full Name"/>
                <input type="email" className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out delay-100' id='email' value={email} onChange={(e) => onChange(e)} placeholder="Email Address"/>
                <div className='relative mt-4'>
                  <input type={showPassword ? "text" : "password"} className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded-md transition ease-in-out delay-100' id='password' value={password} onChange={(e) => onChange(e)} placeholder="Password"/>
                  {showPassword ? (<AiFillEyeInvisible className='absolute right-3 top-4 text-xl cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>) : (<AiFillEye className='absolute right-3 top-4 text-xl cursor-pointer' onClick={() => setShowPassword(!showPassword)}/>)}
                </div>
                <div className='flex justify-between mt-2 whitespace-nowrap text-sm sm:text-lg mb-6'>
                  <p>Have an account?{" "}
                    <Link to="/sign-in"><span className='text-red-500 font-semibold hover:text-red-700 transition duration-200 ease-in-out'>Sign in</span></Link>
                  </p>
                   <p className='text-blue-600 hover:text-blue-800  transition duration-200 ease-in-out'>
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </p>
                </div>
                  <button type='submit' className='w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800'>Sign up</button>

               <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300
                    after:border-t after:flex-1 after:border-gray-300'>
                <p className='text-center font-semibold mx-4'>OR</p>
              </div>
                <OAuth />
              </form>

         
            </div>
      </div>
      </section>
    
  )
}

export default SignUp