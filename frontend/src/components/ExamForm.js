import { useEffect, useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

=======
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
import "./ExamForm.css";

function ExamForm() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mcq, setMcq] = useState(null);
<<<<<<< HEAD
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const examId = params.get("examId");

  const onClick1 = () => {
    navigate(`/corporatetrainee/showAnswers?examId=${examId}`);
  };
=======

  const params = new URLSearchParams(window.location.search);
  const examId = params.get("examId");
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
<<<<<<< HEAD
              <button onClick={onClick1}>Show Solutions</button>
=======
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
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
              <ul>
                <li onClick={() => optionClicked(mcq[currentQuestion].choice1)}>
                  {mcq[currentQuestion].choice1}
                </li>
                <li onClick={() => optionClicked(mcq[currentQuestion].choice2)}>
                  {mcq[currentQuestion].choice2}
                </li>
                <li onClick={() => optionClicked(mcq[currentQuestion].choice3)}>
                  {mcq[currentQuestion].choice3}
                </li>
                <li onClick={() => optionClicked(mcq[currentQuestion].choice4)}>
                  {mcq[currentQuestion].choice4}
                </li>
              </ul>
            </div>
          )}
    </div>
  );
}

export default ExamForm;

// /*
// <h3 className="solution-text">{solutions[currentQuestion].toString()}</h3>
<<<<<<< HEAD
// */
=======
// */
>>>>>>> d7203dc3795f0ae3064323543c53f2e1ef68fb5a
