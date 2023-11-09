'use client'

import React, { useState } from 'react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const SliderTab = ({name, price,image}) => {
  return (
    <div>
      <div className='flex gap-x-25 lg:flex-row flex-col w-full items-center bg-[#ffffff] '>
          <div className=' w-full lg:w-[40%] flex flex-col gap-4'>
            <h1 className='text-[30px] sm:text-[50px] font-bold mx-auto lg:mb-5'>{name}</h1>
            <p className='font-medium w-full text-center lg:text-left text-[13px] wsm:text-[18px] sm:mt-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='lg:hidden flex w-fulllg:w-[60%] opacity-100 hover:scale-110 transition-all duration-500 mb-0'>
            <img src={image} alt="" className='w-full'/>
          </div>
          <p className='hidden font-medium w-full text-center  text-[13px] sm:text-[18px] md:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='flex gap-x-4 sm:justify-start justify-center'>
            <button className="px-6 py-3 bg-black text-white font-bold rounded-xl lg:mt-5 hover:bg-white hover:text-black hover:border-[1px] justify-center hover:border-black hover:duration-700">
            EXPLORE
            </button>
            </div>
          </div>
          <div className='hidden lg:flex w-full lg:w-[60%] opacity-100 hover:scale-110 transition-all duration-500'>
            <img src={image} alt="" className='w-full'/>
          </div>
        </div>
    </div>
  )
}


const Hero = () => {
  return (
    <section className='relative max-w-[2400px] mx-auto bg-[#ffffff] rounded-xl'>
      <div className=' lg:h-[90vh] mx-auto max-w-[1500px] px-7 lg:px-20 flex items-center'>
      
          <SliderTab name="Gulbenk & Co." image="camera.png"/>

      </div>


    </section>
  )
}

export default Hero