import React from 'react'
import "./SearchBar.css"
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({placeHolder}) {
    const [word, setWord] = useState("")
    const [error, setError] = useState(null);
    const [courses, setCourses]= useState([])

    const handleChange = event => {
       setWord(event.target.value);
       console.log('value is:', word)
       if(event.target.value == ""){
        setCourses([])
       }
    }
  

      const getCourses =  async () => {
      await axios.get(`http://localhost:7007/instructor/findcourses`
      ,{
         params: {
            searchWord: word
        } })
      .then((res) => { 
        console.log(res)

                const courses = res.data
                console.log(courses)
                setCourses(courses)
            })
    };
    const clear =()=>{
        setCourses([])
        setWord("")
    }
    useEffect(() => {


        getCourses() 
       },[]);
  
  return (
    <div className="search">
    <div className="searchInput">
     <input type="text" placeholder={placeHolder} value= {word} onChange={handleChange}/>
    <div className="searchIcon"> 
    {courses.length ==0 ? <SearchIcon  /> : <CloseIcon id="clearBtn" onClick={clear}/>} </div>
    </div>
    {courses.length != 0 && (
    <div className="dataResult">
    {courses.map((course)=> {
        return(
         <a className="dataItem" onClick={() => window.location.href=`/Courses?cId=${course._id}`} >
            <p key={course._id}> {course.title}</p>
            </a>)
    })}
    </div>
        )}

    {error && <div className="error">{error}</div>}

 </div>   )
}

export default SearchBar