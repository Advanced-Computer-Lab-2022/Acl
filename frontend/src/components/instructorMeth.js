// import { set } from "mongoose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import{useParams} from 'react-router-dom';
=======

>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
// const { useState } = require("react");

const CreateC = () => {
  const [title, setTitle] = useState("");
  const [Subtitle, setSubtitle] = useState("");
  const [Subject, setSubject] = useState("");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");
  const [duration, setDuration] = useState("");
  const [levelOfCourse, setLevelOfCourse] = useState("");
  const [discount, setDiscount] = useState("");
  const [error, setError] = useState(null);
<<<<<<< HEAD
  //const params = new URLSearchParams(window.location.search);
  //const Instructor = params.get("Instructor");
  const {id} = useParams();
  //console.log(params);
  //console.log(Instructor);
=======
  const params = new URLSearchParams(window.location.search);
  const Instructor = params.get("Instructor");
  console.log(params);
  console.log(Instructor);
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
//   const [rating, setRating] = useState("");
  
//   const [admin, setAdmin] = useState(false);
const navigate = useNavigate();  
const onClick = () => {
        navigate("/Instructor/");
      };


  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    const course = {title,Subtitle,Subject,price,summary,duration,levelOfCourse};

    const response = await fetch(`/courses/createcourses/${id}`, {
=======
    const course = {title,Subtitle,Subject,price,summary,duration,levelOfCourse,discount };

    const response = await fetch(`'courses/createcourses/:id'/${Instructor}`, {
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
      setSubtitle("");
      setSubject("");
      setPrice("");
      setSummary("");
      setDuration("");
      setLevelOfCourse("");
      setDiscount("");
    //   setRating("");
      setError(null);
      console.log("New course is added!");
<<<<<<< HEAD
      //navigate(`/instructor/createcourses?Instructor=${id}`);
=======
      navigate(`/instructor/createcourses?Instructor=${Instructor}`);
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
    }
  };

  return (
    <form className="CreateC" onSubmit={handleSubmit}>
      <h2>Create Course</h2>

      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Subtitle</label>
      <input
      type="text"
      onChange={(e) =>setSubtitle(e.target.value) }
      value={Subtitle}
      />

      <label>Subject</label>
      <input
      type="type"
      onChange={(e)=> setSubject(e.target.value)}
      value={Subject}
    />


      <label>Price</label>
      <input
      type="text"
      onChange={(e) =>setPrice(e.target.value)}
      value={price}
      />
      <label>Summary</label>
      <input
      type="text"
      onChange={(e) => setSummary(e.target.value) }
      value={summary}
      />
      <label>Duration </label>
      <input
        type="text"
        onChange={(e) => setDuration(e.target.value)}
        value={duration}
      />
      <label>Course Level </label>
      <input
        type="text"
        onChange={(e) => setLevelOfCourse(e.target.value)}
        value={levelOfCourse}
      />
      <label>Discount </label>
      <input
        type="text"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
      />

      <button>Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreateC;