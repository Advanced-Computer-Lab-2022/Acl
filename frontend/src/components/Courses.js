// // import { set } from "mongoose";
// import { useState } from "react";
// // const { useState } = require("react");

// const CreateC = () => {
//   const [title, setTitle] = useState("");
//   const [Subtitle, setSubtitle] = useState("");
//   const [Subject, setSubject] = useState("");
//   const [price, setPrice] = useState("");
//   const [summary, setSummary] = useState("");
//   const [duration, setDuration] = useState("");
//   const [levelOfCourse, setLevelOfCourse] = useState("");
//   const [discount, setDiscount] = useState("");
//   const [error, setError] = useState(null);
//   const params = new URLSearchParams(window.location.search);
//   const courseID = params.get("courseID");
//   console.log(params);
//   console.log(courseID);
// //   const [rating, setRating] = useState("");
  
//   // const [admin, setAdmin] = useState(false);
//   const navigate = useNavigate();
//   const onClick = () => {
//     navigate("/instructor/");
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const course = {title,Subtitle,Subject,price,summary,duration,levelOfCourse,discount };

//     const response = await fetch(`/course/createcourses/${courseID}`, {
//       method: "POST",
//       body: JSON.stringify(course),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const json = await response.json();
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setTitle("");
//       setSubtitle("");
//       setSubject("");
//       setPrice("");
//       setSummary("");
//       setDuration("");
//       setLevelOfCourse("");
//       setDiscount("");
//     //   setRating("");
//       setError(null);
//       console.log("New course is added!");
//       navigate(`/instructor/createcourse?examId=${courseID}`);
//     }
//   };

//   return (
//     <form className="CreateC" onSubmit={handleSubmit}>
//       <h2>Create Course</h2>

//       <label>Title</label>
//       <input
//         type="text"
//         onChange={(e) => setTitle(e.target.value)}
//         value={title}
//       />

//       <label>Subtitle</label>
//       <input
//       type="text"
//       onChange={(e) =>setSubtitle(e.target.value) }
//       value={Subtitle}
//       />

//       <label>Subject</label>
//       <input
//       type="type"
//       onChange={(e)=> setSubject(e.target.value)}
//       value={Subject}
//     />


//       <label>Price</label>
//       <input
//       type="text"
//       onChange={(e) =>setPrice(e.target.value)}
//       value={price}
//       />
//       <label>Summary</label>
//       <input
//       type="text"
//       onChange={(e) => setSummary(e.target.value) }
//       value={summary}
//       />
//       <label>Duration </label>
//       <input
//         type="text"
//         onChange={(e) => setDuration(e.target.value)}
//         value={duration}
//       />
//       <label>Course Level </label>
//       <input
//         type="text"
//         onChange={(e) => setLevelOfCourse(e.target.value)}
//         value={levelOfCourse}
//       />
//       <label>Discount </label>
//       <input
//         type="text"
//         onChange={(e) => setDiscount(e.target.value)}
//         value={discount}
//       />

//       <button>Add Course</button>
//       {error && <div className="error">{error}</div>}
//     </form>
//   );
// };

// export default CreateC;
// import { set } from "mongoose";
import { useState } from "react";
// const { useState } = require("react");

const CreateC = () => {
  const [title, setTitle] = useState("");
  const [Subtitle, setSubtitle] = useState("");
  const [Subject, setSubject] = useState("");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");
  const [duration, setDuration] = useState("");
  const [levelOfCourse, setLevelOfCourse] = useState("");

//   const [rating, setRating] = useState("");
  
  // const [admin, setAdmin] = useState(false);
  const [error, setError] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const userId = params.get('userId');
  console.log(userId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = {userId,title,Subtitle,Subject,price,summary,duration,levelOfCourse };

    const response = await fetch(`/courses/createcourses/${userId}`, {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
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
    
    //   setRating("");
      setError(null);
      console.log("New course is added!");
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
     

      <button>Add Course</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default CreateC;