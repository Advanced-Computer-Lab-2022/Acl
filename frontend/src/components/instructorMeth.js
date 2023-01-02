// import { set } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import{useParams} from 'react-router-dom';
// const { useState } = require("react");
import Navbarr from "../components/Navbarri"; 
import { AppBar, GlobalStyles } from "@mui/material";
import { FaGlobe, FaSquare, FaWhatsapp } from "react-icons/fa";

const CreateC = () => {
  const [title, setTitle] = useState("");
  const [preview, setPreview]=useState("");
  const[Description,setDescription]=useState("");
  const [SubName, setSubname] = useState("");
  const [durationsub,setDurationsub]=useState("");
  const[exercisesnum,setExercisesnum]=useState("");
  const[link,setLink]=useState("");
  const[price,setPrice]=useState("");
  const[summary,setSummary]=useState("");
  const [duration, setDuration] = useState("");
  const [levelOfCourse, setLevelOfCourse] = useState("");
  const [Subject, setSubject] = useState("");

  const [error, setError] = useState(null);


  //const params = new URLSearchParams(window.location.search);
  //const Instructor = params.get("Instructor");
  const {id} = useParams();
  //console.log(params);
  //console.log(Instructor);
//   const [rating, setRating] = useState("");
//   const [admin, setAdmin] = useState(false);
const navigate = useNavigate();  
const onClick = () => {
        navigate("/Instructor/");
      };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const course = {id,title,preview,Description,SubName,durationsub,exercisesnum,link,price,summary,duration,levelOfCourse,Subject};

    const response = await fetch(`/courses/createcourses/${id}`, {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
     
     
    }
    if (response.ok) {
   
     
      setTitle("");
      setPreview("");
      setDescription("")
      setSubname("");
      setDurationsub("");
      setExercisesnum("");
      setLink("");
      setPrice("");
      setSummary("");
      setDuration("");
      setLevelOfCourse("");
      setSubject("");
    //   setRating("");
      setError(null);
      console.log("New course is added!");
    
    }
  };

  return (
    <div>
      <Navbarr/>
      <form className="create" onSubmit={handleSubmit}>
     
      <div className="create1">

      <h1  onSubmit={handleSubmit}>Create Course</h1>
      <label  onSubmit={handleSubmit} class="required-field">Title</label>
      <input  onSubmit={handleSubmit }
      
        type="type"
        onChange={(e) => setTitle(e.target.value)}
        value={title} 
       
      />
 <label class="required-field" onSubmit={handleSubmit}> Preview Video </label>
      <input  onSubmit={handleSubmit}
        type="type"
        onChange={(e) => setPreview(e.target.value)}
        value={preview}
        
      />
     
      <label  onSubmit={handleSubmit} class="required-field">Subtitle Name</label>
      <input
      type="type"
      onChange={(e) =>setSubname(e.target.value) }
      value={SubName}
    
      />
      <label  onSubmit={handleSubmit} class="required-field">Subtitle Duration</label>
      <input  onSubmit={handleSubmit}
      type="type"
      onChange={(e) =>setDurationsub(e.target.value) }
      value={durationsub}
      
      />
       <label  onSubmit={handleSubmit} class="required-field">Subtitle Exercises Number</label>
      <input  onSubmit={handleSubmit}
      type="number"
      onChange={(e) =>setExercisesnum(e.target.value) }
      value={exercisesnum}
      
      />
       <label  onSubmit={handleSubmit} class="required-field">Subtitle Video Link</label>
      <input
      type="type"
      onChange={(e) =>setLink(e.target.value) }
      value={link}
    
      />
       </div>
      <div className="create1">
        <label  onSubmit={handleSubmit} class="required-field">Subtitle Video Description</label>
      <input  onSubmit={handleSubmit}
        type="type"
        onChange={(e) => setDescription(e.target.value)}
        value={Description}
       
      />
     
       <label  onSubmit={handleSubmit} class="required-field">Price</label>
      <input  onSubmit={handleSubmit}
      type="number"
      onChange={(e) =>setPrice(e.target.value)}
      value={price}
      
      />
       <label class="required-field">Summary</label>
      <input  onSubmit={handleSubmit}
      type="type"
      onChange={(e) => setSummary(e.target.value) }
      value={summary}
     
      />
      
      <label class="required-field" onSubmit={handleSubmit}> Duration</label>
      <input  onSubmit={handleSubmit}
        type="type"
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
      
      />
 <label class="required-field" onSubmit={handleSubmit}>Course Level </label>
      <input  onSubmit={handleSubmit}
        type="type"
        onChange={(e) => setLevelOfCourse(e.target.value)}
        value={levelOfCourse}
      
      />

      <label class="required-field" onSubmit={handleSubmit}>Subject</label>
      <input  onSubmit={handleSubmit}
      type="type"
      onChange={(e)=> setSubject(e.target.value)}
      value={Subject}
  
    />
    </div>
    <div className="b">
      <button >Add Course</button>
      
      {error && <div className="error">{error}</div>}
      </div>
    </form>
    </div>
  );

};

export default CreateC;