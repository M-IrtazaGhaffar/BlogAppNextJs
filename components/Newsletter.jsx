import React from 'react'
import Newsletter2 from './Newsletter2'
import Link from 'next/link'

function Newsletter() {
    return (
        <div className='px-10 py-20 flex justify-between items-center flex-wrap gap-3 bg-slate-900'>
            <div className='font-extrabold text-2xl text-centertracking-tight pb-5'>
                <h1>
                Get notified on every post?
                </h1>
                <p>
                    We can here your voice everywhere.
                </p>
            </div>
            <div className='flex flex-wrap flex-col gap-3'>
                    <Newsletter2 />
                    <Link href='/policy' className='text-xs text-center sm:text-left'>We care about your data. Read our <strong><b>Policy</b></strong>.</Link>
            </div>
        </div>
    )
}

export default Newsletter