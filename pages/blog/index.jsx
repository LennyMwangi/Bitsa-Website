import Head from 'next/head'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import BlogPost from '../../components/BlogPost'
import { data } from '../../data'

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const filteredPosts = data.blogs.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))


    const handleSearchInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value)
    }
    

    return (
        <div className="w-full">
            <Head>
                <title>Blog</title>
            </Head>
            <div className="px-5">
                <h1 className='py-5 font-semibold text-2xl'>Recent Posts</h1>
                <div className="search_container flex items-center border border-gray-300 rounded-full  focus-within:border-blue-200  md:w-1/3">
                    <AiOutlineSearch size={22} className="ml-5 mr-2" />
                    <input onChange={handleSearchInputChange} value={searchQuery} type="text" name="search" placeholder='Search here...' className='p-3 flex-auto outline-none bg-transparent' />
                </div>
            </div>
            <div className='px-5 py-2 md:w-1/3'>
                {searchQuery !== '' ?
                    <p >Search results matching: <span className='italic font-semibold text-blue-500 underline'>{searchQuery}</span></p> : null
                }
            </div>
            <div className=" md:gap-10 flex-col justify-center p-[1rem] grid md:grid-cols-2 md:px-5">


                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post, index) => (
                        <BlogPost
                            alt={post.alt}
                            author={post.author}
                            banner={post.banner}
                            date={post.date}
                            excerpt={post.excerpt}
                            id={post.uuid}
                            title={post.title}
                            key={index}
                            searchQuery={searchQuery}
                        />
                    ))
                ) : (
                    <p className='flex space-x-4  bg-rose-50 p-4 text-gray-600'>Nothing found! <br /><span className='font-semibold text-rose-500 cursor-pointer flex items-center' onClick={() => setSearchQuery('')}><AiOutlineClose />clear search</span></p>
                )}

            </div>
        </div>
    )
}

export default Blog