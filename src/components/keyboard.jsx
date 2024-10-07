import React from 'react'
import Button from './Button'

const Keyboard = (props) => {
  console.log(props)
  return (
    <div className='container'>
     <div className=" d-flex">
      <Button value="/"  onClick={props.onClick} className="divide"/>
      <Button value="%" onClick={props.onClick} className="percentile"/>
      <Button value="C" onClick={props.onClick} className="clear-button"/>
      <Button value="AC"  onClick={props.onClick} className="clear-button"/>
      </div>
      <div className="d-flex">
      <Button value="7"  onClick={props.onClick}/>
      <Button value="8"  onClick={props.onClick}/>
      <Button value="9"  onClick={props.onClick}/>
      <Button value="*" onClick={props.onClick} className="operator"/>
      </div>
      <div className="d-flex  ">
      <Button value="4" onClick={props.onClick}/>
      <Button value="5" onClick={props.onClick}/>
      <Button value="6" onClick={props.onClick}/>
      <Button value="-" onClick={props.onClick} className="operator"/>
      </div>
      <div className="d-flex">
      <Button value="1"  onClick={props.onClick}/>
      <Button value="2"  onClick={props.onClick}/>
      <Button value="3"  onClick={props.onClick}/>
      <Button value="+" onClick={props.onClick} className="operator"/>
      </div>
      <div className="d-flex">
      <Button value="0" onClick={props.onClick}/>
      <Button value="00" onClick={props.onClick}/>
      <Button value="." onClick={props.onClick}/>
      <Button value="=" onClick={props.onClick} className="equal-button"/>
      </div>
    </div>
  )
}

export default Keyboard
