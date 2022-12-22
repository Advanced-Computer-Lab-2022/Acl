import Viewall from "../components/Viewalli";
import Viewprice from "../components/Viewpricei";
import AddMCQ from "../components/SolveMCQindv";
import CreateMCQ from "../components/CreateMcqi";
import AddQuestion from "../components/AddQuestioni";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ChangePass from "../components/ChangePassInst";
import Reset3 from "../components/Reset3";
import List from "../components/List";
//import SelectCountry from "../components/SelectCountryi";
const Instructor = () => {
  // const navigate = useNavigate();
  // const onClick = () => {navigate("/instructor/createExam");}

  //   const onClick2=()=>{navigate('/ViewCourses')}
  //   const onClick3=()=>{navigate('/ViewMyCourses')}
  //   const onClick4=()=>{navigate('/ViewMyRatings')}
  //   const onClick5=()=>{navigate('/ViewPrices')}

  return (
    <div className="instructor">
      <h2>Instructor</h2>
      <Reset3 />
      <ChangePass />
      <List />
      {/* <ContractForm/> */}

      {/* <CreateMCQ /> */}
      {/* <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={onClick}>
      Create Exam</button>
      <button style={{width:180,height:40,backgroundColor:'#1aac83',color:'#FFF',marginTop:10}} 
      onClick={() => window.location.href=`/CreateCourses?userId=${"6389dbfca2af0e3510d117b4"}`}> 
      Create Course   
      </button>
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
    View Prices </button> */}
    </div>
  );
};

export default Instructor;
