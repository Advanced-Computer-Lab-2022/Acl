import Viewall from "../components/Viewallindv";
import Viewprice from "../components/Viewpriceindv";
import AddMcq from "../components/SolveMCQindv";
import { useNavigate } from "react-router-dom";

const IndividualTrainee = () => {
  const onClick1=()=>{navigate('/Exam')}
  const navigate = useNavigate();

  
      
    
    const onClick2=()=>{navigate('/ViewCourses')}
    const onClick3=()=>{navigate('/ViewMyCourses/63a201d7ae08968b11a08416')}
    const onClick5=()=>{navigate('/ViewPrices')}
  return (
    <div className="individual trainee">
      <h2>Individual Trainee</h2>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={onClick1}> Exam 
      </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick2}>
      View Courses
      </button>
     <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
     onClick={() => window.location.href=`/ViewReg?userId=${"63a6eef8fa29a2b8626fe008"}`}>

      View My Courses </button>
      
    <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
    onClick={onClick5}>
    View Prices </button>
     
    </div>
  );
};

export default IndividualTrainee;