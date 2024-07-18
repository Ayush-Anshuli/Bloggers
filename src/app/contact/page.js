"use client"
import React from 'react'
import "../contact/contact.css"
// import { useForm } from '@formspree/react';

import Image from 'next/image'
const Conatact = () => {

  // const [state, handleSubmit] = useForm("mqazagyg");
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  return (
    <div className='contact-container'>
      <h1 className='contact-title'>Lets Keep in Touch</h1>
        <div className='contact-content'>
            <div className='contact-img'>
              <Image src={"/contact.png"} className='cnt-img' alt='' fill={true} />
            </div>
            <div className='form'>
              <form className='contact-form'  action='https://formspree.io/f/mqazagyg' method='POST'>
                  <input type='text' placeholder='Name' className='cont-input' name='name'/>
                  <input type='text' placeholder='Email' className='cont-input'name='email'/>
                  <textarea className='cont-textarea' rows={10} cols={30} placeholder='Message' name='text'/>
                  <button className='cnt-btn'>Send</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Conatact