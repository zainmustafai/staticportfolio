import React, { useState } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Portfolio.css'
import ProjectGrid from './ProjectGrid';
import { AllProjects, csharpProjects, nodeProjects, reactProjects } from './Projects.js'

const tabs = ["all", 'react', 'node', 'c#'];
const Portfolio = ({ refVar }) => {

  const [active, setActive] = useState('all');
  const colorClass = 'bg-[#252934] hover:bg-[#252934] rounded-sm  duration-[0.3s] transition-all text-white';

  //const [isTabActive,setIsTabActive]=useState(false);
  const [gridItems, setGridItems] = useState(AllProjects); //portfolio items
  // change grid items on tab click
  const handleTabClick = (e) => {
    // change grid Items
    if (e.target.id === 'node') {
      setGridItems(nodeProjects);
      setActive('node');
    } else if (e.target.id === 'c#') {
      setGridItems(csharpProjects);
      setActive('c#');
    } else if (e.target.id === 'react') {
      setGridItems(reactProjects);
      setActive('react');
    } else if (e.target.id === 'all') {
      setGridItems(AllProjects);
      setActive('all');
    }
  }
  return (
    <section
      id='portfolio'
      className='portfolio-section w-full overflow-hidden  px-[2%] sm:px-[12%]'
      data-aos="fade-up"
      data-aos-once='true'
      ref={refVar}
    >
      <SectionHeading text={"PORTFOLIO"} colorCode={"45474A"} />
      <div className=' tabs w-full'>
        {/* Tabs */}
        <ul className='flex items-center justify-around border-2 px-8'
        >
          {
            tabs.map((item) => {
              return <li className='text-lg text-pink-800 font-bold'>
                <button
                  className={` px-8 hover:bg-slate-300 ${(active===item) ? colorClass : ''} `}
                  key={Math.random().toString(36).substring(7)}
                  id={item.toString()}
                  onClick={handleTabClick}>
                  {item.toString().toUpperCase()}
                </button>
              </li>
            })
          }
        </ul>
      </div>
      <div className='sm:px-12 pt-6'>
        {/* Grid Container  */}
        <ProjectGrid projectArry={gridItems}
          data-aos="fade-up"
        />
      </div>
    </section>
  )
}

export default Portfolio