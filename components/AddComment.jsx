import React from 'react'

function AddComment({ id }) {
  return (
    <div className='py-5'>
        <div className='text-lg p-3'>Add a Comment</div>
        <div className='flex flex-col items-start'>
            <textarea className='w-full p-3 text-black text-sm' required placeholder='Your thinkings...' rows={5} />
            <div className="flex gap-5 flex-wrap pt-5">
            <button className='bg-slate-700 py-1 px-3 rounded-sm'>Comment</button>
            <button className='bg-slate-800/80 py-1 px-3 rounded-sm'>Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddComment