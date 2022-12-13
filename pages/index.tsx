import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {motion as m } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Awesome NEXT JS Transitions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
            <div className="my-96 p-1">
                <h1 className="text-6xl text-center lg:text-right lg:text-9xl">Happy Pickle</h1>
            </div>
            <div className="flex justify-between">
                <div className="">
                    <h2>Design</h2>
                    <h2>Company</h2>
                    <h2>2022</h2>
                </div>
                <div>
                    <h3>This pickle gonna make you smile.</h3>
                    <h3>Scottish designs to make you happy.</h3>
                    <h3>Click contact for cool transition</h3>
                </div>
            </div>
        </main>

    </div>
  )
}

export default Home;
