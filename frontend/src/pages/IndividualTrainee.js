import Viewall from "../components/Viewallindv";
import Viewprice from "../components/Viewpriceindv";
import AddMcq from "../components/SolveMCQindv";
import { useNavigate } from "react-router-dom";
import ChangePass from "../components/ChangePassIndiv";
import{useParams} from 'react-router-dom';
import ViewCoursesIndiv from "../components/ViewCoursesIndiv";
import AdminSidebar from "../components/NavbarrIndiv";
import SearchForCourse from "../components/SearchForCourse";
import ViewCourses from "../components/ViewCourses";
import SearchForCourseInd from "../components/SearchForCourseInd";

const IndividualTrainee = () => {
  
  const navigate = useNavigate();
  const {id} = useParams();
    const onClick1=()=>{navigate('/Exam')}
  
  return (
    <div className="individual trainee">
      <AdminSidebar/>
      <div className="indv">
        <SearchForCourseInd/>
      <h2>Individual Trainee</h2>
      
      <ViewCoursesIndiv/>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={onClick1}>   {" "}
      Exam
      </button>
      
      </div>
    </div>
  );
};

export default IndividualTrainee;
