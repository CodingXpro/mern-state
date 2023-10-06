import React from 'react'
import { Link } from 'react-router-dom'

export default function SignOut() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type='text' placeholder='username' id='username' className='border p-3 rounded-lg'/>
        <input type='email' placeholder='email' id='email' className='border p-3 rounded-lg'/>
        <input type='password' placeholder='password' id='password' className='border p-3 rounded-lg'/>
        <button className='bg-slate-700 rounded-lg p-3 text-white hover:opacity-95 disabled:opacity-80 uppercase'>SignUp</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>SignIn</span>
        </Link>
      </div>
    </div>
  )
}
