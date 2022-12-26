import {useEffect,useState}from 'react'
const Viewall = () => {
    const [courses,   setCourses  ]= useState(null)
  
  useEffect(() => {
    const fetchCourse=async ()=> {
  
      const response =await fetch('/indiviualtrainee/viewallcourses')
      const json=await response.json()
  
      if(response.ok){
        setCourses(json)
      }
     
    }
    
    fetchCourse()
  
  }, [])
      return (
        <div className="viewcourse"> 
          <div className="Courses">
          <p>Courses</p>
            {
              courses && courses.map((courses)=> (
                <li key={courses._id}>{courses}</li>
              ))
            }
          </div> 
        </div> 
      )
    }
    export default Viewall