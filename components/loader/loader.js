import React from 'react'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className='w-full h-screen mx-auto bg-[#111111] z-10 flex justify-center items-center'>
     <motion.div
        className="w-[350px] sm:w-[450px]">
          <img src="gif.gif" className="w-full h-full" />
        </motion.div>
    </div>
  )
}

export default Loader