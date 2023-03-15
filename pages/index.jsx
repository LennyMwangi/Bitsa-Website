import Head from 'next/head'
import React from 'react'
import HeroSection from '../components/HeroSection'
import Developers from '../components/Developers'
import NewsLetter from '../components/NewsLetter'
import EventCard from '../components/EventCard'
// import { getSession, useSession, signOut } from "next-auth/react"

const HomePage = () => {
  return (
    <div className='grid place-items-center min-h-screen'>
      <Head>
        <title>BITSA | Empowering Africa's Innovators</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="BITSA Website" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <div>
        <HeroSection />
        <EventCard />

        <Developers />
        <NewsLetter />
        {/* <Testimonial/> */}
      </div>

    </div>
  )
}

export default HomePage

// export async function getServerSideProps({ req }) {
//   const session = await getSession({ req })

//   if (!session) {
//     return {
//       redirect: {
//         destination: '/auth/login',
//         permanent: false
//       }
//     }
//   }

//   return {
//     props: { session }
//   }
// }

