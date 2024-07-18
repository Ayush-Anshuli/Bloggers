import React from 'react'
import "../footer/Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import Link from 'next/link';


const Footer = () => {
  return (
   <>
   <div className='hori'>
    <hr/>
   </div>
   
    <div className='footer-container'>
      <div>BlogyPedia all right reserved</div>
      <div className='social-container'>
        <Link href={"https://www.linkedin.com/in/ayush-anshuli-1a4b71246/"}><FaLinkedin/></Link>
        <Link href={"https://github.com/Ayush-Anshuli"}><FaGithub/></Link>
        <Link href={"https://www.instagram.com/__ay_u_sh_8/"}><CiInstagram/></Link>
        
      </div>
    </div>
   </>
  )
}

export default Footer