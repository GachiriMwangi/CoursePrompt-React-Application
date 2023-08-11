import React from 'react'
import Course from './Course'
const Courses = ( {business_courses, onToggle, onDelete} ) => {
    
  return (
    <div>
      {
        business_courses.map((course) => 
        <Course key={course.id} onToggle={() => onToggle(course.id)} onDelete={onDelete} course={course}/>
        )
      }
    </div>
  )
}

export default Courses
