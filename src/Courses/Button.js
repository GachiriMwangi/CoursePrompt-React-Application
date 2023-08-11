import React from 'react'
const Button = ( {color, text, onClick} ) => {

  return (
    <>
      <button className='btn' onClick={onClick} style={{backgroundColor: color}} >{text}</button>
    </> 
  )
}
Button.defaultProps = {
  text: 'Add'
}


export default Button
