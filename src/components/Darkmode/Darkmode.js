"use client"
import React, { useContext } from 'react'
import "../Darkmode/Darkmode.css"
import { ThemeContext } from '../../Context/ThemeContext'
const Darkmode = () => {
    // const mode = "light"
    const {toogle,mode}= useContext(ThemeContext)
  return (
    <div className='dark-cnt' onClick={toogle}>
        <div className='icon'>🌙</div>
        <div className='icon'>🌞</div>
        {/* WE take two pixels becaue we have taken pdding 2px */}
        <div className='ball' style={mode =="light" ? {left:"2px"} : {right:"2px"}} />
    </div>

  )
}

export default Darkmode