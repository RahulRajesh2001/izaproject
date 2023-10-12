import React from 'react'
import "./button.css"

const Button = (props) => {
  return (
    <>
      <div className='body '>
        <a className='atag flex justify-center items-center ' href='#'>
          <span className='josefinSans'>{props.title}</span>
          <div className='liquid'></div>
        </a>
      </div>
    </>
  )
}

export default Button
