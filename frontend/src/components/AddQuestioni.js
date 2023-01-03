import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import{useParams} from 'react-router-dom';
import Navbar from "./Navbarri";

const AddQuestion = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [correct, setCorrect] = useState("");
  const [error, setError] = useState(null);
  const onClick1 = () => {
    navigate(`/instructor/${id}`);
  };
const {id}=useParams()
const params = new URLSearchParams(window.location.search);
  
 
  const examId = params.get('examId');
  // const onClick = () => {
  //   navigate(`/instructor/${id}`);
  // };
  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const questionn = { id,question, choice1, choice2, choice3, choice4, correct };
    const response = await fetch(`/instructor/addquestion/${id}?examId=${examId}`,{      method: "PATCH",
      body: JSON.stringify(questionn),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setQuestion("");
      setChoice1("");
      setChoice2("");
      setChoice3("");
      setChoice4("");
      setCorrect("");
      setError(null);
      console.log("new question added!");
      navigate(`/instructor/addquestion/${id}?examId=${examId}`);
    }
  };
  const handleSubmits = async (e) => {
    
    e.preventDefault();
    const questionn = { question, choice1, choice2, choice3, choice4, correct };
    const response = await fetch(`/instructor/addquestion/${id}?examId=${examId}`,{      method: "PATCH",
      body: JSON.stringify(questionn),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setQuestion("");
      setChoice1("");
      setChoice2("");
      setChoice3("");
      setChoice4("");
      setCorrect("");
      setError(null);
      console.log("new question added!");
      //navigate(`/instructor/addquestion/${id}?examId=${examId}?courseId=${courseId}`);
    }
  };

  return (
    <div>
      <div>
    <Navbar/>
    </div>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add another question</h3>
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
        <button>Add Question</button>
        <button form="exam" onClick={handleSubmits}>Save</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};
export default AddQuestion;