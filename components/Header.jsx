import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, {  useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
// import Avatar from 'react-avatar';
// import { getSession, useSession } from 'next-auth/react'

export const NavLinks = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/events", name: "Events" },
    { href: "/services", name: "Services" },
    { href: "/blog", name: "Blog" },
    { href: "/contact", name: "Contact" },
]
const Header = () => {
    // const { data: session } = useSession()

    const path = usePathname()
    const [active, setActive] = useState(false)
    const handleMobileMenu = () => {
        if (!active) setActive(true)
        else setActive(!true)
    }
    

    return (
        <div className={`px-2 md:px-5 bg-white z-50 sticky top-0 transition-all border-b-[.1px]`}>
        
            <nav className='flex justify-between items-center h-[100px] border-b border-gray-100 w-full'>
                <div className="logo flex items-center justify-between">
                    <Link href="/" className='inline-flex justify-center items-center'>
                        <Image src="/assets/logo.png" alt="" width={70} height={70}  className="mr-2" />
                        <h2 className="font-bold text-2xl leading-5">BITSA <br /> <span className='hidden md:inline-block text-sm font-semibold text-gray-600'>Empowering Africa's Innovators</span></h2>
                    </Link>
                </div>

                <div className="flex items-center px-5">
                    <ul className={`${active ? 'active' : ''} navlinks`}>
                        {NavLinks.map(({ href, name }, index) => {
                            return <Link onClick={() => setActive(false)} key={index} className={`${path === href ? 'text-blue-500 bg-gray-100 border-b border-blue-200' : ''} text-md hover:bg-gray-100  w-full py-2  md:px-3 mx-1 md:rounded-lg`} href={href}>{name}</Link>
                        })}
                    </ul>
                    <div className="relative flex items-center ml-5 space-x-5">
                        <button className='cursor-pointer md:hidden' onClick={handleMobileMenu}>
                            {active ? <AiOutlineClose size={24} /> :
                                <AiOutlineMenu size={24} />
                            }
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}


