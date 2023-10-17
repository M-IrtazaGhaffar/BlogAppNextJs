import React from 'react'
import { Raleway } from "next/font/google";
import Header from '@/components/Header';
import Blogs from '@/components/Blogs';
import Newsletter from '@/components/Newsletter';
import Carousel from '@/components/Carousel';
import Link from 'next/link';
const railway = Raleway({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

function page() {
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
  return (
    <div className={`${railway.className}`}>
      {/* Carousel */}
      <Carousel />
      {/* Header */}
      <Header />
      {/* Blog Section  */}
      <h3 className='text-2xl p-2 pb-10 flex justify-center flex-col items-center gap-3 text-center'>
        Recent Blogs by Our Creative Writers
        <hr className='w-48' />
      </h3>
      <Blogs data={data} />
      <div className='flex items-center justify-center flex-col gap-3 m-5'>
        <div>
          Looks interesting?
        </div>
        <Link href='/posts' className='w-fit bg-slate-700 px-3 py-1 rounded-sm'>
          Load more
        </Link>
      </div>
      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}

export default page

export const metadata = {
  title: 'UPost | Home Page',
  description: 'A Blog App underconstruction by ITTI Develops',
}