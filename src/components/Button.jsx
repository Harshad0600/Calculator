import React from 'react'
import "./Calculator.css"

const Button = (props) => {
    const buttonClass = `button ${props.className}`;
  return (
    <>
      <button onClick={props.onClick} className={buttonClass}  value={props.value}>{props.value}</button>
    </>
  )
}

export default Button
