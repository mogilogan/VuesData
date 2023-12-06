import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import Vid from "../../assets/try3.gif";




const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CoverVideo = () => {
  return (
    <section className="w-[100%] h-[100vh] relative " data-scroll>

      <div className="absolute top-0 left-0 right-0 bottom-0 z-[1] bg-[rgba(71,69,69,0.49)]"></div>

      <motion.div className="flex flex-col justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-[5]" variants={container} initial="hidden" animate="show">
        <div className="flex flex-row gap-4 ">
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.21"
            data-scroll-speed="4"
            className=" text-5xl font-handwrite text-white md:text-[120px]  drop-shadow  "
          >
            V
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.19"
            data-scroll-speed="4"
            className=" font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            u
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.17"
            data-scroll-speed="4"
            className="font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            e
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.15"
            data-scroll-speed="4"
            className="font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            s
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
            className="font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            d
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
            className="font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            a
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
            className="font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            t
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
            className="font-handwrite text-white text-5xl md:text-[120px]  drop-shadow  "
          >
            a
          </motion.h1>
        </div>
        <motion.h2
        
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
          className=" m-0 font-mono text-md md:text-3xl text-gray-400"
        >
          Web. Data. Domination.
        </motion.h2>
        <motion.h3
          
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="2"
          className=" m-0 font-sans text-md md:text-2xl text-gray-400 "
        >
          Unlock the power of the web with our cutting-edge web scraping technology.
        </motion.h3>
      </motion.div>

      <Img src={Vid}   autoPlay muted loop />
      
    </section>
  );
};

export default CoverVideo;
