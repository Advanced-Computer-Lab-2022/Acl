import { useEffect, useState } from "react";
const McqSol = () => {
  const [mcq, setMcq] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const examId = params.get("examId");
  // console.log(examId);

  useEffect(() => {
    const fetchExam = async () => {
      const response = await fetch(`/corporatetrainee/showAnswers/${examId}`);
      const json = await response.json();

      if (response.ok) {
        setMcq(json.mcq);
        // console.log(mcq);
      }
    };

    fetchExam();
  });
  return (
    <div className="viewMcq">
      <div className="Mcq">
        <p>Exam Solutions</p>
        {mcq &&
          mcq.map((question) => (
            <li key={question._id}>
              <ul>
                <li>Question: {question.question}</li>
                <li>{question.choice1}</li>
                <li>{question.choice2}</li>
                <li>{question.choice3}</li>
                <li>{question.choice4}</li>
                <li>Solution: {question.correct}</li>
              </ul>
            </li>
          ))}
      </div>
    </div>
  );
};
export default McqSol;
