
import Link from 'next/link'
import React from 'react'

function Blogs({ data }) {

    return (
        <div className='py-10'>
            <div className='flex justify-center items-center flex-wrap gap-3'>
                {
                    data.map((item) => {
                        return (
                            <Link href={`/posts/${item.id}`}>
                                <article className='w-80 sm:w-64 text-left rounded-sm bg-url bg-no-repeat bg-center bg-blend-darken hover:scale-110 hover:transition-all delay-75 hover:shadow-lg hover:shadow-slate-400'
                                    style={{ background: `rgba(0,0,0,0.3) url(${item.img})` }}
                                >
                                    <div className='backdrop-blur-sm p-5'>
                                        <div className='text-sm'>{item.date}</div>
                                        <h2 className='text-lg py-1 bold'>{item.title}</h2>
                                        <div className='text-xs flex items-center gap-2 py-2 italic'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-tag" viewBox="0 0 16 16">
                                                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                                                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
                                            </svg>
                                            International Affairs
                                        </div>
                                        <div className='mt-3 text-sm flex items-center gap-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                            </svg>
                                            {item.user}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blogs