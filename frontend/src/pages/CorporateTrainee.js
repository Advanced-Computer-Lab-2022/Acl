import McqSol from "../components/McqSol";
import Viewall from "../components/Viewallco";
import {useNavigate } from 'react-router-dom';

const CorporateTrainee = () => {
  const navigate=useNavigate();
const onClick2=()=>{navigate('/ViewCourses')}
  return (
    <div className="corporate trainee">
      <h2>Corporate Trainee</h2>
      {/* <Viewall /> */}
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick2}>
      View Courses
      </button>
    </div>
  );
};

export default CorporateTrainee;
