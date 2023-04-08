import React from 'react'
import Bar from './Bar';
import profilePicture from './dp.png';
import './Animation.css'

const skillset=[
    
    {title:'HTML', score:90},
    {title:'CSS', score:80},
    {title:'JavaScript', score:60},
    {title:'NodeJS', score:70},
    {title:'React', score:75},
    {title:'Express', score:80},
    {title:'Tailwind', score:75},
    {title:'APIs', score:60},
    {title:'MongoDB', score:80},
    {title:'OOP', score:75},
    {title:'Github', score:80}
];

const SkillsSection = () => {
  return (
    <section className=' flex  justify-center items-center flex-col lg:flex-row text-center gap-0 md:gap-4 lg:gap-8 xl:gap-12 p-5  mt-16'>
        <div className='dp-div flex flex-col items-center justify-center gap-4 col-span-2  p-1 '>
            <div className=' w-full px-[16%]'>
                <img src={profilePicture} alt='Profile Pictur' className='img shadow-md rounded-full'  />
            </div>
            <h1 className='text-white font-semibold text-3xl '>
                Who's this guy?
            </h1>
            <p className='text-white text-sm md:text-md lg:text-lg font-light '>
                I'm a freelance Full-Stack Developer from Jhelum, Punjab Pakistan. <br/>
                I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. <br/>
                I'm very curious about new technologies & always eager to learn.
            </p>
            <a href='/' className='text-slate-400'>Let's make something special.</a>
        </div>
        {/* Skillset Bars */}
        <div className='skill-set h-full w-full grid grid-cols-1 gap-4'
        data-aos="fade-left"
        >
            {
                skillset.map((item)=>
                {
                    return<div
                    key={item.title}
                    >
                        <Bar title={item.title} score={item.score} />
                    </div>
                })
            }
        </div>

    </section>
  )
}

export default SkillsSection