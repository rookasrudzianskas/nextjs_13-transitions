import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className="py-24 px-12 lg:px-48 font-latoBold">
        <Navbar />
        <Component {...pageProps} />
      </div>
  )
}

export default MyApp
