// import instructorForm from "../components/instructorForm";
// import corTraineeForm from "../components/corTraineeForm";
// import adminForm from "../components/adminForm";

import InstructorForm from "../components/InstructorForm";
import CorTraineeForm from "../components/CorTraineeForm";
import AdminForm from "../components/AdminForm";
import AdminSidebar from "../components/AdminSidebar";
import Navbar from "../components/Navbarr"
import{useParams} from 'react-router-dom';


const Admin = () => {
  const {id} = useParams();
  return (
    <div className="admin">
        <Navbar/>
      <h2 className="main" >
        Admin</h2>
   
     
    </div>
  );
};

export default Admin;