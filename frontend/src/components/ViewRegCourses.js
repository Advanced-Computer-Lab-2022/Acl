import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom";
import "./YT.css";
import Youtube from "./Youtube";

const ViewRegCourses = () => {
  
   const location = useLocation();
   const search = location.search; // could be '?foo=bar'
   const params = new URLSearchParams(search);
   const id = params.get('userId'); // bar
   const [courses, setCourses]= useState([])
   const [coursesV, setCoursesV]= useState([])
   const [isClicked, setIsisClicked] = useState("");

   const getCoursesV =  async idd => {
    console.log(idd)
    await axios.get(`http://localhost:7007/courses/getCourseViews?cId=${idd}`)
    .then((res) => { 

              const courses = res.data
              console.log(courses.Views)
              setCoursesV(courses)
              setIsisClicked(idd);

          })
        }
    
     const handelf= () =>{
      setIsisClicked(false);

     }

    const getCourses =  async () => {
      await axios.get(`http://localhost:7007/indiviualtrainee/Courses?userId=${id}`).then(
     (res) => { 
         const courses = res.data
         setCourses(courses)
         
     }
      ); }
    useEffect(() => {


      getCourses() 
     },[]);

  return (
    <div className="courses"> 
          

            {courses && courses.map((course) => (   
              <p key ={course._id}> 
              {handelf}

              <h4>{course.title}</h4>
             <p> <strong>Duration: </strong> {course.duration}</p>
             <p> <strong>Price: </strong> {course.price}</p>
             <p> <strong>Exercise: </strong> {course.exercise}</p>
             <p> <strong>Discount: </strong> {course.discount}</p>
             <div className="preview">
                     {course.preview && course.preview.map((p)=>(
                     <p key={p}> 
                     <div className="prevVids">

                     {p.Video && p.Video.map((v)=>(               
                               <p key={v}> 
                               {console.log(v)}
                                     <br/>

                                     <p> <strong>Preview: </strong> <Youtube embedId={v.youtube_video_link}   /></p>
                        </p>
                     ))}<br/>

                             </div>
                         </p>
                      ))}
                       </div> 
             <div className="Subtitles">
                {course.Subtitle && course.Subtitle.map((s)=>(
                    <p key={s._id}> 
                     <p> <strong>SubName: </strong> {s.SubName}</p>
                     <p> <strong>Duration of Sub: </strong> {s.durationSub}</p>
                     <p> <strong>Total num of Ex: </strong> {s.exercisesNum}</p>  
                     <div className="Vids">

                     {s.Video && s.Video.map((v)=>(
                      <p key={v._id}> 
                                    
                      <p><strong>Video:{v._id}</strong></p>
                      {isClicked==course._id? <Youtube embedId={v.youtube_video_link} />:
                      <button onClick={() => getCoursesV(course._id)}>Watch Video</button>}                        

                        </p>


                     ))}                       


                             </div>


                    </p>
                ))}
                             </div>


               </p>
              
                   ))}
                    
          </div> 
          
                     
  
)
    }
export default ViewRegCourses
