"use client";

import { fadeIn, slideIn, staggerContainer } from "./utils/motion";
import { motion, useScroll } from "framer-motion";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const Test = () => {
  
  return (
    <motion.div 
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="overflow-x-hidden">
      <section
      
      className="relative max-w-[100%] mx-auto bg-[#fff]">
      <motion.div 
      variants={fadeIn("up","spring", 0.3, 1)}
      className="h-[45vh] w-full flex flex-col justify-center items-center">
        <motion.div
        variants={fadeIn("up", "spring",0.5, 1)}
        className=" w-[400px]">
        </motion.div>
        <motion.div 
          variants={fadeIn("up", "spring",0.8, 1)}
        className="w-full px-10 sm:ml-10  mx-auto text-white items-center">
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 200,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 200,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 0.5, 0.5)}
              className="sm:w-[200px] mt-1 ml-20 flex w-[150px]">
                <img src="Nikon.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 1, 0.5)}
              className="sm:w-[200px] ml-10 w-[200px] flex pt-3 items-center">
                <img src="Visico.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 1.5, 0.5)}
              className="sm:w-[180px] ml-10 w-[200px] flex pt-3 items-center">
                <img src="apature.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2, 0.5)}
              className="sm:w-[190px] ml-10 w-[200px] pt-3 flex items-center">
                <img src="Man.png" className="w-full h-full r10:-translate-x-10"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="sm:w-[200px] ml-[64px] w-[170px] flex pt-3 items-center">
                <img src="Deity.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="sm:w-[250px] ml-10 w-[200px] pt-1 flex items-center">
                <img src="hollyland.jpg" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="sm:w-[200px] ml-[63px] w-[170px] flex pt-2 items-center">
                <img src="sutefoto.jpg" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="sm:w-[200px] ml-20 w-[150px] flex pt-2 items-center">
                <img src="Zgcine.jpg" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                variants={fadeIn("left","spring", 2.5, 0.5)}
              className="sm:w-[200px] ml-20 w-[150px] flex items-center">
                <img src="godox.png" className="w-full h-full"/>
              </motion.div>
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
    </motion.div>
 

  );
};

export default Test;