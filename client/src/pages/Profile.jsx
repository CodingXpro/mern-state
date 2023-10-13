import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const{currentUser}=useSelector((state)=>state.user);
  return (
   <div className='max-w-lg p-3 mx-auto'>
    <h1 className='text-center font-semibold text-3xl my-7'>
      Profile
    </h1>
    <form className='flex flex-col gap-4'>
      <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover self-center cursor-pointer mt-2 '/>
      <input placeholder='username' id='username' type='text' className='border p-3 rounded-lg'/>
        <input placeholder='email' id='email' type='text' className='border p-3 rounded-lg'/>
         <input placeholder='password' id='password' type='text' className='border p-3 rounded-lg'/>
         <button className='bg-slate-700 p-3 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
    </form>
    <div className='flex justify-between mt-5'>
      <span className='text-red-700'>Delete Account</span>
      <span className='text-red-700'>Sign out</span>
    </div>
   </div>
  )
}

 