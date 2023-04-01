import c1 from './images/c1.jpg'
import c2 from './images/c2.jpg'
import r1 from './images/r1.jpg'
import r2 from './images/r2.jpg'
import r3 from './images/r3.jpg'
import n1 from './images/n1.jpg'
import n2 from './images/n2.jpg'
// import n3 from './images/n3.jpg'

export const reactProjects=[
    {
        title:'React Beautiful Dropdowns',
        type:'JavaScript/React',
        img: r1,
        link:'https:www.github.com/zainmustafai'
    },
    {
        title:'Animated Portfolio Website',
        type:'JavaScript / React',
        img: r2,
        link:'https://github.com/zainmustafai/fullstack-portfolio1'
    },
    {
        title:'LMS Reusable Components',
        type:'JavaScript / React',
        img: r3,
        link:'https://github.com/zainmustafai/ggc-fyp-components'
    },
]
export const csharpProjects=[
    {
        title:'Student Database Management System ',
        type:'C#',
        img: c1,
        link:'https://github.com/zainmustafai/Student-DBMS'
    },
    {
        title:'JSON to SQL Deserializer',
        type:'C#',
        img: c2,
        link:'https://github.com/zainmustafai/DeSerializer_MVC_AspdotNET'
    },

]
export const nodeProjects=[
    
        {
            title:'User Auth API',
            type:'Node / JavaScript',
            img: n1,
            link:'https:www.github.com/zainmustafai'
        },
        {
            title:'Social Media App Rest API',
            type:'Node',
            img: n2,
            link:'https:www.github.com/zainmustafai'
        },
        // {
        //     title:'Node 3',
        //     type:'Node',
        //     img: n3,
        //     link:'https:www.github.com/zainmustafai'
        // },
]

export const AllProjects = [
    ...csharpProjects,...reactProjects,...nodeProjects
] 