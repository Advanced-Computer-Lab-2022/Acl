import McqSol from "../components/McqSol";
import Viewall from "../components/Viewallco";
import { useNavigate } from "react-router-dom";

const CorporateTrainee = () => {
  const navigate = useNavigate();
  const onClick3 = () => {
    navigate("viewMyCourses");
  };

  const onClick4 = () => {
    navigate("/corporatetrainee/solveMcq");
  };

  return (
    <div className="corporate trainee">
      <h2>Corporate Trainee</h2>
      {/* <Viewall /> */}
      <button
        style={{
          width: 180,
          height: 40,
          backgroundColor: "#1aac83",
          color: "#FFF",
          marginTop: 10,
        }}
        onClick={onClick3}
      >
        View Courses
      </button>
      <button
        style={{
          width: 180,
          height: 40,
          backgroundColor: "#1aac83",
          color: "#FFF",
          marginTop: 10,
        }}
        onClick={onClick3}
      >
        View My Courses{" "}
      </button>
      <button
        style={{
          width: 180,
          height: 40,
          backgroundColor: "#1aac83",
          color: "#FFF",
          marginTop: 10,
        }}
        onClick={onClick4}
      >
        Exam
      </button>
    </div>
  );
};

export default CorporateTrainee;
