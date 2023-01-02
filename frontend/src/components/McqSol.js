import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./ExamForm.css";

import Button from "../components/Button.css";

const McqSol = () => {
  const [mcq, setMcq] = useState(null);
  const params = new URLSearchParams(window.location.search);
  const { id, courseId, examId } = useParams();
  const navigate = useNavigate();
  // console.log(examId);

  const onClick1 = () => {
    navigate(`/corporatetrainee/viewMyCourses/${id}/${courseId}`);
  };

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
    <div className="ExamForm viewMcq ">
      <div>
        <div className="Mcq">
          <p>Exam Solutions</p>
          {mcq &&
            mcq.map((question) => (
              <li key={question._id}>
                <ul class="examUl">
                  <li class="examLi question">Question: {question.question}</li>
                  <li class="examLi">{question.choice1}</li>
                  <li class="examLi">{question.choice2}</li>
                  <li class="examLi">{question.choice3}</li>
                  <li class="examLi">{question.choice4}</li>
                  <li class="examLi solution">Solution: {question.correct}</li>
                </ul>
              </li>
            ))}
        </div>
        <div>
          <button onClick={onClick1}>Back to course page</button>
        </div>
      </div>
    </div>
  );
};
export default McqSol;