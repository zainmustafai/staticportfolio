import React, { useEffect, useState } from 'react'
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import Portfolio from '../../components/Portfolio/Portfolio'
import Aos from 'aos'; // animate on scroll
import "aos/dist/aos.css"; // aos css file
import { useInView } from "react-intersection-observer"; // ANimate on Visibility 
import { motion, useAnimation } from "framer-motion"; // Animation Hooks.
import TriangleClipPath from '../../components/TriangleClipPath/TriangleClipPath';
import Footer from '../../components/Footer/Footer'

import { useRef } from 'react'
import MyTechStack from '../../components/MyTechStack/MyTechStack'
// npm i aos --save 

const HomePage = () => {
  const portfolioRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  useEffect(() => {
    Aos.init({
      delay:"0",
      easing:'ease-in',
      duration: 200,
      mirror: true, // reverse animation when scroll past the component.
      anchorPlacement: 'top-bottom',

    })
  }, []);
  // Control Nav Bar.
  const control = useAnimation();
  const [navbarRef, navbarInView] = useInView();
  const [topBarStyle, setTopBarStyle] = useState({});

  const navAnimation = {
    // variant for navbar animation 
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1 }
  };
  useEffect(() => {
    if (navbarInView) {
      console.log('Inview');
      control.start('hidden');
      setTopBarStyle({
        display: 'none',
        transition: '1s'

      });
    } else {
      console.log('out of view');
      control.start('visible');
      setTopBarStyle({
        position: 'fixed',
        width: '100%',
        zIndex: 2,
        top: 0,
      });
    }
  }, [navbarInView, control])

  return (
    <div className='w-full min-w-min overflow-x-hidden'>
      <motion.div
        style={topBarStyle}
        variants={navAnimation}
        initial='hidden'
        animate={control}
      >
        <Navbar homeRef={homeRef} portfolioRef={portfolioRef} aboutRef={aboutRef} />
      </motion.div>
      <Hero portfolioRef={portfolioRef} homeRef={homeRef} />
      <div
        ref={navbarRef} // ref for Inview Intersection observer
      >
        <Navbar homeRef={homeRef} contactRef={contactRef} portfolioRef={portfolioRef} aboutRef={aboutRef} />
      </div>
      <MyTechStack />
      <About refVar={aboutRef} />
      <Portfolio refVar={portfolioRef} />
      <TriangleClipPath />
      <Footer />
    </div>
  )
}

export default HomePage


