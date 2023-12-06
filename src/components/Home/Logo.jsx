import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';






const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3, // 0
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
 
    <div className='absolute top-[1rem] left-[1rem] z-[6] w-[100%] w-fit'>
      <Link className='w-[100%] flex items-end' to="/">
        {/* <img src={star} alt="Wibe Fashion" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
          className='strokedsvg'
        >
          <g >
            <motion.path
            className='stroke-[#fff]'
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>

        <span className='pb-[0.5rem] text-xl text-gray-200' variants={textVariants} initial="hidden" animate="visible">
          Vues Data
        </span>
      </Link>
     
    </div>
   
  );
};

export default Logo;
