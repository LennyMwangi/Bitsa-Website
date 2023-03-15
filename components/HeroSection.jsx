
import Link from 'next/link';
import React from 'react'
import TypeEffect from './TypeEffect';

const HeroSection = () => {
    return (
        <section className="bg-white  min-h-[1/2]">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">

                        {TypeEffect()}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                        BITSA club, covers the three majors in the Information Systems And Computing Department(ISC)
                    </p>
                    <Link
                        href="/events"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-primary-700 bg-gradient-to-tr from-sky-300 to-blue-500 text-white focus:ring-4 focus:ring-primary-300 "
                    >
                        Get started
                    </Link>
                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                    >
                        See Details
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img
                        src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-17828.jpg?w=740&t=st=1678432986~exp=1678433586~hmac=2e612ac7a5fc1e6397896e83d1bb8b88132a536261bbba2990360508c5c9fcc2"
                        // https://cdni.iconscout.com/illustration/premium/preview/biometrics-technology-isometric-1739200-1479088.png?f=avif&h=700"
                        alt="mockup"
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection