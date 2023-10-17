import React from 'react'

function page() {
  return (
    <div>
      <div className='text-2xl text-center underline underline-offset-8 py-10 sm:py-5'>Contact Us</div>
      <form className='flex flex-col gap-3 sm:items-center mx-auto px-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name" className='text-xs'>Name</label>
          <input id='name' required placeholder='Enter Name' type='text' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email" className='text-xs'>Email</label>
          <input required id='email' placeholder='Enter Email' type='email' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="subject" className='text-xs'>Subject</label>
          <input required id='subject' placeholder='Enter Subject' type='text' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="message" className='text-xs'>Your message</label>
          <textarea required id='message' placeholder='Enter Subject' type='text' className='p-2 text-black text-xs w-full sm:w-96 mb-3 outline-none rounded-sm' rows={10} />
        </div>
        <button className='bg-slate-500/50 sm:w-96 rounded-sm p-2 text-sm'>Submit</button>
      </form>
    </div>
  )
}

export default page