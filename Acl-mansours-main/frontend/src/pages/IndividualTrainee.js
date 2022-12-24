import Viewall from "../components/Viewallindv";
import Viewprice from "../components/Viewpriceindv";
import AddMcq from "../components/SolveMCQindv";
import { useNavigate } from "react-router-dom";
import ChangePass from "../components/ChangePassIndiv";
import SearchForCourseSubject from "../components/SearchForCourseSubject";

const IndividualTrainee = () => {
  const onClick1=()=>{navigate('/Exam')}
  const navigate = useNavigate();

  
      
    
    const onClick2=()=>{navigate('/ViewCourses')}
    const onClick3=()=>{navigate('/ViewMyCourses')}
    const onClick5=()=>{navigate('/ViewPrices')}
  return (
    <div className="individual trainee">
      <h2>Individual Trainee</h2>
      <SearchForCourseSubject/>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={onClick1}> Exam 
      </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick2}>
      View Courses
      </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick3}>
      View My Courses </button>
      
    <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
    onClick={onClick5}>
    View Prices </button>
    <ChangePass/>
    </div>
  );
};

export default IndividualTrainee;