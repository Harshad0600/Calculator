import React from 'react'
import "./Calculator.css"

const Display = (props) => {
  return (
    <>
      <h1 className='display'>{props.data}</h1>
    </>
  )
}

export default Display
