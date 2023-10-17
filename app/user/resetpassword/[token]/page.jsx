import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/Logo.png";

function page() {
  return (
    <div>
      <div className='flex flex-col items-center'>
      <Image src={Logo} alt='Logo' width={150} height={150} />
      </div>
      <div className='text-lg text-center py-10 sm:py-5'>Reset Your Password</div>
      <form className='flex flex-col gap-3 sm:items-center mx-auto px-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='text-xs'>Password</label>
          <input required id='password' placeholder='Enter Password' type='password' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="confirmpassword" className='text-xs'>Confirm Password</label>
          <input required id='confirmpassword' placeholder='Enter Password' type='password' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <button className='bg-slate-500/50 sm:w-96 rounded-sm p-2 text-sm' type='submit'>Reset Password</button>
      </form>
    </div>
  )
}

export default page