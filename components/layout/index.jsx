import React from 'react'
import Footer from '../Footer'
import Header from '../Header'


function RootLayout({ children }) {
    return (
        <div className='container mx-auto'>
            <Header />
            <div className="min-h-[100vh]">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default RootLayout