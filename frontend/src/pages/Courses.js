import React from 'react'
import axios from 'axios';
import {  useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../components/YT.css";
import Youtube from "../components/Youtube";
import ViewCourses from "../components/ViewCourses";

const Courses = () => {
    
    return(
       <ViewCourses/>
    );

}

export default Courses