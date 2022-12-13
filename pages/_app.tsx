import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar';
import { AnimatePresence } from 'framer-motion';
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <div className="py-24 px-12 lg:px-48 font-latoBold">
        <Navbar />
        <AnimatePresence initial={false}>
            <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
  )
}

export default MyApp
