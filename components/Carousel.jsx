'use client';
import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

function Carousel() {
    const data = [
        {
            id: 1,
            date: '10/4-2023',
            title: 'Boost your conversion rate',
            blog: "Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.",
            user: 'Lindsay Walton',
            img: 'https://images.pexels.com/photos/2990603/pexels-photo-2990603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 2,
            date: '10/4-2023',
            title: 'Boost your conversion rate',
            blog: "Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.",
            user: 'Lindsay Walton',
            img: 'https://images.pexels.com/photos/3700224/pexels-photo-3700224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 3,
            date: '10/4-2023',
            title: 'Boost your conversion rate',
            blog: "Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.",
            user: 'Lindsay Walton',
            img: 'https://images.pexels.com/photos/8106773/pexels-photo-8106773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 4,
            date: '10/4-2023',
            title: 'Boost your conversion rate',
            blog: "Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.",
            user: 'Lindsay Walton',
            img: 'https://images.pexels.com/photos/8106777/pexels-photo-8106777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 5,
            date: '10/4-2023',
            title: 'Boost your conversion rate',
            blog: "Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.",
            user: 'Lindsay Walton',
            img: 'https://images.pexels.com/photos/11394209/pexels-photo-11394209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            id: 6,
            date: '10/4-2023',
            title: 'Boost your conversion rate',
            blog: "Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.",
            user: 'Lindsay Walton',
            img: 'https://images.pexels.com/photos/12081663/pexels-photo-12081663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
    ]

    var slide = 0;

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => {}
                //     setInterval(() => {
                //     ++slide;
                //     swiper.slideToLoop(slide)
                //     if (slide == 6) {
                //         slide = -1
                //     }
                // }, 3000)
            }
                onSlideChange={() => console.log('slide change')}
            >
                {
                    data.map((item) => {
                        return (
                            <SwiperSlide>
                                <Link href={`/posts/${item.id}`}>
                                    <article
                                        style={{ background: `rgba(0,0,0,0.3) url(${item.img})` }}
                                        className='w-full h-96 text-left rounded-sm bg-url bg-no-repeat bg-center bg-cover bg-blend-darken'
                                    >
                                        <div className='backdrop-blur-sm h-full p-16 mix-blend-hard-light'>
                                            <div className='text-sm w-fit'>{item.date}</div>
                                            <h2 className='text-3xl w-fit'>{item.title}</h2>
                                            <div className='mt-3 text-sm flex items-center gap-2 w-fit'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                </svg>
                                                {item.user}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel