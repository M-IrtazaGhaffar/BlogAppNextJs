'use client';
import Link from 'next/link'
import React, { useState } from 'react'

function Search() {
    const [Data, setData] = useState('')

    return (
        <div className='flex items-center justify-center p-0 mt-10'>
            <input onChange={(e) => setData(e.target.value)} className='border-none bg-slate-100 w-10/12 h-10 rounded-l-3xl px-7 text-black outline-none' placeholder='Search anything here' />
            <Link href={{
                pathname: '/posts',
                query: {
                    search: Data
                }
            }}>
                <button className='bg-slate-700 h-10 w-10 flex justify-center items-center rounded-r-3xl'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default Search