import ChangePass from "../components/ChangePassInst";
import Reset3 from "../components/Reset3"
import List from "../components/List"
import { useNavigate } from "react-router-dom";
import ContractForm from "../components/ContractForm"
import ListDetails from "../components/ListInstDetails"
import CoursesList from "../components/ListInstDetails";
import SearchForHisCourse from "../components/SearchHisCourse";
import SearchForCourse from "../components/SearchForCourseInst";
import{useParams} from 'react-router-dom';
const InstructorHome = () => {
  const {id} = useParams();
    const navigate = useNavigate();
    const onClick = () => {navigate("/instructor/createExam");}
  
      const onClick2=()=>{navigate('/ViewCourses')}
      const onClick3=()=>{navigate('/ViewMyCourses')}
      const onClick4=()=>{navigate('/ViewMyRatings/:id')}
      const onClick5=()=>{navigate('/ViewPrices')}
      const onClick7=()=>{navigate('/ContractForm')}
      const onClick10=()=>{navigate(`/CreateCourses/${id}`)}
    return (
      <div className="instructor">
        <h2>Instructor Profile</h2>
        <SearchForCourse/>
        <h4>SearchForHisCourse</h4>
        <SearchForHisCourse/>
        <Reset3/>
        <ChangePass/>
        <ContractForm/>
        <CoursesList/>
        {/* <CreateMCQ /> */}
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
        onClick={onClick}>
        Create Exam</button>
        

        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
        onClick={onClick10}>
        Create Course</button>
        {/* <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
        onClick={() => window.location.href=`/CreateCourses?userId=${author._id}}`}> 
        Create Course   
        </button> */}
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick2}>
        View Courses
        </button>
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick3}>
        View My Courses </button>
        <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
        onClick={onClick4}>
        View My Ratings </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick5}>
      View Prices </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick7={onClick7}>
      Contract Form</button>
      
      </div>
    );
  };
  export default InstructorHome