import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TechGrid from './TechGrid'

const MyTechStack = () => {
  return (
    <section className='text-center'>
        <SectionHeading text={"MY TECH STACK"} colorCode="45474A"/>
        <p className='my-8 text-2xl'>Technologies I’ve been working with recently</p>
        <TechGrid/>
    </section>
  )
}

export default MyTechStack