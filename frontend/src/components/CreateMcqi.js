import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbarri";
import{useParams} from 'react-router-dom'; 


const CreateMcqi = () => {
  const {id} = useParams();
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [correct, setCorrect] = useState("");
  const onClick1 = () => {
    navigate(`/instructor/${id}`);
  };
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('courseId');
  const [error, setError] = useState(null);
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    const exam = {
      id,
      title,
      description,
      question, 
      choice1,
      choice2,
      choice3,
      choice4,
      correct,
    };
    const response = await fetch(`/instructor/createExam/${id}?courseId=${courseId}`, {
      method: "POST",
      body: JSON.stringify(exam),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
   
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
       
    navigate(`/instructor/addquestion/${id}?examId=${json._id}`);

      setQuestion("");
     
      setChoice1("");
      setChoice2("");
      setChoice3("");
      setChoice4("");
      setCorrect("");
      setTitle("");
      setDescription("");
      setError(null);
      console.log("new question added!");
      console.log(json);
       
      
    }

    console.log(id)
  };
  const handleSubmits = async (e) => {
    e.preventDefault();
    const exam = {
      id,
      title,
      description,
      question, 
      choice1,
      choice2,
      choice3,
      choice4,
      correct,
    };
    const response = await fetch(`/instructor/createExam/${id}?courseId=${courseId}`, {
      method: "POST",
      body: JSON.stringify(exam),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
   
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
       
   // navigate(`/instructor/addquestion/${id}?examId=${json._id}?courseId=${courseId}`);

      setQuestion("");
     
      setChoice1("");
      setChoice2("");
      setChoice3("");
      setChoice4("");
      setCorrect("");
      setTitle("");
      setDescription("");
      setError(null);
      console.log("new question added!");
      console.log(json);
       
      
    }

    console.log(id)
  };

  return (
    <div>
      <div>
    <Navbar/>
    </div>
    <form className="createmcq" id="exam" onSubmit={handleSubmit}>
      
      <h3>Add an exam</h3>

      <label>Title</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Description</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />

      <label>Question</label>
      <input
        type="text"
        onChange={(e) => setQuestion(e.target.value)}
        value={question}
      />

      <label>Choice1</label>
      <input
        type="text"
        onChange={(e) => setChoice1(e.target.value)}
        value={choice1}
      />

      <label>Choice2 </label>
      <input
        type="text"
        onChange={(e) => setChoice2(e.target.value)}
        value={choice2}
      />
      <label>Choice3</label>
      <input
        type="text"
        onChange={(e) => setChoice3(e.target.value)}
        value={choice3}
      />
      <label>Choice4</label>
      <input
        type="text"
        onChange={(e) => setChoice4(e.target.value)}
        value={choice4}
      />
      <label>Correct Answer</label>
      <input
        type="text"
        onChange={(e) => setCorrect(e.target.value)}
        value={correct}
      />

      <button className="cre">Add Question</button>
      <button form="exam" classname="sae" onClick={handleSubmits}>Save</button>
      {error && <div className="error">{error}</div>}
    </form>
   
    </div>
  );
};
export default CreateMcqi;