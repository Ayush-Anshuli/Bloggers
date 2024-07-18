"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import "@/app/dashboard/(auth)/register/register.css"
import { useRouter } from 'next/navigation'

const Login = () => {

  const session = useSession();
  const router = useRouter();
  
 if(session.status === "loading"){
   router?.push('/dashboard')
 }
 if(session.status ==="authenticated") {
  router?.push('/dashboard')
 }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

     signIn("credentials",{email,password})

  }
  return (
    <div>
      <div className='reg-container' >
        <div className='wrapper'>
          <form className='reg-form' onSubmit={handleSubmit} >
            <input type='email' placeholder='Email' className='reginput' />
            <input type='password' placeholder='Password' className='reginput' />
            <button className='register' >Login</button>
            <span className='account'>Don't have an account? <Link href={"/dashboard/register"} className='log'>Register</Link> </span>
          </form>
          <div className='login-btn'>
            <button onClick={() => signIn("google")} className='register'>Log in witjh google</button>
            <button onClick={() => signIn("github")} className='register'>Log in with github</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login