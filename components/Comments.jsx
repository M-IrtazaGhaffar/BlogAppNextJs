import React from 'react'
import CommentLikes from './CommentLikes'
import AddComment from './AddComment'

function Comments({ id }) {
    const comments = [
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic! consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
        {
            name: 'Irtaza',
            comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, hic!',
            date: '23-10-2021'
        },
    ]
    return (
        <div>
            <div className='text-xl pt-10 pb-5'>
                Comments ({18})
            </div>
            <div className='h-96 overflow-y-scroll'>
                {
                    comments.map((item) => {
                        return (
                            <div className='bg-slate-600/50 my-3 p-3 rounded-sm flex justify-between gap-1'>
                                <div>
                                    <div className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                        </svg>
                                        {item.name}</div>
                                    <div className='text-sm p-2'>{item.comment}</div>
                                </div>
                                <div className='py-2'>
                                <CommentLikes />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <AddComment id={id} />
        </div>
    )
}

export default Comments