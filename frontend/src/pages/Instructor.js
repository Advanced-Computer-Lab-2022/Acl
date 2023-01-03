import Viewall from "../components/Viewalli";
import Viewprice from "../components/Viewpricei";
import AddMCQ from "../components/SolveMCQindv";
import CreateMCQ from "../components/CreateMcqi";
import AddQuestion from "../components/AddQuestioni";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChangePass from "../components/ChangePassInst";
import Navbar from "./Navbar";
import Reset3 from "../components/Reset3"
import Navbarr from "../components/Navbarri";
import Cards from "../components/Cardsi";
import Courses from "../components/ViewCoursesi"
import ViewCoursesIndiv from "../components/ViewCoursesIndiv";

const Instructor = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const onClick = () => {navigate("/instructor/createExam");}
    const onClick2=()=>{navigate('/ViewCourses')}
    const onClick3=()=>{navigate('/ViewMyCourses')}
    const onClick4=()=>{navigate('/ViewMyRatings')}
    const onClick5=()=>{navigate('/ViewPrices')}
    const onClick6=()=>{
      navigate('/InstructorProfile/63a4b47f6cceaf80a95f6530')}
    
  return (
    <div className="instructor">
      <Navbarr/>
      <div className="inss1">
      <ViewCoursesIndiv/>
{/*       
      <SearchBar placeHolder="Search for Courses"/>
 
      <Reset3/>
      <ChangePass/> */}
      
       
       {/* <ContractForm/>
       */}
   
 
       {/* <CreateMCQ /> 
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={onClick}>
      Create Exam</button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/CreateCourses?userId=${"63a4b47f6cceaf80a95f6530"}`}> 
      Create Course   
      </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick2}>
      View Courses
      </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={() => window.location.href=`/ViewMyCourses?userId=${"63a4b47f6cceaf80a95f6530"}`}> 
      View My Courses </button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={onClick4}>
      View My Ratings </button>
    <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
    onClick={onClick5}>
    View Prices </button>
    <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}}
      onClick={() => window.location.href=`/InstructorProfile?userId=${"63a4b47f6cceaf80a95f6530"}`}>
      My profile </button> */}
</div>
    </div>
  );
};

export default Instructor;