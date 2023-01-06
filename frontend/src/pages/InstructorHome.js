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
     return (
      <div className="instructor">
        <h2>Please read our terms and services</h2>
       
        
        
        
        <ContractForm/>
        
      
       
      
      </div>
    );
  };
  export default InstructorHome