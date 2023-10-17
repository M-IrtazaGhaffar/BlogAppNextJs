import React from 'react'

function Newsletter2() {
    return (
        <div className='flex gap-5 flex-wrap justify-center'>
            <input className='w-72 text-black py-2 px-7 outline-none rounded-3xl border-none' required placeholder='Your Email' type='email' />
            <button className='bg-slate-700 px-5 py-2 text-sm rounded-sm'>
                Notify me
            </button>
        </div>
    )
}

export default Newsletter2