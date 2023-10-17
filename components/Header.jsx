import React from 'react'
import Search from '@/components/Search';

function Header() {
    return (
        <div className='px-10 py-20 text-center'>
            <h1 className='text-4xl capitalize py-3 bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                Here your coming ideas begin!
            </h1>
            <p className=''>
                You can read any kind of blog posts on any kind of running issue in the world by the blog writers from different countries.
            </p>
            {/* Search Bar  */}
            <div>
                <Search />
            </div>
        </div>
    )
}

export default Header