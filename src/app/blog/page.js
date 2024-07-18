"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import "../blog/blog.css"

const getdata = async () => {
    const res = await fetch("http://localhost:3000/api/posts")

    if(!res) {
      throw new Error("something wromg")
    }

    return res.json()
}

// export const generateMetadata = async ({params}) => {
//   const post = await getdata(params.id);
//   return {
//     title:post.title,
//     desc:post.desc,
//   }
// }

const Blog =  () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchdata = async () => {
      try {
        const result = await getdata();
      setData(result);
      }
      catch(error) {
        console.log(error)
      }
    }
    fetchdata()
  },[])
  return (
    <>
      <div>
        {
          data.map((blog) => (
            <Link href={`/blog/${blog._id}`} key={blog.id}>
            <div className='blog-container'>
    
              <div className='blog-img-cnt'>
                <Image src={blog.img}
                  alt=''
                  width={400}
                  height={200}
                  className='blog-img'
                />
              </div>
    
              <div className='blog-content'>
                <h1 className='blog-text'>{blog.title}</h1>
                <p className='blog-desc'>{blog.desc}</p>
              </div>
    
            </div>
          </Link>
          ))
        }

      </div>



    </>
  )
}

export default Blog