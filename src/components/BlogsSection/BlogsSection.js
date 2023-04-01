import React from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import BlogPostCard from './BlogPostCard';
import {postsCollection} from './PostsDB';



const BlogsSection = () => {
  return (
    <section className='w-full px-[12%]'
    id='blog' 
    data-aos="fade-up"
    data-aos-once='true'
    >
        <SectionHeading text={"BLOG"} colorCode={"45474A"}/>
        {/* GRID */}
        <div 
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 pt-36'>
            {
                postsCollection.map((post)=>{
                    return <BlogPostCard
                    key={post.id}
                    image={post.postImage}
                    paragraph={post.paragraph}
                    title={post.title}
                    date={post.date}

                    />
                })
            }
        </div >
        
    </section>
  )
}

export default BlogsSection