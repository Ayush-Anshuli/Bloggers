"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "../register/register.css"
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

function Register() {

  const session = useSession();
  // const routing = useRouter()



  const [error,setErr] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

      try{
          const res = await fetch ("/api/auth/register" ,{

            // method: "POST" specifies that this is a POST request.
              method:"POST",
              // headers: { "Content-Type": "application/json" } sets the content type to JSON, indicating that the server should expect JSON data
              headers:{
                "Content-Type":"application/json"
              },
              // JSON.stringify({ name, email, password }) sends the form data in JSON format to the server.
              body:JSON.stringify({
                name,email,password
              })
          })
          // 201 means created
          res.status === 201 && router.push("/dashboard/login?success=Account is created")
      }
      catch (error) {
        setErr(true)
      }
  }


  // if(session.status === "loading"){
  //   return <p>Loading....</p>
  // }

  if(session.status === "authenticated") {
    router?.push("/dashboard")
  }

  return (
    <div className='reg-container'>
      <div className='wrapper'>
      <form className='reg-form' onSubmit={handleSubmit}>
        <input type='text' placeholder='Username' className='reginput'/>
        <input type='email' placeholder='Email' className='reginput'/>
        <input type='password' placeholder='Password'className='reginput'/>
        <button className='register'>Register</button>
      <Link href={"/dashboard/login"} className='reg-link'> <span className='log'>Login</span> with an existing account </Link>
      </form>
      </div>
    </div>
  )
}

export default Register