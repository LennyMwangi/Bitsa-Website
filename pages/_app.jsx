import '../styles/globals.css'
import RootLayout from '../components/layout'
// import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    // <SessionProvider session={pageProps.session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    // </SessionProvider>
  )
}

export default MyApp
