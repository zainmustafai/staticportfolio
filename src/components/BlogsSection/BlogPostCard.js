import React from 'react'

const BlogPostCard = ({title, date, paragraph,image}) => {
  return (
<div className="max-w-lg mx-auto">
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 h-full">
        <a href="/">
            <img className="rounded-t-lg" src={image} alt="blog"/>
        </a>
        <div className="p-5">
            <a href="/">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 mb-3">
                    {date}
                </p>
            </a>
            <p className="font-normal text-gray-700 mb-3">
                {paragraph}    
            </p>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="/">
                Read more
            </a>
        </div>
    </div>
</div>
  )
}

export default BlogPostCard