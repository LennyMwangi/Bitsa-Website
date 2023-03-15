import React from 'react'
import Link from 'next/link'
import { data } from '../../data/index';
import { } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image';

export const Events = () => {
    return (
        <>
            <div className="mb-16">
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <p className="text-gray-500 text-lg text-center font-normal pb-3">
                            RECENT CLUB EVENTS
                        </p>
                        <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                            PARTICIPATE IN ALL OUR EVENTS NOW
                        </h1>
                    </div>
                </div>
                <div className="w-full bg-gray-100 md:px-10 md:p-8">
                    <div className="container mx-auto">
                        <div
                            role="list"
                            aria-label="Bitsa Events"
                            className=' space-y-4'
                        >
                            {data.events.map((event, index) => (
                                <div
                                    key={index}
                                    role="listitem"
                                    className='grid  md:grid-cols-2 h-[100%] justify-between'
                                >
                                    <div className="banner bg-[#f6f7f8] border">
                                        <Image width={700} alt={'Huawei Stock Image'} height={100} src={event.banner} className="object-cover  rounded" />

                                    </div>
                                    <div className="rounded overflow-hidden shadow-md bg-white">
                                    
                                        <div className="px-6 mt-10 flex flex-col">
                                                <h1 className="font-bold text-3xl text-center mb-1">
                                                    {event.name}
                                                </h1>
                                                <p className="text-gray-800 text-sm text-center">
                                                    {event.status}
                                                </p>
                                                <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                                    {event.info}
                                                </p>
                                            <div className="w-full  pt-5 pb-8 flex justify-center">
                                                <Link href={`/events/${uuidv4()}`} className="w-4/5 md:w-1/2 h-12 grid place-items-center bg-blue-500 rounded-full text-white">
                                                    Register Now
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
export default Events