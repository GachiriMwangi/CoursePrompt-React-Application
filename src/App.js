import React from 'react'
import {useState} from 'react'
import Header from './Courses/Header'
import Courses from './Courses/Courses'
import AddCourses from './Courses/AddCourses'
function App() {
 
    const[business_courses, AlterCourse] = useState(
        [
        {
            id: 1, 
            text: 'Financial Engineering', 
            cluster: 40,
            period: '4 Years',
            reminder: true
        },
        {
            id: 2,
            text: 'Business Commerce', 
            cluster: 43,
            period: '4 Years', 
            reminder: true
        },
        {
            id: 3,
            text: 'Enterpreneurship', 
            cluster: 37, 
            period: '4 Years',
            reminder: true
        },
        {
          id: 4, 
          text: 'Human Resource Management.',
          cluster: 35,
          period: '4 Years',
          reminder: false
        }
      ]
      )

      const [upload_course, setUploadCourse] = useState(false)

      const DeleteCourse = (id) => {
   AlterCourse(business_courses.filter((course) => 
      course.id !== id 
   ))
      }

      const onToggle = (id) => {
        AlterCourse(business_courses.map((course) => 
            course.id === id ? {...course, reminder: !course.reminder} : course
        ))
      }

      const AddThisCourse = (course) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newCourse = {id, ...course}
        AlterCourse([...business_courses, newCourse])
        console.log("A new course has been added with id " + id)
      }
  return (
    <div className="container">
    

<Header onButtonClick={() => setUploadCourse(!upload_course)} showCourses={upload_course} />
{upload_course && <AddCourses onAdd={AddThisCourse} />}
{ business_courses.length > 0 ?  <Courses business_courses={business_courses} onToggle={onToggle} onDelete={DeleteCourse} /> : 'No Courses to display'}
  </div>  
  )
}

export default App;
