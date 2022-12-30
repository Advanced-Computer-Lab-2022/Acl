import React from 'react'
import axios from 'axios';
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Youtube from "../components/Youtube";
import Button from '@mui/material/Button';

const ViewCourses = () => {
    const [courses, setCourses]= useState([])

    const location = useLocation();
    const search = location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const id = params.get('cId'); // bar
            

    useEffect(() => {
        const getCourses =  async () => {
            await axios.get(`http://localhost:7007/courses/getCourses?cId=${id}`)
            .then((res) => { 
      
                      const courses = res.data
                     // console.log(courses)
                      setCourses(courses)
                  })
                }
              
                
         getCourses()
        },[]);
 
 const sub=courses.Subtitle
// {sub && sub.map((s)=>(
//     <p key={s._id}>{s.SubName}</p>
// ))}
//console.log(courses)
    return(
        <div className="courses">

             <p key={courses._id} > <h4>{courses.title}</h4> 
             <p> <strong>Duration: </strong> {courses.duration}</p>
             <p> <strong>Price: </strong> {courses.price}</p>
             <p> <strong>Exercise: </strong> {courses.exercise}</p>
             <p> <strong>Discount: </strong> {courses.discount}</p>


             <div className="Subtitles">
                {sub && sub.map((s)=>(
                    <p key={s._id}> 
                     <p> <strong>SubName: </strong> {s.SubName}</p>
                     <p> <strong>Duration of Sub: </strong> {s.durationSub}</p>
                     <p> <strong>Total num of Ex: </strong> {s.exercisesNum}</p>
                     <div className="preview">
                     {courses.preview && courses.preview.map((p)=>(
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
                    </p>
                ))}
             </div>
             </p>
             <button>Register</button>

        </div>
    );

}
export default ViewCourses