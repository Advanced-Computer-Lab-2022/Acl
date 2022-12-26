import React from 'react'
import axios from 'axios';
import { useEffect,useState } from "react"
import { useLocation } from "react-router-dom";
const ViewInsCourses = () => {
    const location = useLocation();
   const search = location.search; // could be '?foo=bar'
   const params = new URLSearchParams(search);
   const id = params.get('userId'); // bar

    const [courses, setCourses]= useState([])

    const getCourses =  async () => {
      await axios.get(`http://localhost:7007/instructor/ViewMyC?userId=${id}`).then(
     (res) => { 
         const courses = res.data
         console.log(courses)
         setCourses(courses)
         
     }
      ); }
      useEffect(() => {


        getCourses() 
       },[]);
  return (
        <div className="courses">
                {courses && courses.map((course)=>(
                    <p key={course._id}> 
                     <h4> <strong>Course Title: </strong> {course.title}</h4>


                    </p>
                ))}

             </div>

  )
}

export default ViewInsCourses