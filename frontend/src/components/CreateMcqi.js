import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddQuestion from "./AddQuestioni";

const CreateMCQ = () => {
  const navigate = useNavigate();
  const onClick1 = () => {
    navigate("/instructor");
  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [choice1, setChoice1] = useState("");
  const [choice2, setChoice2] = useState("");
  const [choice3, setChoice3] = useState("");
  const [choice4, setChoice4] = useState("");
  const [correct, setCorrect] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const exam = {
      title,
      description,
      question,
      choice1,
      choice2,
      choice3,
      choice4,
      correct,
    };

    const response = await fetch("/instructor/createExam", {
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
      navigate(`/instructor/addquestion?examId=${json._id}`);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
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

      <button>Add Question</button>
      {/* <button onClick={onClick1}>Save</button> */}

      {error && <div className="error">{error}</div>}
    </form>
  );
};
export default CreateMCQ;
