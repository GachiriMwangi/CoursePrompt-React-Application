import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Course = (  {course, onToggle, onDelete} ) => {
  return (
    <div onDoubleClick={onToggle} className={`task ${course.reminder ? 'reminder' : ''}`}>
      <h3>{course.text}     <FaTimes className='icon' onClick={() =>onDelete(course.id)} style={{color: 'red'}}/>  </h3>
  
    <small>{course.period}</small>
    </div>
  )
}

export default Course
