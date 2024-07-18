"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'
import "../dashboard/dashboard.css"

const Dashboard = () => {

  const session = useSession();
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  // console.log(data)

  // console.log(session)




  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login")
  }

  const handlesubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
        await fetch("/api/posts",{
          method:"POST",
          body: JSON.stringify({
            title,desc,img,content,
            username: session.data.user.name
          })
        })
        mutate();
        e.target.reset()
    }
    catch(err) {
      console.log(err)
    }
  }


  const handleDelete = async (id) => {
    try{
        await fetch(`/api/posts/${id}`,{
          method:"DELETE"
        })
        mutate()
        e.target.reset()
    }
    catch(err) {
      console.log(err)
    }
  }


  if (session.status === "authenticated") {
    return (
      <div className='dash-container'>
        <div className='dash-post'>
          {
            isLoading? "loading" : data?.map((post) => (
              <div className='post-container' key={post._id}>
                <div className='dash-img-container'>
                  <Image src={post.img} alt='' width={200} height={100}/>
                </div>
                <h2 className='postTitle'>{post.title}</h2>
                <p className='delete' onClick={()=>handleDelete(post._id)}>X</p>
              </div>
            ))
          }
        </div>
        
        <form className='dash-form' onSubmit={handlesubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className='inputss'  required/>
          <input type='text' placeholder='Description' className='inputss' required/>
          <input type='text' placeholder='Image URL' className='inputss' required/>
          <textarea className='inputss' placeholder='Contents' rows={10} cols={50} required/>
          <button className='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Dashboard