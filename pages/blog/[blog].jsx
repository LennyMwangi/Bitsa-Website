import React from 'react'
import { data } from '../../data';
import { useRouter } from 'next/router'
import Image from 'next/image';

const Blog = () => {
  const router = useRouter()
  const id = router.query['blog']

  return (
    <div className="container mx-auto">
      <div className=" md:gap-10 flex-col justify-center p-[1rem]  md:px-5">


        {data.blogs.map((post, index) => {
          if (post.uuid ==id)
            return <div key={index} className=" max-w-[868px] mx-auto flex flex-col mb-[2rem] rounded overflow-hidden shadow-md md:pb-5">
              <div className=" w-full h-[300px] flex justify-center align-center">
                <Image className='-[1rem] rounded object-cover' width={860} height={260}  src={post.banner} alt={post.alt} />
              </div>
              <div className="blog-details flex items-center flex-col px-10 pb-8">
                <h1 className='font-semibold text-2xl text-center leading-14 my-5'>{post.title }</h1>
                <div className="author flex items-center space-x-2 my-2">
                  <img className='h-[35px] w-[35px]  rounded-full object-cover' src={post.banner} alt={post.alt} />
                  <p className="text-md">{post.author}</p>
                </div>
                <p className="italic text-gray-600 mb-2 text-sm">{post.date}</p>
                <p className="mb-[1rem]" >{post.excerpt}</p>
              </div>
              </div>
        })
        }

      </div>
    </div>
  )
}

export default Blog