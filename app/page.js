'use client'

import { Nav, Hero, Footer, Products, Split, Carousel, Split2, Banner, Test} from '@/components'
import { useEffect, useState } from 'react'
import Loader from '@/components/loader/loader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }

    fakeDataFetch();
  }, [])
  return (
    isLoading ? <Loader /> : <section className='relative z-0 w-full h-full mx-auto top-[80px] overflow-hidden'>
      <Nav/>
      <Hero/>
      <Test/>
      <Split/>
      <Carousel/>
      <Split2/>
      <Banner/>
      <Products/>
      <Footer/>
     
    </section>
  )
}
