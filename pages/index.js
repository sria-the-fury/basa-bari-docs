import Head from 'next/head'
import Image from 'next/image'
import Intro from "../components/sections/Intro";
import Features from "../components/sections/Features";
import Upcoming from "../components/sections/Upcoming";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div >
      <Head>
        <title>Basa Bari | FIND YOUR HOME - Across the Cities.</title>
        <meta name="description" content="Basa Bari is an Android and iOS Application for finding rental home across cities in Bangladesh." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro/>
        <Features/>
        <Upcoming/>
        <Contact/>

    </div>
  )
}
