import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./ExamForm.css";

function ExamForm() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mcq, setMcq] = useState(null);
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const { examId } = useParams();
  console.log(examId);
  const { id } = useParams();
  const { courseId } = useParams();

  const onClick1 = async () => {
    await axios.post(
      `http://localhost:7007/corporatetrainee/submit/${id}/${courseId}/${examId}/${score}`
    );
    navigate(`/corporatetrainee/showAnswers/${id}/${courseId}/${examId}`);
  };
  //const questions = [];
  // console.log(examId);

  useEffect(() => {
    const fetchExam = async () => {
      const response = await fetch(`/corporatetrainee/showAnswers/${examId}`);
      const json = await response.json();
      // questions = await json.mcq;
      console.log(json);

      if (response.ok) {
        setMcq(json.mcq);
      }
    };

    fetchExam();
  });

  //fetchExam();

  const solutions = [];
  //console.log(questions);
  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (option) => {
    //fetchExam();
    // console.log(mcq);

    solutions[currentQuestion] = option.text;
    console.log(solutions.toString());
    // Increment the score
    if (option == mcq[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < mcq.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="ExamForm">
      {/* 1. Header  */}
      <h1>Trainee Exam</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults
        ? mcq && (
            /* 4. Final Results */
            <div className="final-results">
              <h1>Final Results</h1>
              <h2>
                {score} out of {mcq.length} correct - (
                {(score / mcq.length) * 100}
                %)
              </h2>
              <button class="examBtn" onClick={onClick1}>
                Show Solutions
              </button>
            </div>
          )
        : mcq && (
            /* 5. Question Card  */
            <div className="question-card">
              {/* Current Question  */}
              <h2>
                Question: {currentQuestion + 1} out of {mcq.length}
              </h2>
              <h3 className="question-text">{mcq[currentQuestion].question}</h3>

              {/* List of possible answers  */}
              <ul class="examUl">
                <li
                  class="examLi"
                  onClick={() => optionClicked(mcq[currentQuestion].choice1)}
                >
                  {mcq[currentQuestion].choice1}
                </li>
                <li
                  class="examLi"
                  onClick={() => optionClicked(mcq[currentQuestion].choice2)}
                >
                  {mcq[currentQuestion].choice2}
                </li>
                <li
                  class="examLi"
                  onClick={() => optionClicked(mcq[currentQuestion].choice3)}
                >
                  {mcq[currentQuestion].choice3}
                </li>
                <li
                  class="examLi"
                  onClick={() => optionClicked(mcq[currentQuestion].choice4)}
                >
                  {mcq[currentQuestion].choice4}
                </li>
              </ul>
            </div>
          )}
    </div>
  );
}

export default ExamForm;