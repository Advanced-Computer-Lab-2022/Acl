import Viewall from "../components/Viewallindv";
import Viewprice from "../components/Viewpriceindv";
import AddMcq from "../components/SolveMCQindv";
import { useNavigate } from "react-router-dom";
import ChangePass from "../components/ChangePassIndiv";
import{useParams} from 'react-router-dom';
const IndividualTrainee = () => {
  const onClick1=()=>{navigate('/Exam')}
  const navigate = useNavigate();
  const {id} = useParams();
  
      
    
    const onClick2=()=>{navigate('/ViewCourses')}
    const onClick3=()=>{navigate('/ViewMyCourses')}
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
      onClick={onClick3}>
      View My Courses </button>
      
    <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
    onClick={onClick5}>
    View Prices </button>
    <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/ReportProbindv/${id}`}>Report A Course
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/ViewReportsindv/${id}`}>View Previous Reports
      </button>
      <button style={{width:230,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/Followupsindv/${id}`}>Followup
      </button>


    <ChangePass/>
    </div>
  );
};

export default IndividualTrainee;