import postImg1 from './images/post1.jpg'
import postImg2 from './images/post2.jpg'
import postImg3 from './images/post3.jpg'
import postImg4 from './images/post4.jpg'

export const postsCollection = [
    {
        id:1,
        title:"Breaking Your Coder's Block",
        date:new Date().toLocaleString(),
        paragraph:"At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...",
        postImage:postImg1,
    },
    {
        id:2,
        title:"How Caffein affects Your Brain",
        date:Date().toLocaleString(),
        paragraph:"At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...",
        postImage:postImg2,

    },
    {
        id:3,
        title:"What are call to Actions!",
        date:Date().toLocaleString(),
        paragraph:"At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...",
        postImage:postImg3,

    },
    {
        id:4,
        title:"5 Developers' Resources You Need to Know!",
        date:Date().toLocaleString(),
        paragraph:"At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...",
        postImage:postImg4,
        
    }

];

// toLocaleDateString();