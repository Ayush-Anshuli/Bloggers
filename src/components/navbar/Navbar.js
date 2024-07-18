"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import "../navbar/NavBar.css"
import Darkmode from '../Darkmode/Darkmode'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const links = [
  {
    id:1,
    title:"Home",
    url:"/"
  },
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio",
  },
  {
    id:3,
    title:"Blog",
    url:"/blog"
  },
  {
    id:4,
    title:"About",
    url:"/about"
  },
  {
    id:5,
    title:"Contact",
    url:"/contact"
  },
  {
    id:6,
    title:"Dashboard",
    url:"/dashboard"
  },
  
]

const Navbar = () => {
  const session = useSession()
  const [open,setOpen] = useState(false);
  return (
    <>
    <div className='nav-container'>
      <Link href={"/"} className='nav-logo'> BlogyPedia </Link>
      <div className='nav-links'>
        <Darkmode/>
        
          {
            links.map((link) => (
              <Link href={link.url} key={link.id} className='each-link' > {link.title}  </Link>
            ))
          }
          {
            (session.status == "authenticated") ? <button className='logout' onClick={signOut} >Logout</button> 
            :
            <Link href={"/dashboard/login"}>
            <button className='logout'>Login</button>
            </Link> 
          }
          
      </div>


    </div>

<div>
<Image src={"/menu.png"} alt='' onClick={(e) => setOpen((prev) => !prev)} height={30} width={30} className='menu-btn'/>
{
  open && <div className='menu' onClick={(e)=>setOpen(false)}>
    {
      links.map((link) =>(
        <div key={link.id}>
            <Link href={link.url} >{link.title}</Link>
        </div>
        
      ))
    }
    {/* {
      (session.status == "authenticated") ? <button className='logout' onClick={signOut} >Logout</button> 
      :
      <Link href={"/dashboard/login"}>
      <button className='logout'>Login</button>
      </Link> 
    } */}
  </div>
}
</div>

</>
  )
}

export default Navbar