'use client'

import React, { useContext, useState } from 'react'
import Link from "next/link";
import { navLinks } from './constants';
{/*import { visionlogo } from './images';*/}
import Image from 'next/image';
import { motion } from "framer-motion";

import { fadeIn, navVariants, slideIn, staggerContainer } from "./utils/motion";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);

  return (
    <motion.nav
     className="w-full py-2 sm:px-16 px-6 overflow-hidden fixed top-0 left-0 z-10 bg-[#ffffff]"
    >
    <div
    className='w-full flex justify-between items-center h-[50px] mx-auto duration-300'
    >
        <Link 
        href='/' 
        className="duration-300 hidden lg:block"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
            {/*<Image alt='logo' src={visionlogo} width={70} height={20}/>*/}
        </Link>
        <ul className='list-none hidden lg:flex flex-row text-[15px] gap-[60px] font-[500]'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>

          ))}
        </ul>
        
          <div 
          className={` lg:hidden w-[28px] h-[28px]  object-contain cursor-pointer duration-300 text-[#000] ${toggle && 'hidden'}`}
           onClick={() => setToggle(!toggle)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
        </svg>
          </div>
          <Link 
        href='/' 
        className="duration-300 lg:hidden block"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
            {/*<Image alt='logo' src={visionlogo} width={70} height={20}/>*/}
        </Link>
        <div className='flex gap-4 lg:justify-start text-[#272727] '>
            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hidden  lg:block w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <div className='flex gap-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <p></p>
        </div>
        </div>
        
  
    </div>

    <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className='overflow-hidden w-full lg:hidden flex flex-1 justify-start gap-x-20 items-center pr-2  sm:mr-[4rem] mr-0 text-[#111]'>
          
          <motion.div 
           variants={slideIn('left', 'spring', 0.1 , 0.8)}
           initial="hidden"
           whileInView="show"
          className={`${!toggle ? "hidden" : "flex"}  p-6 fixed top-0 text-[#000] right-0 w-full h-screen bg-[#fff] z-10 flex flex-col justify-center items-center opacity-1`}
          >
          
                {/* inside mobile nav bar */}
            <div className='flex absolute top-5 right-0 px-5 text-[#000] justify-between w-full'>
          
                <img 
                src={toggle ? 'close.svg' : 'menu.svg'}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer'
                onClick={() => setToggle(!toggle)}
                />
            </div>
                
                <ul className='list-none flex justify-end items-start flex-col gap-20'>
                  
                {navLinks.map((Link, index) =>(
                  <li
                  key={Link.id}
                  className={`text-[#111] font-poppins font-medium cursor-pointer text-[36px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  
                  >
                    
                    <a href={`#${Link.id}`}>{Link.title}</a>
                    
                  </li>
                  
                ))}
                
              </ul>
              </motion.div>
        </motion.div>

        

          {/* cart */}

        
        <motion.div 
           variants={slideIn('right', 'spring', 0.1 , 0.8)}
           initial="hidden"
           whileInView="show"
          className={`${!toggleCart ? "hidden" : "block"}  p-6 fixed top-0 text-[#000] right-0  w-full lg:w-[500px] h-screen bg-[#fff] z-10  opacity-1`}
          >
          
                {/* inside mobile nav bar */}
              <div className='flex absolute top-5 right-0 px-5 text-[#000] justify-between w-full border-b-2 pb-4 '>
            
            <img 
            src={toggleCart ? 'close.svg' : 'menu.svg'}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggleCart(!toggleCart)}
            />
        </div>
              </motion.div>
    </motion.nav>
  )
}

export default Nav