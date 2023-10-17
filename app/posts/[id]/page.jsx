import Comments from '@/components/Comments'
import Likes from '@/components/Likes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/assets/Logo.png";

const data =
{
  id: 1,
  date: '10/4-2023',
  title: 'Boost your conversion rate',
  blog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officia exercitationem laudantium? Dicta quos impedit velit cupiditate dolorum perspiciatis quasi cum harum dolorem, facere nam sint. Praesentium asperiores quis, magnam impedit error nam iste fuga rerum beatae, vel voluptatum saepe repellat distinctio quod numquam labore atque ipsa ipsum provident nihil esse repudiandae. Natus tempora omnis, explicabo labore sequi officia doloribus veniam provident eos accusamus expedita officiis modi laudantium nam? Accusamus exercitationem minima perspiciatis officia pariatur, cumque provident eum ullam assumenda, cupiditate libero culpa harum vero. Beatae facilis assumenda exercitationem delectus dicta facere illum temporibus, iure laboriosam aspernatur quas asperiores repellat necessitatibus adipisci molestiae tempora nobis nihil minima sint voluptate veniam accusamus, cumque veritatis? Fugit nisi corporis vero voluptatem, voluptatum amet est unde fugiat maxime? Culpa labore nam quos enim corporis sint illo eum cumque voluptas distinctio necessitatibus alias, veritatis explicabo inventore ipsa ex asperiores voluptates repudiandae! Impedit modi facilis nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officia exercitationem laudantium? Dicta quos impedit velit cupiditate dolorum perspiciatis quasi cum harum dolorem, facere nam sint. Praesentium asperiores quis, magnam impedit error nam iste fuga rerum beatae, vel voluptatum saepe repellat distinctio quod numquam labore atque ipsa ipsum provident nihil esse repudiandae. Natus tempora omnis, explicabo labore sequi officia doloribus veniam provident eos accusamus expedita officiis modi laudantium nam? Accusamus exercitationem minima perspiciatis officia pariatur, cumque provident eum ullam assumenda, cupiditate libero culpa harum vero. Beatae facilis assumenda exercitationem delectus dicta facere illum temporibus, iure laboriosam aspernatur quas asperiores repellat necessitatibus adipisci molestiae tempora nobis nihil minima sint voluptate veniam accusamus, cumque veritatis? Fugit nisi corporis vero voluptatem, voluptatum amet est unde fugiat maxime? Culpa labore nam quos enim corporis sint illo eum cumque voluptas distinctio necessitatibus alias, veritatis explicabo inventore ipsa ex asperiores voluptates repudiandae! Impedit modi facilis nobis!",
  user: 'Lindsay Walton',
  img: 'https://images.pexels.com/photos/2990603/pexels-photo-2990603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
}

function page() {
  return (
    <div className='p-5 sm:p-10'>
      {/* BreadCrumbs  */}
      <div className='bg-slate-500/50 flex items-center gap-3 flex-wrap text-sm w-fit px-3 py-1 rounded-sm'>
        <Link href='/'>Home</Link>
        /
        <Link href='/posts'>Posts</Link>
        /
        <span>{data.title}</span>
      </div>
      {/* Blog  */}
      <div className='py-10 flex flex-wrap flex-col gap-5'>
        <div className='text-sm'>
          {data.date}
        </div>
        <div className='text-2xl sm:text-3xl'>
          {data.title}
        </div>
        <div className='flex gap-1 italic'>
          Posted by
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
          </svg>
          {data.user}
        </div>
        <Image src={data.img} width={500} height={500} />
        <div>
          {data.blog}
        </div>
      </div>
      {/* Like Section  */}
      <Likes id={data.id} />
      {/* Comments  */}
      <Comments id={data.id} />
      <div className='pt-10 flex gap-5 flex-col text-xs'>
        <Image src={Logo} width={50} height={50} />
        <Link href='/user/register'>Liked <b>UPost</b>? <br /> Want to <b>Write</b> a Blog? <br /> <b>Register</b> as a User!</Link>
      </div>
    </div>
  )
}

export default page

export async function generateMetadata() {
  return {
    title: data.title,
    description: data.blog
  }
}