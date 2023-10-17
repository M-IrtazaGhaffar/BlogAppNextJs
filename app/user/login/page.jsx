import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/Logo.png";
import Link from 'next/link';

function page() {
  return (
    <div>
      <div className='flex flex-col items-center'>
        <Image src={Logo} alt='Logo' width={150} height={150} />
      </div>
      <div className='text-lg text-center py-10 sm:py-5'>Login as User</div>
      <form className='flex flex-col gap-3 sm:items-center mx-auto px-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-xs'>Email</label>
          <input required id='email' placeholder='Enter Email' type='email' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password" className='text-xs'>Password</label>
          <input required id='password' placeholder='Enter Password' type='password' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <Link className='text-xs underline underline-offset-2' href='/user/changepassword'>
          Forget Password
        </Link>
        <button className='bg-slate-500/50 sm:w-96 rounded-sm p-2 text-sm' type='submit'>Login</button>
        <Link className='text-xs underline underline-offset-2' href='/user/register'>
          Not Registered Yet?
        </Link>
      </form>
    </div>
  )
}

export default page