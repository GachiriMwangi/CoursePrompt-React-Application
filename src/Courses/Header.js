import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'
  const Header = ( {title, onButtonClick, showCourses} ) => {
  return (
    
           <header className='header'>
      <h2>{title}</h2>
      <Button text={`${showCourses ? 'Close' : 'Upload'}`} color={`${showCourses? 'red' : 'green'}`} onClick={onButtonClick} />
     </header>
  )
}

Header.defaultProps ={
  title: 'Courses offered.'
}

Header.propTypes = {
  title: propTypes.string
}

export default Header
