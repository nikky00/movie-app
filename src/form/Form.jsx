import React, { useState } from 'react'

export const Form = () => {
    const[displayPassword, setDisplayPassword] = useState(false)
    

  const handleClick = () => {
    
      setDisplayPassword(!displayPassword) }
  return (
    <div className='flex justify-center items-center h-screen '>
      
       <form className=' items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-auto md:w-600' action="">
          <label htmlFor="" className='font-bold'>Username</label><br />
          <div className='border w-[200px]'>
            <input type="text" /><br />
          </div><br />
          <label htmlFor="" className='font-bold'>Email</label><br />
          <div className='border w-[200px]'>
            <input type="text" /><br />
          </div><br />
          <label htmlFor="" className='font-bold'>Confirm Email</label><br />
          <div className='border w-[200px]'>
            <input type="text" /><br />
          </div><br />
          <label htmlFor="" className='font-bold'>Password</label><br />
          <div className='border w-[200px]'>
            <input  type={!displayPassword ? "password" : "text"}/>
            <span onClick={handleClick}>+</span><br />
          </div> <br />
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' type="submit">SUBMIT</button>
        </form> 
    </div>
  )
}
