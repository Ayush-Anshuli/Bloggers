import Image from 'next/image'
import React from 'react'
import "./category.css"
import { items } from './data'
import { notFound } from 'next/navigation'

const getData =  (cat) => {
  const res = items[cat]

  if(!res) {
    return notFound()
  }
  return res
}
const Category = ({params}) => {
  // console.log(params)
  const data = getData(params.category)
  return (
    <div className='categ-container'>
      <h1 className='cat-heading'>{params.category}</h1>
      {
        data.map((item) => (
      <div className='cate-item' key={item.id}>
          <div className='cat-content'>
            <h1 className='cat-title'>{item.title}</h1>
            <p className='cat-desc'>{item.desc}</p>
            {/* <button className='cat-btn'>Content</button> */}
          </div>
          <div className='cat-img-container'>
                <Image src={item.image} 
                alt=''
                fill={true}
                className='img-cnt'
                />
          </div>
      </div>
        ))
      }
    </div>
  )
}

export default Category