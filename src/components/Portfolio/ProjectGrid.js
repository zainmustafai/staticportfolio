import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectGrid = ({projectArry,}) => {
  return (
    <div className='grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '
    >
        {
            projectArry.map((obj)=>{
              let i=1000,j=500;
              i=i+j;
                return <ProjectCard
                key={obj.title}
                projectObject={obj}
                animationDuration={i}
                />
            })
        }
    </div>
  )
}

export default ProjectGrid