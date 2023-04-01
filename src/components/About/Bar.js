import { motion } from 'framer-motion'
import React from 'react'
import './Bar.css'

// Score 
const Bar = ({ title, score }) => {

  return (
    <div className={'bar-bg w-full h-4 md:h-8  overflow-hidden flex items-center justify-start'}
      data-aos="fade-up"
    >
      <p className='font-bold title text-center text-xs md:text-lg  z-1 text-white flex items-center pl-6 py-6  w-[40%] sm:w-4/12 md:w-6/12 lg:w-4/12 '>
        {title}
      </p>
      <div className='w-full h-full flex items-center justify-between' >
        <div className=' h-full' style={{ width: `${score}%` }}
        >
          <motion.div className='filler'
            initial={{
              width: "0%"
            }}
            whileInView={{
              width: '100%'
            }}
            transition={{
              delay: 0.5,
              duration: 1
            }}
          >
            {/* Animated filler bar */}
          </motion.div>
        </div>
        <p className='mr-2 text-green-600 ' >
          {score}%
        </p>
      </div>

    </div>
  )
}

export default Bar
