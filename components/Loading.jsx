import React from 'react'

function Loading() {
    return (
        <div className='flex items-center justify-center flex-col min-h-screen gap-5'>
            <div class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
            Please wait
        </div>
    )
}

export default Loading