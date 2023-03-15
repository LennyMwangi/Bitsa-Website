import Image from 'next/image'
import React from 'react'
import { data } from '../data'

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Welcome to the about page of BITSA, a campus technology club dedicated to promoting and advancing the study and practice of technology in our community. Founded in [year], BITSA has since become one of the most prominent and active tech clubs on campus.

            As a club, we strive to provide opportunities for our members to explore the latest trends and developments in the tech industry, to learn and grow as professionals, and to engage with other like-minded individuals who share our passion for technology.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className='w-full h-full'
            src="https://img.freepik.com/free-vector/illustration-social-media-concept_53876-17828.jpg?w=740&t=st=1678432986~exp=1678433586~hmac=2e612ac7a5fc1e6397896e83d1bb8b88132a536261bbba2990360508c5c9fcc2"
            // https://cdni.iconscout.com/illustration/premium/preview/biometrics-technology-isometric-1739200-1479088.png?f=avif&h=700"
            alt="mockup"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4">
            We thought you would like to know more?
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            One of our key initiatives is the Huawei Academy, which is an industry collaboration program that aims to bridge the gap between academia and industry. Through the Huawei Academy, our members have access to a wide range of resources and training programs that help them develop the skills and knowledge needed to succeed in the tech industry.
<br/>
            Our club is open to all students who are interested in technology, regardless of major or background. We believe that diversity is key to our success, and we welcome members from all walks of life to join us and contribute to our community.

            If you're passionate about technology and want to join a vibrant community of like-minded individuals, we invite you to become a member of BITSA today
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800  pb-4 text-center">
          Officials
          </h1>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            {data.officials.map((official, index)=>(
            <div key={index} className="p-4 pb-6 flex justify-center flex-col items-center text-center">
              <div className="w-full flex justify-center">
                <div className="h-[80px] w-[80px] border-2 rounded-full">
                  <img
                    src={official.avatar}
                    // alt={developer.alt}
                    role="img"
                    className="rounded-full object-cover h-full w-full shadow-md"
                  />
                </div>
              </div>
              <p className="font-medium text-xl leading-5 text-gray-800  mt-4 text-center">
                {official.name}
              </p>
                <p className='text-sm text-gray-500 text-center'>{official.role }</p>
            </div>

        ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default About