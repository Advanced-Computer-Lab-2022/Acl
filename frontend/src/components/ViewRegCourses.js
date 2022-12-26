import React from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
//console.log(courses[0].Subtitle[0].Video[0].youtube_video_link)
//<p> <strong>Preview: </strong> {courses.preview[0]}</p>
/* <div className="preview">
{course.preview && course.preview.map((p)=>(
    <p key={p}> 
    <p> <strong>Preview: </strong> <Youtube embedId={p.Video.toString()} /></p>

    </p>
))}
    </div> */
  return (
    <div className="courses"> 
          

            {courses && courses.map((course) => (   
              <p key ={course._id}> <h4>{course.title}</h4>
             <p> <strong>Duration: </strong> {courses.duration}</p>
             <p> <strong>Price: </strong> {courses.price}</p>
             <p> <strong>Exercise: </strong> {courses.exercise}</p>
             <p> <strong>Discount: </strong> {courses.discount}</p>

             <div className="Subtitles">
                {course.Subtitle && course.Subtitle.map((s)=>(
                    <p key={s._id}> 
                     <p> <strong>SubName: </strong> {s.SubName}</p>
                     <p> <strong>Duration of Sub: </strong> {s.durationSub}</p>
                     <p> <strong>Total num of Ex: </strong> {s.exercisesNum}</p>
                     <div className="preview">
                     {course.preview && course.preview.map((p)=>(
                     <p key={p}> 
                     <p> <strong>Preview: </strong> <Youtube embedId={p.youtube_video_link} /></p>

                         </p>
                      ))}
                       </div>  

                     <div className="Vids">

                     {s.Video && s.Video.map((v)=>(
                      <p key={v}> 
                        <p>  <strong>Video: </strong><Youtube embedId={v.youtube_video_link} /></p>

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
