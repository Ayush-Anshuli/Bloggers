import React from 'react'
import "../portfolio/portfolio.css"
const layout = ({children}) => {
  return (
    <div>
        <h1 className='works'>Our Works</h1>
        {children}
    </div>
  )
}

export default layout