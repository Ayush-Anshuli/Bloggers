"use client"
import React, { useEffect, useState } from 'react'
import "@/app/blog/blog.css"
import Image from 'next/image'

const getdata = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }

  return res.json()
}

const Blogpost = ({ params }) => {
  const [post, setPost] = useState(null)
  // const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getdata(params.id)
        setPost(data)
        // setLoading(false)
      } catch (err) {
        setError(err.message)
        // setLoading(false)
      }
    }

    fetchData()
  }, [params.id])

  // if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    post && (
      <div className='blog-post-container'>
        <div className='top'>
          <div className='info'>
            <h1 className='blog-title'>{post.title}</h1>
            <p className='post-desc'>{post.desc}</p>
            <div className='author'>
              <Image
                src={post.img}
                alt=''
                width={50}
                height={50}
                className='avatar'
              />
              <span className='username'>{post.username}</span>
            </div>
          </div>
          <div className='post-img-cnt'>
            <Image
              src={post.img}
              fill={true}
              className='post-img'
            />
          </div>
        </div>
        <div className='post-content'>
          <p className='post-text'>
           {post.content}
         </p>
        </div>
      </div>
    )
  )
}

export default Blogpost
