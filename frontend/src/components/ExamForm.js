import { useEffect, useState } from "react";
import "./ExamForm.css";


function ExamForm() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [mcq, setMcq] = useState(null);

  const params = new URLSearchParams(window.location.search);
  const examId = params.get("examId");
  //console.log(examId);

  useEffect(() => {
    const fetchExam = async () => {
      const response = await fetch(`/corporatetrainee/showAnswers/${examId}`);
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        setMcq(json.mcq);
        console.log(mcq);
      }
      const questions = mcq;
    };

    fetchExam();
  });

  //fetchExam();

  const solutions = [];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (option) => {
    //fetchExam();
    //console.log(questions);

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
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {mcq.length} correct - ({(score / mcq.length) * 100}
            %)
          </h2>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {mcq.length}
          </h2>
          <h3 className="question-text">{mcq[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {mcq[currentQuestion].options.map((option) => {
              return (
                <li key={option.id} onClick={() => optionClicked(option)}>
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExamForm;

/*
<h3 className="solution-text">{solutions[currentQuestion].toString()}</h3>
*/
