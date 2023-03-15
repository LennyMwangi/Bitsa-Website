import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPost = ({ banner, alt, title, author, date, excerpt, id,searchQuery }) => {
    const highlightedTitle = title.replace(new RegExp(searchQuery, 'gi'), (match) => `<span class="bg-blue-50 text-blue-700 italic">${match}</span>`);
    // const highlightedExcerpt = excerpt.replace(new RegExp(searchQuery, 'gi'), (match) => `<span class="bg-transparent italic">${match}</span>`);
    return (
        <div className="flex flex-col mb-[2rem] rounded overflow-hidden shadow-md pb-5">
            <div className=" w-full flex justify-center align-center">
                <Image width={590} height={60} className='p-[1rem] rounded object-cover' src={banner} alt={alt} />
            </div>
            <div className="blog-details flex items-center flex-col px-10 pb-8 ">
                <h1 className='font-semibold text-2xl text-center leading-10 my-5' dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
                <div className="author flex items-center space-x-2 my-2">
                    <img className='h-[35px] w-[35px]  rounded-full object-cover' src={banner} alt={alt} />
                    <p className="text-md">{author}</p>
                </div>
                <p className="italic text-gray-600 mb-2 text-sm">{date}</p>
                <p className="mb-[1rem]" >{excerpt.substring(0,150) }...</p>
                <Link href={`/blog/${id}`} className="read_more grid place-items-center text-lg rounded-full bg-blue-500 w-full md:w-1/2  h-14  text-white">Read more</Link>
            </div>
        </div>
    )
}

export default BlogPost