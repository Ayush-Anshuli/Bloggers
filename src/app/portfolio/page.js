import Link from 'next/link'
import React from 'react'
import "../portfolio/portfolio.css"
const Portfolio = () => {
  return (
    <>  
        <h1 className='select'>Choose a gallery</h1>
     <div className='port-container'>
      <div className='port-items'>
        <Link href={"/portfolio/illustritions"} className='items'>
            <span className='port-title'>Illustrition</span>
        </Link>

        <Link className='items' href={"/portfolio/website"}>
            <span className='port-title'>Website</span>
        </Link>

        <Link  className='items' href={"/portfolio/applications"}>
            <span className='port-title'>Application</span>
        </Link>

      </div>
    </div>
    </>
 
  )
}

export default Portfolio