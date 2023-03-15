import React from 'react'
import { AiOutlineCiCircle, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'
import Link from 'next/link'
import { data } from '../data';

const Developers = () => {
    return (
        <>
            <div className="mb-16">
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">
                            DEVELOPERS TEAM
                        </p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                            The Talented Guys Behind the development of this site
                        </h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 px-10 pt-10 sm:b-5">
                    <div className="container mx-auto">
                        <div
                            role="list"
                            aria-label="Behind the scenes People "
                            className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around justify-evenly"
                        >
                            {data.developers.map((developer, index) => (
                                <div
                                    key={index}
                                    role="listitem"
                                    className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 md:px-4"
                                >
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                        <div className="absolute -mt-20 w-full flex justify-center">
                                            <div className="h-32 w-32">
                                                <img
                                                    src={developer.avatar}
                                                    alt={developer.alt}
                                                    role="img"
                                                    className="rounded-full object-cover h-full w-full shadow-md"
                                                />
                                            </div>
                                        </div>
                                        <div className="px-6 mt-16">
                                            <h1 className="font-bold text-3xl text-center mb-1">
                                                {developer.name}
                                            </h1>
                                            <p className="text-gray-800 text-sm text-center">
                                                {developer.role}
                                            </p>
                                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                                {developer.bio}
                                            </p>
                                            <div className="w-full flex justify-center pt-5 pb-5">
                                                <Link target="_blank " href={developer.github} className="mx-5">
                                                    <div aria-label="Github" role="img">
                                                        <AiOutlineGithub size={24} className="text-gray-400 hover:text-gray-800" />
                                                    </div>
                                                </Link>
                                                <Link target="_blank " href={developer.twitter} className="mx-5">
                                                    <div aria-label="Twitter" role="img">
                                                        <AiOutlineTwitter size={24} className="text-gray-400 hover:text-gray-800" />
                                                    </div>
                                                </Link>
                                                <Link target="_blank " href={developer.website} className="mx-5">
                                                    <div aria-label="Website" role="img">
                                                        <TbWorldWww size={24} className="text-gray-400 hover:text-gray-800" />
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Developers
