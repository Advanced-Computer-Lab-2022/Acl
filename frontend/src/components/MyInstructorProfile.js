import React, { Component } from 'react';

import Rating from '@mui/material/Rating';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from "react";

//import {Link} from 'react-router-dom';
//import { response } from 'express';
const MyInstructorProfile = () => {
    const{id}=useParams();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [trainee, setTrainee] = useState("");
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchCourses =async () => {
          const data =await axios.get(`/corporatetrainee/getInst/${id}`);
          setTrainee(data.data)
          console.log(data.data)
          
        };
        //setCourses(data.data)
    
        
       
        fetchCourses()
        
      }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const instructor = { rating,review };
        console.log(instructor)
        const response = await fetch(`/corporatetrainee/rateinstructor/${id}`, {
          method: "PATCH",
          body: JSON.stringify(instructor),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (!response.ok) {
          setError(json.error);
        }
        if (response.ok) {
          setReview("");
          setRating("");
          
          setError(null);
          console.log("new Rate added!");
        }
      };
    

return(
    <form className="Update" onSubmit={handleSubmit}>
      <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAFM_xyIubtJwKiuFsU3IsBZqxlRbneCKvei3_rifJE098371NG05Ptm0cfoLoAqSrXCg&usqp=CAU"/>
                <span className="font-weight-bold"></span><span className="text-black-50"></span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Course details</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Username</label><label className="form-control" >{trainee.username}</label></div>
                    <div className="col-md-6"><label className="labels">email</label><label className="form-control" >{trainee.email}</label></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">biography</label><label className="form-control" >{trainee.biography}</label></div>
                </div>
                
                <div className="row mt-3">
                <div>
<label htmlFor="feCity">Rate this instructor</label>
<Rating style={{color:"gold"}}
  name="simple-controlled"
  value={rating}
  onChange={(e) => setRating(e.target.value)}
                
/>
</div> 

<div className="col-md-6"><label className="labels">Review this instructor</label><div className="mt-5 text-center"><input  type="text" 
          placeholder="type your review here" 
                required
                className="form-control"
                onChange={(e) => setReview(e.target.value)}
                value={review}
                /><button className="btn btn-primary profile-button">Submit your review</button></div></div>
                   {error && <div className="error">{error}</div>}
               </div>
              
            </div>
            </div>
        <div className="col-md-4">
        
        
         
        </div>
    </div>
</div>
</form>

    );
  };
export default MyInstructorProfile;